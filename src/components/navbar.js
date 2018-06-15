const React = require("react");

class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
				<div className="container">
					<a className="navbar-brand" href="#">
						My App
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link" href="/">
									Home
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/about">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="#">
									Comming soon
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

module.exports = Navbar;
