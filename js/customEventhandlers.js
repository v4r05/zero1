function scrollEventhandler(){
	
	var y = window.pageYOffset;
	var h = window.innerHeight;
	
	if(y>globalValues.imagePosition){
		globalValues.imageScroll+=1;
	}
	else{
		globalValues.imageScroll-=1;
	}
	
	if(y>3*h/4){
		
		var opc = (window.pageYOffset-window.innerHeight*0.75)/150;
		
		if(opc>1.0){
			opc = 1;
		}
		globalValues.navbarHolder.style.opacity = opc;
	}
	else{
		globalValues.navbarHolder.style.opacity = 0.0;
	}
	
	var m = Math.trunc(y/h);
	m = Math.abs(m);
	globalValues.imagePosition = y;
	
	if(globalValues.parallaxBack[m]!=null && globalValues.backImages[m]!=undefined){
		globalValues.parallaxBack[m].style.backgroundPosition = "0px -"+globalValues.imagePosition/11+"px";
	}
	if(globalValues.parallaxBack[m+1]!=null && globalValues.backImages[m+1]!=undefined){		
		globalValues.parallaxBack[m+1].style.backgroundPosition = "0px -"+globalValues.imagePosition/11+"px";	
	}
}

function resizeEventhandler(){
	
}
