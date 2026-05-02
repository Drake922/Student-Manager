const express = require("express");

const db = require("../db");


const router = express.Router();
// GET all students
router.get("/", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});


// ADD student
router.post("/", (req, res) => {
  const { name, email, course } = req.body;
  db.query(
    "INSERT INTO students (name, email, course) VALUES (?, ?, ?)",
    [name, email, course],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Student added" });
    },
  );
});
// UPDATE student
router.put("/:id", (req, res) => {
  const { name, email, course } = req.body;
  db.query(
    "UPDATE students SET name=?, email=?, course=? WHERE id=?",
    [name, email, course, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Student updated" });
    },
  );
});
// DELETE student
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM students WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Student deleted" });
  });
});
module.exports = router;
