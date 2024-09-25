import '@testing-library/jest-dom'
import Page from '../app/page'
import {render} from "@testing-library/react";


describe('Home', () => {
    it('renders a heading', () => {
        render(<Page  searchParams={{ location: "", jobTitle: "" }}/>)
    })
})