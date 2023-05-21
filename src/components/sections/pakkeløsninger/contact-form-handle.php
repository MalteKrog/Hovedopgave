<?php
if (isset($_POST['name']) && isset($_POST['email'])) {
    $valgtpakke = $_POST['valgtpakke'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $to = 'hej@nextlevelmedia.dk';
    $subject = 'Website form - Lead Gen';
    $custommsg = $_POST['message'];
    $body = '<html>
                <body>
                    <h2>Lead Generation - nextlevelmedia.dk</h2>
                    <br>
                    <p>'.$valgtpakke'</p>
                    <p><strong>Name: </strong>'.$name.'</p>
                    <p><strong>Email: </strong>'.$email.'</p>
                    <p><strong>They wrote: </strong>'.$custommsg.'</p>
                    </body>
             </html>';

    //headers
    $headers = "From: ".$name." <".$email.">\r\n";
    $headers .= "Reply-To: ".$email."\r\n";
    $headers .= "Mime-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset-utf-8";

    //Send
    $send = mail($to, $subject, $body, $headers);
    if ($send) {
        header( "Location: index.html" ); 
        exit; 
    } else {
        echo 'Error';
    }
}
?>