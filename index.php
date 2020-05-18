<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title> SPA </title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="js/table.js"></script>
    <? require "database/bd.php"; ?>
</head>

<body>
    <table>
        <thead>
            <tr>
                <td><select id="column">
                        <option>Выберите колонку</option>
                        <option value="1">Имя</option>
                        <option value="2">Количество</option>
                        <option value="3">Расстояние</option>
                    </select></td>
                <td><select id="condition">
                        <option>Выберите условие</option>
                        <option value="1">Равно</option>
                        <option value="2">Содержит</option>
                        <option value="3">Больше</option>
                        <option value="4">Меньше</option>
                    </select></td>
                <td><input type="text" placeholder="Значение" id="findValue">
                </td>
                <td><button onclick="filter()">Фильтр</button>
                </td>
            </tr>
            <tr>
                <th>Дата:</th>
                <th onclick="sort(1)">Имя:</th>
                <th onclick="sort(2)">Количество:</th>
                <th onclick="sort(3)">Расстояние:</th>
            </tr>
        </thead>
        <tbody id="table">
            <? require "resources/table.php"; ?>
        </tbody>
    </table>
    <div id="nav">
        <? require "resources/nav.php" ?>
    </div>
    <script type="text/javascript" src="js/page.js"></script>
</body>

</html>