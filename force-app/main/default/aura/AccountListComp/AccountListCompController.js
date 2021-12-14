({
	doInit : function(component, event, helper) {
		var action = component.get('c.fetchAcountList');
        action.setParams({
            
        });
        action.setCallback(this, function(response){
            var respValue =response.getReturnValue();
            console.log('respValue', respValue);
            component.set('v.accountList',respValue);
            
        });
        
        $A.enqueueAction(action, false);
	}
})