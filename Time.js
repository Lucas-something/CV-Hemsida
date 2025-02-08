
setInterval(function(){
  let date = new Date(); // Get the current date every second
  document.querySelector('.time').innerText = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
}, 1000);

setTimeout(function(){
  document.querySelector('#boot').style.display = 'none';
}, 0);

setTimeout(function(){
  document.querySelector('#boot-ready').style.display = 'none';
}, 0);







