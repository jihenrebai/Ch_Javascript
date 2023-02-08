
function PopupCentrer(page,largeur,hauteur,options) {
  var top=(screen.height-hauteur)/1.5;
  var left=(screen.width-largeur)/1.5;
  window.open(page,"","top="+top+",left="+left+",width="+largeur+",height="+hauteur+","+options);
}
var i=0;
var mytotal2;
//let myprix=document.getElementById("prixt").value
var Gprix=0;
function prix(maprix){
  document.getElementById("prixt").value=maprix
  Gprix= maprix
}

//var ajoutprix=
//var moisprix=0;
var myqte=0;

 //var ajoutprix=document.getElementById("ajout")
 //var moisprix=document.getElementById("mois")
 

 myqte=document.getElementById("qte")
function somme(){


  i++;
  myqte.value=i;
  var mytotal = Gprix*i;
  document.getElementById("total").value=mytotal;
}
function mois(){
  
if (i>0){
  i-=1
  myqte.value=i;
var mytotal2 = Gprix*i;
document.getElementById("total").value=mytotal2;
 
}
}
function vider(v){
  document.getElementById("qte").value=v
  document.getElementById("total").value=v
}
