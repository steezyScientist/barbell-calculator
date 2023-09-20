//Barbell plate calculator - Enter total working weight and return a visual representation
//of which plates are needed per side to get the target weight.
//
//Developed by Artem Guzun


//Available plates
const weightAvailable = [45, 35, 25, 10, 5, 1, 0.5];
const barWeight = 45;

//get user input of total weight through the button
let button = document.querySelector("button");
button.addEventListener("click", () => {
    clearScreen(); //clear previous output so it doesnt layer on top
    getWeight(); //start the calculation
    
});

//get user input by pressing ENTER key
let input = document.getElementById('weightInput');
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector('button').click();
    }

});


//Takes uer total weight and subtracts the barbell weight, then devides by 2 to get weight per side. 
function getWeight() {


    var inputWeight = document.getElementById("weightInput").value;
    if (inputWeight <= barWeight) {
        console.log("Enter more weight");

        //If the weight is 45 or lower that means the user is only using the barbell with no weights.

        const canvas = document.getElementById('drawPlates');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = "Plates\\moreweight.png";
        img.onload = function(){
        // Calculate the scaling factors to fit the image within the canvas
        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.min(scaleX, scaleY); // Use the smaller scaling factor
        
        // Calculate the new image dimensions
        const newWidth = img.width * scale;
        const newHeight = img.height * scale;
        
        // Center the image on the canvas
        const x = (canvas.width - newWidth) / 2;
        const y = (canvas.height - newHeight) / 2;
        
        // Draw the scaled image on the canvas
        ctx.drawImage(img, x, y, newWidth, newHeight);
        };


        
    } else {
        inputWeight = (inputWeight - barWeight) / 2;
        processWeight(inputWeight);
    }

}

//Takes weight per side and works through each available plate (45, 35, etc.) to get the combintation
function processWeight(weight) {
    let weightX = weight;
    let answer;
    let offset = 50;


    for (let i = 0; i < weightAvailable.length; i++) {
        answer = weightX / weightAvailable[i];
        answer = Math.floor(answer);

        weightX = weightX - answer * weightAvailable[i];

        if (answer != 0) {
            console.log("Plate - " + weightAvailable[i] + ": " + answer);

            drawPlates(weightAvailable[i], offset, answer);

            for (let i = 0; i < answer; i++) {
                offset = offset + 38;
            }
        }
    }



        
}


//Visual representation of weights needed per side to get total weight
//Take each weight and render the sprite for it. 160 = 45 * 1, 10 * 1, 1 * 2, 0.5 * 1 
function drawPlates(whichPlate, offset_x, numPlates) {
    var canvas = document.getElementById('drawPlates');
    var ctx = canvas.getContext('2d');

    for (let i = 0; i < numPlates; i++) {
        let img = new Image();
        img.src = "Plates\\" + whichPlate + ".png";

        img.onload = (function(img, offset) {
            return function() {
                ctx.drawImage(img, offset, 0, 30, 100);
            };
        })(img, offset_x + i * 38);
    }
}


//clears previous search before drawing new combination 
function clearScreen() {
    var canvas = document.getElementById('drawPlates');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

