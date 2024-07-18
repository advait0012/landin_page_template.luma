const now = new Date()

// const ourTime = now.getHours() + ":" + now.getMinutes() + " " +now.getSeconds() +" AM"  +" IST";
const ourTime = `${now.getHours()}:${now.getMinutes()} PM IST`;

console.log(ourTime);


const timeEl = document.querySelector('.time')
timeEl.textContent = ourTime;