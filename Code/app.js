'use strict';
let dayHours = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm'];

const seatle = {

  cityName: 'Seatle',
  customers: [],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesSale: 6.3,
  cookiesNumber: [],
  totalCookies: 0,

  customersNumber: function (min, max) {

    for (let i = 0; i < dayHours.length; i++) {
      let randomCustomers = generateRandomNumber(min, max);
      this.customers.push(randomCustomers);

      let cookiesHourly = Math.ceil(randomCustomers * this.avgCookiesSale);
      this.cookiesNumber.push(cookiesHourly);
    }
  }

};

const tokyo = {

  cityName: 'Tokyo',
  customers: [],
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesSale: 1.2,
  cookiesNumber: [],
  totalCookies: 0,

  customersNumber: function (min, max) {

    for (let i = 0; i < dayHours.length; i++) {
      let randomCustomers = generateRandomNumber(min, max);
      this.customers.push(randomCustomers);

      let cookiesHourly = Math.ceil(randomCustomers * this.avgCookiesSale);
      this.cookiesNumber.push(cookiesHourly);
    }
  }
};

const dubai = {

  cityName: 'Dubai',
  customers: [],
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesSale: 3.7,
  cookiesNumber: [],
  totalCookies: 0,

  customersNumber: function (min, max) {

    for (let i = 0; i < dayHours.length; i++) {
      let randomCustomers = generateRandomNumber(min, max);
      this.customers.push(randomCustomers);

      let cookiesHourly = Math.ceil(randomCustomers * this.avgCookiesSale);
      this.cookiesNumber.push(cookiesHourly);
    }
  }

};

const paris = {

  cityName: 'Paris',
  customers: [],
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesSale: 2.3,
  cookiesNumber: [],
  totalCookies: 0,

  customersNumber: function (min, max) {

    for (let i = 0; i < dayHours.length; i++) {
      let randomCustomers = generateRandomNumber(min, max);
      this.customers.push(randomCustomers);

      let cookiesHourly = Math.ceil(randomCustomers * this.avgCookiesSale);
      this.cookiesNumber.push(cookiesHourly);
    }
  }
};

const lima = {

  cityName: 'Lima',
  customers: [],
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesSale: 4.6,
  cookiesNumber: [],
  totalCookies: 0,

  customersNumber: function (min, max) {

    for (let i = 0; i < dayHours.length; i++) {
      let randomCustomers = generateRandomNumber(min, max);
      this.customers.push(randomCustomers);

      let cookiesHourly = Math.ceil(randomCustomers * this.avgCookiesSale);
      this.cookiesNumber.push(cookiesHourly);
    }
  }
};

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function renderObjects(objectName) {

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

  for (let i = 0; i < dayHours.length; i++) {

    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);

    objectName.customersNumber(objectName.minCustomers, objectName.maxCustomers);
    liElement.textContent = `${dayHours[i]}: ${objectName.cookiesNumber[i]} cookies.`;

    objectName.totalCookies = objectName.totalCookies + objectName.cookiesNumber[i];
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
