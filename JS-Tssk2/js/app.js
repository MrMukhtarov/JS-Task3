// function decrese(){
//     var decrese = document.getElementById('decrease')
//     var h1 = document.getElementById('count')
//     var h11 = h1.value
//     // if(h11 > 0){
//     //    h11--;
//     // }
//     // else{
//     //     alert('Minimum 1 mehsul secilmelidir')
//     // } 
//     for (var i = h1.value; i < 0; i--) {
//         if(h1 > 0)  {
//             h1.innerHTML = i.value 
//         }
//         else{
//             alert('ssss')
//         }
//     }   
// }

// var reset = document.getElementById('reset')
//     var increse = document.getElementById('increase')
// UI 함수
var count = 0;
      document.getElementById("counting").innerText = count;
      function increase() {
        count = count + 1;
        document.getElementById("counting").innerText = count;
        document.getElementById('counting').style.color = 'green'
      }
      function decrease() {
        count = count - 1;
        if(count <= 0){
            alert('Minimum 1 mehsul secilmelidir')
            count = 0
        }
        document.getElementById("counting").innerText = count;
        document.getElementById('counting').style.color = 'red'
      }
      function reset() {
        count = 0;
        document.getElementById("counting").innerText = count;
        document.getElementById('counting').style.color = 'black'
      }
      