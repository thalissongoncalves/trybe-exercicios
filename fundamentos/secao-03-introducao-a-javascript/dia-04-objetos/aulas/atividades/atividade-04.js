// Adicione as propriedades email, fone, userGithub e linkedIn ao objeto customer (do exemplo anterior), chamando a função addProperty.

const customer = {
  firstName: "Roberto",
  age: 22,
  job: "Software Engineer",
};

const addProperty = (object, key, value) => {
  if (typeof object[key] === "undefined") {
    object[key] = value;
  }
};

addProperty(customer, "email", "robertodev@gmail.com");
addProperty(customer, "fone", "987654321");
addProperty(customer, "userGithub", "robertinhodev");
addProperty(customer, "linkedin", "robertinhodevjr");
console.log(customer);
