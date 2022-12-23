const get = async (url, params) => {
    let QueryString = getQueryString(params);

    let urlWithQuery = params ? `${url}?${QueryString}` : url;

    return await useFetch(urlWithQuery);
};

const post = async (url, params) => {
    return await useFetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
    });
};

const put = async (url, params) => {
    let formData = { '_method': 'PUT' };
    Object.assign(formData, params);

    return await useFetch(url, {
        method: 'PUT',
        body: JSON.stringify(formData)
    });
};

const getQueryString = (params = {}) => {
    return Object.entries(params).map(param => {
        return param.join('=');
    }).join('&');
}

export default {
    get,
    post,
    put
}