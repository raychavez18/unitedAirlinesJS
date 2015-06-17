// JavaScript Document
$('.add').live("click", function(){
if( $('div.addVolunteerLast').is(":visible") ){
$(this).hide();
}
else if( $('div.addVolunteerLast').is(":hidden") ) {
$('.addVolunteer:hidden').first().slideDown();
if( $('div.addVolunteerLast').is(":visible") ){
$(this).hide();
}
else {}
}
}); 

    function resetForm() {
        $("#adventureBearDistribution")[0].reset();
    }
	
	$('.datepicker').datepicker({ minDate: 28 });
	var d= new Date();
		$("#Q39_submissionDate").val( ( d.getMonth() < 9 ? "0" + (d.getMonth()+1) : d.getMonth()+1) + "/" +
								 ( d.getDate() < 10 ? "0" + d.getDate() : d.getDate() ) + "/" + d.getFullYear() );
	
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

    $(document).ready(function() {
		
		
        $("#adventureBearDistribution").validate({
            /*errorLabelContainer: "#messageBox",
    		wrapper: "li",*/
            submitHandler: function() {
                $("#adventureBearDistribution")[0].submit();
            },
            rules: {
    			Q01_firstName: "required",
    			Q02_lastName: "required",
				Q02b_TShirt: "selectNone",
    			Q03_deptCode: "required",
				Q04_mailAddress: "required",
				Q05_city: "required",
				Q06_state: "required",
				Q07_zipCode: "required",
				Q08_country: "required",
				Q09_phoneNumber: "required",
				Q10_email: {required: true, email: true},
				Q11_emailConfirmAdd: {
					equalTo: "#Q10_email",
				},
				Q12_hospitalName: "required",
				Q13_hospitalAddress: "required",
				Q14_hospitalCity: "required",
				Q15_hospitalState: "required",
				Q16_hospitalZip: "required",
				Q17_hospitalCoordName: "required",
				Q18_hospitalCoordPhone: "required",
				Q19_hospitalCoordEmail: {required: true, email: true},
				Q20_hospitalEmailConfirm: {
					equalTo: "#Q19_hospitalCoordEmail",
					},
				Q21_shippingAdd: "required",
				Q22_shippingCity: "required",
				Q23_shippingState: "required",
				Q24_shippingZip: "required",
				Q25_shippingCountry: "required",
				Q26_shippingBoxes:"selectNone",
				Q27_shippingDate: "required",
				Q28_vol_01a_FirstName: "required",
				Q28_vol_01b_LastName: "required",
				Q28_vol_01c_UnitedEmp: "required",
				Q28_vol_01d_Code:	"required",
				Q28_vol_01e_TShirt: "selectNone",
				Q28_vol_01f_Email: {required: true, email: true},
				Q28_vol_01g_EmailConfirm: {
					equalTo: "#Q28_vol_01f_Email",
				},
				Q28_vol_01h_Phone: "required",
				Q29_vol_02g_EmailConfirm: {
					equalTo: "#Q29_vol_02f_Email",
				},
				Q30_vol_03g_EmailConfirm: {
					equalTo: "#Q30_vol_03f_Email",
				},
				Q31_vol_04g_EmailConfirm: {
					equalTo: "#Q31_vol_04f_Email",
				},
				Q32_vol_05g_EmailConfirm: {
					equalTo: "#Q32_vol_05f_Email",
				},
				Q33_vol_06g_EmailConfirm: {
					equalTo: "#Q33_vol_06f_Email",
				},
				Q34_vol_07g_EmailConfirm: {
					equalTo: "#Q34_vol_07f_Email",
				},
				Q35_vol_08g_EmailConfirm: {
					equalTo: "#Q35_vol_08f_Email",
				},
				Q36_vol_09g_EmailConfirm: {
					equalTo: "#Q36_vol_09f_Email",
				},
				Q37_vol_10g_EmailConfirm: {
					equalTo: "#Q37_vol_10f_Email",
				},
				
				Q38_nameESign: "required"

            },
            messages: {
    			Q01_firstName: "Required",
    			Q02_lastName: "Required",
				Q02b_TShirt: "Required",
    			Q03_deptCode: "Required",
				Q04_mailAddress: "Required",
				Q05_city: "Required",
				Q06_state: "Required",
				Q07_zipCode: "Required",
				Q08_country: "Required",
				Q09_phoneNumber: "Required",
				Q10_email: {required: "Required", email: "Please provide a valid email address"},
				Q11_emailConfirmAdd: "Email fields must match",
				Q12_hospitalName: "Required",
				Q13_hospitalAddress: "Required",
				Q14_hospitalCity: "Required",
				Q15_hospitalState: "Required",
				Q16_hospitalZip: "Required",
				Q17_hospitalCoordName: "Required",
				Q18_hospitalCoordPhone: "Required",
				Q19_hospitalCoordEmail: {required: "Required", email: "Please provide a valid email address"},
				Q20_hospitalEmailConfirm: {equalTo: "Email fields must match"},
				Q21_shippingAdd: "Required",
				Q22_shippingCity: "Required",
				Q23_shippingState: "Required",
				Q24_shippingZip: "Required",
				Q25_shippingCountry: "Required",
				Q26_shippingBoxes: "Required",
				Q27_shippingDate: "Required",
				Q28_vol_01a_FirstName: "Required",
				Q28_vol_01b_LastName: "Required",
				Q28_vol_01c_UnitedEmp: "Required",
				Q28_vol_01d_Code:	"Required",
				Q28_vol_01e_TShirt: "Required",
				Q28_vol_01f_Email: {required: "Required", email: "Please provide a valid email address"},
				Q28_vol_01g_EmailConfirm: {equalTo: "Email fields must match"},
				Q28_vol_01h_Phone: "Required",
				Q29_vol_02g_EmailConfirm: {equalTo: "Email fields must match"},
				Q30_vol_03g_EmailConfirm: {equalTo: "Email fields must match"},
				Q31_vol_04g_EmailConfirm: {equalTo: "Email fields must match"},
				Q32_vol_05g_EmailConfirm: {equalTo: "Email fields must match"},
				Q33_vol_06g_EmailConfirm: {equalTo: "Email fields must match"},
				Q34_vol_07g_EmailConfirm: {equalTo: "Email fields must match"},
				Q35_vol_08g_EmailConfirm: {equalTo: "Email fields must match"},
				Q36_vol_09g_EmailConfirm: {equalTo: "Email fields must match"},
				Q37_vol_10g_EmailConfirm: {equalTo: "Email fields must match"},
				Q38_nameESign: "Required"
			},
				errorPlacement: function (error, element) {
					if (element.attr("name") == "Q28_vol_01c_UnitedEmp")
                    error.appendTo("#employeeError");
                else if (element.attr("name") == "Q28_vol_01c_UnitedEmp")
                    error.appendTo("#employeeError");
				else if (element.attr("name") == "Q30_volunUnitedEmp")
                    error.insertBefore("#termsError");
				
                else
                    error.insertAfter(element);
					
            }
        })

    });
