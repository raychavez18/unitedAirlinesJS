// JavaScript Document
$(function(){
	$("#directorsConf").validate({
		/*errorLabelContainer: "#messageBox",
		wrapper: "li",*/
		submitHandler: function() { $("#directorsConf")[0].submit(); },
		rules: {
			Q01a_companyVisionDirection:{required: true,digits: true},
			Q01b_operationalReliability:{required: true,digits: true},
			Q01c_financialPlan:{required: true,digits: true},
			Q01d_cultureEngagement:{required: true,digits: true},
			Q01e_leadershipDevelopment:{required: true,digits: true},
			Q01f_revenueIntiatives:{required: true,digits: true},
			Q01g_industryIssues:{required: true,digits: true},
			Q01h_projectConsciousness:{required: true,digits: true},
			Q01i_flyingCustomerService:{required: true,digits: true},
			Q01j_productPlan:{required: true,digits: true},
			Q01k_fleetPlan:{required: true,digits: true},
			Q01l_networkPlan:{required: true,digits: true},
			
	     },
		messages: {
			// Custom messages
		}
	});
    $.extend($.validator.messages, {
			placeholder:"Required",
			equalTo:"Must match.",
	        required: "Required",
	        email: "Please enter a valid email address.",
			accept: "Required. Must be alphanumeric."
    });
	$('h1').hide();
});
var a=0;
var Resps2 = new Array();
for(i=0;i<12;i++) {
  Resps2[i] = new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1);
}
function CheckRank1(item,resp,mval){
  if( !mval ) { Resps2[item][resp]=-1; return ''; }
  if( isNaN(mval) ) { alert('Sorry.  You can only enter numbers 1 through 12.'); return ''; }
  if( mval<1 || mval>12 ) { alert('Sorry.  You can only enter numbers 1 through 12.'); return ''; }
  for(i=0;i<12;i++) {
    if( Resps2[item][i] == mval && i != resp ) { alert('Sorry. Only one topic can be ranked '+mval); return ''; }
  }
  Resps2[item][resp]=mval;
  return mval;
}
