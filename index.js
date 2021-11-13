if(location.hash!=''){
    document.querySelector('#main').innerHTML=location.hash.substring(1);
}else{
    var get=()=>fetch("https://v1.hitokoto.cn/?c=i").then(res=>res.json()).then(data=>{
        document.querySelector('#main').innerHTML=data.hitokoto;
        console.log(data.hitokoto);
    });
    get();
    document.onkeydown=function(e){
        e = e || window.event;
        if ((e.ctrlKey && e.key=='r') || e.key == 'F5') { 
            get();
            return false;
        }
    };
}