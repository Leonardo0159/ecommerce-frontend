export const fazGet = async (url) => {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers',
        },
    };
    
    console.log("teste: "+url);

    const request = new Request(url, requestOptions)

    const data = await fetch(request)
    .then(res => res.json())
    .catch(err => console.error(err))
    console.log(data)
}