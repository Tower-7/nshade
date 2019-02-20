$(document).ready(function(){
	//删除一条email
	delectEmail()
})
//删除一条email
function delectEmail() {
	$('.main .trDel').on('click',function() {
		var id = $(this).attr('date-id')
		var tr = $(this).parents('tr')
		$.ajax({
			url: '/admin/user/delete',
			type: 'post',
			data: {
				id: id,
			},
			success: function() {
				alert('删除成功！')
				tr.remove()
			}
		})
	})
}