// Global Variables
let div = document.getElementById("display");
const buttons = document.getElementsByTagName("button");

// Click Event
document.addEventListener("click", (event) => {
    let type = event.target.id;
    getData(type);
})

// Keypress Event
document.addEventListener("keypress", (e) => {
    console.log(e.key, typeof (e.key))
    switch (e.key) {
        case "1":
            getData("Dark")
            break;
        case "2":
            getData("Programming")
            break;
        case "3":
            getData("Miscellaneous")
            break;
        case "4":
            getData("Pun")
            break;
        case "5":
            getData("Spooky")
            break;
        case "6":
            getData("Christmas")
            break;
        default:
            break;
    }
})

// Getting The Data Via Fetch
function getData(type) {
    fetch("https://sv443.net/jokeapi/v2/joke/" + type)
        .then(response => response.json())
        .then
        (function (data) {
            console.log(data)
            div.innerText = ''
            document.getElementById("typeOfJoke").innerText = ''

            if (data.type == "twopart") {
                let d = document.createElement("div")
                d.setAttribute("class", "animate__animated animate__backInRight")

                let setup = document.createElement("p");
                let delivery = document.createElement("p")

                setup.innerText = data.setup
                delivery.innerText = data.delivery;

                d.appendChild(setup)
                d.appendChild(delivery)
                div.appendChild(d)

            } else {
                let d = document.createElement("div")
                d.setAttribute("class", "animate__animated animate__backInRight")

                let joke = document.createElement("p")

                joke.innerText = data.joke;

                d.appendChild(joke)
                div.appendChild(d)
            }
        }
        );
}



