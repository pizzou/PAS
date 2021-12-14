public class BookController {
@AuraEnabled
    public static Book__c submitBookAction(string Book_Title, string Book_Subtitle, string Production_Cost,
                                           decimal totalPage, decimal edition, string description){
        Book__c bookObj = new Book__c();
        bookObj.Book_Title__c=Book_Title;
        bookObj.Book_Subtitle__c=Book_Subtitle;
        bookObj.Production_Cost__c=Production_Cost;
        bookObj.Edition__c=edition;
        bookObj.Total_Page__c=totalPage;
        bookObj.Description__c=description;
        
        
 
        insert bookObj;
        return bookObj;
    }
     @AuraEnabled
    public static Book__c createBook(Book__c con, Id bookId){
        con.Id = bookId;
        insert con;
        return con;
    }
}