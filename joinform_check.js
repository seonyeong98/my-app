function joinform_check() {
    var uid = document.getElementById("uid");
    var pwd = document.getElementById("pwd");
    var repwd = document.getElementById("repwd");
    var uname = document.getElementById("uname");
    var female = document.getElementById("male");
    var mobile = document.getElementById("email_id");
    var agree = document.getElementById("agree");

    if(uid.value == "") {
        alert("아이디를 입력해주세요.");
        uid.focus();
        return false;
    };

    if(pwd.value == "") {
        alert("비밀번호를 입력하세요.");
        pwd.focus();
        return false;
    };

    //비밀번호 영문자 숫자 특수조합 정규식
    var pwdCheck = /^(?=.*[a-zA-Z])(?=.[@#$%^&*=-])(?=.*[0-9]).{8,25}$/;

    if(!pwdCheck.test(pwd.value)) {
        alert("비밀번호는 영문자 + 숫자 + 특수문자 조합으로 8-25자리 사용해야합니다.");
        pwd.focus();
        return false;
    };

    if(repwd.value !== pwd.value) {
        alert("비밀번호가 일차하지 않습니다.");
        repwd.focus();
        return false;
    }

    if(uname.value == "") {
        alert("이름을 입력하세요.");
        uname.focus();
        return false;
    };

    var reg = /^[0-9]+/g; //숫자만 입력하는 정규식

    if(!reg.test(mobile.value)) {
        alert("전화번호는 숫자만 입력할 수 있습니다.");
        mobile.focus();
        return false;
    }

    if(email_id.value == "") {
        alert("이메일 주소를 입력해주세요.");
        email_id.focus();
        return false;
    }

    document.join_form.submit(); //유효성 검사의 포인트
}

function id_check() {
    //window.open("팝업될 문서 경로". "팝업될 문서 이름", "옵션");
    window.open("", "", "width=600, height=200, left=200, top=100");
}

//이메일 옵션 선택 후 주소 자동 완성
function change_email() {
    var email_add = document.getElementById("email_add");
    var email_sel = document.getElementById("email_sel");
    
    //지금 골라진 옵션의 순서와 같은 값 구하기
    var idx = email_sel.options.selectedIndex;
    var val = email_sel.options[idx].value;

    email_add.value = val;
}
