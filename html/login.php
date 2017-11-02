<?php
require_once 'config.php';
$username = $password = "";
$username_err = $password_err = "";

if(empty(trim($_POST["username"])))
  {
    $username_err = 'Please enter username.';
  }
else{
    $username = trim($_POST["username"]);
    }

if(empty(trim($_POST['password'])))
    {
      $password_err = 'Please enter your password.';
    }
else{
    $password = trim($_POST['password']);
    }

if(empty($username_err) && empty($password_err)){

        $sql = "SELECT password_hashed FROM profiles WHERE username = ?";
        $sql2= "UPDATE attdncb7 set PC=PC+1 WHERE username = ?";

        if($stmt = mysqli_prepare($link, $sql))
        {
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_username);
            // Set parameters
            $param_username = $username;
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // Store result
                mysqli_stmt_store_result($stmt);
                // Check if username exists, if yes then verify password
                if(mysqli_stmt_num_rows($stmt) == 1){

                    // Bind result variables

                    mysqli_stmt_bind_result($stmt, $username, $hashed_password);

                    if(mysqli_stmt_fetch($stmt)){

                        if(password_verify($password, $hashed_password)){

                            /* Password is correct, so start a new session and

                            save the username to the session */
    



                        } else{

                            // Display an error message if password is not valid

                            $password_err = 'The password you entered was not valid.';

                        }

                    }

                }
                else
                {
                    // Display an error message if username doesn't exist
                    $username_err = 'No account found with that username.';
                }

            }
            else
            {
                echo "Oops! Something went wrong. Please try again later.";
            }

        }
        // Close statement
        mysqli_stmt_close($stmt);
    }
    // Close connection
    mysqli_close($link);

?>
