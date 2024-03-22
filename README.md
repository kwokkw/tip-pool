# Springboard Jasmine Testing Exercise - Tip Pool

## Table of contents

- [Springboard Jasmine Testing Exercise - Tip Pool](#springboard-jasmine-testing-exercise---tip-pool)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)
  - [Time estimate](#time-estimate)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

Take an existing code base and write tests using the Jasmine testing library to thoroughly test each function in the app. Tip Pool is and application that tracks the total tips generated from a group of servers in a restaurant. It then calculates the payout for each server.

### The challenge

- In the `paymentForm.addEventListener("submit", submitPaymentInfo)`, that there are no parentheses () after submitPaymentInfo. Including parentheses would immediately invoke the function submitPaymentInfo and pass its return value to addEventListener. However, you want to pass a reference to the function itself, not the result of calling it.

If you were to add parentheses () after submitPaymentInfo like submitPaymentInfo(), it would execute the function submitPaymentInfo immediately, and whatever value it returns would be passed to addEventListener. This is not what you want when setting up an event listener.

reference to the function vs. invoke the function

- In function submitServerInfo, where "Alice" came from?

- How did one function in one js file have access to an object/variable in a different js file?

### Links

## My process

### Built with

### What I learned

### Continued development

### Useful resources

## Author

## Acknowledgments

## Time estimate 
