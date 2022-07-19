const hello = require (".hello");
const { Test } = require("supertest");
describe("My hello", () => {
    Test("works", () => {
        expect(hello.hello().toEqual("Hello World"));
    })
});