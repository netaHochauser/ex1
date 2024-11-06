const textElement = document.getElementById("hoverText1");

// Change color when mouse is over the element
textElement.addEventListener("mouseover", function() {
  textElement.style.color = "orange"; // Set to desired hover color
});

// Revert color when mouse leaves the element
textElement.addEventListener("mouseout", function() {
  textElement.style.color = "purple"; // Revert to original color
});


// function setupCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     document.querySelector("#count").innerHTML = count;
//   }

//   function decrement() {
//     count--;
//     document.querySelector("#count").innerHTML = count;
//   }

//   document.querySelector("#increment").addEventListener("click", increment);
//   document.querySelector("#decrement").addEventListener("click", decrement);
// }
