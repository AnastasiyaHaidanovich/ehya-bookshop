<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
$title = "Новое обращение Ehya Bookstore";

if (isset($_POST['button-booking'])){
    $body = "
    <h2>Новое письмо</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br>
    <b>Почта:</b> $email<br><br>
    <b>Сообщение:</b><br>$message
    ";
} else if (isset($_POST['button-mail'])){
    $body = "
    <h2>Новое письмо</h2>
    <b>Почта:</b> $email
    ";
} else{
    $body = "
    <h2>Неизвестное обращение</h2><br>
    $name<br>
    $phone<br>
    $message<br>
    $email
    ";
};

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'anastasiya.gaidanovich@gmail.com'; // Логин на почте
    $mail->Password   = 'Ufql9900cool'; // Пароль на почте 
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('anastasiya.gaidanovich@gmail.com', 'Настя Гайданович'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('anastasia.gaidanovich@yandex.by');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}


// Отображение результата
header('Location: thankyou.html');
exit;

// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);