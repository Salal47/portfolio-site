const contactsList = [
  {
    id: 1,
    title: "Smart Meet - Ai Powered Application",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores dolore voluptas iusto reprehenderit ab, dolor neque cupiditate quod quam, voluptatibus maiores iste repellat facilis quos optio qui eos repudiandae a.",
    image: "..\\src\\gitimage.jpg",
    gitlink: "https://linkedin.com/in/alicejohnson",
    deploy: ""
  },

];


function createContactsPage(list_of_contacts) {
console.log("Function Called Create Contacts ");
  const contactsHTML = list_of_contacts.map(contact => `
    <div class="contact-card" key="${contact.id}">
      <img src="${contact.image}" alt="${contact.name}" width="100" />
      <h3>${contact.title}</h3>
      <p>${contact.desc}</p>
      <div id= "buttons">
      <a href="${contact.gitlink}" target="_blank">View Github</a>
      <a href="${contact.deploy}" target="_blank">View Live</a>
      </div>
    </div>
  `).join(''); 

  const cards = document.getElementById("cards-cant");
  cards.innerHTML = contactsHTML;

}

createContactsPage(contactsList);

console.log("Function Called Create Contacts ");