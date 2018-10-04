$(document).ready(function(){
	$.ajax({
		url:"car.json",
		type: "GET",
		success: function(car){
			
			console.log(car);
			for(i=0;i<car.data.length;i++){
						console.log(car.data[i].name);
				$("#cars").append('<option>'+car.data[i].name+'</option>');
			}
		}
	})
	$.ajax({
		url:"fuel.json",
		type: "GET",
		success: function(fuel){
			
			console.log(fuel);
			for(i=0;i<fuel.data.length;i++){
						console.log(fuel.data[i].name);
				$("#fuel").append('<option>'+fuel.data[i].name+'</option>');
			}
		}
	})

$.ajax({
		url:"state.json",
		type: "GET",
		success: function(state){
			
			console.log(state);
			for(i=0;i<state.data.length;i++){
						console.log(state.data[i].name);
				$("#state").append('<option>'+state.data[i].name+'</option>');
			}
		}
	})


});
function showInsuranceForm(){
	
	if($('input#getInsurance[type="radio"]').is(':checked')) {		
		$('.formInsurance').removeClass('hidden');
	}
	
}
function getInsurance(){
	var carVal = $('#cars').val();
	var fuelVal = $('#fuel').val();
	var stateVal = $('#state').val();
	var cusName = $('#cusName').val();
	var phVal = $('#cusNum').val();
	if(carVal !== 'Select a car type' && fuelVal !== 'Select a fuel type' && stateVal !== 'Select a state' && cusName.length !== 0 && cusName.length > 2 && cusName.length <= 50 && phVal.length !== 0  && phVal.length == 10){
		$('.formInsurance').addClass('hidden');
		$('.benefits').addClass('hidden');
		$('.buyInsurance').removeClass('hidden');

		$.ajax({
		url:"insurance.json",
		type: "GET",
		success: function(insurance){
			//alert(insurance.data.length);
			console.log(insurance);
			for(i=0;i<insurance.data.length;i++){
						console.log(insurance.data[i]);
				$("#insuranceA").append("<div id='list"+i+"' class='list' draggable='true' ondragstart='drag(event)'><p>"+insurance.data[i].name+"</p><p>"+ insurance.data[i].amount +"</p></div>");
			}
		}
	})	

	}
	else{
		console.log('no');
	}
}

function allowDrop(ev) {
		ev.preventDefault();
		}

		function drag(ev) {
			ev.dataTransfer.setData("text", ev.target.id);
		}

		function drop(ev) {
			ev.preventDefault();
			var data = ev.dataTransfer.getData("text");
			
			ev.target.append(document.getElementById(data));
		}