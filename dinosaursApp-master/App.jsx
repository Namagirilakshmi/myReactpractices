import React from 'react';
import Header from './components/Header.jsx';
import Container from './components/Container.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
	   constructor(props) {
	      super(props);				      
      };     
   render() {
   		
	    return (
	        <section className="containerWrapper">  
	        		<Header></Header>
	        		<Container></Container>
	        		<Footer></Footer>
	        </section>        
    	);
   }
}


export default App;