<!-- Nirmala Kuhl
This is a short helper program to set up a clean database on your local development machine
 -->
<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>

<?php  

	$con = new mysqli("localhost", "mytestuser", "mytestuser123", "mytestdb");

	if ($con->connect_errno) {

		printf("connection failed: %s\n", $con->connect_error());
		exit();
	}

	$res = $con->query("DROP DATABASE EasyCarDB");
	$res = $con->query("CREATE DATABASE EasyCarDB");


	echo "<table border =3><tr><td>database created successfully</td></tr></table>";
	$res = $con->query("USE EasyCarDB");
	$res = $con->query("CREATE TABLE Users (
						user_id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
						FirstName VARCHAR(30) NOT NULL,
						LastName VARCHAR(30) NOT NULL,
						UserName VARCHAR(15) NOT NULL,
						Password VARCHAR(15) NOT NULL,
						Email VARCHAR(60),
						Address VARCHAR(30)
						)");
	$res = $con->query("CREATE TABLE Cars (
				car_id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
				user_id INT,
				Brand VARCHAR(30),
				Model VARCHAR(30),
				LicensePlate VARCHAR(15),
				Year INT,
				Address VARCHAR(30),
				Zip INT,
				Rate FLOAT ,
				Image VARBINARY(1111)
				)");
	$res = $con->query("CREATE TABLE Transactions (
				transaction_id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
				user_id INT,
				car_id INT,
				StartDateTime DATETIME,
				EndDateTime DATETIME,
				StartAddress VARCHAR(30),
				EndAddress VARCHAR(30),
				TotalCost FLOAT,
				ConfirmationNumber VARCHAR(10)	
				)");

	$res = $con->query("CREATE TABLE CarRatings (
				rating_id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
				transaction_id INT,
				CarRating FLOAT
				)");
	$res = $con->query("CREATE TABLE RenterRatings (
				rating_id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
				transaction_id INT,
				RenterRating FLOAT
				)");

	$con->close();
?>  
 
 </body>
</html>