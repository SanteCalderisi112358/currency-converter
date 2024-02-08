import apiKey from './config.js';
const currencyFirstEl = document.getElementById('currency-first')
const currencySecondEl = document.getElementById('currency-second')
const worthFirstEl = document.getElementById('worth-first')
const worthSecondEl = document.getElementById('worth-second')
const exchangeRateEl = document.getElementById('exchange-rate') 
let currencyFirst; 
let currencySecond; 
let worthFirst; 
let rate;

currencyFirstEl.addEventListener('change', updateRate)
currencySecondEl.addEventListener('change', updateRate)
worthFirstEl.addEventListener('input', updateRate)



async function updateRate(){
currencyFirst = currencyFirstEl.value
currencySecond = currencySecondEl.value
worthFirst = worthFirstEl.value
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyFirst}`
const response = await fetch(apiUrl)
const data = await response.json()
console.log(data)
rate = Object.entries(data.conversion_rates).filter(coppia=>coppia[0]===currencySecond)[0][1]
exchangeRateEl.innerText = `1 ${currencyFirst} = ${rate} ${currencySecond}`
worthSecondEl.value = `${worthFirst*rate}`

}

updateRate()