const React = require('react');
const ReactDOM = require('react-dom');

const Home = require('./components/home');
const Navbar = require('./components/navbar')

ReactDOM.render(<Navbar />, document.getElementById("app"));
ReactDOM.render(<Home />, document.getElementById("react-nav"));