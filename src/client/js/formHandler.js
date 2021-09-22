function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    // Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    //fetch('http://localhost:8081/test')
    // fetch('https://api.meaningcloud.com/lang-4.0/identification?key=&txt="This is my name"')
    // .then(res => res.json())
    // .then(function(res) {
    //     console.log(res)
    //     document.getElementById('results').innerHTML = "This";
    //     //res.message
    // })
    getRequest("https://api.meaningcloud.com/lang-4.0/identification","", "This is my name")
    // .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = "This";
        //res.message
    })
}

const getRequest = async(baseURL='', key='', txt='') => {
    const res = await fetch(baseURL + "&key=" + key + "&txt=" + txt, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    try {
        const data = await res.json();
        // console.log(data);
        return data;
    } catch(error) {
        console.log("error", error);
    }
}

export { handleSubmit }
