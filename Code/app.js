'use strict';
let dayHours = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm'];

const parentElement = document.getElementById('Salamon Cookies');

let tableElement;
let hourlyTotal =[];
let allTotal = [];

for (let i =0; i < dayHours.length; i++){
  hourlyTotal[i] = 0;
}

function City(cityName, customers, minCustomers, maxCustomers, avgCookiesSale, cookiesNumber, totalCookies) {

  this.cityName = cityName;
  this.customers = customers;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesSale = avgCookiesSale;
  this.cookiesNumber = cookiesNumber;
  this.totalCookies = totalCookies;


}

City.prototype.customersNumber = function (min, max) {

  for (let i = 0; i < dayHours.length; i++) {
    let randomCustomers = generateRandomNumber(min, max);
    this.customers.push(randomCustomers);

    let cookiesHourly = Math.ceil(randomCustomers * this.avgCookiesSale);
    this.cookiesNumber.push(cookiesHourly);
  }
};

City.prototype.renderCityTable = function () {

  const trElement = document.createElement('tr');
  tableElement.appendChild(trElement);

  const tdElement = document.createElement('td');
  trElement.appendChild(tdElement);
  tdElement.textContent = `${this.cityName}`;

  for (let i = 0; i < dayHours.length; i++) {

    const tdElement = document.createElement('td');
    trElement.appendChild(tdElement);

    this.customersNumber(this.minCustomers, this.maxCustomers);
    tdElement.textContent = `${this.cookiesNumber[i]}`;

    this.totalCookies = this.totalCookies + this.cookiesNumber[i];
    hourlyTotal[i] += this.cookiesNumber[i];

  }
  const TotalTdElement = document.createElement('td');
  trElement.appendChild(TotalTdElement);
  TotalTdElement.textContent = `${this.totalCookies}`;
  allTotal.push(this.totalCookies);
};

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function tableHeader() {

  tableElement = document.createElement('table');
  parentElement.appendChild(tableElement);

  const trElement = document.createElement('tr');
  tableElement.appendChild(trElement);

  const thElement = document.createElement('th');
  trElement.appendChild(thElement);
  thElement.textContent = 'Location';

  for (let i = 0; i < dayHours.length; i++) {

    const thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = `${dayHours[i]}`;
  }
  const totalHeaderElement = document.createElement('th');
  trElement.appendChild(totalHeaderElement);
  totalHeaderElement.textContent = 'Daily Location Total';
}

function tableFooter() {

  let calculateAllTotal = 0;

  const tfootElement = document.createElement('tfoot');
  tableElement.appendChild(tfootElement);

  const trElement = document.createElement('tr');
  tfootElement.appendChild(trElement);

  const tdElement = document.createElement('td');
  trElement.appendChild(tdElement);
  tdElement.textContent = 'Total';

  for (let i = 0; i < dayHours.length; i++) {

    const tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = `${hourlyTotal[i]}`;
  }

  for (let i = 0; i < allTotal.length; i++) {

    calculateAllTotal += allTotal[i];
  }
  const totalFooterElement = document.createElement('td');
  trElement.appendChild(totalFooterElement);
  totalFooterElement.textContent = `${calculateAllTotal}`;
}


tableHeader();
const seatle = new City('Seatle', [], 23, 65, 6.3, [], 0);
const tokyo = new City('Tokyo', [], 3, 24, 1.2, [], 0);
const dubai = new City('Dubai', [], 11, 38, 3.7, [], 0);
const paris = new City('Paris', [], 20, 38, 2.3, [], 0);
const lima = new City('Lima', [], 2, 16, 4.6, [], 0);

seatle.renderCityTable();
tokyo.renderCityTable();
dubai.renderCityTable();
paris.renderCityTable();
lima.renderCityTable();

tableFooter();
console.log(hourlyTotal);
