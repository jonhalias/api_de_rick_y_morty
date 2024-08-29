<?php


$res = file_get_contents("https://rickandmortyapi.com/api/character");
$ch = json_decode($res);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/index.css">
    <title>Personajes de Rick y Morty</title>
</head>

<body>
    <div class="principal__container">
        <h1 class="container__title">Characters</h1>
        <div class="container__characters">
            <ul>
                <?php foreach ($ch->results as $pers) { ?>
                    <li><?= $pers->name ?></li>
                    <div class="images">
                        <img src="<?= $pers->image?>" alt="sttr" width="100" height="100">
                    </div>
                    <div class="info">
                        <p>Status: <?= $pers->status ?></p>
                        <p>Species: <?= $pers->species ?></p>
                    </div>
                <?php } ?>
            </ul>
        </div>
    </div>
    <script src="../src/index.js"></script>
</body>

</html>