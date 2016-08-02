function loadResource(jsonFile,dataHolder){
	var folderInfo = {relativePath:"", numberOfFiles:0,prefix:"",suffix:""};
	
	function folderInfoMod(obj0,obj1){
		obj0.relativePath = obj1.relativePath;
		obj0.numberOfFiles = obj1.numberOfFiles;
		obj0.prefix = obj1.prefix;
		obj0.suffix = obj1.suffix;
	}
	
	loadDataSync(jsonFile,folderInfo,folderInfoMod);
		
	for(i = 0; i < folderInfo.numberOfFiles; ++i){
		dataHolder[i] = folderInfo.relativePath+folderInfo.prefix+i+folderInfo.suffix;
	}
}

function populateContainer(container,htmlFiles){
	for(i=0;i<htmlFiles.length;++i){
		
		addSnippetSync(htmlFiles[i],container);
	}
}

function assignParallaxes(jsonFile,parallaxElement,parallaxImage){
	
	var info = {parallax:[], styles:[]};
	
	function infoMod(obj0,obj1){
		obj0.styles = obj1.styles;
	}
	
	loadDataSync(jsonFile,info,infoMod);
	
	for(i=0;i<parallaxElement.length;++i){
		parallaxElement[i].style.backgroundImage = "url("+parallaxImage[i]+")";
		parallaxElement[i].style.backgroundSize = info.styles[i];
	}	
}
