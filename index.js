var f=document.querySelector('#from'),main=document.querySelector('#main');
var get=()=>{
    fetch("https://v1.hitokoto.cn/?c=i").then(res=>res.json()).then(data=>{
        main.innerHTML=data.hitokoto;
        f.innerHTML=data.from+(data.from_who==null?"":" - "+data.from_who);
        console.log(data);
    });
};
document.onkeydown=function(e){
    e = e || window.event;
    if ((e.ctrlKey && e.key=='r') || e.key == 'F5') { 
        get();
        return false;
    }
};
if(location.hash!=''){
    var hash=()=>{document.querySelector('#main').innerHTML=decodeURI(location.hash.substring(1).replace(/\n/g,"<br>"))};
    hash();
    window.onhashchange=hash;
}else{
    get();
}