$(function(){

var state_id ={
	'US-AK': 'Alaska','US-AL': 'Alabama','US-AR': 'Arkansas','US-AZ': 'Arizona','US-CA': 'California','US-CO': 'Colorado','US-CT': 'Connecticut','US-DC': 'District of Columbia','US-DE': 'Delaware','US-FL': 'Florida','US-GA': 'Georgia','US-HI': 'Hawaii','US-IA': 'Iowa','US-ID': 'Idaho','US-IL': 'Illinois','US-IN': 'Indiana','US-KS': 'Kansas','US-KY': 'Kentucky','US-LA': 'Louisiana','US-MA': 'Massachusetts','US-MD': 'Maryland','US-ME': 'Maine','US-MI': 'Michigan','US-MN': 'Minnesota','US-MO': 'Missouri','US-MS': 'Mississippi','US-MT': 'Montana','US-NC': 'North Carolina','US-ND': 'North Dakota','US-NE': 'Nebraska','US-NH': 'New Hampshire','US-NJ': 'New Jersey','US-NM': 'New Mexico','US-NV': 'Nevada','US-NY': 'New York','US-OH': 'Ohio','US-OK': 'Oklahoma','US-OR': 'Oregon','US-PA': 'Pennsylvania','US-RI': 'Rhode Island','US-SC': 'South Carolina','US-SD': 'South Dakota','US-TN': 'Tennessee','US-TX': 'Texas','US-UT': 'Utah','US-VA': 'Virginia','US-VT': 'Vermont','US-WA': 'Washington','US-WI': 'Wisconsin','US-WV': 'West Virginia','US-WY': 'Wyoming'
},
check_sign=`<i class="fa fa-check"></i>  `,
map=$('.land'),
list=$('.list-group li'),
figure=$('.us_states_map'),
show_btn=$('.show_state');

// map.click(function(){
// 	clear_class_active();
// 	var obj=$(this);
// 	obj.addClass('land_active');
// 	output_state(this.id);
// })
// map.hover(function() {
// 	$('.output_state_field').text(state_id[this.id]);
// });

// function clear_class_active(){
// 	$('.land').removeClass('land_active')
// }
// function output_state(data){
// 	reset_list();
// 	list.filter(`[data-state_id=${data}]`).prepend(check_sign);

// }

// function reset_list(){
// 	$.each(list, function(index, val) {
// 		$(this).text($(this).data("state-name"));
// 	});
// }

// list.click(function() {
// 	var chosen_state = ($(this).data('state_id'));
// 	clear_class_active();
// 	$.each(map, function(index, val) {
// 		if (chosen_state===val.id){
// 			$(this).addClass('land_active')
// 		};
// 	});
// 	output_state(chosen_state);
// 	$('.output_state_field').text(state_id[chosen_state]);
// });

// figure.mouseleave(function(event) {
// 	var obj=(map.filter('.land_active').length<1)? false: map.filter('.land_active');
// 	if (obj){
// 		$('.output_state_field').text(state_id[obj[0].id]);
// 	} else{
// 		$('.output_state_field').text('Chose the state');
// 	}
// });

/* ---------------------- JQuery 3.2.1 -----------------------------*/

// var map_app={
// 	init:function(){
// 		this.events();
// 	},
// 	events: function(){
// 			map.hover(function() {
// 			$('.output_state_field').text(state_id[this.id]);
// 			});
// 			map.click(function(){
// 				map_app.modules.cca();
// 				var obj=$(this);
// 				obj.addClass('land_active');
// 				map_app.modules.os(this.id);
// 				map_app.modules.sb(this.id);
// 			})
// 			list.click(function() {
// 				var chosen_state = ($(this).data('state_id'));
// 				map_app.modules.cca();
// 				$.each(map, function(index, val) {
// 					if (chosen_state===val.id){
// 						$(this).addClass('land_active')
// 					};
// 				});
// 				map_app.modules.os(chosen_state);
// 				map_app.modules.sb(chosen_state);
// 				$('.output_state_field').text(state_id[chosen_state]);
// 			});
// 			figure.mouseleave(function(event) {
// 				var obj=(map.filter('.land_active').length<1)? false: map.filter('.land_active');
// 				if (obj){
// 					$('.output_state_field').text(state_id[obj[0].id]);
// 				} else{
// 					$('.output_state_field').text('Chose the state');
// 				}
// 			});
// 	},
// 	modules: {
// 		cca:function (){
// 			$('.land').removeClass('land_active')
// 			},
// 		os: function (data){
// 			map_app.modules.rl();
// 			list.filter(`[data-state_id=${data}]`).prepend(check_sign);
// 			},
// 		rl: function (){
// 			$.each(list, function(index, val) {
// 			$(this).text($(this).data("state-name"));
// 			});
// 			},
// 		sb: function(data){
// 			var val=state_id[data].replace(' ','-'),
// 			url=`https://kensun.com/pages/${val.toLowerCase()}`;
// 			show_btn.removeClass('disabled');
// 			show_btn.prop('href', url);
// 		}
// 	}
// }
// map_app.init();
// })

/* ---------------------- JQuery 1.8.3 -----------------------------*/



var map_app={
	init:function(){
		this.events();
	},
	events: function(){
			map.hover(function() {
			$('.output_state_field').text(state_id[this.id]);
			});
			map.click(function(){
				map_app.modules.cca();
				var obj=$(this);
				obj.attr('class', 'land_active land');
				map_app.modules.os(this.id);
				map_app.modules.sb(this.id);
			})
			list.click(function() {
				var chosen_state = ($(this).data('state_id'));
				map_app.modules.cca();
				$.each(map, function(index, val) {
					if (chosen_state===val.id){
						$(this).attr('class', 'land_active land')
					};
				});
				map_app.modules.os(chosen_state);
				map_app.modules.sb(chosen_state);
				$('.output_state_field').text(state_id[chosen_state]);
			});
			figure.mouseleave(function(event) {
				let data=$('.us_states_map path'), obj;
				data.each(function(){
					if ($(this).attr('class')==='land_active land') {obj=$(this)}
					});
				if (obj){
					$('.output_state_field').text(state_id[obj[0].id]);
				} else{
					$('.output_state_field').text('Chose the state');
				}
			});
	},
	modules: {
		cca:function (){
			$('.land').attr('class','land')
			},
		os: function (data){
			map_app.modules.rl();
			list.filter(`[data-state_id=${data}]`).prepend(check_sign);
			},
		rl: function (){
			$.each(list, function(index, val) {
			$(this).text($(this).data("state-name"));
			});
			},
		sb: function(data){
			var val=state_id[data].replace(' ','-'),
			url=`https://kensun.com/pages/${val.toLowerCase()}`;
			show_btn.removeClass('disabled');
			show_btn.prop('href', url);
		}
	}

}

map_app.init();



})