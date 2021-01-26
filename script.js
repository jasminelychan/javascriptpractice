// let food = [
//   "strawberry jam",
//   "bananas",
//   "sausages",
//   "bread",
//   "avocados",
//   "ham",
//   "mayo",
//   "chocolate"
// ];

// function getRandomFood(min, max){
//     const foodName = food[getRandomNumber(min, max)];
//     const foodName2 = food[getRandomNumber(min, max)];
//     let phrase = "I want to eat " + foodName + " and " + foodName2;
//     return phrase;

// }

// function getRandomNumber(min, max){
//     return Math.floor(Math.random() * (max - min) + min);
    
// }


// console.log(getRandomFood(0,8));


let foodButton = document.createElement("Button");
foodButton.innerHTML = "I'm hungry!";
foodButton.setAttribute("style", "color:yellow; background-color:yellow; font-size: 1rem;");


let buttonContainer = document.getElementById("buttonContainer");
buttonContainer.appendChild(foodButton);


foodButton.addEventListener("click", function(){
    let foodNameOne = ["strawberry jam", "bananas", "sausages", "bread"];
    let foodNameTwo = ["avocadoes", "ham", "mayo", "chocolate"];
    // let max = 4;
    // let min = 0;
    let sentence = "I want to eat " + foodNameOne[Math.floor(Math.random()*4)] + " and " + foodNameTwo[Math.floor(Math.random()*4)] + ".";
    document.getElementById("sentence").innerHTML=sentence;
    // sentence.setAttribute("style," "color:blue")
    foodButton.setAttribute("style", "color:red; background-color:yellow; font-size: 1rem;");

}
);







// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log(food[getRandomInt(8)]);

