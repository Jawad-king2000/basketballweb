let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 12
let guestScore = 12

function addHome(points) {
    homeScore += points
    homeScoreEl.textContent = homeScore
}

function addGuest(points) {
    guestScore += points
    guestScoreEl.textContent = guestScore
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}