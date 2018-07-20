/** 注：该JS文件用于存放常用函数，功用相关的函数放在Java文件中注入*/


//##############################################################################################################
//设置账号密码
function setPswName(){

}

function goSearchClick(){

    var as = document.getElementsByTagName("a");
    for (var i = 0; i < as.length; i++) {
        localMethod.JI_LOG(as[i].innerHTML+"~~~~"+i);
    }
    as[18].click();

    setTimeout(function(){
            goSearchWord();
    },5000);

}

function goSearchWord(){
    var as = document.getElementsByTagName("a");
    as[26].click();
}


function setSearchWord(shopword){

    var as = document.getElementsByTagName("a");
    var searchWord = document.getElementsByClassName("main-search-input");
    searchWord[0].focus();
    localMethod.showKeyboard();
    searchWord[0].value = shopword;
    setTimeout(function(){
            as[31].click();
            operaSearch();
    },2000);

}

function goGetChecked(){
    var table = document.getElementsByClassName("table-ng table-ng-basic related-word-table")[0];
    for(var i=0;i<table.rows.length;i++){
        var child = table.getElementsByTagName("tr")[i];
        var text = child.children[0].innerText;
        var text1 = child.children[1].innerText;
        var text2 = child.children[2].innerText;
        var text3 = child.children[3].innerText;
        var text4 = child.children[4].innerText;
        if(i>0){
            var djl = text2.replace("%","");
            djl= djl/100;
            var zhl = text4.replace("%","");
            zhl= zhl/100;
            text1 = text1.replace(",","");
            text3 = text3.replace(",","");
            localMethod.JI_LOG(text1+"!!!!!!!!");
            localMethod.JI_LOG(djl+"!!!!!!!!");
            var jzl = ccDiv(accMul(accMul(text1,djl),zhl),text3)；
            var rc = ccDiv(text1,text3);
            localMethod.JI_LOG(jzl+"~~~~~");
            localMethod.shopResult(text,jzl,rc);

        }

//        localMethod.JI_LOG(text1+"!!!!!!!!");
//        localMethod.JI_LOG(text2+"!!!!!!!!");
//        localMethod.JI_LOG(text3+"!!!!!!!!");
//        localMethod.JI_LOG(text4+"!!!!!!!!");
    }
    localMethod.getHotShopResult();


}

//乘法
function accMul(arg1,arg2){
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{
        m+=s1.split(".")[1].length
        }catch(e){}
    try{
        m+=s2.split(".")[1].length
        }catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}

//除法
 function accDiv(arg1,arg2){
      var t1=0,t2=0,r1,r2;
    try{
        t1=arg1.toString().split(".")[1].length
        }catch(e){}
    try{
        t2=arg2.toString().split(".")[1].length
        }catch(e){}
    with(Math){
        r1=Number(arg1.toString().replace(".",""));
        r2=Number(arg2.toString().replace(".",""));
        return (r1/r2)*pow(10,t2-t1);
    }
}


function operaSearch(){
    var optionsUnselected = document.getElementsByClassName("option");
    optionsUnselected[8].click();
    optionsUnselected[9].click();
    optionsUnselected[10].click();
    optionsUnselected[11].click();
    optionsUnselected[12].click();
    optionsUnselected[13].click();
    optionsUnselected[14].click();

    setTimeout(function(){
        optionsUnselected[8].click();
        optionsUnselected[18].click();
    },500);

    setTimeout(function(){
        optionsUnselected[11].click();
        optionsUnselected[13].click();
    },1000);
}

function foreachThings(options,i){

        setTimeout(function(){
//           options[i].click();
           localMethod.JI_LOG(options[i].innerHTML+"check_option~~~~"+i);

        },500*(i+1));

}


/** No.1 模拟点击事件############################################################################################*/
//模拟点击事件
function doClickByRI(resId,time) {
 var btn = document.getElementById(resId);
 if(null!=btn){
    setTimeout(function(){
        btn.click();
    },time*1000);
    }
}

function doClickByTag(){
  var itemli = document.getElementsByTagName("li");
  localMethod.JI_showToast("length："+itemli.length);

}
function doComfir(){

    setTimeout(function(){

  var btn = document.getElementsByClassName("layui-layer-btn0");
    localMethod.JI_showToast("btn:"+btn.length);
    btn[0].click();
        },3000);

}


function selectNumRange(position,amount){
  var itema = document.getElementById('framePage').contentWindow.document.getElementsByTagName('input');
  var commitBtn = document.getElementById('framePage').contentWindow.document.getElementById('openBetWinBtn2');


  localMethod.JI_showToast("itema:"+itema.length);
    itema[position].click();
    itema[position].value = amount;
    setTimeout(function(){
        commitBtn.click()
    },2000);

//  localMethod.JI_LOG(btn.className);
    setTimeout(function(){
        btn.click()
    },3000);

}


function doClickByCN(className,time) {
  var itemli = document.getElementsByTagName("li");
  localMethod.JI_showToast("length："+itemli.length);

  var btn = document.getElementsByClassName(className)[0];
  if(null!=btn){
    setTimeout(function(){
        btn.click();
    },time*1000);
    }
}

//模拟触摸事件
function doTapByRI(resId,index) {
   if(null==index){index=0;}
   $("#"+resId).eq(index).trigger("tap");
}

function doTapByCN(className,index) {
  if(null==index){index=0;}
  $("."+className).eq(index).trigger("tap")
}

//根据父控件查找子控件再触摸
function doTapByParentCN(parentCN,className,index) {
  if(null==index){index=0;}
  $("."+parentCN).children("."+className) .eq(index).trigger("tap");
}

function doTapForScanGoods(parentCN,index) {
   if(null==index){index=0;}
   $("."+parentCN).eq(index).children(".p").children("a").trigger("tap");
}


/** No.2 输入文本信息至输入框中############################################################################################*/
function doInputByRI(resId,context,time) {
   var text = document.getElementById(resId);
    setTimeout(function(){
        text.value = context;
    },time*1000);
}

function doInputByCN(className,context,time) {
    var text = document.getElementsByClassName(className)[0];
    setTimeout(function(){
        text.value = context;
    },time*1000);
}


/** No.3 获取控件的文本信息###########################################################################################*/
function doGetTextByRI(resId) {
    var text = document.getElementById(resId);
    return text.value;
}

function doGetTextByCN(className) {
    var text = document.getElementsByClassName(className)[0];
    return text.value;
}

function doGetTextByCNByInner(className) {
    var text = document.getElementsByClassName(className)[0];
    return text.innerHTML;
}



