function add() {

    var x=parseInt(document.getElementById("num1").value);

    var y=parseInt(document.getElementById("num2").value);

    var sum = x+y

    document.getElementById("result").innerHTML=sum

}



function sub() {

    var x=parseInt(document.getElementById("num1").value);

    var y=parseInt(document.getElementById("num2").value);

    var diff = x-y

    document.getElementById("result").innerHTML=diff

}

function mul() {

    var x=parseInt(document.getElementById("num1").value);

    var y=parseInt(document.getElementById("num2").value);

    var multi = x*y

    document.getElementById("result").innerHTML=multi

}

function div() {

    var x=parseInt(document.getElementById("num1").value);

    var y=parseInt(document.getElementById("num2").value);

     var divi = x/y

    document.getElementById("result").innerHTML=divi

}