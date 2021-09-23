// Import the js file to test
const { checkForUrl } = require("../src/client/js/urlChecker");

test("Testing handleSubmit exists", () => {
    expect(checkForUrl).toBeDefined();
});

test("URL is valid", () => {
    const urlToCheck = checkForUrl("https://www.google.com");
    expect(urlToCheck).toBe(true);
});

test("URL is invalid", () => {
    const urlToCheck = checkForUrl("Iamme.");
    expect(urlToCheck).toBe(false);
})