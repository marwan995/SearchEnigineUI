import React from "react";

function HighlightWords({ sentence, words }) {
  let Bodywords = sentence.toLowerCase();
  words.forEach(e => {
    Bodywords=Bodywords.replaceAll(e,`<strong>${e}</strong>`)
  });
  
  return <p dangerouslySetInnerHTML={{ __html: Bodywords.slice(0,1700)+"..." }}></p>;
}

export default HighlightWords;
