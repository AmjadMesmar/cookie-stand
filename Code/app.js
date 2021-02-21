'use strict';

const seatle = {

  cityName: 'Seatle',
  customers: 0,
  minCustomers:23,
  maxCustomers:65,
  avgCookiesSale: 6.3,
  cookiesNumber:0,
  totalCookies:0,
  dayHours: ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm','07:00 pm'],

  customersNumber: function (min,max) {
    this.customers = generateRandomNumber(min, max);
  },

  hourlyCookies: function (randomNumber,multiplyNumber) {

    this.cookiesNumber = calculateCookiesNumber(randomNumber,multiplyNumber);
  }

};

const tokyo = {

  cityName: 'Tokyo',
  customers: 0,
  minCustomers:3,
  maxCustomers:24,
  avgCookiesSale: 1.2,
  cookiesNumber:0,
  totalCookies:0,
  dayHours: ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm','07:00 pm'],

  customersNumber: function (min,max) {
    this.customers = generateRandomNumber(min, max);
  },

  hourlyCookies: function (randomNumber,multiplyNumber) {

    this.cookiesNumber = calculateCookiesNumber(randomNumber,multiplyNumber);
  }
};

const dubai = {

  cityName: 'Dubai',
  customers: 0,
  minCustomers:11,
  maxCustomers:38,
  avgCookiesSale: 3.7,
  cookiesNumber:0,
  totalCookies:0,
  dayHours: ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm','07:00 pm'],

  customersNumber: function (min,max) {
    this.customers = generateRandomNumber(min, max);
  },

  hourlyCookies: function (randomNumber,multiplyNumber) {

    this.cookiesNumber = calculateCookiesNumber(randomNumber,multiplyNumber);
  }
};

const paris = {

  cityName: 'Paris',
  customers: 0,
  minCustomers:20,
  maxCustomers:38,
  avgCookiesSale: 2.3,
  cookiesNumber:0,
  totalCookies:0,
  dayHours: ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm','07:00 pm'],

  customersNumber: function (min,max) {
    this.customers = generateRandomNumber(min, max);
  },

  hourlyCookies: function (randomNumber,multiplyNumber) {

    this.cookiesNumber = calculateCookiesNumber(randomNumber,multiplyNumber);
  }
};

const lima = {

  cityName: 'Lima',
  customers: 0,
  minCustomers:2,
  maxCustomers:16,
  avgCookiesSale: 4.6,
  cookiesNumber:0,
  totalCookies:0,
  dayHours: ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm','07:00 pm'],

  customersNumber: function (min,max) {
    this.customers = generateRandomNumber(min, max);
  },

  hourlyCookies: function (randomNumber,multiplyNumber) {

    this.cookiesNumber = calculateCookiesNumber(randomNumber,multiplyNumber);
  }
};

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function calculateCookiesNumber (randomNumber,multiplyNumber){

  randomNumber = randomNumber*multiplyNumber;
  return Math.ceil(randomNumber);
}


function renderObjects(objectName){

  const parentElement = document.getElementById('Salamon Cookies');

  // Create Element
  // append element to parent element
  // set text content to the element

  const articleElement = document.createElement('article');
  parentElement.appendChild(articleElement);

  const h2Element = document.createElement('h2');
  articleElement.appendChild(h2Element);
  h2Element.textContent = objectName.cityName;

  const ulElement = document.createElement('ul');
  articleElement.appendChild(ulElement);

  for(let i = 0; i < objectName.dayHours.length; i++) {
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    objectName.customersNumber(objectName.minCustomers,objectName.maxCustomers);
    objectName.hourlyCookies(objectName.customers,objectName.avgCookiesSale);
    liElement.textContent = `${objectName.dayHours[i]}: ${objectName.cookiesNumber} cookies.`;
    objectName.totalCookies = objectName.totalCookies + objectName.cookiesNumber;
    objectName.customers = 0;
    objectName.cookiesNumber = 0;
  }
  const liElement = document.createElement('li');
  ulElement.appendChild(liElement);
  liElement.textContent = `Total: ${objectName.totalCookies} cookies.`;
}


renderObjects(seatle);
renderObjects(tokyo);
renderObjects(dubai);
renderObjects(paris);
renderObjects(lima);
