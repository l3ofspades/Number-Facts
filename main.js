const factsDiv = 
document.getElementById("facts");
console.log("factsDiv", factsDiv);
// Check if the div is found

// Single fact
function getSingleFact() {
    console.log("fetching single fact");
    // confirms function runs
    fetch("http://numbersapi.com/13?json")
    .then(res => {
        console.log("Got response", res);
        // Check if the response is ok
         res.json();
    })
    .then(data => {
        console.log("Parsed data", data);
        //Check what the api returns
        const p =
            document.createElement("p");
            p.textContent = "single fact: " + data.text;
            factsDiv.appendChild(p); 
    })
    .catch(err => {
        console.log("Fetch error", err);
        // Catch and show any errors
    });

}

// Multiple facts
function getMultipleFacts() {
    fetch("http://numbersapi.com/13?json&count=3")
    .then(res => res.json())
    .then(data => {
        const p =
            document.createElement("p");
            p.textContent = "multiple facts: " + data.text;
            factsDiv.appendChild(p); 
    });   
}

// Four facts about the same number
function getFourFacts() {
    fetch("http://numbersapi.com/13?json&count=4")
    .then(res => res.json())
    .then(data => {
        const p =
            document.createElement("p");
            p.textContent = "four facts: " + data.text;
            factsDiv.appendChild(p); 
    });   
}

// Call the functions 
getSingleFact();
getMultipleFacts();
getFourFacts();

// Added some console logs to check if the functions are running 
// found out that the API wouldnt run with https:// only http:// problem solved
