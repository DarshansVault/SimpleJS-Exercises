let contactBook = [
  {
    name: "Jim Beam",
    email: "jdoe@me.com",
    phone: "1234567890",
    tags: ["family", "friend"],
  },
  {
    name: "Jack Sparrow",
    email: "jdoe@me.com",
    phone: "1234567890",
    tags: ["family", "friend"],
  },
  {
    name: "Will Turner",
    email: "jdoe@me.com",
    phone: "1234567890",
    tags: ["family", "friend"],
  },
];
let counter = 0;
const addContact = (book, contact) => {
  var id = counter++;
  contact.id = id;
  book.push(contact);
  return book;
};
const searchContact = (book, query) => {
  return book.filter(
    (contact) =>
      contact.name === query ||
      contact.email.includes(query) ||
      contact.phone === query ||
      contact.tags.includes(query),
  );
};

const updateContact = (book, id, changes) => {
  const { name, email, phone, tags } = changes;
  book.map((contact) => {
    if (contact.id === id) {
      contact.name = name || contact.name;
      contact.email = email || contact.email;
      contact.phone = phone || contact.phone;
      contact.tags = tags || contact.tags;
    }
    return contact;
  });
  return book;
};
const deleteContact = (book, id) => {
  book = book.filter((contact) => contact.id !== id);
  return book;
};

const groupByTag = (book) => {
  const grouped = {};
  book.map((contact) => {
    contact.tags.forEach((tag) => {
      if (!grouped[tag]) {
        grouped[tag] = [];
      }
      grouped[tag].push(contact.name);
    });
  });
  return grouped;
};
addContact(contactBook, {
  name: "John Doe",
  email: "john@mail.com",
  phone: "123",
  tags: ["friend"],
});

addContact(contactBook, {
  name: "Jane",
  email: "jane@mail.com",
  phone: "456",
  tags: ["family"],
});
console.log(searchContact(contactBook, "John"));
console.log(searchContact(contactBook, "friend"));

updateContact(contactBook, 1, {
  phone: "9999999999",
});
contactBook = deleteContact(contactBook, 1);
console.log(groupByTag(contactBook));