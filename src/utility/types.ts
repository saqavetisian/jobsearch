export type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    description: string;
    salary?: string;
    postedDate: string;
    applicationUrl: string;
}

export type Filter = {
    jobTitle?: string,
    location?: string,
    company?: string,
    salary?: string,
    page?: string,
    error?: string,
}