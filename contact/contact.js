const contactsList = [
  {
    id: 1,
    name: "GitHub",
    image: "..\\src\\gitimage.jpg",
    link: "https://linkedin.com/in/alicejohnson"
  },
  {
    id: 2,
    name: "FaceBook",
    image: "..\\src\\facebook.jpg",
    link: "https://linkedin.com/in/alicejohnson"
  },
  {
    id: 3,
    name: "Linkdln",
    image: "..\\src\\linkdln.png",
    link: "https://linkedin.com/in/alicejohnson"
  },
    {
    id: 1,
    name: "GitHub",
    image: "..\\src\\gitimage.jpg",
    link: "https://linkedin.com/in/alicejohnson"
  },

];


function createContactsPage(list_of_contacts) {
console.log("Function Called Create Contacts ");
  const contactsHTML = list_of_contacts.map(contact => `
    <div class="contact-card" key="${contact.id}">
      <img src="${contact.image}" alt="${contact.name}" width="100" />
      <h3>${contact.name}</h3>
      <a href="${contact.link}" target="_blank">View Profile</a>
    </div>
  `).join(''); 

  const cards = document.getElementById("cards-cant");
  cards.innerHTML = contactsHTML;


  return contactsHTML;
}

createContactsPage(contactsList);

console.log("Function Called Create Contacts ");