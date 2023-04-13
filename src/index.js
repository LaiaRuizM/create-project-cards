const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");
let connection;

const server = express();
server.use(cors());
server.use(express.json({ limit: "25mb" }));

// Configurar el motor de plantillas
server.set("view engine", "ejs");

const serverPort = process.env.PORT || 4001;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//Especificar en el server use
server.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

async function api() {
  const resp = await fetch('');
  const data = await resp.json();
  console.log(data);
}

async function getConnection() {
  const connection = await mysql.createConnection({
    host: "sql.freedb.tech",
    database: "freedb_proyectos_y_ya_estaría",
    user: "freedb_adalabers",
    password: "H8@!*NM%M@K2Gj7",
  })
    await connection.connect();

  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );
  return connection;
  }

server.get("/api/projects/all", async (req, res) => {
  console.log("Pidiendo a la base de datos");
    let sql= "SELECT * FROM projects, authors WHERE projects.fkAuthor = authors.idAuthor";  
    const connection = await getConnection();
    const [results, fields] = await connection.query(sql);
    res.json(results);
    connection.end();
});

server.post("/api/projects/add", async (req, res) => {
  //console.log('');

  const data = req.body;
  console.log(data);

  let sqlAuthor = "INSERT INTO authors (autor, job, image) VALUES (?, ?, ?)";
  let valuesAuthor = [data.autor, data.job, data.image];
  const connection = await getConnection();
  const [results, fields] = await connection.query(sqlAutor, valuesAutor);
      let sqlProject =
        "INSERT INTO projects (name, slogan, repo, demo, technologies, `desc`, photo, fkAuthor) VALUES(?, ?, ?, ?, ?, ?, ?, ?) ";

      let valuesProject = [
        data.name,
        data.slogan,
        data.repo,
        data.demo,
        data.technologies,
        data.desc,
        data.photo,
        results.insertId,
      ];
      const [resultsInsert] = await connection.query(sqlProject, valuesProject);
          let response = {
            success: true,
            cardURL: `https://proyectos-y-ya-estaria.onrender.com/api/projects/detail/${results.insertId}`,
          };
          res.json(response);
       connection.end();
});

// DINÁMICOS
// Insertar un proyecto Endpoint / projects / add
server.get("/api/projects/detail/:projectID", async (req, res) => {
  const projectId = req.params.projectID;
  const sql =
    "SELECT * FROM projects, authors WHERE projects.fkAuthor=authors.idAuthor and idProject = ?";
  const connection = await getConnection();
  const [results, fields] = await connection.query(sql, [projectId]);
      res.render("project_detail", results[0]);
    connection.end();
});

// ESTÁTICOS
server.use(express.static("./src/public-react"));
server.use(express.static("./src/public-images"));
server.use(express.static("./src/public-css/"));
