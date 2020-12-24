// This was a basic example clock I found online. I don't remember where I got it from,
// But I take no credit for this.
function clock() {
var time = new Date(),
    
    hours = time.getHours(),
    
    minutes = time.getMinutes(),
    
    seconds = time.getSeconds();

document.querySelectorAll('.daclock')[0].innerHTML = harold(hours) + ":" + harold(minutes) // + ":" + harold(seconds);
document.querySelectorAll('.dasecs')[0].innerHTML = harold(seconds);
  
  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1000);
