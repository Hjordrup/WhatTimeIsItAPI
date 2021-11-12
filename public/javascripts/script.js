let timer = document.getElementById('timer');
function getTime() {
  setInterval(() => {
    let time = new Date();
    timer.innerHTML = time.toLocaleTimeString();
  }, 10);
}
getTime();
