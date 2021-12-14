({
	doSave : function(component, event, helper) {
		var action = component.get("c.createBook");
        var booktList = component.get("v.bookList");
        action.setParams({'booObj':component.get('v.bookObj')});        
        action.setCallback(this,function(data){           
            component.set('v.bookId',data.getReturnValue())
            booktList.splice(0,0,component.get('v.bookObj'));
            component.set("v.bookList",booktList);     
        });        
        $A.enqueueAction(action);
	},
    showBooks : function(component, event, helper) {       
		var action = component.get("c.retrieveBooks");        
        action.setCallback(this,function(data){            
            component.set('v.bookList',data.getReturnValue())
        });
        
        $A.enqueueAction(action);
	},
    
})