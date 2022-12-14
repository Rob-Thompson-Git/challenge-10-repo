
const genHtml = function (data) {
    console.log(data);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="./styles.css" />
        <title>Challenge 10: OOP</title>
    </head>

    <body>
        <header>
            <nav class="navbar fixed-top navbar-light bg-light">
             <a class="navbar-brand" href="#">My Team</a>
            </nav>
        </header>

        <main class="row align-items-center">
             <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${data[0].name}</h5>
                     <p>${data[0].getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">id: ${data[0].id}</li>
                    <li class="list-group-item">email: ${data[0].email}</li>
                    <li class="list-group-item">office number: ${data[0].getOfficeNumber()}</li>
                </ul>
             </div>

            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${data[1].name}</h5>
                    <p>${data[1].getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">id: ${data[1].id}</li>
                    <li class="list-group-item">email: ${data[1].email}</li>
                    <li class="list-group-item">GitHub: ${data[1].getGithub()}</li>
                </ul>
            </div>

            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${data[2].name}</h5>
                    <p>${data[2].getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">id: ${data[2].id}</li>
                    <li class="list-group-item">email: ${data[2].email}</li>
                    <li class="list-group-item">school: ${data[2].getSchool()}</li>
                </ul>
            </div>
        </main>

    </body>
    </html>`;
}

module.exports = genHtml;