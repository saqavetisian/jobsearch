import {mockJobs} from "@/utility/utils";
import {Job} from "@/utility/types";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const error = searchParams.get('error') || ''

    // To test error handling add ?error=1 in URL
    if (error === '1') {
        return new Response("Oops! Page is broken", {
            status: 400,
        })
    }

    // Get search params from URL and filter data by these 4 params
    const jobTitle = searchParams.get('jobTitle') || ''
    const location = searchParams.get('location') || ''
    const company = searchParams.get('company') || ''
    const salary = searchParams.get('salary') || ''
    const page = searchParams.get('page') ? parseInt(<string>searchParams.get('page')) : 1;

    const jobTitleFilter = jobTitle?.toLowerCase();
    const locationFilter = location?.toLowerCase();
    const companyFilter = company?.toLowerCase();

    const data = mockJobs.filter((job: Job) => {
        // Check if each filter criterion matches the corresponding job property
        const matchesJobTitle = !jobTitleFilter || job.title.toLowerCase().includes(jobTitleFilter);
        const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter);
        const matchesCompany = !companyFilter || job.company.toLowerCase().includes(companyFilter);
        // Parse salary string and extract min and max salary values
        const jobSalaryRange = job.salary ? job.salary.replace(/[\$,]/g, '').split('-').map(Number) : null;
        const salaryMin = Number(salary);  // Provided salary filter (e.g., '90000')

        const matchesSalary = !salaryMin || (
            jobSalaryRange &&
            jobSalaryRange[0] <= salaryMin &&  // Check if job min salary is <= filter value
            jobSalaryRange[1] >= salaryMin     // Check if job max salary is >= filter value
        );

        // Return true only if all active filters match
        return matchesJobTitle && matchesLocation && matchesCompany && matchesSalary
    });

    const paginatedJobs = data.slice(0, page * 10); // Slice the jobs for the current page

    // Add some delay to test caching, loading and etc
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: "Successfully delayed" })
        }, 5000)
    })

    return Response.json({
        data: paginatedJobs,
        current: page,
        total: data.length
    })
}