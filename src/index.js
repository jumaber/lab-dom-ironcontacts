// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(contact => {  // <-- Opening the forEach loop
  let contactRow = document.createElement("tr");

  contactRow.innerHTML = `
    <td><img src="${contact.pictureUrl}" alt="picture" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  document.querySelector("tbody").appendChild(contactRow);


  // ITERATION 2 - Delete Buttons (after rows are added)

  let deleteButton = contactRow.querySelector(".btn-delete");  // Get the button

  deleteButton.addEventListener("click", () => {  // <-- Opening the event listener function
    contactRow.remove();  // Removes the row when button is clicked
  });  // <-- Closing the event listener function



  
  

  // ITERATION 3 - Like Buttons
  let likeButton = contactRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected"); // Toggle the 'selected' class on the button
  });
    tableBody.appendChild(contactRow); // Append to the correct table body

});

// Bonus: ITERATION 4 - Add Random Contacts

