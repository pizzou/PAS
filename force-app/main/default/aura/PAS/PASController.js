({
    next : function(component, event, helper) {
        
        var currentTab =component.get("v.selTabId");
        var count=parseInt(currentTab);
        count=count+1;
        component.set("v.selTabId", ''+count);
       /* var currentTab = component.get("v.selTabId");
         
        if(currentTab == 'tab1'){
            component.set("v.selTabId" , 'tab2');   
        }else if(currentTab == 'tab2'){
            component.set("v.selTabId" , 'tab3');     
        }else if(currentTab == 'tab3'){
            component.set("v.selTabId" , 'tab4');     
        }else if(currentTab == 'tab4'){
            component.set("v.selTabId" , 'tab5');     
        }*/
    },
     
    previous : function(component, event, helper) {
        var currentTab =component.get('v.selTabId');
        var count=parseInt(currentTab);
        count=count-1;
        component.set("v.selTabId", ''+count);
        
      /*  var currentTab = component.get("v.selTabId");
         
        if(currentTab == 'tab2'){
            component.set("v.selTabId" , 'tab1');     
        } else if(currentTab == 'tab3'){
            component.set("v.selTabId" , 'tab2');     
        }else if(currentTab == 'tab4'){
            component.set("v.selTabId" , 'tab3');     
        }else if(currentTab == 'tab5'){
            component.set("v.selTabId" , 'tab4');     
        }*/
    },
    handleSuccess : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The record has been updated successfully."
        });
        toastEvent.fire();
    },
    
    doSave : function(component, event, helper) {
        var action= component.get("c.createBook");
        action.setParams({
            
        });
        action.setCallback(this,function(response){
            component.set('v.bookId', reponse.getReturnValue());
            alert("new record successful created!!!!")
        });
        $A.enqueueAction(action);
    },
    
})