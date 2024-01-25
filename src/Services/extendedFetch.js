const extendedFetch = (url, options)=>{
    const token = 'get the token' ? 'get the token' : false;
    if(token){
        options.headers = {
            ...options.headers,
            'Authorization' : `Bearer ${token}`
        }
    }
    return fetch(url, options);
}

module.exports = {extendedFetch};
