/** ע����JS�ļ����ڴ�ų��ú�����������صĺ�������Java�ļ���ע��*/


//##############################################################################################################
//�����˺�����
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
    var nums = document.getElementsByClassName("num");
    for(var i = 0;i<num.length;i++){
        localMethod.JI_LOG(nums.value+"-----------"+i);
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


/** No.1 ģ�����¼�############################################################################################*/
//ģ�����¼�
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
  localMethod.JI_showToast("length��"+itemli.length);

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
  localMethod.JI_showToast("length��"+itemli.length);

  var btn = document.getElementsByClassName(className)[0];
  if(null!=btn){
    setTimeout(function(){
        btn.click();
    },time*1000);
    }
}

//ģ�ⴥ���¼�
function doTapByRI(resId,index) {
   if(null==index){index=0;}
   $("#"+resId).eq(index).trigger("tap");
}

function doTapByCN(className,index) {
  if(null==index){index=0;}
  $("."+className).eq(index).trigger("tap")
}

//���ݸ��ؼ������ӿؼ��ٴ���
function doTapByParentCN(parentCN,className,index) {
  if(null==index){index=0;}
  $("."+parentCN).children("."+className) .eq(index).trigger("tap");
}

function doTapForScanGoods(parentCN,index) {
   if(null==index){index=0;}
   $("."+parentCN).eq(index).children(".p").children("a").trigger("tap");
}


/** No.2 �����ı���Ϣ���������############################################################################################*/
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


/** No.3 ��ȡ�ؼ����ı���Ϣ###########################################################################################*/
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



