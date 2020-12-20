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
      body: JSON.stringify(pairs(sample(friendlyWords.predicates), sample(friendlyWords.objects)))
    }
  }else if (name === "objects") {
    return {
      statusCode: 200,
      body: JSON.stringify(sample(friendlyWords.objects))
    }
  }else if (name === "predicates") {
    return {
      statusCode: 200,
      body: JSON.stringify(sample(friendlyWords.predicates))
    }
  }else if (name === "team-pairs") {
    return {
      statusCode: 200,
      body: JSON.stringify(pairs(sample(friendlyWords.predicates), sample(friendlyWords.teams)))
    }
  }else if (name === "teams") {
    return {
      statusCode: 200,
      body: JSON.stringify(sample(friendlyWords.teams))
    }
  }
  else if (name === "collection-pairs") {
    return {
      statusCode: 200,
      body: JSON.stringify(pairs(sample(friendlyWords.predicates), sample(friendlyWords.collections)))
    }
  }else if (name === "collections") {
    return {
      statusCode: 200,
      body: JSON.stringify(sample(friendlyWords.collections))
    }
  }else {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Not found." })
    }
  }
}
