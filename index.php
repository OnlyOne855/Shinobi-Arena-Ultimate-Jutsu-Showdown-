<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ninja = $_POST['ninja'];
    $file = 'purchased_ninjas.txt';
    $current = file_get_contents($file);
    $current .= $ninja . "\n";
    file_put_contents($file, $current);
    echo "Ninja purchased successfully!";
} else {
    echo "Invalid request.";
}
?>
