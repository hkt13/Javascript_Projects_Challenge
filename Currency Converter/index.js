const currency_number_1 = document.getElementById("currency-number-1")
const currency_number_2 = document.getElementById("currency-number-2")
const select_currency_1 = document.getElementById("select-currency-1")
const select_currency_2 = document.getElementById("select-currency-2")
const rateel = document.getElementById("rate")

function calc() {

    rateel.innerText = "Processing";

    fetch(`https://api.exchangerate-api.com/v4/latest/${select_currency_1.value}`).then((result) => {
        if (!result.ok) {
            throw new Error("network response was not ok")
        }
        return result.json()
    
    }).then((data) => {
       
        currency_number_2.value = ((data.rates[select_currency_2.value]) * currency_number_1.value).toFixed(3);
        rateel.innerHTML = `${currency_number_1.value} ${select_currency_1.value} = ${currency_number_2.value} ${select_currency_2.value} `
    
    }).catch(error => {
        console.log("Problem: ", error)
    })

}

calc();

currency_number_1.addEventListener("input", calc);
select_currency_1.addEventListener("change", calc);
select_currency_2.addEventListener("change", calc);
// it has not have any role here cuz calculation revolves here around fetch's response which is for 1 and currency_value_1's value so if you dont' write readonly it will not matter.. currency_number_2 doesn't participate in calculation here
// currency_number_2.addEventListener('input', calc); 
