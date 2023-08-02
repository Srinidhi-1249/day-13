function frequencySort(str) {
  const charFrequency = {};
  for (const char of str) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }
  const sortedChars = Object.keys(charFrequency).sort((a, b) => {
    if (charFrequency[a] === charFrequency[b]) {
      if (a.toLowerCase() === b.toLowerCase()) {
        return a.localeCompare(b);
      }
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }
    return charFrequency[b] - charFrequency[a];
  });
  let result = '';
  for (const char of sortedChars) {
    result += char.repeat(charFrequency[char]);
  }  
  return result;
}
console.log(frequencySort("tree")); 
console.log(frequencySort("cccaaa")); 
console.log(frequencySort("Aabb")); 
