const button = document.querySelector('button')
const select = document.getElementById('currency-select')

const bitcoin = 107351.61
const dolar = 5.2
const euro = 5.9

const convertValues = () => {
    const inputReais = document.querySelector('input').value //pega o valor do input digitado pelo usuario 

    const realValueText = document.getElementById('real-value-text') // pega o elemnto em real

    const currencyValueText = document.getElementById('currency-value-text') // pega o elemento do dolar

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReais) // colocando o valor em real na moeda certa

    if(select.value === 'US$ Dólar americano'){

        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputReais / dolar)

    }else if (select.value === '€ Euro'){

        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputReais / euro)
    }else if (select.value === 'Bitcoin'){

        currencyValueText.innerHTML = (inputReais / bitcoin).toFixed(4)
    }

}

changeCurrency = () =>{
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.getElementById('currency-image')

    if(select.value === '€ Euro'){
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.svg'
    }
    if(select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/eua.svg'
    }
    if(select.value === 'Bitcoin'){
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/bitcoin.png'
    }

    convertValues()
}

button.addEventListener('click', convertValues) //Eventos
select.addEventListener('change',changeCurrency)//Eventos