let bA="";

botones = document.getElementsByTagName("button");

for(var i=0; i<botones.length; i++) {
    botones[i].style.backgroundImage = "url('Tapa.jpg')";
}
let memo=[0,1,2,3,1];
function tirar(p) {
    document.getElementById("btn"+p).style.backgroundImage = "url('"+memo[p]+".jpg')";

    bA=p;
}
