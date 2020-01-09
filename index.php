<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Redactor</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">


    <link rel="stylesheet" href="css/estilos.css">


    <script src="js/jquery-3.4.1.js"></script>

</head>
<body>
    <header class="container_flex_filas flex_centrado mb-1">
        <img src="imgs/logo_redactor_png.png" alt="Logo Redactor" title="Logo Redactor">
        <h1>Redactor</h1>
        <nav>
            <ul>
                <li>escribí!</li>
                <li>los últimos cuentos</li>
                <li>histórico</li>
    </ul>
    </nav>
    </header>

    <main class="container_flex_columnas flex_centrado">
        <section id="intro">    
            <h2>La app que mejora tu creatividad</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid quibusdam, dolor sed non voluptatibus vitae eveniet fugit maxime cupiditate magni quisquam repudiandae consectetur! Dolore repellat dolores assumenda a! Harum, maxime.</p>
            <form class="mt-05" id="form_boton_comenzar">
                <button type="submit">Go!</button>
            </form>
        </section>

        <section id="escritura_cuento" class="hidden">
            <h2>Escribí un cuento con...</h2>
            <ul>
                <li id="primera_consigna"></li>
                <li id="segunda_consigna"></li>
                <li id="tercera_consigna"></li>
            </ul>

            <p id="contador">30:00</p>
            <form action="" class="mt-05" id="form_cuento">
                <textarea name="" id="textbox_cuento" cols="40" rows="5" placeholder="Escribí tu cuento acá!"></textarea>
                <button type="submit" class="mt-05">¡Basta para mi!</button>
            </form>

        </section>
    </main>


    <script src="js/code.js"></script>

</body>
</html>
