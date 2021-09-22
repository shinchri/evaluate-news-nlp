function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formURL = document.getElementById('url').value

    const isValid = Client.checkForUrl(formURL)
    if(isValid){
        console.log("::: Form Submitted :::")
        
        getKey('http://localhost:8081/api')
        .then(function(res) {
            getRequest("https://api.meaningcloud.com/lang-4.0/identification",res.key, formURL)
            .then(function(res) {
                document.getElementById('results').innerHTML = "The language used: " + res.language_list[0].name;
            })
        })
    }
    else {
        document.getElementById('results').innerHTML = '';
        alert('The form is not valid');

    }

    
}

const getRequest = async(baseURL='', key='', url='') => {
    const res = await fetch(baseURL + "?key=" + key + "&url=" + url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    try {
        const data = await res.json();
        return data;
    } catch(error) {
        console.log("error", error);
    }
}

const getKey = async(baseURL='')=> {
    const res = await fetch(baseURL);
    try {
        const data =  await res.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
}

export { handleSubmit }
