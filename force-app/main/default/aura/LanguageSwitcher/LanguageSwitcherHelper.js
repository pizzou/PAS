({
   
    initialize: function(cmp, setlang) {
        var action = cmp.get("c.setLanguage");
        action.setCallback(this, function(res){
            var state = res.getState();
            if (state === "SUCCESS") {
                var ret = res.getReturnValue();
                cmp.set("v.currentLang", ret);
                this.activeDisactiveButton(cmp);
            }
        });
        $A.enqueueAction(action);
    },

    
    changeLanguage: function(cmp, setlang) {
        var action = cmp.get("c.setLanguage");
        action.setParams({ 
            ref1 : setlang
        });
        action.setCallback(this, function(res){
            var state = res.getState();
            if (state === "SUCCESS") {
                var ret = res.getReturnValue();
                cmp.set("v.currentLang", ret);
                this.activeDisactiveButton(cmp);
            }
        });
        $A.enqueueAction(action);
    },   
    
    
    activeDisactiveButton: function(cmp){
        var leftString = cmp.get("v.leftLang");
        var rightString = cmp.get("v.rightLang");
        var middleString = cmp.get("v.middleviet");
        var tmpLang = cmp.get("v.currentLang");
        if (tmpLang == rightString){
            this.setStyle(cmp, false, true);
        } else if (tmpLang == leftString){
            this.setStyle(cmp, true, false);
        }        
    },
    
    
    setStyle: function(cmp, leftStyle, rightStyle){
        var leftButton = cmp.find("changeToLeft");
//        leftButton.getElement().disabled = leftStyle;        
        var rightButton = cmp.find("changeToRight");
        //rightButton.getElement().disabled = rightStyle;
        var middleButton = cmp.find("changeToV");
    },
    
})