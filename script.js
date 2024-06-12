const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock)

// WE CAN USE cron job LEKIN AGAR SUI KE BAARE MEIN BAAT HO RAHI HAI TOH TALWAAR KYO NIKALNA

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
