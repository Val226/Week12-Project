console.log("Starting book app...");

const myButton = document.getElementById('add');
const API_ENDPOINT = "http://localhost:3000/books";

myButton.addEventListener('click', async (event) => {
  event.preventDefault();

  // Get form values
  let bookTitle = document.getElementById('bookTitle').value;
  let authorName = document.getElementById('authorName').value;

  // Call function to create a new book entry
  await addBook({ bookTitle, authorName });
  displayBooks(); // Refresh the displayed list after adding a new book
});

// Function to display books in the table
async function displayBooks() {
  const books = await getBooks(); // Fetch books from the server

  const tableBody = document.getElementById('tBody');
  tableBody.innerHTML = ""; // Clear existing rows

  books.forEach((book) => {
    let newTableRow = document.createElement('tr');

    // Add book title cell
    let bookTitleNode = document.createElement('td');
    bookTitleNode.innerHTML = book.bookTitle;
    newTableRow.appendChild(bookTitleNode);

    // Add author name cell
    let authorNameNode = document.createElement('td');
    authorNameNode.innerHTML = book.authorName;
    newTableRow.appendChild(authorNameNode);

    // Add delete button cell
    let deleteButtonNode = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = () => deleteBook(book.id); // Attach delete function
    deleteButtonNode.appendChild(deleteButton);
    newTableRow.appendChild(deleteButtonNode);

    tableBody.appendChild(newTableRow);
  });
}

// Function to add a new book (Create)
async function addBook(book) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
    if (!response.ok) {
      throw new Error(`Failed to add book. Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error adding book:", error);
  }
}

// Function to get books (Read)
async function getBooks() {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch books. Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

// Function to delete a book (Delete)
async function deleteBook(bookId) {
  try {
    const response = await fetch(`${API_ENDPOINT}/${bookId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to delete book. Status: ${response.status}`);
    }
    displayBooks(); // Refresh the displayed list after deletion
  } catch (error) {
    console.error("Error deleting book:", error);
  }
}

// Load and display books on page load
window.onload = displayBooks;


/*
console.log("Starting book app....");


const myButton = document.getElementById('add');
// console.log("My button:", myButton);

const API_ENDPOINT = "http://localhost:3000/books"

myButton.addEventListener
//myButton.addEventListener('click', (event) => {
//console.log("Clicking on my button...");

//Prevents the default behavior of the element ie. a submit button would otherwise refresh the page.
event.preventDefault();


let books = [];

//GET Request
async function getData(bookTitleVariable) {
  async function addBooks() {  // Make addBooks async

    console.log("Getting data...");

    console.log("Books array before API call:", books);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            bookTitle: bookTitleVariable,
          }
        )
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log("JSON FROM API:", json);
      books = json;

      console.log("These are my books!", books);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

}
async function getData(authorNameVariable) {
  async function addBooks() {  // Make addBooks async

    console.log("Getting author data...");

    console.log("Authors array before API call:", books);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            authorName: authorNameVariable,
          }
        )
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log("JSON FROM API:", json);
      books = json;

      console.log("These are my books!", books);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

}


    // I need variables to hold the values of the form
    let bookTitle = document.getElementById('bookTitle').value;
    console.log(`${bookTitle}`)
    let authorName = document.getElementById('authorName').value;
    console.log(`${authorName}`)



    let newTableRow = document.createElement('tr');

    let bookTitleNode = document.createElement('td');
    bookTitleNode.innerHTML = title;
    newTableRow.append(bookTitleNode);

    let authorNameNode = document.createElement('td');
    authorNameNode.innerHTML = authorName;
    newTableRow.append(authorNameNode);

    document.getElementById('tBody').appendChild(newTableRow);
})
*/

// Delete Row
/*
function deleteRow(button) {
  console.log("Delete button clicked")

  const row = button.closest("tr");
  if (row) {
    console.log("Row found, deleting row...")
    row.remove();
  }
  else {
    console.log("Row not found, unable to delete")
  }
}
  */