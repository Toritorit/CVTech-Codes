function Funct(){
let Fnum = document.getElementById("Fnum").value
let Snum = document.getElementById("Snum").value
let Increment = document.getElementById("Increment").value


if ( Fnum > Snum){ 

        for(let i = parseInt(Fnum); i <= parseInt(Snum); i += parseInt(Increment)){ 

         document.getElementById('Inf').innerHTML += i + "<hr>"
 
        }
}

else { 
        for(let i = parseInt(Snum); i <= parseInt(Fnum); i += parseInt(Increment)){

        document.getElementById('Inf').innerHTML += i + "<hr>"

        }


}}



//for ( let i = parseInt(Fnum); i <= parseInt(Snum); i+= parseInt(Increment)){

        //document.getElementById('Inf').innerHTML += i + "<hr>"

   // }
