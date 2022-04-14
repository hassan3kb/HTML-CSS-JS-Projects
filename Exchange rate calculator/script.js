function calculate(reverse = false) {
    if (reverse == true) {
        fetch(`https://v6.exchangerate-api.com/v6/1045c0e2179b1279de94d48b/latest/${currency2.value}`)
            .then(res => res.json())
            .then(result => {
                let currentRate = result.conversion_rates[currency1.value];
                amount1.value = (currentRate * amount2.value).toFixed(2);
            })
    } else {
        fetch(`https://v6.exchangerate-api.com/v6/1045c0e2179b1279de94d48b/latest/${currency1.value}`)
            .then(res => res.json())
            .then(result => {
                let currentRate = result.conversion_rates[currency2.value];

                rate.innerText = `1 ${currency1.value} = ${currentRate} ${currency2.value}`
                amount2.value = (currentRate * amount1.value).toFixed(2);
            })
    }
}


currency1.addEventListener('change', calculate);
currency2.addEventListener('change', calculate);
amount1.addEventListener('input', calculate);
amount2.addEventListener('input', () => { calculate(true) });

swap.addEventListener('click', () => {
    let temp = currency1.value;
    currency1.value = currency2.value;
    currency2.value = temp;

    calculate();
})

calculate();