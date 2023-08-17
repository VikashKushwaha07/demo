class Person {
  constructor(id, name, age, jobTitle) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.jobTitle = jobTitle;
  }
}

class PersonPersonal extends Person {
  constructor(id, name, age, jobTitle, add, email, phone) {
    super(id, name, age, jobTitle);
    this.id = id;
    this.name = name;
    this.age = age;
    this.jobTitle = jobTitle;
    this.add = add;
    this.email = email;
    this.phone = phone;
  }
}

console.log("################################################")
let p1 = new Person(396, "Vikash Kumar", 21, "Web Developer");
console.log(p1)
console.log(p1.name)
console.log("-------------------------------------------------")
let pp1 = new PersonPersonal(396, "Vikash Kumar", 21, "Web Developer", "shekhpura", "vikash@gamil.com", 1234567890);
console.log(pp1);
console.log(pp1.email)
// * ###################################################
console.log("###################################################")

console.log(Person)















