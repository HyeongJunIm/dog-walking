//로그인 유효성 검사
function login(){
    $('.login-submit-btn').on('click', function(){
        let userId = $('#userId').val();
        let userPw = $('#userPassword').val();
    
        if(userId ==""){
            $('.id-input-ch').css('display', 'block')
            $('.pw-input-ch').css('display','none');
            return false;
        }

        if(userPw ==""){
            $('.id-input-ch').css('display', 'none')
            $('.pw-input-ch').css('display','block');
            return false;
        }

        return true;
    
    })
}

$('document').ready(function() {
	login();
})

