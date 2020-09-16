let amazon = document.querySelector("#amazon");
let matogrosso = document.querySelector("#mt");
let para = document.querySelector("#pa");
let roraima = document.querySelector("#rr");

let myUrl = "http://localhost:9000/api/tribes";

let fetching = () => {
  fetch(myUrl).then(res => res.json());
};

for (let i = 0; i < fetching.length; i++) {
  for (let tribe in fetching[i]) {
    const name = tribe.name;
    const language = tribe.name;
    const location = tribe.location;
    const population = tribe.population;
  }
}

let selection = document.getElementsByClass(".selectInput");
let retrieveRes = document.createElement("div");
let postButton = document.getElementById("postButton");

postButton.addEventListener("click", function(e) {
  let result = selection.option[e.selectedIndex].value;
  fetch(myUrl)
    .then(res => res.json())
    .then(res => {
      let response;
      for (let i = 0; i < fetching.length; i++) {
        if (result[i] === fetching.location) {
          retrieveRes.appendChild(fetching.name);
          retrieveRes.appendChild(fetching.language);
          retrieveRes.appendChild(fetching.location);
          retrieveRes.appendChild(fetching.population);
        }
        retrieveRes = response;
      }
      return response;
    });
});

// let submitRequest = e => {
//   retrieveRes = result;
// };
// const submitRequest = (option) => {
// //check what was selected. value from pulldown menu
//     for ()
// //pass this value to the fetch, instead of console.log. loop over the object

// //take the location, put another then and append child inside a div
// };
