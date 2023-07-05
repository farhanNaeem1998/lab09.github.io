<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the form data
    $name = $_POST['name'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $address = $_POST['address'];

    // Validate and sanitize the form data (you can add your validation logic here)

    // Connect to the database
    $servername = "localhost"; // Replace with your server name
    $username = ""; // Replace with your database username
    $password = ""; // Replace with your database password
    $dbname = "C:/xampp/mysql/data"; // Replace with your database name

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and execute the database query
    $sql = "INSERT INTO students (name, gender, email, address) VALUES ('$name', '$gender', '$email', '$address')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Data saved successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
} else {
    // If the form is not submitted, redirect or display an error message
    echo "Form submission error!";
}
?>
