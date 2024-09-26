import '@testing-library/jest-dom'
import {fireEvent, render, waitFor} from '@testing-library/react'
import JobFilter from "../components/job/Filter";
import {useSearchParams, useRouter} from "next/navigation";

jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
    useSearchParams: jest.fn(),
}));

describe('JobFilter', () => {
    const startSearch = jest.fn();
    const mockPush = jest.fn();

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Mount job filter',  () => {

        (useSearchParams as jest.Mock).mockReturnValue({
            get: (key: string) => {
                switch (key) {
                    case 'location':
                        return 'remote';
                    case 'jobTitle':
                        return 'frontend';
                    case 'company':
                        return 'TechCorp';
                    case 'salary':
                        return '$90000-$120000';
                    default:
                        return '';
                }
            },
        });

        render(<JobFilter>data</JobFilter>)
    })

    it('should update form values and call handleSearch on input change', async () => {
        const { getByPlaceholderText } = render(<JobFilter startSearch={startSearch}>Children</JobFilter>);

        // Simulate user typing in job title
        fireEvent.change(getByPlaceholderText(/React enthusiast .../i), {
            target: { value: 'React Developer', name: 'jobTitle' }
        });

        // Wait for the state update and search function call
        await waitFor(() => {
            expect(startSearch).toHaveBeenCalled();
        });

        // Ensure the router.push was called with the correct parameters
        expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('jobTitle=React Developer'));
    });

    it('should debounce the input change', async () => {
        const { getByPlaceholderText } = render(<JobFilter startSearch={startSearch}>Children</JobFilter>);

        // Simulate rapid input changes
        fireEvent.change(getByPlaceholderText(/React enthusiast .../i), {
            target: { value: 'React Developer', name: 'jobTitle' }
        });
        fireEvent.change(getByPlaceholderText(/Armenia\/Yerevan/i), {
            target: { value: 'Yerevan', name: 'location' }
        });

        // Wait for debounce timeout
        await waitFor(() => {
            expect(startSearch).toHaveBeenCalledTimes(1); // Should only call startSearch once due to debounce
        });

        // Ensure the router.push was called with the correct parameters
        expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('location=Yerevan'));
    });
})