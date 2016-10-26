var stringToSplit = document.querySelector('p').innerText;

function wordFrequency(stringOfWords){
  var frequencies = {

  };

  var splitString = stringOfWords.split(' ');
  console.log(splitString);

splitString.forEach(function count (word){

  if (frequencies [word] === undefined){
      frequencies [word] =1;
    } else {
      frequencies[word]++;
    }

});


  return frequencies;
}

var result = wordFrequency(stringToSplit);
console.log(result);

// var splitArray = [splitString];
// console.log(splitString);
