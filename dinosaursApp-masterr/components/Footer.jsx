import React from 'react';

class Footer extends React.Component {
	constructor(props){
		super(props);
	}	
	render(){
		return (
			<footer className="page-footer">		          
		          <div className="footer-copyright">
			            <div className="container row">
				            <p className="columns small-12 small-centered large-12 large-centered">© 2014 Copyright Text <a  href="#!">More Links</a>
				            </p>
			            </div>
		          </div>
	        </footer>
            
		);
	}
}

export default Footer;