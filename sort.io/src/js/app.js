function raffle(){
  var resultBox = document.getElementById("resultBox"),
      shot = document.getElementById("shot").value.split(','),
      winn = shot[Math.floor(Math.random()*shot.length)];

  if(shot.length > 2) {
    resultBox.innerHTML = " ";
    resultBox.innerHTML += "<p>" + winn + "</p>";
  } else if(shot[0] == ""){
    resultBox.innerHTML = "<p>Você esqueceu de digitar os valores. ;)</p>";
  } else {
    resultBox.innerHTML = "<p>Coloque mais de um valor separado por vírgulas.</p>";
  };
};

var sendToRaffle = document.getElementById("sendToRaffle");
sendToRaffle.addEventListener("click", raffle);
