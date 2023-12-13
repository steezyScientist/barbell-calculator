var weightAvailable = JSON.parse(localStorage.getItem('MyWeightsAvailable')) || [];

function setupClickEvent(elementId, weightNumber) {
  // Get the image element by its id
  const weightImage = document.getElementById(elementId);

  // Add a click event listener to the image
  weightImage.addEventListener('click', function() {

    if(weightAvailable.includes(weightNumber)){
      //do nothing
    }else{
      weightAvailable.push(weightNumber);
    }
    
    weightAvailable.sort(function (a, b){
      return b - a;
    });

    //update local storage of weights
    localStorage.setItem('MyWeightsAvailable', JSON.stringify(weightAvailable));
    const weightChangeEvent = new Event('weightChange');
    document.dispatchEvent(weightChangeEvent);
    
          // Log the updated array to the console (DEBUG)

    console.log(weightAvailable);
  });
}

document.addEventListener('weightChange', function() {
  // Update the array when the event is triggered
  weightAvailable = JSON.parse(localStorage.getItem('MyWeightsAvailable')) || [];

  var outputDiv = document.getElementById('arrayOutput');
  outputDiv.innerHTML = '<p>Weights: ' + weightAvailable.join(' ') + '</p>';
});

function clearWeights(){
  weightAvailable = JSON.parse(localStorage.getItem('MyWeightsAvailable')) || [];
  weightAvailable.length = 0;
  localStorage.setItem('MyWeightsAvailable', JSON.stringify(weightAvailable));
  const weightChangeEvent = new Event('weightChange');
  document.dispatchEvent(weightChangeEvent);
}

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearWeights);


setupClickEvent('45plate', 45);
setupClickEvent('35plate', 35);
setupClickEvent('25plate', 25);
setupClickEvent('10plate', 10);
setupClickEvent('5plate', 5);
setupClickEvent('1plate', 1);
setupClickEvent('0.5plate', 0.5);


