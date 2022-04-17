let data = [];
getRandomUser()
getRandomUser()
getRandomUser()

async function getRandomUser() {
    let res = await fetch('https://randomuser.me/api')
    res = await res.json()
    let user = res.results[0];
    let name = `${user.name.first} ${user.name.last}`;

    const newUser = {
        name: name,
        money: Math.floor(Math.random() * 1000000)
    }
    addPerson(newUser);
}

function addPerson(person) {
    data.push(person);
    updateUI();
}

function updateUI(providerData = data) {

    personWrapper.innerHTML = '';

    providerData.forEach(person => {
        let div = document.createElement('div');
        div.classList.add('person');

        div.innerHTML = `<strong>${person.name}</strong> ${formatMoney(person.money)}`

        personWrapper.appendChild(div);
    })
}

function formatMoney(money) {
    // return `$${money}`;
    let formatter = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    });

    return formatter.format(money); /* $2,500.00 */
}


function doubleMoney() {
    data = data.map(user => {
        return { ...user, money: user.money * 2 }
    })
    updateUI();
}

function showMillionaires() {
    data = data.filter((person) => person.money > 1000000);

    updateUI();
}
function sortByWealth() {
    data.sort((a, b) => b.money - a.money);

    updateUI();
}
function calculateTotal() {
    let total = data.reduce((acc, person) => { return acc += person.money }, 0);

    let newH3 = document.createElement('h3');
    newH3.innerHTML = `Total Wealth: <strong>${formatMoney(total)}</strong>`;

    // clear if there is already a h3
    let h3 = document.querySelector('#personWrapper h3')
    if (h3 == null) {
        personWrapper.appendChild(newH3);
    }

}





// event listeners on buttons

addPersonBtn.addEventListener('click', getRandomUser)
doubleMoneyBtn.addEventListener('click', doubleMoney)
showMillionairesBtn.addEventListener('click', showMillionaires)
sortBtn.addEventListener('click', sortByWealth)
calculateWealthBtn.addEventListener('click', calculateTotal)