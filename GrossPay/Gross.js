
function Calc(){



var WA = parseInt (document.getElementById("Wage").value)
var HW = parseInt (document.getElementById("Hour").value)
var O = parseInt (document.getElementById("OT").value)

var sum =(HW * WA) + (O * 1.5* O)
document.getElementById ("Answer").innerHTML = sum

}

//+(HW*1.5 *(WA-HW))

//Regular pay = (hours_worked * hourly_wages)

//PayWithOvertime = (hourly_wages * 40) + (hourly_wages * 1.5 * (hours_worked-40))