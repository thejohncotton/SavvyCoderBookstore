export default function(book) {
    return `<div class="book">
        <h2>${book.name}</h2>
        <h3>${book.author}</h3>
        <img src="${book.pictureUrl}"></img>
        <h2>${book.price}</h2>
        <ul>
            <li>${book.sellingPoints[0]}</li>
            <li>${book.sellingPoints[1]}</li>
            <li>${book.sellingPoints[2]}</li>
        </ul>    
    </div>`
}