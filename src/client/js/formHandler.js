async function handleSubmit(formURL) {

    console.log("::: Form Submitted :::")
    
    getKey('http://localhost:8081/api')
    .then(function(res) {
        getRequest("https://api.meaningcloud.com/sentiment-2.1",res.key, formURL)
        .then(function(res) {
            document.getElementById('subjectivity').innerHTML = "Subjectivity: " + res.subjectivity;
            document.getElementById('irony').innerHTML = "Irony: " + res.irony;
            document.getElementById('score_tag').innerHTML = "Score Tag: " + res.score_tag;
            document.getElementById('agreement').innerHTML = "Agreement: " + res.agreement;
            document.getElementById('confidence').innerHTML = "Confidence: " + res.confidence;

        })
    })
    

    return "Form Submitted";
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
