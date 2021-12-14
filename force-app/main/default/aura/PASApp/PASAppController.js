({
    doInit : function(component, event, helper) {
        helper.toggleTwoAndThreeSteps(component);
        component.set("v.selTabId", "step1");
    },
    
    searchKeyChange: function(component, event) {
        window.location.hash = event.target.value;
    },
    locationChange: function(component, event) {
        var token = event.getParam("token") || "";
		component.set("v.searchKey", token);
    },
    clearText: function(component) {
        window.location.hash = "";
    },
    goToStepTwo : function(component, event, helper) {
        helper.toggleOneAndTwoSteps(component);
        component.set("v.progressIndicatorFlag", "step2");
    },
    goToStepThree : function(component, event, helper) {
        helper.toggleTwoAndThreeSteps(component);
        component.set("v.progressIndicatorFlag", "step3");
    },
    goToStepFour : function(component, event, helper) {
        helper.toggleThreeAndFourSteps(component);
        component.set("v.progressIndicatorFlag", "step4");
    },
    goBackToStepOne : function(component, event, helper) {
        helper.toggleOneAndTwoSteps(component);
        component.set("v.progressIndicatorFlag", "step1");
    },
    goBackToStepTwo : function(component, event, helper) {
        helper.toggleTwoAndThreeSteps(component);
        component.set("v.progressIndicatorFlag", "step2");
    },
    handleSuccess : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The record has been updated successfully."
        });
        toastEvent.fire();
    }
})