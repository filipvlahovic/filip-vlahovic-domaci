<?php

$method = $_SERVER['REQUEST_METHOD'];



function nameValidation()
{
    if ((strpos($_POST['name'], " ")) == null || (strlen($_POST["name"])) > 50) {
        exit("Wrong name");
    }
}
nameValidation();







function mailValidation()
{
    if ((strpos($_POST['email'], "@")) == null || (strpos($_POST["email"], ".com")) ==  null) {
        exit("Wrong e-mail");
    }
}
mailValidation();






function phoneValidation()
{
    if (!preg_match('#^[0-9 +-/]*$#', $_POST['phoneNum']) || strlen($_POST['phoneNum']) < 3) {
        exit("Wrong phone number");
    }
}

phoneValidation();





function pictureValidation()
{
    if ($_FILES['picture']['size'] > 5000000) {
        exit("The image is not appropriate");
    }
    $pictureFormat = strtolower(pathinfo("images/" . basename($_FILES["picture"]["name"]), PATHINFO_EXTENSION));
    if ($pictureFormat != 'jpg' && $pictureFormat != 'svg' && $pictureFormat != 'png') {
        exit("It does not support this format");
    }
    move_uploaded_file($_FILES["picture"]["tmp_name"], "images/" . $_FILES["picture"]["name"]);
    echo "<h2>Upload successful!</h2>";
}

pictureValidation();







function inputCheck()
{
    if (empty($_POST['name']) == 1 || empty($_POST['email']) == 1 || empty($_POST['phoneNum']) == 1) {
        exit("You must fill in all fields");
    }
    if (!file_exists('images/')) {
        mkdir('images/');
    }
}
inputCheck();
