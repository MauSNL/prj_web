var el = document.getElementById('like').getAttribute('src');
 
//console.log(el);
 
el = document.getElementById('like').setAttribute('src', 'images/like_off.png');
 
function changeimage(){
     
    var huidig = document.getElementById('like').getAttribute('src');
    //console.log(huidig);
    if (huidig == 'images/like_on.png'){
         
        el = document.getElementById('like').setAttribute('src', 'images/like_off.png');
         
    } else {
        el = document.getElementById('like').setAttribute('src', 'images/like_on.png');
    }
    //console.log(huidig);
}
 
//changeimage();
 
var bestand = document.getElementById('like');
bestand.addEventListener('click', changeimage , false);