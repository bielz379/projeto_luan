function calcular(){
    var r = document.getElementById("real").value;
    var d = document.getElementById("dolar").value;
    var e = document.getElementById("euro").value;
    var input = document.querySelectorAll("input");

    if ((r == "") && (d == "") && (e == "")) {
        alert(" Não há valores a converter")
    }else{
        if ((r == "") && (d == "")){
            converteReal = e * 5.15 
            converteDolar = converteReal / 4.50  
            converteEuro = e
        } else{
            if ((r == "") && (e == "")){
                converteReal = d * 4.50
                converteEuro = converteReal/ 5.15
                converteDolar = d
            }
            else{
                converteDolar = r /4.50
                converteEuro = r / 5.15
                converteReal = r
            }
        }
    }
    input[0].value = converteReal;
    input[1].value = converteDolar;
    input[2].value = converteEuro.toFixed(2);
}

function limpar(){
    var input =  document.querySelectorAll("input");
    input[0].value = "";     
    input[1].value = "";
    input[2].value = "";     
}