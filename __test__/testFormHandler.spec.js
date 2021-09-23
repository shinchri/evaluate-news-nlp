// Import the js file to test
const { handleSubmit } = require("../src/client/js/formHandler");

test("Testing handleSubmit exists", () => {
    expect(handleSubmit).toBeDefined();
});


test("Testing API call", () => {
    handleSubmit('https://en.wikipedia.org/wiki/Natural_language_processing').then(data => {
        expect(data).toBe('Form Submitted');
    });
})