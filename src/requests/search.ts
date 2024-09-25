async function getItems({ location = '', jobTitle = ''  , page = ''  }) {
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

    const res = await fetch(url.href)
    return res.json()
}

export {
    getItems
}