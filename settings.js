function setupClickEvent(elementId, weightNumber) {
    // Get the image element by its id
    let weightAvailable = JSON.parse(localStorage.getItem('weightAvailable')) || [];

    const weightImage = document.getElementById(elementId);

    // Add a click event listener to the image
    weightImage.addEventListener('click', function() {
      // Add the number 45 to the array
      weightAvailable = weightAvailable.concat(weightNumber);
      weightAvailable.sort((a, b) => b - a);
      localStorage.setItem('weightAvailable', JSON.stringify(weightAvailable));
      const weightChangeEvent = new Event('weightChange');
      document.dispatchEvent(weightChangeEvent);

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