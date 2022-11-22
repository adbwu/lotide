# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @adbwu/lotide`

**Require it:**

`const _ = require('@adbwu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* 'head(array)': gets first element in array
* 'tail(array)': gets last element in array
* 'middle(array)': gets middle most element(s) in array
* 'countLetters(string)': counts letters in a string
* 'countOnly(string, character to count)': counts occurances of a provided character in string
* 'findKey(object, case)': finds first occurance of key by its defined value 
* 'findKeyByValue(object, value)': loops through object and returns key if provided value exists
* 'letterPositions(string, character to index)': returns an array of indexs of occurances of provided character
* 'map(array, function)': returns an new array with provided function applied to provided original array
* 'reverse(string)': reverses a string
* 'takeUntil(array, case)': returns new array of provided array until provided case is met
* 'without(array, element to remove)': returns new array out of provided array and element, with element removed