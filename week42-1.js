/*
    Hi.
    This is a set of practice exercises.
    The purpose is to focus on a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change any code that is provided unless the task specifically says so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    Create a function that returns an array of length m-n, 
    n is the min value. 
    m is the max value. 
    if n = 5 and m is 10 the returned array sholuld be [5,6,7,8,9]
    Use loops and arrays to achive the goal. 
*/
console.log("Task: A");

function arrayCreator(n, m){
    let array = [];

    for (let i = n; i < m; i++){
        array.push(i);
    }

    return array;
}

/* -----------------------------------------------------------------------------
    Task: B
    Create two arrays using your function from task a.
    first array n = 5, m = 11
    second array n = 8, m = 23
    
    Create a function that combines the two arrays into one, but no duplicate values. 
    Use for loops
*/
console.log("Task: B");

let firstArray = arrayCreator(5, 11);
let secondArray = arrayCreator(8, 23);

function arrayCombiner(array1, array2){
    let combinedArray = [];
    let duplicateList = [];

    for (let i = 0; i < array1.length; i++){
        combinedArray.push(array1[i]);
        duplicateList.push(array1[i]);
    }

    for (let i = 0; i < array2.length; i++){
        let duplicate = false;
        for (let j = 0; j < duplicateList.length; j++){
            if (array2[i] == duplicateList[j]){
                duplicate = true;
            }
        }
        if (duplicate == false){
            combinedArray.push(array2[i]);
        }
    }

    return combinedArray;
}

console.log(arrayCombiner(firstArray, secondArray));

/* -----------------------------------------------------------------------------
    Task: C
    Following you will find an alphabet a encrypted text and a shift value. 
    The message is encrypted using a cesar chipher https://en.wikipedia.org/wiki/Caesar_cipher 
    Create a function that 
    - Takes three parameters message, alphabet and shift 
    - Creates the key based on the alphabet and the shift value. 
    - decrypts and returns the message.
    Use arrays and for loops. 
*/
console.log("Task: C");
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const message = "ckrr jutk";
let shift = 6;

function caesarCipherSolver(message, alphabet, shift){
    let alphabetList = [...alphabet];
    let messageList = [...message];
    let translatedMessageList = [];
    let translatedMessage = "";
    
    for (let i = 0; i < messageList.length; i++){
        if (messageList[i] == " "){
            translatedMessageList.push(messageList[i]);
        }
        for (let j = 0; j < alphabetList.length; j++){
            if (messageList[i] == alphabetList[j]){
                if (j - shift < 0){
                    translatedMessageList.push(alphabetList[j - shift + alphabetList.length]);
                } else {
                    translatedMessageList.push(alphabetList[j-shift]);
                }
            }
        }
    }

    for (let i = 0; i < translatedMessageList.length; i++){
        translatedMessage += translatedMessageList[i];
    }

    return translatedMessage;
}

console.log(caesarCipherSolver(message, ALPHABET, shift));

/* -----------------------------------------------------------------------------
    Task: D

    You are given a list of numbers.
    Write a function that takes the list and a target sum as input parameters
    The function is then to figure out what two numbers in the list that summed makes the provided sum.

    Example:
    [3,2,6,9]
    target 9
    -> [3,6]

*/
console.log("Task: D");

const numbers = [1, 23, 14, 56, 42, 33, 0, 3];
const target = 36;

function findSumElements(list, sum){
    for (let i = 0; i < list.length; i++){
        for (let j = 0; j < list.length; j++){
            if (i != j && list[i] + list[j] == sum){
                return [list[i], list[j]];
            }
        }
    }
}

console.log("The numbers are " + findSumElements(numbers, target)[0] + " and " + findSumElements(numbers, target)[1]);

/* -----------------------------------------------------------------------------
    Task: E
    Create a function that takes a number as inputt and returns the number of digits in that number. 
    123 -> 3
    2 -> 1
    42693 -> 5
*/
console.log("Task: E");

function numberOfDigits(number){
    let explodedNumber = number.toString().split("");
    let numberOfDigits = 0;

    for (let i = 0; i < explodedNumber.length; i++){
        numberOfDigits += 1;
    }

    return numberOfDigits;
}