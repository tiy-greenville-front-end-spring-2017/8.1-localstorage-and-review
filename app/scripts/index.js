var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var MenuContainer = require('./components/menu.jsx').MenuContainer;

$(function(){
  ReactDOM.render(
    React.createElement(MenuContainer),
    document.getElementById('app')
  );
});

if(!localStorage.getItem('favorite')){
  localStorage.setItem('favorite', 'thin mint');
}

var favCookie = localStorage.getItem('favorite');

console.log('favCookie', favCookie);

var car = {
  wheels: 4,
  dents: true
};

localStorage.setItem('car', JSON.stringify(car));

var sweetRide = JSON.parse(localStorage.getItem('car'));
console.log(sweetRide.dents);
