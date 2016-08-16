function sizeImages(){
  var th = $('#tina').height();
  var mh = $('#matt').height();
  var ah = $('#anna').height();
  console.log( th, mh, ah);
  if (Math.abs($('#anna').height() - th) > 5){
    $('#anna p').height(th - ah);
    $('#anna p').css({"background-color":"#bccbd0"});
    $('#matt p').height(th - mh);
    $('#matt p').css({"background-color":"#15181a"});
  }
}


$(document).ready(function(){

 $(".button-collapse").sideNav();
 $(document).on('click', '.side-nav', function(){
    $('.button-collapse').sideNav('hide');
 });

 $(document).on('click', '.home', function(){
   $.ajax({
     url:'/home',
     method: 'get',
     success: function(data){
       $('#main').html(data);
       console.log('click');
     }
   });
 });
 $(document).on('click', '.aboutUs', function(){
   $.ajax({
     url:'/aboutUs',
     method: 'get',
     success: function(data){
       $('#main').html(data);
       console.log('click');
     }
   });
 });

 $(document).on('click', '.bloodWedding', function(){
   $.ajax({
     url:'/bloodWedding',
     method: 'get',
     success: function(data){
       $('#main').html(data);
       console.log('click');
     }
   });
 });


 $(document).on('click', '.ourTeam', function(){
   $.ajax({
     url:'/ourTeam',
     method: 'get',
     success: function(data){
       $('#main').html(data);
       sizeImages();
       console.log('click');
     }
   });
 });

$(window).resize(sizeImages);


// setInterval(function () {
//       sizeImages();
//     }, 1000);






});
