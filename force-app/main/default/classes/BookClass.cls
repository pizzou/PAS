public class BookClass {
    
 /* @AuraEnabled
    public static List<Book__c> getBookList(String searchParam){
        String likeParam = '%' +searchParam+ '%';
        String Query= 'select Id, Book_Title__c, Book_Subtitle__c where Book_Title__c LIKE :likeParam ';
        List<Book__c> contactList = new List<Book__c>([select Id, Book_Title__c, Book_Subtitle__c from Book__c]);
        return contactList;
    }*/
}