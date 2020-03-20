var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
    return Customer;
}());
var theCustomer = new Customer("simplice", "Chedjou");
console.log(theCustomer.firstName);
console.log(theCustomer.lastName);
