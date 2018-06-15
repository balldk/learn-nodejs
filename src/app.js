const React = require('react');
const ReactDOM = require('react-dom');

const Home = require('./components/home');
const Navbar = require('./components/navbar')

ReactDOM.render(<Home />, document.getElementById("app"));
ReactDOM.render(<Navbar />, document.getElementById("react-nav"));