const image=document.getElementById('hamimg');
const others=document.getElementById('others');
const arrow1light=document.getElementById('arrow1light');
const productnav=document.getElementById('productnav');
const arrow2light=document.getElementById('arrow2light');
const companynav=document.getElementById('companynav');
const arrow3light=document.getElementById('arrow3light');
const connectnav=document.getElementById('connectnav');
const arrow3dark=document.getElementById('arrow3dark');
const arrow2dark=document.getElementById('arrow2dark');
const arrow1dark=document.getElementById('arrow1dark')
let toogle=false;
let tooglerrwone=false
let tooglerrtwo=false
let tooglerrthree=false
const changeImage=()=>{
   
   if(toogle===false){
       others.style.display='block'
       image.src='./images/icon-close.svg'
       
   }
   else{
       image.src='./images/icon-hamburger.svg'
       others.style.display='none'
   }
   toogle= !toogle
}
const tooglemenueDarkOne=()=>{
    if (tooglerrwone===false) {
        arrow1dark.style.transform='rotate(180deg)' ;
        productnav.style.display='block'
    }
    else{
        arrow1dark.style.transform='rotate(360deg)';
        productnav.style.display='none'
    }
    tooglerrwone= !tooglerrwone
}
const tooglemenueDarkTwo=()=>{
    if (tooglerrtwo===false) {
        arrow2dark.style.transform='rotate(180deg)' ;
        companynav.style.display='block'
    }
    else{
        arrow2dark.style.transform='rotate(360deg)';
        companynav.style.display='none'
    }
    tooglerrtwo= !tooglerrtwo
}
const tooglemenueDarkThree=()=>{
    if (tooglerrthree===false) {
        arrow3dark.style.transform='rotate(180deg)' ;
        connectnav.style.display='block'
    }
    else{
        arrow3dark.style.transform='rotate(360deg)';
        connectnav.style.display='none'
    }
    tooglerrthree= !tooglerrthree
}
const showsubmenuOne=()=>{

    arrow1light.style.transform='rotate(180deg)';
    productnav.style.display='block'

}
const hidesubmenueOne=()=>{
    arrow1light.style.transform='rotate(360deg)';
    productnav.style.display='none'
}
const showsubmenuTwo=()=>{
    
        arrow2light.style.transform='rotate(180deg)';
        companynav.style.display='block'
    
    }
    const hidesubmenueTwo=()=>{
        arrow2light.style.transform='rotate(360deg)';
        companynav.style.display='none'
    }
    const showsubmenuThree=()=>{
    
        arrow3light.style.transform='rotate(180deg)';
        connectnav.style.display='block'
    
    }
    const hidesubmenueThree=()=>{
        arrow3light.style.transform='rotate(360deg)';
        connectnav.style.display='none'
    }


