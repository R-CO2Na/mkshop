//获取账号cookie
var name1 = getCookie("user")
    //获取大盒子对象
var sbox = document.querySelector(".sbox")
    //获取地址栏中的地址
var url = location.href
    //获取localStorage中的cartList3
var cartList = localStorage.getItem("cartList3")
    //把当前cartList字符串转为数组对象
cartList = JSON.parse(cartList) || []
    // 判断当前cookie是否存在
if (name1) {} else {
    alert("你还没登录，请登录在进入")
    location = "./mklog.html"
}
show()

function show() {
    // 判断当前localStorage中是否有内容
    var str2 = ''
    if (cartList.length > 0) {
        cartList.forEach(item => {
                str2 += `
                <div class="shop ">
                <input type="checkbox" class="only" name="one">
                <div class="sp">
                    <img src="${item.img}" alt="">
                    <b>${item.title}</b>
                </div>
                <i>￥<span>${item.price}</span></i>
                <i class="sl">
                    <button class="jian">-</button>
                    <input type="text" value="${item.shop_num}" class="num">
                    <button class="jia">+</button>
                </i>
                <i>￥<span class="shopxj">${item.price}</span></i>
                <i class="caozuo mr-c">
                <button class="btn btn-info" data-id="${item.id}">删除</button>
                </i>
                </div>
                    `

            })
            //给当前字符串拼接结束的标签

        //最后把拼接好的内容添加到box大盒子中
        sbox.innerHTML = str2
    } else {
        var str1 = `
                      <div class="lost jumbotron">
                          <span>本来无一物，何处惹尘埃</span>
                          <p><a class="btn btn-primary btn-lg" href="./mklist.html" role="button">重庆八月的A货，整点？</a></p>
                      </div>
                    `
            //把当前内容添加到box盒子中
        sbox.innerHTML = str1
    }
}

var bigbox = document.querySelector('#content')
var shop = document.getElementsByClassName('shop')
    //全选
var allcheck = document.querySelector('.allcheck')
    //单选
var onlys = document.getElementsByClassName('only')
    // 绑定所有委托事件
bigbox.onclick = function(e) {
        var e = e || window.event
        var target = e.target || e.secElement
        if (target.name == 'all') {
            for (var i = 0; i < shop.length; i++) {
                // 判断全选框选中状态，并赋值给单选框
                if (target.checked) {
                    shop[i].firstElementChild.checked = true
                } else {
                    shop[i].firstElementChild.checked = false
                }
            }
            zj()
            jexj()
            jifen()
        }
        // 数量
        var qh2 = document.querySelector(".qh2")
            // 加
        if (target.innerHTML == '+') {

            var val = target.previousElementSibling.value
            if (val >= 11) {
                val = 12
                qh2.style.display = "block"
            } else {
                val++
            }
            // 复制数量
            target.previousElementSibling.value = val
                // 获取单价
            var pirce = target.parentNode.previousElementSibling.lastElementChild.innerHTML
                // 计算金额

            var num = parseInt(val) * parseFloat(pirce)
                // 赋值金额
            target.parentNode.nextElementSibling.lastElementChild.innerHTML = num
            zj()
            jexj()
            jifen()
        }
        // 减
        if (target.innerHTML == '-') {
            var val = target.nextElementSibling.value
                // 数量不能为0
            if (val <= 1) {
                val = 1
            } else {
                val--
                qh2.style.display = "none"
            }
            target.nextElementSibling.value = val
            var pirce = target.parentNode.previousElementSibling.lastElementChild.innerHTML
            var num = parseInt(val) * parseFloat(pirce)
            target.parentNode.nextElementSibling.lastElementChild.innerHTML = num
            zj()
            jexj()
            jifen()
        }
        // 点击删除
        if (target.innerHTML == '删除') {
            var id = target.getAttribute("data-id")
            console.log(target.getAttribute);
            cartList = cartList.filter(item => {
                    //过滤被删除的商品
                    return item.id != id
                })
                //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
                //调用show方法，重新把页面再次渲染
            show()
            zj()
            jexj()
            jifen()
        }
        // 清空所有商品
        if (target.innerHTML == "清空所有商品") {
            localStorage.setItem("cartList3", JSON.stringify([]))
            location.reload()
            show()
        }
        // 单选框点击事件
        if (target.className == 'only') {
            jexj()
        }
        //结算
        if (target.innerHTML == "确认，提交订单") {
            //添加确认框
            if (confirm("是否确定购买？")) {
                alert("你需要支付：￥" + document.querySelector('.zj1').innerHTML)
                cartList = cartList.filter(item => {
                        return item.is_select != 1
                    })
                    //重新把当前操作完毕的数组添加到localStorage中
                localStorage.setItem("cartList3", JSON.stringify([]))
                    //调用show方法，重新把页面再次渲染
                location.reload()
                show()
            }
        }
    }
    // 总价
function zj() {
    var zj = 0
    for (var i = 0; i < onlys.length; i++) {
        if (onlys[i].checked) {
            // 获取选中商品的金额
            var je = shop[i].children[4].lastElementChild.innerHTML
                // 累加总价
            spsum = parseFloat(je)
            zj += parseFloat(je)
        }
    }
    document.querySelector('.zj1').innerHTML = zj
}
zj()
    // 金额小计
function jexj() {
    var jexj = 0
    for (var i = 0; i < shop.length; i++) {
        // 获取所有商品金额
        var sons = shop[i].children
            // 累加
        var xiaoji = sons[sons.length - 2].firstElementChild.innerHTML
        jexj += parseFloat(xiaoji)
    }
    // 金额小计
    document.querySelector('.spzj').innerHTML = jexj
}
jexj()
    // 积分
function jifen() {
    document.querySelector('.jf').innerHTML = parseInt(document.querySelector('.spzj').innerHTML)
}
jifen()