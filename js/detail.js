//获取当前地址栏中的参数信息
var search = location.search;
//获取大盒子对象
var bbox = document.querySelector(".panel")
var dt;
//判断当前search对象中是否有值
if (search) {
    //分割search字符串
    var id = search.split('=')[1];
    (async function() {
        dt = await promiseAjax({
            url: './php/detail.php',
            data: 'id=' + id,
            datatype: 'json'

        })
        var str = `
            <div class="panel-heading">${dt.title}</div>
            <div class="panel-body">
                <div class="media">  
                    <!-- fdj -->
                    <div id="tsShopContainer">
                        <div id="tsImgS">
                            <a href="${dt.img}" title="Images" class="MagicZoom" id="MagicZoom">
                                <img width="300" height="300" src="${dt.img}" /></a>
                        </div>
                    </div>
                    <!-- 侧边信息 -->
                    <div class="media-body">
                        <h3 class="media-heading">${dt.title}</h3>
                        <h2>￥${dt.price}</h2>
                        <ul class="fd30_ulinfo">
                            <li class="li_number">
                                <div class="fl"><strong>购买数量：</strong></div>
                                <div class="fl fl1">
                                <input name="number" type="text" id="number" value="1" size="2" onblur="changePrice()" />
                                </div>
                                <div class="fl">
                                    <img src="http://www.zymkshop.com/themes/ec36_01/images/bag_open.gif" border=0 name="jia" class="fd30_j jia">
                                    <img src="http://www.zymkshop.com/themes/ec36_01/images/bag_close.gif" border=0 name="jian" class="fd30_j  jian">
                                </div>
                                <div class="fl kc"> ( 商品库存：12 )</div>
                                <span class="qh">没货了，看看别的吧</span>
                                <div class="clear0"></div>
                            </li>
                            <li> <strong>购买此商品可使用：</strong>
                                <font class="f4">0 积分</font>
                            </li>
                        </ul>
                        <table width="100%" border="0" cellpadding="0" cellspacing="15" class="COMMENT_table">
                            <tr>
                                <td>已售 3 件</td>
                                <td>评价 0 人次</td>
                                <td>关注度 7969</td>
                            </tr>
                        </table>
                        <a href="./mkshop.html" class="btn btn-info">立即购买</a>
                        <a  class="btn btn-success">加入购物车</a>
                    </div>
                </div>

                <ul class="nav nav-tabs">
                    <li class="active">商品描述</li>
                    <li>规格参数</li>
                    <li>销售记录</li>
                </ul>
                <!-- 详情 -->
                <div class="navbox">
                    <div id="show" class="box">
                        <p>&nbsp;<span style="background-color: rgb(240, 240, 240); color: rgb(51, 51, 51); font-weight: bold; font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">编辑推荐：</span></p>
                        <p style="margin: 1.12em 0px; padding: 0px; font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">1、超人气幻想大作《哑舍》系列全新画集，哑舍粉丝不容错过的经典收藏！<br /> 2、相伴九年，玄色&amp;晓泊首次完整展现《哑舍》人物命运图卷。
                            <br /> 3、五大主题、 七十六幅高清美图、一篇未公开绘本，将哑舍世界展现得淋漓尽致！<br /> 4、附赠《哑舍》主题笔记本一本，人物明信片6张。
                        </p>
                        <p style="margin: 1.12em 0px; padding: 0px; font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">&nbsp;</p>
                        <p style="margin: 1.12em 0px; padding: 0px; font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">画集取名&ldquo;朝露集&rdquo;，出自曹操《短歌行》中&ldquo;譬如朝露，去日苦多&rdquo;一句。句词像是老板（甘罗）的一个注释：两千年前他是咸阳宫少年得志的上卿大人，和志同道合的少年们短暂地相知相识，之后便是永久地别离。从此他一人踏着朝露独行。<br /> 晓泊以飘逸华美的画风， 优雅含蓄的上色见长，画面处处蕴藏着古雅之风。<br /> 整本画集包含160P精美插图，高档纸印刷，让你有爽滑的书写和绘画体验。
                        </p>
                        <p style="margin: 1.12em 0px; padding: 0px; font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">&nbsp;</p>
                        <p style="margin: 1.12em 0px; padding: 0px; font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">
                            <font color="#b22222"><span style="font-size: 22px;">前80名为限量签章版</span></font>
                        </p>
                        <p style="margin: 1.12em 0px; padding: 0px; font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">&nbsp;</p>
                        <div class="dm_module" data-id="10838633" data-title="内容简介" id="ids-module-10838633" style="font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">
                            <div style="margin: 0px; padding: 5px 15px; height: 2em; font-weight: bold; color: rgb(51, 51, 51); line-height: 2em; background: rgb(240, 240, 240);">内容简介：</div>
                        </div>
                        <p style="margin: 1.12em 0px; padding: 0px; font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">独自一人踏着朝露前行是一种什么滋味？<br /> 从幼年到少年，再到长生，于须臾间看尽人世变迁，这一次，将世事沧桑与万千情绪凝于彩墨间。
                        </p>
                        <p style="margin: 1.12em 0px; padding: 0px; font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">&nbsp;</p>
                        <p style="margin: 1.12em 0px; padding: 0px; font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/3032658020/O1CN012BoUZC297D0kNJeNV_!!3032658020.jpg" style="border: 0px; vertical-align: top; max-width: 750px;" alt="" /></p>
                        <p style="margin: 1.12em 0px; padding: 0px; font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;"><img align="absmiddle" src="https://img.alicdn.com/imgextra/i1/3032658020/O1CN016K8xAG297D0nsCyPy_!!3032658020.jpg" style="border: 0px; vertical-align: top; max-width: 750px;" alt="" /><img align="absmiddle" src="https://img.alicdn.com/imgextra/i2/3032658020/O1CN014ERpeT297D0iHcHgr_!!3032658020.jpg"
                                style="border: 0px; vertical-align: top; max-width: 750px;" alt="" /><img align="absmiddle" src="https://img.alicdn.com/imgextra/i3/3032658020/O1CN01eWdjac297D0hK2kVV_!!3032658020.jpg" style="border: 0px; vertical-align: top; max-width: 750px;"
                                alt="" /><img align="absmiddle" src="https://img.alicdn.com/imgextra/i4/3032658020/O1CN01z8pNMm297D0kaFzSD_!!3032658020.jpg" width="700" height="722" style="border: 0px; vertical-align: top; max-width: 750px;" alt="" /><img
                                align="absmiddle" src="https://img.alicdn.com/imgextra/i1/3032658020/O1CN01f17kWE297D0hK294u_!!3032658020.jpg" width="700" height="760" style="border: 0px; vertical-align: top; max-width: 750px;" alt="" /></p>
                        <div class="dm_module" data-id="9383282" data-title="目录" id="ids-module-9383282" style="font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">
                            <div style="margin: 0px; padding: 5px 15px; height: 2em; font-weight: bold; color: rgb(51, 51, 51); line-height: 2em; background: rgb(240, 240, 240);">目录</div>
                        </div>
                        <p style="margin: 1.12em 0px; padding: 0px; font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">前言<br /> 温其风
                            <br /> 月有阴
                            <br /> 岁无阳
                            <br /> 零如雨
                            <br /> 山已晦
                            <br /> 青镇圭&middot;绘本
                            <br /> 后记
                            <br /> &nbsp;
                        </p>
                        <div class="dm_module" data-id="9389722" data-title="作者简介" id="ids-module-9389722" style="font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">
                            <div style="margin: 0px; padding: 5px 15px; height: 2em; font-weight: bold; color: rgb(51, 51, 51); line-height: 2em; background: rgb(240, 240, 240);">作者简介：</div>
                        </div>
                        <p style="margin: 1.12em 0px; padding: 0px; font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">晓泊<br /> 国内新锐插画师，毕业于中国传媒大学动画学院，现就职于北京泊文天华文化传播有限公司。爱好广泛，插画、绘本、漫画均有涉猎，画风细腻唯美，意蕴悠长深远。绘本《星光》获2012微漫画大赛一等奖，组图《白鸟》获得2012金龙奖*插画奖提名。代表作：《哑舍》系列插画、《哑舍》漫画系列、《哑舍大画集》等。
                            <br /> 玄色
                            <br /> 青春畅销小说作家，AB血型的射手座，主业宅女，副业码字，擅长烹饪和幻想，爱好阅读和旅行，追求奔放自由的人生，所以游走于历史和幻想之间，写下一个又一个略带哀伤的美丽故事，代表作《哑舍》系列、《昊天纪》系列、《2013》等。
                            <br /> &nbsp;
                        </p>
                        <p style="margin: 1.12em 0px; padding: 0px; font-family: tahoma, arial, 宋体, sans-serif; font-size: 14px;">&nbsp;</p>
                    </div>
                    <div class="box">
                        商品货号:<i>MK001377</i>
                    </div>
                    <div class="box">
                        <span>还没有人购买过此商品</span>
                        <div id="pagebar" class="f_r fd_pager">
                                <div id="pager">共 1 页<a href="javascript:;">上一页</a> <a href="javascript:;">下一页</a>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `
        bbox.innerHTML = str;

    })()
} else {
    alert("你还没选中商品")
    location = "./mklist.html"
}
// 给大盒子对象绑定点击事件
bbox.onclick = function(e) {
    var e = e || window.event
        //获取点击对象
    var target = e.target || e.srcElement
    var num = document.querySelector('#number')
    var qh = document.querySelector(".qh")
    console.log(qh);
    if (target.name == "jia") {
        if (num.value >= 11) {
            num.value = 12
            qh.style.display = "block"
        } else {
            num.value++
        }
    }
    if (target.name == "jian") {
        if (num.value > 1) {
            qh.style.display = "none"
            num.value--
        } else {
            num.value = 1
        }
    }
    if (target.innerHTML == "加入购物车") {
        alert('添加购物车成功')
    }
    //判断点击的对象是否为加入购物车按钮
    if (target.innerHTML == "加入购物车" || target.innerHTML == "立即购买") {
        //获取localStorage中的cartList3
        var cartList = localStorage.getItem("cartList3")
            //判断当前获取的cartList是否存在
        if (cartList) {
            //把localStorage中获取的内容转为数组对象
            cartList = JSON.parse(cartList)
            var a = 0 //判断当前添加的商品是否在localStorage中存在
                //遍历数组中所有元素啊
            cartList.forEach(item => {
                    //判断当前遍历的商品是否等于要添加的商品
                    if (item.id == dt.id) {
                        a++
                        item.shop_num++
                    }
                })
                //判断a变量是否等于0
            if (a == 0) {
                //修改商品数量
                dt.shop_num = num.value
                    //把当前对象追加到数组中
                cartList.push(dt)
            }
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify(cartList))
        } else {
            //修改当前商品数量
            dt['shop_num'] = num.value
                //把当前商品添加到localStorage中
            localStorage.setItem("cartList3", JSON.stringify([dt]))
        }


    }
    var nav = document.querySelector('.nav')
    var lis = nav.querySelectorAll('li')
    var box = document.querySelectorAll('.box')
        //给所有的li对象绑定点击事件
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function() {
            for (var j = 0; j < lis.length; j++) {
                lis[j].className = ''
                box[j].id = ''
            }
            //显示指定内容
            lis[i].className = 'active'
            box[i].id = 'show'
        }
    }

}