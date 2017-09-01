/**
 * Created by DELL on 2017/8/31.
 */
function byId(iden){
    return  typeof(iden)==="string"?document.getElementById(iden):iden;
}

var timer=null,
    index=0,
    prev = byId("prev"),
    next = byId("next"),
    main=byId("slide-img"),
    pics=main.getElementsByClassName("pic"),
    len=pics.length,
    dots=byId("dots").getElementsByTagName("span");



function slideImg(){
    var button=document.getElementsByClassName("button"),
        size=button.length;

    main.onmouseover = function() {
        for(var i=0;i<size;i++){
            button[i].style.display="block";
        }
        if (timer) {
            clearInterval(timer);
        }

    }
    main.onmouseout = function() {
        for(var i=0;i<size;i++){
            button[i].style.display="none";
        }
        timer = setInterval(function () {
            index++;
            if (index >= len) {
                index = 0;
            }
            changeImg();
        }, 3000)

    }

    next.onclick=function(){
        index++;
        if(index>=len) index=0;
        changeImg();
    }

    prev.onclick=function(){
        index--;
        if(index<0) index=len-1;
        changeImg();
    }

    for(var i=0;i<len;i++){
        dots[i].id=i;
        dots[i].onclick=function(){
            index=this.id;
            changeImg();
        }

    }
    main.onmouseout();
    /*菜单切换*/

}
function changeImg(){
    for(var i=0;i<len;i++){
        pics[i].style.display="none";
        dots[i].className="";
    }
    pics[index].style.display="block";
    dots[index].className="dots-active";
}

slideImg();