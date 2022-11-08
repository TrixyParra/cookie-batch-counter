// ToDo: Cookie Batch Counter App 

// * Global Variables 
let count = 0; 
let counter = document.getElementById("counter"); 
let savedEntries = document.getElementById("saved-entries"); 

// * Counter Increment Function  
function increment() {
    count += 1
    counter.innerText = count 
    // console.log(count); 
} 

// * Logging the Saved Count Function 
function save() {
    let savedCount = count + " - " 
    savedEntries.textContent += savedCount  // textContent - innerText alternative, returns every element in the node 
    // console.log(count); 

    // refresh counter to 0 after every save  
    counter.innerText = 0 

    // every new saved count starts from 0 
    count = 0 
} 