import {Filter} from "../utility/types";

async function getItems({ location = '', jobTitle = ''  , page = '', company = '', salary = '', error  }: Filter) {
    const url = new URL(`${process.env.APP_URL}/api/jobs`)

    if (location) {
        url.searchParams.set('location', location)
    }

    if (jobTitle) {
        url.searchParams.set('jobTitle', jobTitle)
    }

    if (page) {
        url.searchParams.set('page', page)
    }

    if (company) {
        url.searchParams.set('company', company)
    }

    if (salary) {
        url.searchParams.set('salary', salary)
    }

    if (error) {
        url.searchParams.set('error', error)
    }

    return await fetch(url.href)
}

export {
    getItems
}