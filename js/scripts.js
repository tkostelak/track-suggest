$(document).ready(function() {
  $("#submitResults").click(function(event) {
  var companyType = $("input:radio[name=companyType]:checked").val();
  var projectType = $("input:radio[name=projectType]:checked").val();
  var devType = $("input:radio[name=devType]:checked").val();
  var preferMake = $("input:radio[name=preferMake]:checked").val();
  var describeSelf = $("input:radio[name=preferMake]:checked").val();

if (companyType === "largeCompanyYes") {
    if (devType === "backEndDev")
          $("#cSharp").show();
  } else
        if (projectType === "mobileAppYes") {
          $("#java").show();
  } else
        if (preferMake === "paymentApp") {
          $("#ruby").show();
  }
  event.preventDefault();
  });
});


// });
