import {mockJobs} from "@/utility/utils";
import {Job} from "@/utility/types";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const jobTitle = searchParams.get('jobTitle') || ''
    const location = searchParams.get('location') || ''
    const page = searchParams.get('page') ? parseInt(<string>searchParams.get('page')) : 1;

    const data = mockJobs.filter((job: Job) => {
        // If both jobTitle and location exist, filter by both
        if (jobTitle && location) {
            return job.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
                job.location.toLowerCase().includes(location.toLowerCase());
        }

        // If only jobTitle exists, filter by jobTitle
        if (jobTitle) {
            return job.title.toLowerCase().includes(jobTitle.toLowerCase());
        }

        // If only location exists, filter by location
        if (location) {
            return job.location.toLowerCase().includes(location.toLowerCase());
        }

        // If neither exist, return true (include all jobs)
        return true;
    });

    const paginatedJobs = data.slice(0, page * 10); // Slice the jobs for the current page
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