public class apexsample {
public static List<sObject> searchAccount(String searchParam){
        String likeParam = '%' +searchParam+'%';
        String Query = '';
        if(searchParam != null){
           Query  = 'Select Id, Name Where Name Like :likeParam LIMIT 50 ';
        }else{
           Query  = 'Select Id, Name From Account LIMIT 50 '; 
        }
        
        List<SObject> sObjectList = Database.query(Query);
        return sObjectList;
}}