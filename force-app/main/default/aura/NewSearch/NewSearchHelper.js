({      
    getAccountList: function(component) {
        var action = component.get('c.getBooks');
        var self = this;
        action.setCallback(this, function(actionResult) {
            component.set('v.accounts', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})