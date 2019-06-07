$(document).ready(function() {
	
	$('#login').click(function() {

		//khai báo biến user và pass
		var user = $('#txtUser').val();
		var pass = $('#txtPass').val();


		const accList = new Map([
			['trangnguyen', 29101999],
			['thuytran', 2051999],
			['mymy123', 'wwwwwwww']
		]);
  
		if(user!='') 
		{
			if (pass!='') {
				for(let i=0; i<accList.length; i++) 
				{
					console.log(accList[i]);
					if(accList.key[i] == user and accList.value[i])
					{
						alert("login success");
					}
					else 
					{
						alert('login not success');
					}
				}
			}
		}
		else {
			alert('Ban chua nhap gia tri!');
		}
		
	});
});