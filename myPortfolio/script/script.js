let close_navbar =()=>{

    let side_nav = document.getElementById('Side_items');
side_nav.style.display='none';
document.getElementById('One').style.display='none';
document.getElementById('Two').style.display='block';




}

let open_navbar = ()=>{
    let side_nav =  document.getElementById('Side_items');

    // console.log(side_nav);
    side_nav.style.display='block';
side_nav.classList.add('actived')
    document.getElementById('One').style.display='block';
    document.getElementById('Two').style.display='none';

}
let i=0;
let myLine = document.getElementById('myLine')
let a=['Web Developer' ,'Coder','FreeLancer','UI/Ux-Designer'];
let arr=0;
 function UpdateTheLine (){
     if(i>3){
        i=0;
     }
    if(arr == a[i].length){
        i++;
        arr=0;
        
    }
    let k='';
    if(arr==a[i].length-1){
        k='.';

    }

    myLine.innerHTML='I am a <spam>'+a[i].slice(0,arr)+' <spam>'+k;
    arr++;

}
setInterval(UpdateTheLine, 300)
