console.log("Starting book app...");

const myButton = document.getElementById('add');
const API_ENDPOINT = "http://localhost:3000/books";

// Add event listener for the "Add" button
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

    // Add delete button cell (without deleting from API)
    let deleteButtonNode = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = () => removeBookFromDisplay(book.id, newTableRow); // Remove from UI only, no API interaction
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

// Function to remove a book from the displayed list (without deleting from the API)
function removeBookFromDisplay(bookId, rowElement) {
  // Remove the row from the table
  rowElement.remove();
}

// Load and display books on page load
window.onload = displayBooks;
