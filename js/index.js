import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Book from '../components/Book'
import Form from '../components/Form'

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
        ${Form}
        ${Footer(state)}
      `;
}
  
render(state.Home)