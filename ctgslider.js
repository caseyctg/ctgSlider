/*--------------	
Free for use, please keep this information present. 
 This program is used in conjunction with jQuery. It is a free for use "slider" or "carousel" to display multiple images and text in one css div. 
    Copyright (C) 2013  Casey Govero, http://HardWiredMedia.com

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
			 						
----------------------*/

(function($){  

$.fn.ctgslider = function(options) {  
      
 var settings = $.extend( {
      'timelength'  : 5000,
	  'showbuttons' : 'Y',
	  'minibuttons' : 'Y',
	  'minibuttonopacity' : .5,
	  'centerbuttons' : 'Y',
	  'alignrightnextbutton' : 'Y',
	  'btnoffset': -6,
	  'effects': 'slow',	 
	  'repeatclass':'img',
	  'usenumbers':'Y',
	  'minibtnimagesrc':'images/star.png'
    }, options);  
    
return this.each(function() { 
//define defaults if value is not present 
if (typeof options.timelength === "undefined" || options.timelength===null) options.timelength = 5000;
if (typeof options.showbuttons === "undefined" || options.showbuttons===null) options.showbuttons = 'Y';
if (typeof options.minibuttons === "undefined" || options.minibuttons===null) options.minibuttons = 'Y';
if (typeof options.minibuttonopacity === "undefined" || options.minibuttonopacity===null) options.minibuttonopacity = .5;
if (typeof options.centerbuttons === "undefined" || options.centerbuttons===null) options.centerbuttons = 'Y';
if (typeof options.alignrightnextbutton === "undefined" || options.alignrightnextbutton ===null) options.alignrightnextbutton = 'Y';
if (typeof options.btnoffset === "undefined" || options.btnoffset ===null) options.btnoffset = 0;
if (typeof options.effects === "undefined" || options.effects ===null) options.effects = 'slow';
if (typeof options.repeatclass === "undefined" || options.repeatclass ===null) options.repeatclass = 'img';
if (typeof options.usenumbers === "undefined" || options.usenumbers ===null) options.usenumbers = 'Y';
if (typeof options.minibtnimagesrc === "undefined" || options.minibtnimagesrc ===null) options.minibtnimagesrc = 'Y';

var selectorclass = jQuery(this);

var imagelength = selectorclass.find(options.repeatclass).length;

InitHide();				
StartTimer();

var int;
var counter=0;
var SlideNum = selectorclass.find(options.repeatclass).length;
var countersubtractone;
	
function StartTimer(){
	int=self.setInterval(NextPicture, options.timelength);
}

function ResetTimer(){
	window.clearInterval(int);
}

function InitHide(){
	var SlideNum = selectorclass.find(options.repeatclass).length;

	//Hide images and captions greater than slides		  
	//jQuery(selectorclass+':gt(0)').hide();
	selectorclass.find(options.repeatclass+":gt(0)").hide();
	
	if(options.showbuttons == 'Y'){
			
				//Add Buttons
				selectorclass.find(options.repeatclass+":last-child").after('<div id=\"PrevBtn\"></div><div id=\"NextBtn\"></div>');
			
				//attach functions to buttons.
				selectorclass.find('#PrevBtn').bind('click', PrevPicture);
				selectorclass.find('#NextBtn').bind('click', NextPicture);
			
				//position buttons and center vertically. 
				var PrevBtnH = selectorclass.find('#PrevBtn').height();
				var PrevBtnW = selectorclass.find('#PrevBtn').width();
				var SliderH = selectorclass.height();
				var SliderW = selectorclass.width();
				var SliderW2 = SliderW - PrevBtnW;
				var BtnHeight = selectorclass.find('#PrevBtn').css('top');
				var PrevBtnH2 = SliderH/2 - PrevBtnH/2;
				
				selectorclass.find('#PrevBtn').css('backgroundPosition',"left center");
				selectorclass.find('#NextBtn').css('backgroundPosition',"left center");
				
			if(options.centerbuttons == 'Y'){
				selectorclass.find('#PrevBtn').css("top",PrevBtnH2);
				selectorclass.find('#NextBtn').css("top",PrevBtnH2);
			}else{
				selectorclass.find('#NextBtn').css("top",BtnHeight);
			}
			
			if(options.alignrightnextbutton == 'Y'){
				//sets right Next Button to Right Edge
				selectorclass.find('#NextBtn').css("left",SliderW2-options.btnoffset);
				selectorclass.find('#PrevBtn').css("left",options.btnoffset);
                
                $( window ).resize(function() {
                    //position buttons and center vertically. 
                    var PrevBtnH = selectorclass.find('#PrevBtn').height();
                    var PrevBtnW = selectorclass.find('#PrevBtn').width();
                    var SliderH = selectorclass.height();
                    var SliderW = selectorclass.width();
                    var SliderW2 = SliderW - PrevBtnW;
                    var BtnHeight = selectorclass.find('#PrevBtn').css('top');
                    var PrevBtnH2 = SliderH/2 - PrevBtnH/2;
                    
                    //sets right Next Button to Right Edge
                    selectorclass.find('#NextBtn').css("left",SliderW2-options.btnoffset);
                    selectorclass.find('#PrevBtn').css("left",options.btnoffset);
                });
                
                    
			}else{
				selectorclass.find('#NextBtn').css("left",PrevBtnW+10);
			}
	}
	
	if(options.minibuttons == 'Y'){
		if(options.showbuttons == 'Y'){
			selectorclass.find("#NextBtn:last-child").after('<div id=\"MiniButtons\"><div class=\"MiniInner\"></div></div>');
		}else{
			selectorclass.find(options.repeatclass+":last-child").after('<div id=\"MiniButtons\"><div class=\"MiniInner\"></div></div>');
		}
	if(options.usenumbers == 'Y'){
		var i = parseInt(SlideNum)+1;
		selectorclass.find(options.repeatclass).each(function(){
			i--;
			selectorclass.find('.MiniInner').after("<div class=\"MiniBtn\">"+i+"</div>");	
		});
	}else{
		
		selectorclass.find(options.repeatclass).each(function(){
			selectorclass.find('.MiniInner').after("<div class=\"MiniBtn\"></div>");	
		});
		
	}
	
		if(options.minibtnimagesrc != 'Y'){
			selectorclass.find('.MiniBtn').css('background', 'none');
			selectorclass.find('.MiniBtn').css('background-repeat', 'no-repeat');
			selectorclass.find('.MiniBtn').css('background-image', 'url('+options.minibtnimagesrc+')');
			//selectorclass.find('.MiniBtn').prepend('<img />');
			//selectorclass.find('.MiniBtn img').attr({'src': options.minibtnimagesrc })
			
		}
		selectorclass.find(".MiniBtn:eq(0)").animate({opacity: 1 });
		selectorclass.find(".MiniBtn:gt(0)").animate({opacity: options.minibuttonopacity });
		selectorclass.find(".MiniBtn:lt(0)").animate({opacity: options.minibuttonopacity });
	}

};//END init hide


function NextPicture(){
		//Move the slide counter ahead one
		counter = counter+1;
		
		//Set variable for figuring out which slide to hide
		countersubtractone = counter-1;
		
		//Fade out the previous slide
		selectorclass.find(options.repeatclass+":eq("+countersubtractone+")").hide();
			
		//Fade in the next slide
		selectorclass.find(options.repeatclass+":eq("+counter+")").show(options.effects);
		
		
		if(options.minibuttons == 'Y'){
			selectorclass.find('.MiniBtn:eq('+counter+')').animate({opacity: 1 });
			selectorclass.find('.MiniBtn:gt('+counter+')').animate({opacity: options.minibuttonopacity});
			selectorclass.find('.MiniBtn:lt('+counter+')').animate({opacity: options.minibuttonopacity});
		}
		
		//If We reach the slide end, reset to the first slide.
		if(parseFloat(counter)==parseFloat(SlideNum) ){
			
			counter=0;
			selectorclass.find(options.repeatclass+":eq(0)").show(options.effects);
			
			if(options.minibuttons == 'Y'){
				selectorclass.find('.MiniBtn:eq('+counter+')').animate({opacity: 1 });
				selectorclass.find('.MiniBtn:gt('+counter+')').animate({opacity: options.minibuttonopacity});
				selectorclass.find('.MiniBtn:lt('+counter+')').animate({opacity: options.minibuttonopacity});
			}

		};
		ResetTimer();
		StartTimer();
}//END next picture

function PrevPicture(){
		//Move the slide counter ahead one
		if(counter == 0){ 
			counter = SlideNum-1;
			countersubtractone = 0;		
		}else{
			counter = counter-1;
			//Set variable for figuring out which slide to hide
			countersubtractone = counter+1;		
		}
		
		//Fade out the previous slide
		selectorclass.find(options.repeatclass+':eq('+countersubtractone+')').hide();	
		
		//Fade in the next slide
		selectorclass.find(options.repeatclass+':eq('+counter+')').show(options.effects);	
		
		if(options.minibuttons == 'Y'){
			selectorclass.find('.MiniBtn:eq('+counter+')').animate({opacity: 1 });
			selectorclass.find('.MiniBtn:gt('+counter+')').animate({opacity: options.minibuttonopacity});
			selectorclass.find('.MiniBtn:lt('+counter+')').animate({opacity: options.minibuttonopacity});
		}
			
		//If We reach the slide end, reset to the first slide. 
		if(counter==SlideNum){
			counter=0;
			selectorclass.find(options.repeatclass+':eq(0)').show(options.effects);
			

			if(options.minibuttons == 'Y'){
				selectorclass.find('.MiniBtn:eq('+counter+')').animate({opacity: 1 });
				selectorclass.find('.MiniBtn:gt('+counter+')').animate({opacity: options.minibuttonopacity});
				selectorclass.find('.MiniBtn:lt('+counter+')').animate({opacity: options.minibuttonopacity});
			}
		};
		ResetTimer();
		StartTimer();	
}//End prev picture

if(options.minibuttons == 'Y'){
		//Setup Mini Button clickable selector
		selectorclass.find('.MiniBtn').click(MiniBtnClicker);
		//selectorclass.find('.MiniBtn img').attr({'src': options.minibtnimagesrc })
}

function MiniBtnClicker() {
				//Variable for tracking which mini button is clicked.								  
				var selectedIndex = jQuery(this).index()-1;
				//fade out all images which are not clicked, fade in mini button clicked number
				selectorclass.find(options.repeatclass+':lt('+selectedIndex+')').hide();
				selectorclass.find(options.repeatclass+':gt('+selectedIndex+')').hide();		
				selectorclass.find(options.repeatclass+':eq('+selectedIndex+')').show(options.effects);	
				selectorclass.find('.MiniBtn img').show(options.effects);	
				
				//differentiate clicked minibutton by making it opaque
				selectorclass.find('.MiniBtn:eq('+selectedIndex+')').animate({opacity: 1 });
				selectorclass.find('.MiniBtn:gt('+selectedIndex+')').animate({opacity: options.minibuttonopacity});
				selectorclass.find('.MiniBtn:lt('+selectedIndex+')').animate({opacity: options.minibuttonopacity});
				//set counter variables back for the Prev and Next Btns
				counter = selectedIndex;
				//Set variable for figuring out which slide to hide
				countersubtractone = selectedIndex-1;				
				//Reset timer so it doesn't stutter move while being clicked. 		
				ResetTimer();
				StartTimer();	
}//END mini btn clicker
    

});  // End each function

};//END ctgslider

})(jQuery); //End Doc Ready