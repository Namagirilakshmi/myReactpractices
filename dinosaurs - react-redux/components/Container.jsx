import React from 'react';

class Container extends React.Component{
	constructor(props) {
	      super(props);			
	      this.state = {
	        data: [],
	        appeared: null,
			height:null,
			length:null,
			order:"",
			vanished:null,
			weight:null
      };
    this.componentDidMount = this.componentDidMount.bind(this);    
    this.componentDidUpdate = this.componentDidUpdate.bind(this); 
	this.handleSelect = this.handleSelect.bind(this);
   }
   componentDidMount() {
     	var myInit = {
     		method : "GET"
     	};
     	fetch("data/dinosaurs.json",myInit).then((response) => {
     		return response.json();
     	}).then((data) => {
			this.setState({data: data});
     	});

    }  
    componentDidUpdate(){    	
		$('.list:first-child').addClass("active");
     	$('.listContent').addClass("hide");
     	$('.listContent:first-child').removeClass("hide").addClass("show");
     	$(document).foundation();
    }
   handleSelect(keyDetail,i){
   		   		var _this=this;
   		   		var selector = "#"+keyDetail;
   		   		i++;
   		   		var activeLink = ".list:nth-child("+i+")";
   		   		$('.listContent').removeClass("show").addClass("hide");
   		   		$(selector).removeClass("hide").addClass("show");
   		   		$('.list').removeClass("active");
   		   		$(activeLink).addClass("active");
   		   
   }
   render() {
   		var _this=this;
   		var listItems = Object.keys(this.state.data).map(function(key,i) {
   			var item = _this.state.data[key];
   			var link="#"+key;
		      return (        
		          	<li key={i} className="list" onClick={_this.handleSelect.bind(this,key,i)}>
		          		<a href={link}>Item {i+1}</a>
		          		<span data-back-button></span>
		          	</li>          
		      );
    	});
   		var smallList = Object.keys(this.state.data).map(function(key,i) {
	   		var item = _this.state.data[key];
	   		var link="#"+key;
	      	return (        
	          	<li key={i}>
	          		<a href={link}>Item {i+1}</a>
	          		<ul className="vertical menu">
	          			<li>
	          				<h5>{key}</h5>
	          				<p>Appeared:{item.appeared}</p>
				        	<p>Height:{item.height}</p>
				        	<p>Length:{item.length}</p>
				        	<p>Order:{item.order}</p>
				        	<p>Vanished:{item.vanished}</p>
				        	<p>Weight:{item.weight}</p>
	          			</li>
	          		</ul>
	          	</li>          
	      );
    	});
   		var listContent = Object.keys(this.state.data).map(function(key,i){
   			var item = _this.state.data[key];
   			return (
   				<div key={i} id={key} className="listContent"> 
   						<h5>{key}</h5>
	          			<p>Appeared:{item.appeared}</p>
				        <p>Height:{item.height}</p>
				        <p>Length:{item.length}</p>
				        <p>Order:{item.order}</p>
				        <p>Vanished:{item.vanished}</p>
				        <p>Weight:{item.weight}</p>
   				</div>
   			);
   		});
	    return (
		        <div className="container container-inner">
		        	<div className="dinosaurs-content large-8 medium-centered">
			        	<div className="row show-for-large show-for-medium">			        	
							<div className="columns small-12 medium-6 large-4 large-offset-2">
							    <ul className="TabList">
							      	{listItems}					       
							    </ul>
							</div>
							<div className="columns small-12 medium-6 large-4 large-pull-2">
							    {listContent}
							</div>
						</div>
						<div className="row show-for-small-only">
							<ul className="vertical menu smallList" data-drilldown>
								{smallList}
							</ul>					
						</div>
		        	</div>			        
		        </div>	
    	);
      
   }
}

export default Container;