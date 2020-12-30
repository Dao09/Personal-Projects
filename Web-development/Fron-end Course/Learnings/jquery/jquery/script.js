$(function(){

    $(".red").fadeIn(1000);
    $(".red").fadeOut(1000);
    for(var x=0;x<1000;x++){
      $(".red").fadeToggle(1000);
      $(".blue").hide(1000);
      $(".blue").show(100);
      $("p").slideUp();
      $("p").slideDown();
    //   $(".green").animate({"margin-top":"50px"},1000);
    //   $(".green").animate({"margin-top":"-=50px"},2000);

      $(".green").animate({
        marginTop: "+=50px",
        height: "70px",
        width:"70px",
        "opacity":"0",
      },2000)

      $(".green").animate({
        marginTop: "-=50px",
        height: "150px",
        width:"150px",
        "opacity":"1",
      },1000)
    }
    
    
    


})