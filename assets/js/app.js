  // this >>>>>> it represents direct parent object of method in which we used "this"keyword <<<<<<<<


  var person = {
    name: "Leanne Graham",  
    username: "Bret",  
    email: "Sincere@april.biz",
    child: {
      name: "dasda",
      lname: "dsfdsf",
    },
    fullname: function () {  
      console.log(this);
      return this.name + " " + this.username;
    },
    child: {  // property
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      age: 22,
      lname: "june",
      fullname: function () {
        return this.name + " " + this.lname;
      },
    },
    grandChild: {
      fname: "xyz",
      username: "Bret",
      email: "Sincere@april.biz",
      age: 22,
      lname: "june",
      fullname: function () {
        console.log(this);
        return this.fname + " " + this.age;
      },
    },
  };
  
  console.log(person.fullname());
  console.log(person.child.name);
  console.log(person.child.fullname());
  console.log(person.grandChild.fullname());
  