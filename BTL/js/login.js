$(document).ready(function(){
	$(function () {
			    var list = [
			    	//acc 0
				    { user: 'trangnguyen', pwd: '123456'}, // đây là một item gồm có user và pwd 
				    //acc 1
				    { user: 'thuytran', pwd: '654321'},
				    //acc 2
				    { user: 'trang123', pwd: '000000'}
				];
				$.each(list, function (acc, item) { 

			     	$('#login').click(function() {
			     		// var username = item.user; //lấy giá trị user
			     		// var password = item.pwd; //lấy giá trị pwd'

			     		// var name = $('#name').val();
			     		// var pass = $('#pass').val();
						
				      	if ($('#name').val()==item.user && $('#pass').val()==item.pwd) {
				      		window.location.href='bangdiem.html';
				      	}
				      	// nếu không thì show thông báo
				      	else{
							$( ".alert-danger" ).show();
						}
					});
				});
	});
});