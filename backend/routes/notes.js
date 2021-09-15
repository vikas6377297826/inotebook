const express = require("express");
const router = express.Router();
const Note = require("../model/Note");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Get All the Notes using: GET "/api/auth/getuser". Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});

// ROUTE 2: Add a new Note  using: POST "/api/auth/addnote". Login required
router.post(
  "/addnote",
  fetchuser,
  [
    // this is validation of title and discription
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      //ye data body se aega or isme destructure ka upyog lia hai
      const { title, description, tag } = req.body;

      // if there are errors, return bed request and the error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

module.exports = router;
