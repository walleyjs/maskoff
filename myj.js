var reveal=document.getElementById("show");
var content=document.getElementById("content");
// show.onclick= function() {
// content.style.height="650px";
// content.style.transition="height 3s ease-in-out";
// show.innerHTML="show more";

// }
reveal.onclick= function() {
	if (reveal.value=="show more") {
		content.style.height="600px";
	content.style.transition="height 1s ease-in-out";
	reveal.value="close";

	}
	else{
			content.style.height="300px";
	content.style.transition="height 1s ease-in-out";
	reveal.value="show more";
	}
	
}
