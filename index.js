// Global Variables
let div = document.getElementById("display");
const buttons = document.getElementsByTagName("button");

// Click Event
document.addEventListener("click", (event) => {

    console.log(event.target.id)
    if (event.target.id == "typeOfJoke") {
        getData("Dark")
    } else {
        let type = event.target.id;
        getData(type);
    }
})

// Keypress Event
document.addEventListener("keypress", (e) => {
    console.log(e.key, typeof (e.key))
    switch (e.key) {
        case "1":
            handlePress("Dark", "1")
            break;
        case "2":
            handlePress("Programming", "2")
            break;
        case "3":
            handlePress("Miscellaneous", "3")
            break;
        case "4":
            handlePress("Pun", "4")
            break;
        case "5":
            handlePress("Spooky", "5")
            break;
        case "6":
            handlePress("Christmas", "6")
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
                d.setAttribute("class", "animate__animated animate__backInRight animate__faster 500ms")

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

// Handles Colour Change For Number
function colorPress(num) {
    document.getElementById("num" + num).style.color = "white"
    setTimeout(() => {
        document.getElementById("num" + num).style.color = "black"
    }, 200)
}

// Handles Color And Data For Key Press
function handlePress(type, num) {
    colorPress(num)
    getData(type)
}