//  Given two strings, determine if they share a common substring. A substring may be as small as one character.
// For example, the words "a", "and", "art" share the common substring
// The words "be" and "cat" do not share a substring. 

// Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring. 


// const twoStrings = (str1, str2) => {

//   const sepStr1 = str1.split(" ");
//   const sepStr2 = str2.split(" ");

//   console.log(sepStr1, sepStr2);

//   for (let i = 0; i < sepStr1.length && sepStr2.length; i++) {

//   }
// };





const twoStrings = (str1, str2) => {
  if (typeof str1 && typeof str2 !== 'string') throw new TypeError('input 1 must be a string!');

  const strSet = new Set();
  let i = 0;

  while (i < str1.length && i < str2.length) {
    const str1chars = str1.charAt(i);
    const str2chars = str2.charAt(i);

    if (!strSet.has(str1chars) || !strSet.has(str2chars)) {
      strSet.add(str1chars);
      strSet.add(str1chars);
      i++;
    }
    else if (strSet.has(str1chars) === strSet.has(str2chars)) {
      strSet.delete(str1chars) && strSet.delete(str2chars);
      i++;
    }
    else {
      i++;
    }

    return (strSet.has(str1chars) === strSet.has(str2chars) ? 'yes' : 'no');
  }

};


const myStr1 = 'abcd';
const myStr2 = 'bacd';

const myBadVar1 = [1, 2];
const myBadVar2 = false;

console.log(twoStrings(myStr1, myStr2));