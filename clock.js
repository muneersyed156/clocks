var t = document.getElementById("clock")
var alarm = document.getElementById("alarm")
var music = document.getElementById("music")
var scroll = document.getElementById("scroll")
var s = ''
var sh = ''
var sm = ''
var al = 0
alarm.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        s = alarm.value
        alarm.value = ''
        if (s.split(":")[0] <= '23' && s.split(":")[1] <= '59') {
            sh = s.split(":")[0]
            sm = s.split(":")[1]
            scroll.innerHTML = "Your Alarm is set on" + " " + sh + ":" + sm
            al = 1
            console.log(sh)
            console.log(sm)
        }
    }
})
var s2 = 0
function clock1() {
    var date = new Date()
    t.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${(date.getMilliseconds())}`
    if (al == 1) {
        if (date.getHours() === parseInt(sh) && date.getMinutes() === parseInt(sm)) {
            music.play()
            s2 = 1
        }
        else {
            music.pause()
        }
    }

}
setInterval(clock1, 100)
var inc = 1000;

clock();

function clock() {
    const date = new Date();

    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
    document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

setInterval(clock, inc);

/*
 */
