utilsInit(window);

window.globalValues.imageScroll = 0;
window.globalValues.imagePosition = 0;
window.globalValues.backImages = new Array();
window.globalValues.snippetPaths = new Array();
window.globalValues.parallaxBack = {};

loadResource("json/snippets.json",globalValues.snippetPaths);
loadResource("json/images.json",globalValues.backImages);

$(function(){
	
	window.globalValues.navbarHolder = document.querySelector("#navigation-holder");
	window.globalValues.mainHolder = document.querySelector("#main-container");
	
	setSnippetSync("elements/navigation-bar.html",globalValues.navbarHolder);
	
	populateContainer(globalValues.mainHolder,globalValues.snippetPaths);
	globalValues.parallaxBack = document.getElementsByClassName('parallax');
	assignParallaxes("json/parallax.json",globalValues.parallaxBack,globalValues.backImages);
	
	$(window).resize(resizeEventhandler);
	$(window).scroll(scrollEventhandler);
});