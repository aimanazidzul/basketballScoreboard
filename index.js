let homeStore=document.getElementById("homeScoreEl")
let homeScore=0

let guestStore=document.getElementById("guestScoreEl")
let guestScore=0


function home1(){
    homeScore+=1
    homeStore.textContent = homeScore
}

function home2(){
    homeScore+=2
    homeStore.textContent = homeScore
}

function home3(){
    homeScore+=3
    homeStore.textContent = homeScore
}

function guest1(){
    guestScore+=1
    guestStore.textContent = guestScore
}

function guest2(){
    guestScore+=2
    guestStore.textContent = guestScore
}

function guest3(){
    guestScore+=3
    guestStore.textContent = guestScore
}

function reset(){
    homeScore=0
    guestScore=0
    homeStore.textContent = homeScore
    guestStore.textContent = guestScore
}

document.getElementById("home-btn-1").addEventListener("click",home1)
document.getElementById("home-btn-2").addEventListener("click",home2)
document.getElementById("home-btn-3").addEventListener("click",home3)

document.getElementById("guest-btn-1").addEventListener("click",guest1)
document.getElementById("guest-btn-2").addEventListener("click",guest2)
document.getElementById("guest-btn-3").addEventListener("click",guest3)

document.getElementById("resetbtn").addEventListener("click",reset)

