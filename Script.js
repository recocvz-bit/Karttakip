let out1 = 0;

function login() {
  document.getElementById("login").style.display = "none";
  document.getElementById("panel").style.display = "block";
}

function ver() {
  out1++;
  document.getElementById("out1").innerText = out1;
  document.getElementById("in1").innerText = 30 - out1;
  document.getElementById("log").innerText = "Kart verildi";
}

function al() {
  if(out1 > 0){
    out1--;
    document.getElementById("out1").innerText = out1;
    document.getElementById("in1").innerText = 30 - out1;
    document.getElementById("log").innerText = "Kart alındı";
  }
}
