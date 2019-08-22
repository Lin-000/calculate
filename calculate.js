window.onload = function(){//浏览器加载完毕时执行
    clickBtn();
}
var i = 1;//约束小数点
var j = 1;//约束左括号
var k = 1;//约束右括号
function clickBtn(){//单击按钮
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("view")) return false;

    let li = document.getElementsByTagName("li");//获取按钮元素节点
    for(var i=0;i<li.length;i++){
        li[i].onclick = function(){//单击相应按钮
            keyClick(this);
        }
    }
}
var shu = "";//定义一个字符串
function xianshi(name){
    if(!document.getElementById) return false;

    var view = document.getElementById("view");
    shu += name;//进行字符串拼接
    view.value = shu;//显示
}
function yunsuan(){
    if(!document.getElementById) return false;

    var view = document.getElementById("view");
    var jieguo = eval(view.value);
    /*eval 函数允许 JScript 源代码的动态执行。
        eval("var mydate = new Date();");;
    */
    view.value = jieguo;//显示结果
    shu = jieguo;//将结果值存到变量中
}
function qingping(){
    if(!document.getElementById) return false;

    var view = document.getElementById("view");
    view.value = "0";//显示0
    shu = "";//并将字符串清空
}

function keyClick(li){//对每个按钮进行处理
    if(!document.getElementById) return false;

    var view = document.getElementById("view");//获取显示
    if(li.firstChild.nodeValue=="C"){//如果单击"C"
        i=1;
        qingping();//进行清屏操作
    }else if(li.firstChild.nodeValue=="±"){//单击±按钮执行操作
        if(isNaN(view.value)){
            //什么都不执行
        }else{
            view.value = 0 - view.value;
        }
    }else if(li.firstChild.nodeValue=="0"){//单击0执行操作
        if(view.value=="0"){
            //什么都不执行
        }else{
            xianshi(li.firstChild.nodeValue);
        }
    }else if(li.firstChild.nodeValue==")"){//单击)执行操作
        if(view.value.charAt(view.value.length-1)=="+"){
            xianshi("0"+li.firstChild.nodeValue);
        }else{
            xianshi(li.firstChild.nodeValue);
        }
    }else if(li.firstChild.nodeValue=="."){//单击.执行操作
        /*var ss = document.getElementById("input");
            var n = ss.value.indexOf(".");
            if(n>0){alert('只能输入一位数小数点');*/
        /*
        charAt() 返回在指定位置的字符。*/
        if(i==0){
            //什么都不执行
        }else{
            i=0;
            if(view.value == 0||view.value.charAt(view.value.length-1)=="+"||view.value.charAt(view.value.length-1)=="-"||view.value.charAt(view.value.length-1)=="*"||view.value.charAt(view.value.length-1)=="/"){
                xianshi("0.");
            }else{
                xianshi(li.firstChild.nodeValue);
            }
        }
        // this.firstChild.nodeValue.match(".")
    }else if(li.firstChild.nodeValue=="+"||li.firstChild.nodeValue=="-"||li.firstChild.nodeValue=="*"||li.firstChild.nodeValue=="/"){//单击运算符号执行操作
        if(view.value == 0||view.value.charAt(view.value.length-1)=="("){
            i=1;
            xianshi("0"+li.firstChild.nodeValue);
        }else{
            if(view.value.charAt(view.value.length-1)=="+"||view.value.charAt(view.value.length-1)=="-"||view.value.charAt(view.value.length-1)=="*"||view.value.charAt(view.value.length-1)=="/"){
                //什么都不执行
            }else{
                i=1;
                xianshi(li.firstChild.nodeValue);
            }
        }
    }else if(li.firstChild.nodeValue=="="){//单击等号执行操作
        yunsuan();//进行运算
    }else{//单击数字按钮执行操作
        xianshi(li.firstChild.nodeValue);//单击按钮进行显示
    }
}