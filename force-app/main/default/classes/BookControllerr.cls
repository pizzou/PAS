public class BookControllerr {
@AuraEnabled
    public static List <Book__c> getBooks() {
        return [select Id, Book_Title__c, Book_Subtitle__c,Book_Language__c,
                                               Book_Category__c,Production_Cost__c 
                from Book__c];
    }  
    @AuraEnabled
    public static List<Book__c> findByName(String searchKey) {
        String name =  + searchKey + '%';
        return [select Name,Book_Name__c, Book_Title__c, Book_Subtitle__c,
                                                       Book_Language__c,
                                                       Book_Category__c,Production_Cost__c
                                                       from Book__c WHERE Book_Title__c LIKE :name];
    }
}