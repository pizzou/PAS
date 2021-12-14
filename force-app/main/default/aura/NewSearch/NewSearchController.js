({
   /* doInit: function(component, event, helper) {
        helper.getAccountList(component);
    },*/
    searchKeyChange: function(component, event) {
        var searchKey = component.find("searchKey").get("v.value");
        console.log('searchKey:::::'+searchKey);
        var action = component.get("c.findByName");
        action.setParams({
            "searchKey": searchKey
        });
        action.setCallback(this, function(a) {
            component.set("v.accounts", a.getReturnValue());
        });
        $A.enqueueAction(action);
    },
    showInfo : function(component, event, helper) {
		var eventSource = event.getSource();
        var bookObj = eventSource.get('v.name');
        var bookName = eventSource.get('v.value');
        console.log('bookName ', bookName);
        component.set('v.bookId', bookObj);
        $A.createComponent(
            "c:BookDetail",
            {
                "bookId" : bookObj,
                "bookName" : bookName
            },	
            function(bookDetails, status, errorMessage){
                if (status === "SUCCESS") {
                    component.find('overlayLib').showCustomModal({
                        header: "Book Details",
                        body: bookDetails, 
                        footer:'Footer ',
                        showCloseButton: true,
                        closeCallback: function() {
                        }
                    });
                }else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                } else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                }
            }
        );
	},
})