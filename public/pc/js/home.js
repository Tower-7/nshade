$(document).ready(function(){
  nav() 
  submitEmail()
})
function nav() {
  $('.nav .menuTitle').on('click',function() {
      $('.nav .menuContent').css('transform','translateX(0)')
  })
  $('.nav .menuContent .close').on('click',function() {
      $('.nav .menuContent').css('transform','translateX(100%)')
  })
}
function submitEmail() {
	$('.signupInput').on('click',function() {
		$(this).children('input').focus()
	})
	$(".signupInput input").keydown(function(){
		var content = $(this).val()
		if(content){
			$(this).siblings('span').css('display','none')
		}
		else {
			$(this).siblings('span').css('display','block')
		}
	})
	$(".signupInput input").keyup(function(){
		var content = $(this).val()
		if(content){
			$(this).siblings('span').css('display','none')
		}
		else {
			$(this).siblings('span').css('display','block')
		}
	})
	$('.submit').on('click',function() {
		var firstName = $('.firstName').val()
		var email = $('.email').val()
		var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (filter.test(email)) {
		 	$.ajax({
				url: '/email',
				type: 'post',
				data: {
					firstName: firstName,
					email: email
				},
				success: function() {
					alert('提交成功')
					$(".signupInput input").val('')
					$('.signupInput span').css('display','block')
				}
			})
		 }
		 else {
		 	alert('您的电子邮件格式不正确');
		 }
			
	})
}