import { handleSubmit } from "./formHandler.js";

function handleClick() {
    // event.preventDefault();

    let formURL = document.getElementById('url').value;

    const isValid = Client.checkForUrl(formURL);

    if(isValid){
        handleSubmit(formURL);
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

export { handleClick }