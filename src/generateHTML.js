function createManagerCard(managerInfo) {
  const htmlCard = `        <section class="card mb-3 shadow" style="max-width: 18rem;">
          <header class="card-header text-white bg-primary">
            <h2>${ managerInfo.getName() }</h2> 
            <h5><em>Manager</em></h5>
          </header>
          <article class="card-body text-black">
            <p class="card-text"><b>ID:</b> ${ managerInfo.getId() }</p>
            <p class="card-text"><b>Email:</b> <a href="mailto:${ managerInfo.getEmail() }" target="_blank">Send Email</a></p>
            <p class="card-text"><b>Office No.:</b> ${ managerInfo.getOfficeNumber() }</p>
          </article>
        </section>`;

  return htmlCard;
}

function createEngineerCard(engineerInfo) {
  const htmlCard = `
        <section class="card mb-3 shadow" style="max-width: 18rem;">
          <header class="card-header text-white bg-secondary">
            <h2>${ engineerInfo.getName() }<h3>
            <h5><em>Engineer</em></h5>
          </header>
          <article class="card-body text-black">
            <p class="card-text"><b>ID:</b> ${ engineerInfo.getId() }</p>
            <p class="card-text"><b>Email:</b> <a href="mailto:${ engineerInfo.getEmail() }" target="_blank">Send Email</a></p>
            <p class="card-text"><b>Github:</b> <a href="https://github.com/${ engineerInfo.getGitHub() }" target="_blank">${ engineerInfo.getGitHub() }</a></p>
          </article>
        </section>`;

  return htmlCard;
}

function createInternCard(internInfo) {
  const htmlCard = `
        <section class="card mb-3 shadow" style="max-width: 18rem;">
          <header class="card-header text-white bg-info">
            <h2>${ internInfo.getName() }</h2> 
            <h5><b>Intern</b></h5>
          </header>
          <article class="card-body text-black">
            <p class="card-text"><b>ID:</b> ${ internInfo.getId() }</p>
            <p class="card-text"><b>Email:</b> <a href="mailto:${ internInfo.getEmail() }" target="_blank">Send Email</a></p>
            <p class="card-text"><b>School:</b> ${ internInfo.getSchool() }</p>
          </article>
        </section>`;

  return htmlCard;
}

function renderCards(employeeInfo) {
  let employeeSection = ``;

  employeeInfo.forEach(employee => {
    if (employee.getRole() === 'Engineer') {
      employeeSection += createEngineerCard(employee);
    }
    else if (employee.getRole() === 'Intern') {
      employeeSection += createInternCard(employee);
    }
    else {
      employeeSection += createManagerCard(employee);
    }
  });

  return employeeSection
}

function generateHTML(employeeData) {
  // 
  const htmlPage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${ employeeData[0].getName() }'s Team</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link 
      rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" 
      crossorigin="anonymous">
    <style>
      /* Remove the navbar's default margin-bottom and rounded borders */ 
      .navbar {
        margin-bottom: 0;
        border-radius: 0;
      }
      
      /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
      .row.content {height: 450px}
      
      /* Set black background color, white text and some padding */
      footer {
        background-color: #555;
        color: white;
        padding: 15px;
      }
      
      /* On small screens, set height to 'auto' for sidenav and grid */
      @media screen and (max-width: 767px) {
        .row.content {height:auto;} 
      }
    </style>
  </head>
  <body>
    <!-- Header Section -->
    <nav class="navbar navbar-light bg-dark justify-content-center text-white">
      <h1>${ employeeData[0].getName() }'s Team</h1>
    </nav>

    <!-- Main Content Section -->
    <main class="container-fluid text-center">    
      <section class="row content card-deck justify-content-center align-items-center">
${ renderCards(employeeData) }
      </section>
    </main>

    <footer class="container-fluid text-center">
      <p>Created with My Coworkers & Me</p>
    </footer>

    <!-- JavaScript Section -->
    <script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" 
      crossorigin="anonymous">
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>

  </body>
</html>
`;

  return htmlPage;
}

module.exports = generateHTML;
