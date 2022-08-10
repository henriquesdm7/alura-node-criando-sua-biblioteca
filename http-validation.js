import fetch from "node-fetch";

function handleError(error) {
    throw new Error(error.message);
}

async function checkStatus(urlsArray) {
    try {
        const statusArray = await Promise
            .all(urlsArray
                .map(async (url) => {
                    const res = await fetch(url);
                    return res.status;
                }));
        return statusArray;
    } catch (error) {
        handleError(error);
    }
}

function generateUrlArray(linksArray) {
    return linksArray
        .map((obj) => Object
            .values(obj)
            .join());
}

async function validateURLs(linksArray) {
    const urls = generateUrlArray(linksArray);
    const linksStatus = await checkStatus(urls);

    // Spread operator
    const results = linksArray
        .map((obj, index) => ({
            ...obj,
            'status': linksStatus[index]
        }));

    return results;
}

export default validateURLs;