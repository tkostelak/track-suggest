$(document).ready(function() {
  $("#submitResults").click(function() {
  var companyType = $("input:radio[name=companyType]:checked").val();
  var projectType = $("input:radio[name=projectType]:checked").val();
  var devType = $("input:radio[name=devType]:checked").val();
  var preferMake = $("input:radio[name=preferMake]:checked").val();
  var describeSelf = $("input:radio[name=preferMake]:checked").val();


  if (companyType === "largeCompany") {
    if (projectType === "webDev") 
      if (devType === "backEndDev")
        if (preferMake === "webApp")
          if (describeSelf === "describeAnalytical")
            $("#cSharp").show();
            alert("hello")
  }




});
});


// });
