public class AccountList {
@AuraEnabled
    public static List<Account> fetchAcountList(){
        List<Account> contactList = new List<Account>([select Id, Name from Account]);
        return contactList;
    }
}