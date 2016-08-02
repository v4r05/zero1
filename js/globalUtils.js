function utilsInit(global){
	var globalValues = {};
		
	global.globalValues = globalValues;
}

function getRequestObject(){
	if(window.XMLHttpRequest){
		return (new XMLHttpRequest());
	}
	else if(window.ActiveXObject){
		return (new ActiveXObject("Microsoft.XMLHTTP"));
	}
	else{
		global.alert("AJAX NOT Supported");
		return (null);
	}
}

function handleResponse(request,responseHandler,isJSONResponse){
	if((request.readyState==4) && (request.status==200)){
		if(isJSONResponse==undefined){
			isJSONResponse = true;
		}

		if(isJSONResponse){
			responseHandler(JSON.parse(request.responseText));
		}
		else{
			responseHandler(request.responseText);
		}
	}
}
	
function sendGetRequest(requestURL, responseHandler, isJSONResponse,async){
	var request = getRequestObject();
	request.onreadystatechange = function(){
		handleResponse(request,responseHandler,isJSONResponse);
	};
	request.open("GET",requestURL,async);
	request.send(null);
}

function loadDataSync(jsonFile,dataHolder,modifyFunction){
	sendGetRequest(jsonFile,handler,true,false);
	
	function handler(responseText){
		if(responseText!=undefined){
			modifyFunction(dataHolder,responseText);
		}
		else{
			window.alert("Document not Found!");
		}
	};
}

function loadDataAsync(jsonFile,dataHolder){
	sendGetRequest(snippet,handler,true,true);
	
	function handler(responseText){
		if(responseText!=undefined){
			dataHolder = responseText;
		}
		else{
			window.alert("Document not Found!");
		}
	};
}

function addSnippetSync(snippet, container){
	sendGetRequest(snippet,handler,false,false);
		
	function handler(responseText){
		if(responseText!=undefined){
			container.innerHTML += responseText;
		}
		else{
			window.alert("Document not Found!");
		}
	};
}

function addSnippetAsync(snippet, container){
	sendGetRequest(snippet,handler,false,true);
		
	function handler(responseText){
		if(responseText!=undefined){
			container.innerHTML += responseText;
		}
		else{
			window.alert("Document not Found!");
		}
	};
}

function setSnippetSync(template, element){
		
	sendGetRequest(template,handler,false,false);

	function handler(responseText){
		if(responseText!=undefined){
			element.innerHTML = responseText;
		}
		else{
			window.alert("Document not Found!");
		}
	};
}

function setSnippetAsync(template, element){
		
	sendGetRequest(template,handler,false,true);

	function handler(responseText){
		if(responseText!=undefined){
			element.innerHTML = responseText;
		}
		else{
			window.alert("Document not Found!");
		}
	};
}