const db = require('../config/db')

const projectDisplay = (req, res) => {
  const { all } = req.query;

  let sql;
  if (all === 'true') {
    sql = 'SELECT * FROM project ORDER BY id DESC';
  } else {
    sql = 'SELECT * FROM project ORDER BY id DESC LIMIT 4';
  }

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'database error' });
    }
    res.status(200).json(result);
  });
};

const displayblog = (req, res) => {
    const sql = 'SELECT * FROM blog ORDER BY id DESC LIMIT 3'

    db.query(sql, (err, resu) => {
        if (err) {
            res.status(500).json({message : 'error to fetch blogs'})
        }
        res.status(200).json(resu)
    })
     
}

module.exports = { projectDisplay ,displayblog};
