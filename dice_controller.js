function init_first_room(caller)	{
	alert(caller.nodeName);
	create_room_in_placeholder(caller)
}

function create_placeholder(caller)	{
	alert(caller.nodeName);

	caller.parentNode.innerHTML = '?';
}



function create_room_in_placeholder(caller)	{
	
	switch (Math.floor(Math.random()*6))	{
		case 0:
			rum = "Sväng";
 			break;
		case 1:
			rum = "rak";
 			break;
		case 2:
			rum = "treväg";
 			break;
		case 3:
			rum = "rum1";
 			break;
		case 4:
			rum = "rum2";
 			break;
		case 5:
			rum = "rum3";
 			break;
		default:
  			// document.write("I'm looking forward to this weekend!");
	}

	caller.innerHTML = rum;

}
