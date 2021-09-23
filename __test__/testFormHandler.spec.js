// Import the js file to test
const { handleSubmit } = require("../src/client/js/formHandler");

test("Testing handleSubmit exists", () => {
    expect(handleSubmit).toBeDefined();
});
