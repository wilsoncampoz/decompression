function raffle(){
  var box = document.getElementById("sortBox"),
      resultBox = document.getElementById("resultBox"),
      shot = document.getElementById("shot").value.split(','),
      winn = shot[Math.floor(Math.random()*shot.length)];

  resultBox.innerHTML = " ";
  resultBox.innerHTML += "<p>" + winn + "</p>";
};

var sendToRaffle = document.getElementById("sendToRaffle");
sendToRaffle.addEventListener("click", raffle);
