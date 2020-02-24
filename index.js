

function init(){
  window.setInterval("reloadIFrame();", 300000); // interval at 300000 mS ( 5 m)
}

// grabs the iframes for the google sheets and the calendars
// sets their sources to themselves thus refreshing them without refreshing
// the page itself
function reloadIFrame() {
  document.getElementById("Sheets").src = document.getElementById("Sheets").src;
  document.getElementById("Calendar").src = document.getElementById("Calendar").src;
}
