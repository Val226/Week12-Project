console.log("Starting book app....");


const myButton = document.getElementById('add');
// console.log("My button:", myButton);

const API_ENDPOINT = "http://localhost:3000/books"

myButton.addEventListener('click', (event) => {
//console.log("Clicking on my button...");

//Prevents the default behavior of the element ie. a submit button would otherwise refresh the page.
event.preventDefault();


let books = [];

//GET Request
async function getData(bookTitleVariable) {
function addBooks() {

console.log("Getting data...");

console.log("Books array before api call:", books);

  try {
    const response = await fetch(API_ENDPOINT,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          bookTitle: bookTitleVariable,
          authorName: "Your Author Here..."
        }
      )
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log("JSON FROM API:",json);
books =json;

console.log("These are my books!",books);


  } catch (error) {
    console.error("Oh No!!! AN eRROR!!!!",error.message);
  }
}


getData("My Book") //Calling on the getData method to fetch books via the db.json API


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