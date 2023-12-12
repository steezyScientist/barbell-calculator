function setupClickEvent(elementId, weightNumber) {
    // Get the image element by its id
    let weightAvailable = JSON.parse(localStorage.getItem('weightAvailable')) || [];

    const weightImage = document.getElementById(elementId);

    function doesArrayContainNumber(weightAvailable, weightNumber) {
      return weightAvailable.includes(weightNumber);
    }

    function printWeightArray(){
      // Get the element where you want to display the array content
      const arrayOutputDiv = document.getElementById('arrayOutput');

      // Create a string representation of the array
      const arrayContent = printWeightArray.join(', ');
  
      // Set the innerHTML of the output div to display the array content
      arrayOutputDiv.innerHTML = `Array Content: [${weightAvailable}]`;  
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

      printWeightArray;

      // Log the updated array to the console (DEBUG)
      console.log(weightAvailable);
    });
}
setupClickEvent('45plate', 45);
setupClickEvent('35plate', 35);
setupClickEvent('25plate', 25);
setupClickEvent('10plate', 10);
setupClickEvent('5plate', 5);
setupClickEvent('1plate', 1);
setupClickEvent('0.5plate', 0.5);

