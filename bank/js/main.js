var monthvalidate=document.querySelector(".monthvalidate")

function Click(){
var mebleg = document.getElementById('ayliq').value
var faiz = document.getElementById('faiz').value
var mebleq = parseFloat(mebleg)
var faizz = parseFloat(faiz)
var option = document.getElementById('option').value
var options = parseInt(option)


var faizmebleg = faizz / (options * 100)
var kesrup = mebleq * faizmebleg
var kesrdown = (1 + faizmebleg)
var pow = Math.pow(kesrdown,(options))
var down = 1-(1/pow)
var ayliqodenis = kesrup / down
var umumimebleg = ayliqodenis * options

// var down = Math.pow(kesrdown,(options))
// var ayliqodenis = kesrup / down
var span = document.getElementById('ayliqh1')
span.innerHTML = ayliqodenis.toFixed(2)
// var umumimebleg = umumi * options
var span1 = document.getElementById('umumih1')
span1.innerHTML = umumimebleg.toFixed(2)

if(option == " "){
    monthvalidate.style.display="block"
}
else{
    monthvalidate.style.display="none"
}
}
