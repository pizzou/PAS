({
	doInit : function(component, event, helper) {
		var action = component.get('c.getContactList');
        action.setParams({
            
        });
        action.setCallback(this, function(response){
            var respValue =response.getReturnValue();
            console.log('respValue', respValue);
            component.set('v.contactList',respValue);
            
        });
        
        $A.enqueueAction(action, false);
	},
    handleCompEvent: function(component, event, helper) {
        var searchParam= event.getParam('searchText');
        var action =component.get('c.getContactList');
        action.setParams({
            searchParam : searchParam
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state==='SUCCESS'){
                var responseValue =response.getReturnValue();
                console.log('responseValue', responseValue);
                component.set('v.bookList', responseValue);
            }
        });
        $A.enqueueAction(action);
    }
})