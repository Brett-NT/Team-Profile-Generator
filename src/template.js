const template = templateHTML => {
    const { manager, engineer, intern} = templateHTML;
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Make My Team</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>
        <div>
            <h1 class="page-title">My Team</h1>
        </div>
    </header>
    <div class="container">
        <h2 class="employee-title">${manager.name}</h2>
    </div>
</body>
</html>
    `
}