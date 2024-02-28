const hr = document.querySelector('#hr')
const sc = document.querySelector('#sc')
const mn = document.querySelector('#mn')
const deg = 6

//this function execuded every second
setInterval(() => {
    let day = new Date();
    let ms = day.getMilliseconds() * deg;
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg + ms / 1000;
    hr.style.transform = `rotateZ(${hh}deg)`

   mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`
})