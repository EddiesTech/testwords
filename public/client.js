function getWords() {
  ["predicates","objects","word-pairs","team-pairs","teams","collection-pairs","collections"].forEach((category) => {
    $.get("/.netlify/functions/words/"+category).then((data) => {
      $("#"+category).text(data);
    });
  });
}

// On page load, get some words:
$(getWords);
