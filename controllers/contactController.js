const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
});

//@desc Create a new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The req body is", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) { // Corrected condition
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({ message: "Create Contact" });
});

//@desc Get a specific contact
//@route GET /api/contacts/:id
//@access public
const getSpecificContact = asyncHandler(async (req, res) => {
    const contactId = req.params.id;
    res.status(200).json({ message: `Get Contact for ${contactId}` });
});

//@desc Update a specific contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const contactId = req.params.id;
    res.status(200).json({ message: `Update Contact for ${contactId}` });
});


//@desc Update a specific contact
//@route DELETE /api/contacts/delete/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
    const contactId = req.params.id;
    res.status(200).json({ message: `Delete Contact for ${contactId}` });
});

module.exports = {
    getContact,
    createContact,
    getSpecificContact,
    updateContact,
    deleteContact
};
