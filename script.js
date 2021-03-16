/* EXERCISE 1
Write a function for changing the title of the document in something else.
              */
let things = ['Rock', 'Paper', 'Scissor', 'Fountain'];

const randomWords = () => {
    return things[Math.floor(Math.random() * things.length)]
}

const randomColor = () => {
    let red = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}

const changeTitle = function(newTitle) {
    document.title = randomWords();
};

/* EXERCISE 2
Write a function for changing the class of the title of the page in "myHeading".
*/

const addClassToTitle = function() {
    let h1 = document.querySelector("header").querySelector("h1")
    h1.classList.toggle("myHeading")
};
addClassToTitle()

/* EXERCISE 3
Write a function for changing the text of only the p which are children of a div.
*/

const changePcontent = function() {
    let divP = document.querySelectorAll("p")

    for (const item of divP) {
        if (item.parentNode.nodeName === "DIV") {
            item.innerHTML = randomWords();
        }

    }
};

/* EXERCISE 4
Write a function for changing the destination of every link to https://www.google.com
*/

const changeUrls = function() {
    let allLinks = document.querySelectorAll("a")

    for (const item of allLinks) {
        item.href = "https://www.google.com"
    }
};
changeUrls()

/* EXERCISE 5
 Write a function for adding a new item in the second list.
 */

const addToTheSecond = function(content) {
    let secondList = document.querySelector("#secondList")
    secondList.insertAdjacentHTML('beforeend', `<li>${randomWords()}</li>`)
};
const deleteFromTheSecond = (params) => {
        let secondList = document.querySelector("#secondList")
        let listLength = secondList.children.length
        secondList.removeChild(secondList.childNodes[listLength - 1])


    }
    /* EXERCISE 6
    Write a function for adding a second paragraph to the div.
    */

const addParagraph = function(content) {
    let div = document.querySelector("div")
    let newP = document.createElement("p")
    let textnode = document.createTextNode(`${content}`)
    div.appendChild(newP.appendChild(textnode))
};

addParagraph("What ever!")


/* EXERCISE 7
Write a function for making the first UL disappear.
*/

const firstUlDisappear = function() {
    listOfElements = document.querySelector("#firstList").children

    for (const item of listOfElements) {
        if (item.style.visibility === "" || item.style.visibility === "visible") {
            item.style.visibility = "hidden"
        } else {
            item.style.visibility = "visible"
        }

    }
};

/* EXERCISE 8
Write a function for making the background of every UL green.
*/

const paintItGreen = function() {
    lists = document.querySelectorAll("ul")

    for (const list of lists) {
        for (const item of list.children) {
            if (item.style.backgroundColor === "green" || item.style.backgroundColor === "") {
                item.style.backgroundColor = "white"
            } else {
                item.style.backgroundColor = "green"
            }
        }
    }

};

/* EXERCISE 9
Make the heading of the page change color every time the user clicks on it.
*/

const makeItClickable = function() {
    let h1 = document.querySelector(".myHeading")
    h1.addEventListener("click", () => { h1.style.color = randomColor() })
};

/* EXERCISE 10
Change the footer text with something else when the user clicks on it.
*/

const changeFooterText = function() {
    let footer = document.querySelector("footer")
    let para = footer.querySelector("p")
    para.addEventListener("click", () => { para.textContent = randomWords() })
};

/* EXERCISE 11
Attach an event listener to the input field in the page for console logging its value just after any keystroke.
*/

const inputField = document.getElementById("input-field");
console.log('inputField:', inputField)
inputField.addEventListener("keydown", () => console.log(inputField.value))

/* EXERCISE 12
Create a new welcome alert message when the page successfully loads.
*/
window.onload = function() {
        alert("Welcome Stranger")
        makeItClickable() // How to do that
        changeFooterText()
    }
    /* EXERCISE 13
    Use HTML5 tags to divide the content of the page in a more semantic way.
    */