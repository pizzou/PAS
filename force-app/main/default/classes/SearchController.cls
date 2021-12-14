public class SearchController {

  /*  @AuraEnabled
    public static List <Book__c> getBooks() {
        return [select Id, Book_Title__c, Book_Subtitle__c,Book_Language__c,
                                               Category_Id__c,Editing_Cost__c,	ISBN__c,Product_Type__c 
                from Book__c];
    } */

@AuraEnabled
    public static List<Book__c> findByName(String searchParam){
        String likeParam = +searchParam+ '%';
        List<Book__c> boo = new List<Book__c>();
        List<Book__c> contactList = new List<Book__c>([select Id, Book_Title__c, Book_Subtitle__c,
                                                       Book_Language__c,
                                                       Book_Category__c,Production_Cost__c 
                                                       from Book__c WHERE Book_Title__c LIKE :likeParam]);
        return contactList;
    }
}