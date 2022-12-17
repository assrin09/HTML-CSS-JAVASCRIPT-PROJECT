
let homeScoreUpdate = document.getElementById("homeScore")
let homeScore = 0 
let guestScoreUpdate = document.getElementById("guestScore")
let guestScore = 0
let guestCountOne = document.getElementById("guestCount1")

let foulCountUpdate1 = document.getElementById("foulCount1")
let foulCount1 = 0

let foulCountUpdate2 = document.getElementById("foulCount2")
let foulCount2 = 0



function homeCount1() {
    homeScore += 1
   homeScoreUpdate.textContent = homeScore
}
function homeCount2() {
    homeScore += 2
   homeScoreUpdate.textContent = homeScore
}
function homeCount3() {
    homeScore += 3
   homeScoreUpdate.textContent = homeScore
}
function guestCount1() {
    guestScore += 1
   guestScoreUpdate.textContent = guestScore
}
function guestCount2() {
    guestScore += 2
   guestScoreUpdate.textContent = guestScore
}
function guestCount3() {
    guestScore += 3
   guestScoreUpdate.textContent = guestScore
}
function foul1Count1() {
    foulCount1 += 1
    foulCountUpdate1.textContent = foulCount1
}
function foul1Count2() {
    foulCount1 += 2
    foulCountUpdate1.textContent = foulCount1
}



function foul2Count1() {
    foulCount2 +=1
    foulCountUpdate2.textContent =  foulCount2
}
function foul2Count2(){
     foulCount2 += 2
     foulCountUpdate2.textContent =  foulCount2
}



function restart(){
    homeScore = 0 
    homeScoreUpdate.textContent  = 0
    guestScore = 0
    guestScoreUpdate.textContent = 0
    foulCount1 = 0
    foulCountUpdate1.textContent = 0
    foulCount2 = 0
    foulCountUpdate2.textContent  = 0
}