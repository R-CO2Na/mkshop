//获取操作对象
// var btn = document.querySelector('[type="checkbox"]')
var submit = document.querySelector('[type="submit"]')
var user = document.querySelector('[type="text"]')
var pass = document.querySelector('[type="password"]')
var search = location.search
submit.onclick = function() {
    //获取账号输入框中的value
    var u1 = user.value
    var p1 = pass.value
    console.log(u1, p1);
    // 调用ajax发送请求
    Ajax({
        url: './php/login.php',
        type: 'POST',
        data: `username=${u1}&password=${p1}`,
        success: function(dt) {
            console.log(dt);
            //判断当前返回值是否等于1
            if (dt == 1) {
                setCookie("user", u1);
                // 判断当前地址栏中是否有参数
                if (search) {
                    // 获取参数中传入的地址
                    var new_url = search.split('=')[1]
                    location.href = new_url
                } else {
                    alert("登录成功")
                    location.href = "./mkindex.html"
                }
            } else {
                alert("登录失败")
            }
        }

    })
    return false
}