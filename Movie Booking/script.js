const container = document.querySelector('.container');
const movieSelect = document.querySelector('#movie');
const allSeats = document.querySelectorAll('.row .seat');

const count = document.querySelector('#count');
const total = document.querySelector('#total');

let ticketPrice = +movieSelect.value;



// save seats and movie selection in local storage
function saveData(selectedSeats) {
    let movieIndex = movieSelect.selectedIndex;
    let seatIndexes = [...selectedSeats].map(seat => {
        return [...allSeats].indexOf(seat);
    })
    localStorage.setItem('movieIndex', movieIndex);
    localStorage.setItem('seatIndexes', JSON.stringify(seatIndexes));
}

// load data from local storage
function loadData() {
    let movieIndex = localStorage.getItem('movieIndex');
    let seatIndexes = JSON.parse(localStorage.getItem('seatIndexes'));
    movieSelect.selectedIndex = movieIndex;
    ticketPrice = +movieSelect.value;

    allSeats.forEach((seat, index) => {
        if (seatIndexes.includes(index)) {
            seat.classList.add('selected');
        }
    });

    updatePrice()

}



function updatePrice() {
    let selectedSeats = document.querySelectorAll('.row .seat.selected');

    count.innerText = selectedSeats.length;
    total.innerText = selectedSeats.length * ticketPrice;
    saveData(selectedSeats);
}


// movie selection event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updatePrice();
})

// seat selection event
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')) {
        e.target.classList.toggle('selected');
        updatePrice();
    }
})

// populate ui on load
loadData();