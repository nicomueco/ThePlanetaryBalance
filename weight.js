
var g_tierra = 9.8;
var planeta;
var g_planeta;
var peso;
var boton = document.getElementById("boton");
var pesofinal;
var resultado = document.getElementById("resultado");
boton.addEventListener("click",recolect);

function recolect(){
    planeta = document.getElementById("planetslist").value;
    peso  = document.getElementById("peso").value;
    if(planeta == "Mercury"){
        g_planeta = 3.7;
    }
    else if(planeta == "Venus"){
        g_planeta = 8.87;
    }
    else if(planeta == "Earth"){
        g_planeta = 9.8;
    }
    else if(planeta == "Mars"){
        g_planeta = 3.71;
    }
    else if(planeta == "Jupiter"){
        g_planeta = 24.79;
    }
    else if(planeta == "Saturn"){
        g_planeta = 10.44;
    }
    else if(planeta == "Uranius"){
        g_planeta = 8.87;
    }
    else if(planeta == "Neptune"){
        g_planeta = 11.15;
    }

    pesofinal = peso * g_planeta / g_tierra;
    pesofinal = parseInt(pesofinal); 
    toString(pesofinal);
    console.log(pesofinal);
    resultado.innerText = "⭐Your Weight is " + pesofinal + " kg in " + planeta + ".⭐";

}