
const myButton = document.getElementById('submitForm');

myButton.addEventListener('click', (event) => {
    event.preventDefault();

    // I need variables to hold the values of the form
    let bookTitle = document.getElementById('title').value;
    let authorName = document.getElementById('author').value;

    //Create a tr node - to append to my form

    let newTableRow = document.createElement('tr');

    let bookTitleNode = document.createElement('td');
    bookTitleNode.innerHTML = title;
    newTableRow.append(bookTitleNodeNode);

    let authorNameNode = document.createElement('td');
    authorNameNode.innerHTML = authorName;
    newTableRow.append(authorNameNode);

    document.getElementById('tBody').appendChild(newTableRow);
})

// Delete Row
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