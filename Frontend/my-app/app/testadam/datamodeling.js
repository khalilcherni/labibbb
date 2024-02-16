//1
function bookFactory(title,author,description,price){
    return {title:title,
    author:author,
    description:description,
    price:price


    }
}

//2
book1=bookFactory('Carthage','SamiBenSlama','HistoryOfTunisia','100$')
book2=bookFactory('lets','see','Gods face','25$')

//3
var books=[book1,book2]

4//
function displayBook(book){
    for(var i=0; i<book.length;i++){
    console.log(book[i])
        
    }
        
    }

//5
function updateBook(book,value) {

    book.price=value
    
}

