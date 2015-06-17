//Javscript Document
$(function(){
	$('.datepicker').datepicker({ minDate: 0});
    var d= new Date();
		$("#Q01_submitDate").val( ( d.getMonth() < 9 ? "0" + (d.getMonth()+1) : d.getMonth()+1) + "/" +
								 ( d.getDate() < 10 ? "0" + d.getDate() : d.getDate() ) + "/" + d.getFullYear() );
 });
  
  $(document).ready(function () {

    jQuery.validator.addMethod("selectNone",
        function (value, element) {
            if (element.value == "none") {
                return false;
            } else return true;
        }, "Please select an option.");
    $(document).ready(function () {
        $("#communicationIntakeForm").validate({
            submitHandler: function () {
                $("#communicationIntakeForm")[0].submit();
            },
            rules: {
                Q01_submitDate: "required",
				Q02_contentApproved: "required",
				Q03_who: "required",
				Q04_what: "required",
				Q05_when: "required",
				Q06_why: "required",
				Q07_where: "required",
				Q08_contentInput: "required"
            },
            
			messages: {
                Q01_submitDate: "Required",
				Q02_contentApproved: "Required",
                Q03_who: "Required",
				Q04_what: "Required",
				Q05_when: "Required",
				Q06_why: "Required",
				Q07_where: "Required",
				Q08_contentInput: "Required"

            },
            errorPlacement: function (error, element) {
				if (element.attr("name") == "Q02_contentApproved")
                    error.appendTo("#contentApprovedError");
                else
                    error.insertAfter(element);
            }        
        })
    })

});
