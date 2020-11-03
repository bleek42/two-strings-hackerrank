//  Given two strings, determine if they share a common substring. A substring may be as small as one character.
// For example, the words "a", "and", "art" share the common substring
// The words "be" and "cat" do not share a substring. 

// Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring. 

// test




const twoStrings = (str1, str2) => {
  const hashMap = new Map();
  hashMap.set('input1', str1);
  hashMap.set('input2', str2);

  for (const [key, value] of hashMap.entries()) {
    console.log(key, value);
  }

};


const myStr1 = 'abcd';
const myStr2 = 'bade';

console.log(twoStrings(myStr1, myStr2));