const express = require("express");
const router = express.Router();
const { getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact } = require("../controllers/contactController")
 
// for getting all the contact 
router.route("/").get(getContacts).post(createContact);

// // for create  the contact 
// router.route("/").post(createContact);

// get  the contact by id
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// // for update  the contact 
// router.route("/:id").put(updateContact);

// // for delete  the contact 
// router.route("/:id").delete(deleteContact);

module.exports = router;