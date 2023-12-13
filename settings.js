var weightAvailable = JSON.parse(localStorage.getItem('MyWeightsAvailable')) || [];

function setupClickEvent(elementId, weightNumber) {
  // Get the image element by its id
  const weightImage = document.getElementById(elementId);

  // Add a click event listener to the image
  weightImage.addEventListener('click', function() {

    weightAvailable.push(weightNumber);

    //update local storage of weights
    localStorage.setItem('MyWeightsAvailable', JSON.stringify(weightAvailable));
    const weightChangeEvent = new Event('weightChange');
    document.dispatchEvent(weightChangeEvent);
    
          // Log the updated array to the console (DEBUG)

    console.log(weightAvailable);
  });
}

setupClickEvent('45plate', 45);
