const express = require("express");
const router = express.Router();
const {getContact, createContact, getSpecificContact, updateContact, deleteContact}=require("../controllers/contactController")


// Route to get all contacts
router.route("/").get(getContact).post(createContact);;

// Route to get a specific contact by ID
router.route("/:id").get(getSpecificContact).put(updateContact).delete(deleteContact);


module.exports = router;
