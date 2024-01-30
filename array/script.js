let booksArray = [];
let output = document.getElementById("booksOutput");

function addBook() {
    let book = {
        title: "",
        author: "",
        genre: "",
        year: "",
    };

    book.title = document.getElementById("titleInput").value;
    book.author = document.getElementById("authorInput").value;
    book.genre = document.getElementById("genreInput").value;
    book.year = document.getElementById("yearInput").value;

    if (!isDuplicate(book)) {
        booksArray.push(book);
        displayBook();
    } else {
        alert("This book is already in the list.");
    }
}

function isDuplicate(newBook) {
    for (let i = 0; i < booksArray.length; i++) {
        if (
            booksArray[i].title === newBook.title &&
            booksArray[i].author === newBook.author &&
            booksArray[i].genre === newBook.genre &&
            booksArray[i].year === newBook.year
        ) {
            return true;
        }
    }
    return false;
}

function displayBook() {
    output.innerHTML = "";

    for (let i = 0; i < booksArray.length; i++) {
        output.innerHTML +=
            "title" +
            "-" +
            booksArray[i].title +
            "," +
            "author" +
            "-" +
            booksArray[i].author +
            "," +
            "genre" +
            "-" +
            booksArray[i].genre +
            "," +
            "year" +
            "-" +
            booksArray[i].year +
            "<button onclick='deleteBook(" + i + ")'>Delete</button>" + "<br>"
  
    }
}

function deleteBook(index) {
    booksArray.splice(index, 1);
    displayBook();
}

function hledejKnihu() {
    let searchId = document.getElementById("searchInput").value;

    let filteredBooks = booksArray.filter(book =>
        book.title.includes(searchId) ||
        book.author.includes(searchId) ||
        book.genre.includes(searchId) ||
        book.year.includes(searchId)
    );

    if (filteredBooks.length > 0) {
        output.innerHTML = "";
        for (let i = 0; i < filteredBooks.length; i++) {
            output.innerHTML +=
                "title" +
                "-" +
                filteredBooks[i].title +
                "," +
                "author" +
                "-" +
                filteredBooks[i].author +
                "," +
                "genre" +
                "-" +
                filteredBooks[i].genre +
                "," +
                "year" +
                "-" +
                filteredBooks[i].year +
                "<button onclick='deleteBook(" + booksArray.indexOf(filteredBooks[i]) + ")'>Delete</button>" + "<br>";
        }
    } else {
        alert("Nothing found");
    }
}