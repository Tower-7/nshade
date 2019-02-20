$(document).ready(function(){
	submit() 
})

function submit() {
	$('.submit span').on('click',function() {
		var firstName = $('.firstName').val()
		var lastName = $('.phone').val()
		var phone = $('.lastName').val()
		var question = $('.question').val()
		var email = $('.email').val()
		var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (filter.test(email)) {
		 	$.ajax({
				url: '/email',
				type: 'post',
				data: {
					firstName: firstName,
					lastName: lastName,
					phone: phone,
					question: question,
					email: email
				},
				success: function() {
					alert('提交成功')
					$(".form input").val('')
				}
			})
		 }
		 else {
		 	alert('您的电子邮件格式不正确');
		 }
			
	})
}