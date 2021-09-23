function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formURL = document.getElementById('url').value

    const isValid = Client.checkForUrl(formURL)
    if(isValid){
        console.log("::: Form Submitted :::")
        
        getKey('http://localhost:8081/api')
        .then(function(res) {
            getRequest("https://api.meaningcloud.com/sentiment-2.1",res.key, formURL)
            .then(function(res) {
                document.getElementById('subjectivity').innerHTML = "Subjectivity: " + res;
                document.getElementById('irony').innerHTML = "Irony: " + res;
                document.getElementById('score_tag').innerHTML = "Score Tag: " + res;
                document.getElementById('agreement').innerHTML = "Agreement: " + res;
                document.getElementById('confidence').innerHTML = "Confidence: " + res;

            })
        })
    }
    else {
        document.getElementById('subjectivity').innerHTML = '';
        document.getElementById('irony').innerHTML = '';
        document.getElementById('score_tag').innerHTML = '';
        document.getElementById('agreement').innerHTML = '';
        document.getElementById('confidence').innerHTML = '';;
        alert('The form is not valid');

    }

    
}

const getRequest = async(baseURL='', key='', url='') => {
    const res = await fetch(baseURL + "?key=" + key + "&lang=auto&url=" + url, {
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
