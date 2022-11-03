let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homeCount = 0
let guestCount = 0


function homeAdd(add){
    homeCount += add
    homeEl.textContent = homeCount
    lead()
}



function guestAdd(add){
    guestCount += add
    guestEl.textContent = guestCount
    lead()
}



function lead(){
    if (homeCount  > guestCount){ 
        homeEl.style.color = 'green';
        guestEl.style.color = '#F94F6D';
    }else if (guestCount > homeCount){
         homeEl.style.color = '#F94F6D';
         guestEl.style.color = 'green' 
    } 
}


function newGame(){
    guestCount = 0 
    homeCount = 0 
    guestEl.textContent = guestCount
    homeEl.textContent = homeCount
    homeEl.style.color = '#F94F6D';
    guestEl.style.color = '#F94F6D'; 
}
