import React from 'react';

class Header extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="nav top-bar">
			    <a href="#" className="small-centered brand-logo">Logo</a>			  
			</div>
		);
	}
}

export default Header;