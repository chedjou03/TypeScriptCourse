class Customer{

    firstName: String;
    lastName: String;

   constructor(theFirstName : String , theLastName : String){
       this.firstName = theFirstName;
       this.lastName = theLastName;
   }

}
let theCustomer = new Customer("simplice", "Chedjou");
console.log(theCustomer.firstName);
console.log(theCustomer.lastName);