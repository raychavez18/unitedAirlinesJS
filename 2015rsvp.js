// JavaScript Document
var attending_a = '\
<input type="hidden" name="thankyou" value="/web/content.jsp?SID=Cargo&amp;path=/Integration/Pages/Forms/WorldwideSalesMeeting/RSVP_Registration.jsp" />\
<input type="hidden" id="Q05_fltNumber" name="Q05_fltNumber" value="N/A" />\
<input type="hidden" id="Q06_arrivalDate" name="Q06_arrivalDate" value="N/A" />\
<input type="hidden" id="Q07_arrivalTime" name="Q07_arrivalTime" value="N/A" />\
<input type="hidden" id="Q08_shuttle" name="Q08_shuttle" value="N/A" />\
<input type="hidden" id="Q09_entree" name="Q09_entree" value="N/A" />\
<input type="hidden" id="Q10_restrictions" name="Q10_restrictions" value="N/A" />\
';
var attending_b = '\
<input type="hidden" name="thankyou" value="/web/content.jsp?SID=Cargo&amp;path=/Integration/Pages/Forms/WorldwideSalesMeeting/RSVP_Registration.jsp" />\<div class="formElementNarrow"><strong>ORD Flight Arrival Info</strong><br />\
<em>Chicago based employees please enter &quot;N/A&quot;<br />\
When possible, please select flights arriving to ORD between 2:00 - 5:00 pm Central Time on Tuesday, February 10.</em></div>\
<div class="formElementNarrow"><strong>Flight number: </strong> <br />\
<input type="text" class="formField" id="Q05_fltNumber" name="Q05_fltNumber" /></div>\
<div class="formElementNarrow"><strong>Date: </strong> <br />\
<input type="text" class="datepicker formField" id="Q06_arrivalDate" name="Q06_arrivalDate" /></div>\
<div class="formElementNarrow"><strong>Time: </strong> <br />\
<input type="text" class="formField" id="Q07_arrivalTime" name="Q07_arrivalTime" /></div>\
<div style="height:90px;" class="formElementNarrow"><strong>Willis Tower employees only:  If offered, would you be interested in a shuttle to the venue departing WHQ during the evening on Feb 10 and returning to WHQ on Feb 12?</strong><br />\
<input type="radio" id="Q08_shuttle" name="Q08_shuttle" value="Yes" /> Yes, I would be interested in a shuttle <br />\
<input type="radio" id="Q08_shuttle" name="Q08_shuttle" value="No" /> No, I will provide  my own transportation to the venue <br />\
<div style="margin-top: 0px; margin-left: 5px; clear: both;" name="shuttleError" id="shuttleError"><label class="error">&nbsp;</label></div>\
</div>\
<div style="height:90px;" class="formElementNarrow"><strong>Please select your entree for the February 11 Recognition Dinner:</strong><br />\
<input type="radio" id="Q09_entree" name="Q09_entree" value="Pan seared breast of chicken" /> Pan seared breast of chicken <br />\
<input type="radio" id="Q09_entree" name="Q09_entree" value="Kansas City strip steak" /> Kansas City strip steak <br />\
<input type="radio" id="Q09_entree" name="Q09_entree" value="Salt seared Norwegian salmon" /> Salt seared Norwegian salmon <br />\
<input type="radio" id="Q09_entree" name="Q09_entree" value="Roasted corn &amp; black beans in a pastry crust" /> Roasted corn &amp; black beans in a pastry crust<br />\
<div style="margin-top: 0px; margin-left: 5px; clear: both" name="entreeError" id="entreeError"><label class="error">&nbsp;</label></div>\
</div>\
<div class="formElementNarrow"><strong>Please indicate and any dietary restrictions and any other special assistance needed:</strong> <br />\
<div class="formElementText"><textarea name="Q10_restrictions" style="width: 430px" id="Q10_restrictions"></textarea></div>\
</div>\
<div style="width: 455px" class="dottedLine">&nbsp;</div>\
';

function switchForm_attending( whichForm )
	{
		if( whichForm.value == "No" ) 
		{
			$("#attending").html( attending_a );
		}	
		if( whichForm.value == "Yes" ) 
		{
			$("#attending").html( attending_b );
			$('.datepicker').datepicker();
		}
	};
	
$('.datepicker').datepicker();
	
jQuery.validator.addMethod( 
  "selectNone", 
  function(value, element) {
    if (element.value == "none") 
    { 
      return false; 
    } 
    else return true; 
  }, 
  "Please select an option." 
); 	

$(document).ready(function(){
	$("#2015rsvpForm").validate({
		/*errorLabelContainer: "#messageBox",
		wrapper: "li",*/
		submitHandler: function() { $("#2015rsvpForm")[0].submit(); },
		rules: {
		Q01_firstName: "required",
		Q02_lastName : "required",  
		Q03_email:  {
			  required: true,
			  email: true
			  },	
		Q04_attendMtg: "required",
		Q05_fltNumber: "required",
		Q06_arrivalDate: "required",
		Q07_arrivalTime: "required",
		Q08_shuttle: "required",
		Q09_entree: "required"// JavaScript Document
var attending_a = '\
<input type="hidden" name="thankyou" value="/web/content.jsp?SID=Cargo&amp;path=/Integration/Pages/Forms/WorldwideSalesMeeting/RSVP_Registration.jsp" />\
<input type="hidden" id="Q05_fltNumber" name="Q05_fltNumber" value="N/A" />\
<input type="hidden" id="Q06_arrivalDate" name="Q06_arrivalDate" value="N/A" />\
<input type="hidden" id="Q07_arrivalTime" name="Q07_arrivalTime" value="N/A" />\
<input type="hidden" id="Q08_shuttle" name="Q08_shuttle" value="N/A" />\
<input type="hidden" id="Q09_entree" name="Q09_entree" value="N/A" />\
<input type="hidden" id="Q10_restrictions" name="Q10_restrictions" value="N/A" />\
';
var attending_b = '\
<input type="hidden" name="thankyou" value="/web/content.jsp?SID=Cargo&amp;path=/Integration/Pages/Forms/WorldwideSalesMeeting/RSVP_Registration.jsp" />\<div class="formElementNarrow"><strong>ORD Flight Arrival Info</strong><br />\
<em>Chicago based employees please enter &quot;N/A&quot;<br />\
When possible, please select flights arriving to ORD between 2:00 - 5:00 pm Central Time on Tuesday, February 10.</em></div>\
<div class="formElementNarrow"><strong>Flight number: </strong> <br />\
<input type="text" class="formField" id="Q05_fltNumber" name="Q05_fltNumber" /></div>\
<div class="formElementNarrow"><strong>Date: </strong> <br />\
<input type="text" class="datepicker formField" id="Q06_arrivalDate" name="Q06_arrivalDate" /></div>\
<div class="formElementNarrow"><strong>Time: </strong> <br />\
<input type="text" class="formField" id="Q07_arrivalTime" name="Q07_arrivalTime" /></div>\
<div style="height:90px;" class="formElementNarrow"><strong>Willis Tower employees only:  If offered, would you be interested in a shuttle to the venue departing WHQ during the evening on Feb 10 and returning to WHQ on Feb 12?</strong><br />\
<input type="radio" id="Q08_shuttle" name="Q08_shuttle" value="Yes" /> Yes, I would be interested in a shuttle <br />\
<input type="radio" id="Q08_shuttle" name="Q08_shuttle" value="No" /> No, I will provide  my own transportation to the venue <br />\
<div style="margin-top: 0px; margin-left: 5px; clear: both;" name="shuttleError" id="shuttleError"><label class="error">&nbsp;</label></div>\
</div>\
<div style="height:90px;" class="formElementNarrow"><strong>Please select your entree for the February 11 Recognition Dinner:</strong><br />\
<input type="radio" id="Q09_entree" name="Q09_entree" value="Pan seared breast of chicken" /> Pan seared breast of chicken <br />\
<input type="radio" id="Q09_entree" name="Q09_entree" value="Kansas City strip steak" /> Kansas City strip steak <br />\
<input type="radio" id="Q09_entree" name="Q09_entree" value="Salt seared Norwegian salmon" /> Salt seared Norwegian salmon <br />\
<input type="radio" id="Q09_entree" name="Q09_entree" value="Roasted corn &amp; black beans in a pastry crust" /> Roasted corn &amp; black beans in a pastry crust<br />\
<div style="margin-top: 0px; margin-left: 5px; clear: both" name="entreeError" id="entreeError"><label class="error">&nbsp;</label></div>\
</div>\
<div class="formElementNarrow"><strong>Please indicate and any dietary restrictions and any other special assistance needed:</strong> <br />\
<div class="formElementText"><textarea name="Q10_restrictions" style="width: 430px" id="Q10_restrictions"></textarea></div>\
</div>\
<div style="width: 455px" class="dottedLine">&nbsp;</div>\
';

function switchForm_attending( whichForm )
	{
		if( whichForm.value == "No" ) 
		{
			$("#attending").html( attending_a );
		}	
		if( whichForm.value == "Yes" ) 
		{
			$("#attending").html( attending_b );
			$('.datepicker').datepicker();
		}
	};
	
$('.datepicker').datepicker();
	
jQuery.validator.addMethod( 
  "selectNone", 
  function(value, element) {
    if (element.value == "none") 
    { 
      return false; 
    } 
    else return true; 
  }, 
  "Please select an option." 
); 	

$(document).ready(function(){
	$("#2015rsvpForm").validate({
		/*errorLabelContainer: "#messageBox",
		wrapper: "li",*/
		submitHandler: function() { $("#2015rsvpForm")[0].submit(); },
		rules: {
		Q01_firstName: "required",
		Q02_lastName : "required",  
		Q03_email:  {
			  required: true,
			  email: true
			  },	
		Q04_attendMtg: "required",
		Q05_fltNumber: "required",
		Q06_arrivalDate: "required",
		Q07_arrivalTime: "required",
		Q08_shuttle: "required",
		Q09_entree: "required"
		},
		messages: {
		Q01_firstName: "Required",
		Q02_lastName : "Required",  
		Q03_email : "Required",
		Q04_attendMtg: "Required",
		Q05_fltNumber: "Required",
		Q06_arrivalDate: "Required",
		Q07_arrivalTime: "Required",
		Q08_shuttle: "Required",
		Q09_entree: "Required"
		},
		errorPlacement: function (error, element) {
				if (element.attr("name") == "Q04_attendMtg")
                    error.appendTo("#attendMtgError");
				else if (element.attr("name") == "Q08_shuttle")
                    error.appendTo("#shuttleError");
				else if (element.attr("name") == "Q09_entree")
                    error.appendTo("#entreeError");
				
                else
                    error.insertAfter(element);
            }        
	})
});
		},
		messages: {
		Q01_firstName: "Required",
		Q02_lastName : "Required",  
		Q03_email : "Required",
		Q04_attendMtg: "Required",
		Q05_fltNumber: "Required",
		Q06_arrivalDate: "Required",
		Q07_arrivalTime: "Required",
		Q08_shuttle: "Required",
		Q09_entree: "Required"
		},
		errorPlacement: function (error, element) {
				if (element.attr("name") == "Q04_attendMtg")
                    error.appendTo("#attendMtgError");
				else if (element.attr("name") == "Q08_shuttle")
                    error.appendTo("#shuttleError");
				else if (element.attr("name") == "Q09_entree")
                    error.appendTo("#entreeError");
				
                else
                    error.insertAfter(element);
            }        
	})
});
