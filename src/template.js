const generateManager = managerCard => {
    if(!managerCard) {
        return '';
    }
    // managerCard.map(({ name, id, email, office }) => {
    return `
        <section class="employee-card">
            <div class="card-header">
                <h2 class="employee-name">${managerCard.managerName}</h2>
                <h3 class="employee-title">Manager</h3>
            </div>
            <div class="card-body">
                <h3 class="employee-id">ID#: ${managerCard.managerId}</h3>
                <h3 class="employee-email">Email: ${managerCard.managerEmail}</h3>
                <h3 class="employee-office">Office: ${managerCard.managerOffice}</h3>
            </div>
        </section>
    `
};

const generateEngineer = engineerCard => {
    if(!engineerCard) {
        return '';
    }
    // engineerCard.map(({ name, id, email, github }) => {
    return `
        <section class="employee-card">
            <div class="card-header">
                <h2 class="employee-name">${engineerCard.name}</h2>
                <h3 class="employee-title">Engineer</h3>
            </div>
            <div class="card-body">
                <h3 class="employee-id">ID#: ${engineerCard.id}</h3>
                <h3 class="employee-email">Email: ${engineerCard.email}</h3>
                <h3 class="employee-office">Office: ${engineerCard.github}</h3>
            </div>
        </section>
    `
};

const generateIntern = internCard => {
    if(!internCard) {
        return '';
    }
    // internCard.map(({ name, id, email, github }) => {
    return `
        <section class="employee-card">
            <div class="card-header">
                <h2 class="employee-name">${internCard.name}</h2>
                <h3 class="employee-title">Intern</h3>
            </div>
            <div class="card-body">
                <h3 class="employee-id">ID#: ${internCard.id}</h3>
                <h3 class="employee-email">Email: ${internCard.email}</h3>
                <h3 class="employee-office">Office: ${internCard.github}</h3>
            </div>
        </section>
    `
};

module.exports = templateData => {
    const { intern, engineer, ...manager } = templateData || {};
    console.log(templateData);
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
    <section class="card-container">
        ${generateManager(manager)}
        ${generateEngineer(engineer)}
        ${generateIntern(intern)}
    </section>

</body>
</html>
    `
}