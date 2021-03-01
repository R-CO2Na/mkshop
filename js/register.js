$(function() {
    var cb = document.querySelector('.cb')
    var btn = document.querySelector('.btn')
    cb.onclick = function() {
            //判断当前选项是否被选中
            if (cb.checked) {
                //取消登录按钮的禁用
                btn.disabled = false
                console.log(btn.disabled);
            } else {
                btn.disabled = true
                console.log(btn.disabled);
            }
        }
        //立即注册按钮的点击事件
    $(".btn").click(function() {
        //声明4个变量接收表单的数据
        var username = $("#exampleInputEmail1").val();
        var email = $('#email').val();
        var pwd = $("#pwd").val();
        var repwd = $("#repwd").val();
        var tell = $("#tell").val();
        //1.非空 
        if (username == "" || email == "" || pwd == "" || repwd == "" || tell == "") {
            alert("输入不能为空");
            //return后下面的代码不在执行
            return;
        }
        //2.用户名长度2-16
        if (username.length < 2 || username.length > 16) {
            alert("用户名长度必须在2-16位");
            return;
        }
        //3.密码和确认密码是否一致
        if (pwd != repwd) {
            alert("两次输入密码不一致");
            return;
        }

        $.ajax({
            url: "./php/login1.php",
            type: "POST",
            dataType: "json",
            data: {
                type: "add",
                username: username,
                email: email,
                password: pwd,
                uphone: tell,
            },
            complete() {
                alert("注册成功")
                location.href = './mklog.html'
            }

        })

    })
})