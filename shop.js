let newItem = [];

function shop() {

   

    var x=(document.getElementById("item").value);

    document.getElementById("item").value="";



newItem.push(x);

document.getElementById("result").innerHTML=newItem

}