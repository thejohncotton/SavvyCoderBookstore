import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Book from '../components/Book'
import Form from '../components/Form'

// books
var book1 = {
    "id": 1,
    "name": "Lasagna: A Retrospective",
    "author": "Garfield",
    "pictureUrl": "http://graphics8.nytimes.com/images/2015/10/15/dining/15RECIPE20DIN/15RECIPE20DIN-articleLarge.jpg",
    "price": 24,
    "sellingPoints": [
        "Lasagna is delicious.",
        "The essential guide to Italian casseroles of all types.",
        "Real G's move silent, like Lasagna. -Lil Wayne"
    ]
}
var book2 = {
    "id": 1,
    "name": "Purr Programming",
    "author": "Mr. Meow",
    "pictureUrl": "https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif",
    "price": 27,
    "sellingPoints": [
        "learn faster.",
        "Meow",
        "purrrrrr"
    ]
}


// state object
let state = {
    Home: {
        title: 'store'
    }
}

var root = document.querySelector("#root"); // this doesn't need to be queried every time we re-render
function render(state) {
    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Book(book1)}
        ${Form}
        ${Footer(state)}
      `;
}
  
render(state.Home)