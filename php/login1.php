<?php
    header("content-type:text/html;charset=utf-8");
    if(mysqli_connect_error($link)){
        die("连接失败：".mysqli_connect_error());
    }else{
        echo "ok";
    }
    mysqli_set_charset($link,"utf8");
    $type = $_POST["type"];
    $uname = $_POST['username'];
    $upass = $_POST['password'];
    $uemail=$_POST['email'];
    $uphone = $_POST['uphone'];
    // 建立连接
    $link =  mysqli_connect('localhost','root','','mk');
    if($type==='add'){
        $sql = "SELECT * FROM `login` WHERE `user`='$uname'";
        $res = mysqli_query($link,$sql);
        $row = mysqli_fetch_all($res,MYSQLI_ASSOC);
        if(count($row)>0){
            echo '{"err":2,"msg":"对不起用户名已经占用"}';
        }else{
            $sql1 = "INSERT INTO `login`  VALUES (null,'$uname','$uemail','$upass','$uphone')";
            $res1 =  mysqli_query($link,$sql1);
            $num = mysqli_affected_rows($link);//返回受影响的条数\
            if( $num > 0 ){
                echo '{"err":3,"msg":"注册成功"}';
            }else{
                echo '{"err":4,"msg":"注册失败"}';
            };

            mysqli_close($link);
        };
    };
    echo $uname;

?>