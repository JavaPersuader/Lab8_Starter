// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');


// TODO - Part 2


test('Check if (626)887-1234 is a phone Number', () => {
    expect(functions.isPhoneNumber("(626)887-1234")).toBe(true);
});

test('Check if (858)238-7313 is a phone Number', () => {
    expect(functions.isPhoneNumber("(858)238-7313")).toBe(true);
});

test('Check if 1823749032 is not a phone number', () => {
    expect(functions.isPhoneNumber("1823749032")).toBe(false);
});

test('Check if 193%^@1839 is not a phone number', () => {
    expect(functions.isPhoneNumber("193%^@1839")).toBe(false);
});

test('Check if helloWorld@gmail.com is an Email', () => {
    expect(functions.isEmail("helloWorld@gmail.com")).toBe(true);
});

test('Check if helloWorld@ucsd.edu is an Email', () => {
    expect(functions.isEmail("helloWorld@ucsd.edu")).toBe(true);
});

test('Check if helloWorld$gmail.com is not an Email', () => {
    expect(functions.isEmail("helloWorld$gmail.com")).toBe(false);
});

test('Check if helloWorld$@@ucsd.edu is not an Email', () => {
    expect(functions.isEmail("helloWorld$@@ucsd.edu")).toBe(false);
});

test('Check if aisdFjeak is a strong password', () => {
    expect(functions.isStrongPassword("aisdFjeak")).toBe(true);
});

test('Check if jaksjfiea is a strong password', () => {
    expect(functions.isStrongPassword("jaksjfiea")).toBe(true);
});

test('Check if 12489129#￥#……&@# is not a strong password', () => {
    expect(functions.isStrongPassword("12489129#￥#……&@#")).toBe(false);
});

test('Check if 2376#……@ is not a strong password', () => {
    expect(functions.isStrongPassword("2376#……@")).toBe(false);
});

test('Check if 11/17/2022 is a date', () => {
    expect(functions.isDate("11/17/2022")).toBe(true);
});

test('Check if 08/11/2018 is a date', () => {
    expect(functions.isDate("08/11/2018")).toBe(true);
});

test('Check if 99/88/A999 is not a date', () => {
    expect(functions.isDate("99/88/A999")).toBe(false);
});

test('Check if 23/A1/1234 is not a date', () => {
    expect(functions.isDate("23/A1/1234")).toBe(false);
});

test('Check if #FFFFFF is a hex color', () => {
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
});

test('Check if #a23FE2 is a hex color', () => {
    expect(functions.isHexColor("#a23FE2")).toBe(true);
});

test('Check if #FFFFFFF isnt a hex color', () => {
    expect(functions.isHexColor("#FFFFFFF")).toBe(false);
});

test('Check if F isnt a hex color', () => {
    expect(functions.isHexColor("F")).toBe(false);
});