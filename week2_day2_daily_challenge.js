/*variable called sentence.... The value “not” and “bad”. */
let sentence = "the javascript course is not bad i love to attend"
    /*Create a variable called wordNot where it’s value is the first appearance. */

let wordNot = sentence.indexOf("not")

/*a variable called wordBad where it’ s value is the first appearance. */

let wordBad = sentence.indexOf("bad")

/* If the word “bad” comes after the word “not”, you should replace the whole  */


if (wordBad > wordNot) {
    sentence = sentence.replace(sentence.substring(wordNot, wordBad + 3), 'good');
    console.log(sentence);
} else {
    console.log(sentence);

}