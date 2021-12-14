public class ttt {
 @AuraEnabled
    public static List<Customer> getLevel1() {
        List<Customer> groupedLevel1 =
            [SELECT Id, Name FROM Customer];
        for(Customer ar : groupedLevel1) {                
            System.debug('Name Is' + ar.get('Name'));
        }
        return groupedLevel1;
    } 
}