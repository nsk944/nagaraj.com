ver slideindex=0;
showSlides();

function showSlides() {
	var i;

	var slides = 
	document.getElimentsByClassName("myslides");
	var dots = documents.getElementByClassName('dot');
	for (i=0;i<slides.length;i++){
		slides[i].style.display="none";
	}
	slideindex++;
	if(slideindex > slides.length) {slideindex = 1}
		for (i=0; i<dots.length;i++){
			dots[i].className=dots[i].className.replace("active","");
		}
		slides[slideindex-1].style.display="block";
		dots[slideindex-1].className=="active";
		setTimeout(showSlides,2000);//Change image evry 2 seconds
}
