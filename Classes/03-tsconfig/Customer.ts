class Customer{

    private _firstName: String;
    private _lastName: String;

    constructor(theFirstName : String , theLastName : String){
        this._firstName = theFirstName;
        this._lastName = theLastName;
    }

    public get firstName(): String {
        return this._firstName;
    }
    public set firstName(value: String) {
        this._firstName = value;
    }
    

    public get lastName(): String {
        return this._lastName;
    }
    public set lastName(value: String) {
        this._lastName = value;
    }

   public getFullName(): String{
        return ("full name is :"+this.firstName+" "+this.lastName)
   }
}
let theCustomer = new Customer("Hermann", "Fomgoum");
console.log(theCustomer.firstName);
console.log(theCustomer.lastName);
console.log(theCustomer.getFullName());
