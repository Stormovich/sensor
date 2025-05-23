var LOCALSTORAGE_TOTALSCORE = "totalscore";

var s_iTotalScore = 0;

function CLocalStorage(szName){
    var _bLocalStorage = true;

    this._init = function(szName){   
        try{
            var bFlag = window.localStorage.getItem(szName);
            this.resetData();
            if(bFlag !== null && bFlag !== undefined){  
                this.loadData();
            }
        }catch(e){
            this.resetData();
        }        
        
    };

    this.isDirty = function(){

        if(s_iTotalScore > 0){
            return true;
        }

        return false;
    };

    this.isUsed = function(){
        try{
            window.localStorage.setItem("ls_available","ok");
        }catch(evt){
            _bLocalStorage = false;
        }
        
        return _bLocalStorage;
    };

    this.resetData = function(){

        s_iTotalScore = 0;

    };

    this.deleteData = function(){
        window.localStorage.removeItem(szName);
    };

    this.saveData = function(){
        var oJSONData = {};
        oJSONData[LOCALSTORAGE_TOTALSCORE] = s_iTotalScore;

        /*ADD MORE JSON THIS WAY
        var randB = "randomboolean";
        oJSONData[randB] = true;
        oJSONData["anothernestedjson"] = {pippo: 3, ciccio: 10};
        */

        window.localStorage.setItem(szName, JSON.stringify(oJSONData));
        
    };

    this.loadData = function(){
        var szData = JSON.parse(window.localStorage.getItem(szName));

        
        var iLoadedScore = szData[LOCALSTORAGE_TOTALSCORE];
        s_iTotalScore = parseInt(iLoadedScore);
        
    };

    this._init(szName);
    
}