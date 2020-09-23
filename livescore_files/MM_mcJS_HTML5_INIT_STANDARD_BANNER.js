 //SCRIPT PATHS
 //http://ds.serving-sys.com/BurstingRes/CustomScripts/MM_mcJS_HTML5_INIT_STANDARD_BANNER.js
 //http://origin.demo.eyeblaster.com/Italy/JS/JS_ON_SERVER/HTML5/MM_mcJS_HTML5_INIT_STANDARD_BANNER.js
 //https://secure-ds.serving-sys.com/BurstingRes/CustomScripts/MM_mcJS_HTML5_INIT_STANDARD_BANNER.js
 //https://secure-ds.serving-sys.com/BurstingScript/EBLoader.js
/*____________________________________________________________________________________________________*/


/*________________________________________________HOW TO______________________________________________*/
/*____________________________________________________________________________________________________*/
//Add in the tag head of your html the following code
/*
	<!-- EB CLASS -->
	<script type="text/javascript" src="https://secure-ds.serving-sys.com/BurstingScript/EBLoader.js"></script>
	<!-- EB CLASS -->

	<!-- EB INIT -->
  	<script type="text/javascript" src="https://secure-ds.serving-sys.com/burstingres/CustomScripts/MM_mcJS_HTML5_INIT_STANDARD_BANNER.js"></script>
	<!-- EB INIT -->
*/

function EB_Init()
{
	EB_documentlistener = document.readyState;
	//alert('start_read_status_2: '+EB_documentlistener);
	switch (EB_documentlistener)
	{ 
  		case 'complete': 
   		 	CreateBTN();
  		break; 
  
  		case 'interactive': 
   		 	CreateBTN();
  		break;
  
  		case 'loading': 
   			if (window.attachEvent) {window.attachEvent('onload', CreateBTN);}
			else if (window.addEventListener) {window.addEventListener('load', CreateBTN, false);}
			else {window.document.addEventListener('load', CreateBTN, false);}
  		break;
  
  		case 'uninitialized': 
   			if (window.attachEvent) {window.attachEvent('onload', CreateBTN);}
			else if (window.addEventListener) {window.addEventListener('load', CreateBTN, false);}
			else {window.document.addEventListener('load', CreateBTN, false);}
  		break;
	}
	
	function CreateBTN()
	{
		var BrowserUserAgent = navigator.userAgent;
		Add_STYLE_VALUE_dynamically("#ClickBtn{position:fixed !important; top:0px !important; left:0px !important; width:100% !important; height:100% !important; cursor: pointer;}");
		if(BrowserUserAgent.indexOf("MSIE")<0)
		{
			CreateNew_DIV_afterbody("EB_CLICK", "100%", "100%", "fixed", "0px", "0px", "0px 0px 0px 0px", "none", "none", "none", "none", "hidden", "999999999999999");
		}
		else
		{
			setTimeout(function(){ CreateNew_DIV_afterbody("EB_CLICK", "100%", "100%", "fixed", "0px", "0px", "0px 0px 0px 0px", "none", "none", "none", "none", "hidden", "999999999999999") }, 500);
		}
	}
	
	function ActivateClick()
	{
		RB_CLICK_INST = document.getElementById("ClickBtn");
		//RB_CLICK_INST.style.cursor = "pointer";
		RB_CLICK_INST.onclick = function(event) {EBClick(event, RB_CLICK_INST.id);};
	}
	
	function EBClick(e, el)
	{
    	var targ;
    	var target = e ? e.target : window.event.srcElement;
    	if (target.nodeType == 3)
    	{
			targ = target.parentNode;
    	}else{
			targ = target;
    	}

		if(targ.id=="ClickBtn")
   		{
			EB.clickthrough();
		}
	}
	
	// CREATE DIV AFTER BODY
	function CreateNew_DIV_afterbody(DivId, DivWidth, DivHeight, DivPosition, DivTop, DivLeft, DivMargin, DivBGColor, DivBGImage, DivBGPosition, DivBGRepeat, DivOverflow, DivZindex)
	{
			/*
			THESE VALUES ARE ALL REQUIRED
			DivId,
			DivWidth, (es: 500px or 100%)
			DivHeight, (es: 500px or 100%)
			DivPosition, (es: absolute or relative or fixed)
			DivTop,  (es: 500px or 50%)
			DivLeft,  (es: 500px or 50%)
			DivMargin, (es: 0px 0px 0px 0px)
			
			THESE VALUE ARE OPTIONAL
			If you don't want to add the value insert none
			DivBGColor, (es: #cccccc or none)
			DivBGImage, (es: http://www.website.com/imgname.jpg or none)
			DivBGPosition, (es: top center or none)
			DivBGRepeat, (es: repeat or none)
			DivOverflow, (es: hidden or none)
			DivZindex (es: 10 or none)
			
			ES:
			CreateNew_DIV_afterbody('NEW_EB_DIV', '100%', '250px', 'absolute', '0px', '0px', '0px 0px 0px 0px', '#99CC00', 'none', 'none', 'none', 'hidden', '999999999');
			*/
			
			var CHECK_LISTENER = false;
			if(document.getElementById(DivId)!=null)
			{CHECK_LISTENER=true}

			if (CHECK_LISTENER==false)
			{

			var DivAfterBody = document.createElement("div");
			DivAfterBody.id = DivId;
			DivAfterBody.style.width = DivWidth;
			DivAfterBody.style.height = DivHeight;
			DivAfterBody.style.position = DivPosition;
			DivAfterBody.style.top = DivTop;
			DivAfterBody.style.left = DivLeft;
			DivAfterBody.style.margin = DivMargin;

			if (DivBGColor != "none")
			{
				DivAfterBody.style.backgroundColor = DivBGColor;
			}
			if (DivBGImage != "none")
			{
				DivAfterBody.style.backgroundImage = "url('"+DivBGImage+"')";;
			}
			if (DivBGPosition != "none")
			{
				DivAfterBody.style.backgroundPosition = DivBGPosition;
			}
			if (DivBGRepeat != "none")
			{
				DivAfterBody.style.backgroundRepeat = DivBGRepeat;
			}
			DivAfterBody.style.borderWidth =  "0px";
			DivAfterBody.style.borderColor = "#ffffff";
			if (DivOverflow != "none")
			{
				DivAfterBody.style.overflow=DivOverflow;
			}
			if (DivZindex != "none")
			{
				DivAfterBody.style.zIndex=DivZindex;
			}

			document.body.insertBefore(DivAfterBody, document.body.firstChild);
			
			setTimeout(function(){ LoadImgWithinParentTag("ClickBtn", "https://secure-ds.serving-sys.com/BurstingScript/programmatic/liquidhtml5shells/HDV_v1/ASSETS/EMPTY_IMG.png", "EB_CLICK", 0); ActivateClick() }, 750);
			}

	}
//END CREATE DIV AFTER BODY

//STYLE_VALUE
function Add_STYLE_VALUE_dynamically(StyleValue)
{
	var styleElement = document.createElement('style');
	styleElement.setAttribute('type','text/css');
	if (styleElement.styleSheet)
	{
		styleElement.styleSheet.cssText = StyleValue;
	}else{
		styleElement.appendChild(document.createTextNode(StyleValue));
	}
	document.getElementsByTagName('head')[0].appendChild(styleElement);
}
//END STYLE_VALUE


//LOADING ELEMENTS WITHIN PARENT TAG
function LoadElementsWithinParentTag(ElementID, ElementType, ElementParentID, ChildNumber)
{
	var BrowserUserAgent = navigator.userAgent;
	var Element = document.createElement(ElementType);
	Element.id = ElementID;
	var ParentElement = document.getElementById(ElementParentID);
	if(BrowserUserAgent.indexOf("MSIE")>-1 && BrowserUserAgent.indexOf("Trident")>-1)
	{
		var ChildNumberCheck = ParentElement.childNodes.length;
		ChildNumber = ChildNumber-1;
		if(ChildNumberCheck<=ChildNumber)
		{
			ChildNumber = ChildNumberCheck-1;
		}
	}
	ParentElement.insertBefore(Element,(ParentElement.hasChildNodes())? ParentElement.childNodes[ChildNumber]: null);
	//ParentElement.insertBefore(Element, ParentElement.childNodes[ChildNumber]);
}
//END LOADING ELEMENTS WITHIN PARENT TAG

//LOADING IMG WITHIN PARENT TAG
function LoadImgWithinParentTag(ElementID, ElementSOURCE, ElementParentID, ChildNumber)
{
	var BrowserUserAgent = navigator.userAgent;
	var Element = document.createElement("img");
	Element.id = ElementID;
	Element.src = ElementSOURCE;
	var ParentElement = document.getElementById(ElementParentID);
	if(BrowserUserAgent.indexOf("MSIE")>-1 && BrowserUserAgent.indexOf("Trident")>-1)
	{
		var ChildNumberCheck = ParentElement.childNodes.length;
		ChildNumber = ChildNumber-1;
		if(ChildNumberCheck<=ChildNumber)
		{
			ChildNumber = ChildNumberCheck-1;
		}
	}
	//ParentElement.insertBefore(Element, ParentElement.childNodes[ChildNumber]);
	ParentElement.insertBefore(Element,(ParentElement.hasChildNodes())? ParentElement.childNodes[ChildNumber]: null);
}
//END LOADING IMG WITHIN PARENT TAG
}
EB_Init();


