const friendlyWords = require('friendly-words');
const sampleSize = require('lodash.samplesize');
const sample = (words) => {
  return sampleSize(words, 10);
}

const pairs = (firstWords, secondWords) => {
  if(firstWords.length !== secondWords.length) {
    console.error("Word pair collection lengths must match.");
    return null; 
  }
  
  const pairedWords = firstWords.map(
    (firstWord, index) => (`${firstWord}-${secondWords[index]}`)
  );
  
  return pairedWords;
}

exports.handler = async function (event, context) {
  let name = event.path.split("/").pop()
  if (name === "word-pairs") {
    return {
      statusCode: 200,
      headers: { "Cache-Control": "max-age=10" },
      body: JSON.stringify(pairs(sample(friendlyWords.predicates), sample(friendlyWords.objects)))
    }
  }else {
    return {
      statusCode: 404,
      headers: { "Cache-Control": "max-age=10" },
      body: JSON.stringify({ message: "Animal not found." })
    }
  }
}
