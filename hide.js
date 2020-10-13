
		alert('Hello JS');

		$(document).ready(function(){
			alert('Hello JQuery');

			$("button").click(function(){
				$("h1").hide();
				$("#myp").hide();
				$(".blue").hide();
				$(this).hide();
			});
		});
	



	// if(income<=2000000){
				// 	var tax=0;
				// 	$('table ').append('<tr><td>Up to 2000000</td><td>0%</td><td>'+income+'</td><td>'+0+'</td></tr>');
				// 	$('table ').append('<tr><td></td><td></td><td></td><td>'+0+'</td></tr>');

				// }else {
				// 	$('table ').append('<tr><td>Up to 2000000</td><td>0%</td><td>'+income+'</td><td>'+0+'</td></tr>');
				// }

				// if(income>2000000 && income<=5000000){
				// 	var tax=(income-2000000)*0.05;
				// 	$('table ').append('<tr><td> 2000000 to 5000000</td><td>0%</td><td>'+(income-2000000)+'</td><td>'+tax+'</td></tr>');
				// 	$('table ').append('<tr><td></td><td></td><td></td><td>'+tax+'</td></tr>');
				// }
				// else if (income>5000000) {
				// 	$('table ').append('<tr><td> 2000000 to 5000000</td><td>5%</td><td>'+3000000+'</td><td>'+(3000000*0.05)+'</td></tr>');
				// 	var tax=150000;
				// }
				// if(income>5000000 && income<=10000000){
				// 	var tax=(income-5000000)*0.1+tax;
				// 	$('table ').append('<tr><td> 5000000 to 10000000</td><td>10%</td><td>'+(income-5000000)+'</td><td>'+(*0.1)+'</td></tr>');
				// 	$('table ').append('<tr><td></td><td></td><td></td><td>'+tax+'</td></tr>');

				// }
				// else if (income>10000000) {
				// 	$('table ').append('<tr><td> 5000000 to 10000000</td><td>10%</td><td>'+3000000+'</td><td>'+(3000000*0.05)+'</td></tr>');

					
				// }
				
				