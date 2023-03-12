document.addEventListener('DOMContentLoaded', documentReady, false);

function documentReady() {

    /* var navmenuid = document.getElementById("navmenuid");
     navmenuid.style.display = "none";
     document.getElementById("menuid").onclick = function () {
         /* var myArray = [{
                  "numberofHorses": "1-3 horses",
                  "price": "$60.00"
              },
              {
                  "numberofHorses": "4-6 horses",
                  "price": "$90.00"
              },
              {
                  "numberofHorses": "7-10 horses",
                  "price": "$120.00"
              },
          ]
          buildTable(myArray);

          function buildTable(dataTraining) {
              var tbprice = document.getElementById("tbprice");

              for (var i = 0; i < dataTraining.lenght; i++) {
                  var row = `<tr>
                              <td>${dataTraining[i].numberOfHorses}</td>
                              <td>${dataTraining[i].price}</td>
                              </tr>`
                  tbprice.inn erHTML + row
              }
          }

          if (navmenuid.style.display === "none") {
              navmenuid.style.display = "block";
          } else {
            navmenuid.style.display = "none";
          }
     };*/
}
let countDownDate = new Date("May 6, 2023 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);