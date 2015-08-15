function raffle(){
  var shot = document.getElementById("shot").value.split(','),
      winn = shot[Math.floor(Math.random()*shot.length)];

  console.log(winn);
};

var sendToRaffle = document.getElementById("sendToRaffle");
sendToRaffle.addEventListener("click", raffle);
