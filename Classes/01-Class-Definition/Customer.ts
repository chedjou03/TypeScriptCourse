class Customer{

    private firstName: String;
    private lastName: String;

   constructor(theFirstName : String , theLastName : String){
       this.firstName = theFirstName;
       this.lastName = theLastName;
   }

   public getFirstName():String {
       return this.firstName;
   }

   public setFirstName(theFirstName : String): void {
       this.firstName = theFirstName;
   }

   public getLastName():String {
        return this.lastName;
   }

   public setLastName(theLastName : String): void {
        this.lastName = theLastName;
   }

   public getFullName() : String{
       return ("Full Name is :"+this.getFirstName()+" "+this.getLastName());
   }

}
let theCustomer = new Customer("simplice", "Chedjou");
console.log(theCustomer.getFirstName());
console.log(theCustomer.getLastName());
console.log(theCustomer.getFullName());