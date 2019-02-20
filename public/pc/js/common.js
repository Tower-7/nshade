$(document).ready(function(){
  nav() 
})
function nav() {
  $('.nav .menuTitle').on('click',function() {
      $('.nav .menuContent').css('transform','translateX(0)')
  })
  $('.nav .menuContent .close').on('click',function() {
      $('.nav .menuContent').css('transform','translateX(100%)')
  })
}