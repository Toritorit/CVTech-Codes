function Calc(){
let FN = document.getElementById ("FN").value
let LN = document.getElementById ("LN").value
let G1 = document.getElementById ("G1").value
let G2 = document.getElementById ("G2").value
let G3 = document.getElementById ("G3").value

var grade1 = parseInt (document.getElementById("G1").value)|| 0;
var grade2 = parseInt (document.getElementById("G2").value)|| 0;
var grade3 = parseInt (document.getElementById("G3").value)|| 0;


    FLNA.innerHTML += FN + " " + LN;

    GR1.innerHTML += G1;

    GR2.innerHTML += G2;

    GR3.innerHTML += G3;




        var sum = (grade1 + grade2 + grade3)/3 ;
    document.getElementById("Avg").innerHTML = sum.toFixed(2);

    document.getElementById("LTGR")

         if (Avg > 89)
             {LTGR = "A"}

 






}









//document.getElementById("LTGR") = "A+";} 

//(let i = parseInt(G1); i <= parseInt(G2); i += parseInt(G3))

//FLNA.innerHTML += FN + " " + LN

//if (Grade === 100)  {  return "A+";} else if (Grade > 89  {   return "A";}



//function GradeScore (Grade) {  if (Grade === 100)  {  return "A+";} else if (Grade > 89  {   return "A+";}