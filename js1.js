//var names=new Array();
//$.get('info.txt',function(data){
//names=data.split(',');});
var names=['eee','rrr','ttt','qqq'];
var Name;
var name;
getname=function(){
Name=setInterval(function(){pickname()},50);
pickname=function(){
i=Math.floor(Math.random()*4);
name=names[i];
document.getElementById("name").innerHTML=name;}
};

stop=function()
{clearInterval(Name);
//document.getElementById("index").innerHTML="Hah Hah, you like "+name;
};
