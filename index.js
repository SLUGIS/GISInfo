

function init(){
  window.setInterval("reloadIFrame();", 60000);
}

function reloadIFrame() {
  document.getElementById("Sheets").src = document.getElementById("Sheets").src;
  document.getElementById("Calendar").src = document.getElementById("Calendar").src;
}
