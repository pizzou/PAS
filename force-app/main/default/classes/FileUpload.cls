public with sharing class FileUpload {

    @AuraEnabled
    public static void deteleFileUpload(String fileId){
        ContentDocument c = new ContentDocument(Id =(Id)fileId);
        delete c;
    }
}