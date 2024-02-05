class BookController {
    static getBooks(req, res){
        res.send("Books Page")
    }
    static reviewBooks(req, res){
        res.send("Books Reviews")
    }
    static buyBooks(req, res){
        res.send("Purchase Book")
    }
    static bookPaymentcompleted(req, res){
        res.send("Payment Completed!")
    }
}

module.exports = BookController;