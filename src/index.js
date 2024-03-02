const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

//1 crear el servidor
const server = express();
server.use(cors());
server.use(express.json({ limit: '25mb' }));
const port = 5001;

server.listen(port, () => {
  console.log(
    `el servidor se esta ejecutando en el puerto http://localhost:${port}`
  );
});

async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'giftList',
  });
  await connection.connect();

  if (connection) {
    console.log('conexion ejecutandose');
  } else {
    console.log('hay un error');
  }

  return connection;
}

//enpoints

server.get('/toys', async (req, res) => {
  const conex = await getConnection();
  const selectCategory = 'SELECT * FROM toys';
  const [results] = await conex.query(selectCategory);
  // console.log(results);

  conex.end();
  res.json({ success: true, data: results });
});

// const staticServer = './web/dist';
// server.use(express.static(staticServer));
