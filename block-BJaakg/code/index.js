You will find the collection of GOT books (https://www.anapioficeandfire.com/api/books)
The data will contain name, authors, numberOfPages, publisher, released and country
Display above information about each book in a collection books
Each book will also contain key named characters which will contain list of links to find the information about all the characters.
Each book will have a button saying Show Characters (24) 24 is the number of characters in the book
When you click on the button Show Characters (24) it will open a popup with information about all the characters.
Each character being displayed in the popup will display name, gender, aliases and tvSeries they are a part of.
The popup will also have a cross icon. Once clicked it will close the popup.
Handle error and show loading indicator when ever data is fetched.


let modalWindow = document.querySelector('.modal-window')
let modalClose = document.querySelector('.modal-close')
let openButton = document.querySelector('.btn')
const booksURL = 'https://www.anapioficeandfire.com/api/books'
let booksUL = document.querySelector('book--list')

function handleSpinner(rootElm, status = false){
  if(status) {
    rootElm.innerHTML = `<div> class= "spinner"></div>
  }
}

function displayCharacters(characters) {
  handleSpinner(charactersUL, true)
    Promise.all(
      character.map((character) => fetch(character)
               .then((res) => res.json()))
               .then((charactersData) => {
                    charactersUL.innerHTML = '';
                    characters.forEach(ch => {
                      let li = document.createElement('li')
                      li.innerText = `${ch.name} : ${ch.aliases.join(' ')}
                      charactersUL.append(li)
       })
    })
  }


function displayBooks(data){
  books.innerHTML = '';
  data.forEach(book => {
    let li = document.createElement('li')
    let h3 = document.createElement('h3')
    h3.innerText = book.name
    let p = document.createElement('p')
    p.innerText = book.authors.join(' ')
    let button = document.createElement('button')
    button.classList.add('btn')
    button.innerText = 'show characters (${book.characters.length})'
    button.addEventListener('click', () => {
    modalWindow.style.display = 'block';
      displayCharacter(book.characters)
    modalWindow.querySelector('.modal-close').addEventListener('click' => {
    modalWindow.style.display= 'none'
  })
})
    
    li.append(h3, p, button)
    booksUL.append(li)

  })
}

function fetchBooks(){
handleSpinner(booksUL, true)
  fetch(booksURL).then(res => res.json()).then((booksData) => {
    displayBooks(booksData)
  }).finally(() => {
    handleSpinner(booksUL)
  })
}
fetchBooks()


