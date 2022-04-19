export const fazGet = async (url) => {

    const requestOptions = {
        mode: 'no-cors',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };
    
    console.log("teste: "+url);

    var request = new Request(url, requestOptions)

    await fetch(request)
    .then(function(data){
        console.log(data);
    });
}