let home = document.getElementById("home-score")
let one = 0


function homeBy1() {
    one += 1
    home.textContent = one
}

function homeBy2() {
    one += 2
    home.textContent = one
}

function homeBy3() {
    one += 3
    home.textContent = one
}


let guest = document.getElementById("guest-score")
let two = 0


function guestBy1() {
    two += 1
    guest.textContent = two
}

function guestBy2() {
    two += 2
    guest.textContent = two
}

function guestBy3() {
    two += 3
    guest.textContent = two
}