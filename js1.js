//var names=new Array();
//$.get('info.txt',function(data){
//names=data.split(',');});
var names=['eee','rrr','ttt','qqq'];
var Name;
var name;
var N=1;
var Ns=[];
getname=function(){
Name=setInterval(function(){pickname()},50);};
pickname=function(){
l=names.length;
i=Math.floor(Math.random()*l);
name=names[i];
document.getElementById("name").innerHTML=name;
};

stop=function()
{clearInterval(Name);
 if (l!=1){
var Ni="n"+N;
document.getElementById(Ni).innerHTML=name;
var index=names.indexOf(name);
names.splice(index,1);
Ns[N-1]=Ni;
N=N+1;}
else
{document.getElementById("nn").innerHTML="The list is full";}
};

refresh=function()
{parent.removeChild(
