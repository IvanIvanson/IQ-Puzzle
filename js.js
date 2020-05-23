 /* Created by Ivan 19.05.2020 */

  $(document).on('click', function func(){
           var $window = $(window);
           var $field = $('.field');
           var $rectangle = $('.rectangle');
           var $trapezium1 = $('.trapezium1');
           var $trapezium2 = $('.trapezium2');
           var $trapezium3 = $('.trapezium3');
          
           /*************/
           var endZone1= $('.rectangle').offset().left - $('.field').offset().left;
            var endZone2= $('.trapezium1').offset().left - $('.field').offset().left;
            var endZone3= $('.trapezium2').offset().left - $('.field').offset().left;
            var endZone4= $('.trapezium3').offset().left - $('.field').offset().left;
            var endZone5= $('.triangle').offset().left - $('.field').offset().left;
           
             /**************/
           
          var endZone6= $('.rectangle').offset().top - $('.field').offset().top;
            var endZone7= $('.trapezium1').offset().top - $('.field').offset().top;
            var endZone8= $('.trapezium2').offset().top - $('.field').offset().top;
            var endZone9= $('.trapezium3').offset().top - $('.field').offset().top;
            var endZone10= $('.triangle').offset().top - $('.field').offset().top;
             
           
            /**********
             console.log(endZone1+"rectleft");
             console.log(endZone2 + "trap1left");
             console.log(endZone3 + "trap2left");
             console.log(endZone4 + "trap3left");
             console.log(endZone5 + "treangLeft");
             console.log(endZone6 + "recttop");
             console.log(endZone7 + "trap1top");
             console.log(endZone8 + "trap2top");
             console.log(endZone9 + "trap3top");
             console.log(endZone10 + "triangTop");*/
            
          
          var elements = document.getElementById('house');
          var fig1 = document.getElementById('fig1');
          var fig2 = document.getElementById('fig2');
          var fig3 = document.getElementById('fig3');
          var fig4 = document.getElementById('fig4');
          var fig5 = document.getElementById('fig5');
            
              if( endZone1 > 60 && endZone1 < 90 && endZone6 > 68 && endZone2 > 133 && endZone2 < 153 && endZone7 > 67 && endZone7 < 77 && endZone3 > 95 && endZone3 < 120 && endZone8 > 133 && endZone8 < 143 && endZone4 > 126 && endZone4 < 136 && endZone9 > 80 && endZone9 < 110 && endZone5 > 27 && endZone10 > 128){
               
                
                 elements.style.backgroundColor="deepskyblue"; 
fig1.style.opacity="0"; 
fig2.style.opacity="0"; 
fig3.style.opacity="0"; 
fig4.style.opacity="0"; 
fig5.style.opacity="0"; 

     setTimeout(() => alert('Congratulations you won!'), 1000);
     
            
                 }
              
           });   
              
     
      $(function() {
    $("#item").click(function() {
        $("#strDoun").slideToggle(500);
       
  });    
  });
 
  $(function() {
    $("#item").click(function() {
        $("#rulesContent").slideToggle(500);
       
  });    

});
          
  /**** help block ***/
 
 
        $(function fun(event) {
    $("button").click(function() {
   
        $(".trapezium1Md").toggleClass("trapezium1Help");
       
       
         $(".trapezium2Md").toggleClass("trapezium2Help");
         $(".trapezium3Md").toggleClass("trapezium3Help");
         $(".rectangleMd").toggleClass("rectangleHelp");
         $(".triangleMd").toggleClass("triangleHelp");
    });
   
  document.getElementById("btnh").onclick=fun;
            
   
});