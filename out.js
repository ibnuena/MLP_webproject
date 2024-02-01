$(document).ready(function(){
    let id;
    let name;
    let upw1;
    let check_pw = 0;
    $('#check').click(function(){
        upw1=$('#pw1').val();
        let upw2=$('#pw2').val();
        if(upw1==upw2){
            $("#result").html("<h4>비밀번호가 일치합니다</h3>")
                        .css('color', 'green');
            check_pw = 1;
        }
        else{
            $("#result").html("<h4>비밀번호가 일치하지 않습니다.</h3>")
                        .css('color', 'red');
        }
    })

    $('#join_btn').click(function(){
        id=$('#id').val();
        name=$('#name').val();
        upw1=$('#pw1').val();
        if(check_pw==0){
            $("#result2").html("<h4>비밀번호를 확인하세요.</h3>")
                            .css('color', 'black');
        }
        if(id!="" && upw1!="" && check_pw==1 && name!=""){
            $("#result2").html("<h4>가입이 완료되었습니다.</h3>")
                            .css('color', 'black');
        }
        else{
            $("#result2").html("<h4>빈 칸을 입력해주세요.</h3>")
                            .css('color', 'black');
        }
    })

    $('#login_btn').click(function(){
        let login_id=$('#login_id').val();
        let login_pw=$('#login_pw').val();
        if(login_id=="id1234" && login_pw=="pw1234"){
            $("#result3").html("<h4>로그인 성공</h3>")
                        .css('color', 'black');
        }
        else{
            $("#result3").html("<h4>id 혹은 비밀번호를 확인하세요</h3>")
                        .css('color', 'black');
        }
    })
});