import React from "react";

function HighlightWords({ sentence, words }) {
    console.log(sentence,words)
  let Bodywords = sentence.toLowerCase();
  let keyWords=words.toLowerCase().split(" ");
  keyWords.forEach(e => {
    Bodywords=Bodywords.replaceAll(e,`<strong>${e}</strong>`)
  });
  
  return <p dangerouslySetInnerHTML={{ __html: Bodywords.slice(0,600)+"..." }}></p>;
}

export default HighlightWords;
