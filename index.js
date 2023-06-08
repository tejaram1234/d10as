function createButton() {
    // Creating  the button element
    var button = document.createElement("button");
    button.textContent = "Click Me";
  
    // Adding  event listener to the button
    button.addEventListener("click", function() {
      alert("Button clicked!");
    });
  
    // Finding  the container div element
    var container = document.getElementById("container");
  
    // Appending  the button to the container
    container.appendChild(button);
  }
  
  // Calling  the function to create the button
  createButton();
  