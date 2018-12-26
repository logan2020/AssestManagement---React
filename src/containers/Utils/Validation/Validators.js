export class Validators{

    validate(ruleName,fieldValue){
        let failedRuleName='';
        switch(ruleName){
            case 'required':{
                if(fieldValue.trim()<=0){
                    failedRuleName = 'required';
                }
                break;
            }
            case 'minLength':{
                if(fieldValue.length<5){
                    failedRuleName = "minLength";
                }
                break;
            }
            case 'minLength_8':{
                if(fieldValue.length<8){
                    failedRuleName = "minLength_8";
                }
                break;
            }
            default:{
                failedRuleName = '';
            }
        }
        return failedRuleName;
    }

}

window.Validators= Validators;