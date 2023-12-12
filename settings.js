function setupClickEvent(elementId, weightNumber) {
    // Get the image element by its id
    let weightAvailable = JSON.parse(localStorage.getItem('weightAvailable')) || [];

    const weightImage = document.getElementById(elementId);

    function doesArrayContainNumber(weightAvailable, weightNumber) {
      return weightAvailable.includes(weightNumber);
    }

    // Add a click event listener to the image
    weightImage.addEventListener('click', function() {
      // Add the number 45 to the array

      //check if the weight is already in, if so do nothing; just print array to log. 
      if (doesArrayContainNumber(weightAvailable, weightNumber)) {
        console.log(weightAvailable);
      } else {
        weightAvailable = weightAvailable.concat(weightNumber);
      }
  
      //sort array for main algo to parse through
      weightAvailable.sort((a, b) => b - a);
      //update local storage of weights in cookies
      localStorage.setItem('weightAvailable', JSON.stringify(weightAvailable));
      const weightChangeEvent = new Event('weightChange');
      document.dispatchEvent(weightChangeEvent);

      window.onload=printWeightArray;
    });
    
      // Log the updated array to the console (DEBUG)
      console.log(weightAvailable);
}

function clearWeightArray(){
  let weightAvailable = JSON.parse(localStorage.getItem('weightAvailable')) || [];
  weightAvailable.length = 0;
  console.log(weightAvailable);

}
const clearButton = getElementById('clearButton');
clearButton.addEventListener('click', clearWeightArray);

setupClickEvent('45plate', 45);
setupClickEvent('35plate', 35);
setupClickEvent('25plate', 25);
setupClickEvent('10plate', 10);
setupClickEvent('5plate', 5);
setupClickEvent('1plate', 1);
setupClickEvent('0.5plate', 0.5);

