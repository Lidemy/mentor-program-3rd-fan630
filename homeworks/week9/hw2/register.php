<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
    <div id="form__wrapper">
         <form action="./handle_register.php" method="POST" class="form">
            <div>請輸入自訂帳號:
                <input type="text" name='username'>
            </div>
            <div>請輸入自訂密碼:
                <input type="password" name='password'>
            </div>
            <div>請輸入暱稱:
                <input type="nickname" name='nickname'>
            </div>
                <input type="submit" class='btn'>
            </form>
        </div>
</body>
</html>