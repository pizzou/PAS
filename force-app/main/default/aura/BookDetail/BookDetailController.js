({
	createBook : function(component, event, helper) {
		
	 var pageReference = component.find("navigation");
        var pageReferenceNav = {    
            "type": "standard__component",
            "attributes": {
                "componentName": "c__PAS"    
            },    
            "state": {
                "bookId": component.get('v.bookId') ,
                "bookName" : component.get('v.bookName')
            }
        };
        pageReference.navigate(pageReferenceNav);
	},
    editBook : function(component, event, helper) {
		var btn = event.getSource();
        var name= btn.get('v.name');
        var recordViewForm=component.find('recordViewForm');
        var recordEditForm= component.find('recordEditForm');
        if(name==='edit'){
            $A.util.addClass(recordViewForm,'formHide');
            $A.util.removeClass(recordEditForm,'formHide');
            
        }
	 
	}
})