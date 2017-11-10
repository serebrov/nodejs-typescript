class Person {
  name: string;

  constructor(name:string) {
      this.name=name;
  }
}

function greeter (person:Person){
  return "Greetings "+person.name;
}

var person=new Person("Visitor");

$(document).ready(function(){
    var message = greeter(person);
    $("#status")[0].innerHTML=message;
});
