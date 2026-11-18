const contactsList = [
  {
    id: 1,
    name: "Html",
    level: "bigner",
  },
    {
    id: 1,
    name: "Css",
    level: "biggner"
  },
    {
    id: 1,
    name: "VS Code ",
    level: "advanced",
  },
    {
    id: 1,
    name: "GitHub",
    level: "unknown",
  }

];


function createContactsPage(list_of_contacts) {
console.log("Function Called Create Contacts ");
  const contactsHTML = list_of_contacts.map(contact => `
    <div class="contact-card" key="${contact.id}">
      <h3>${contact.name}</h3>
      <p>${contact.level}</p>
    </div>
  `).join(''); 

  const cards = document.getElementById("cards-cant");
  cards.innerHTML = contactsHTML;


  return contactsHTML;
}

createContactsPage(contactsList);

console.log("Function Called Create Contacts ");