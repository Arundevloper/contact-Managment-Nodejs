//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};

//@desc Create a new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log("The req body is",req.body);
    const {name,email,phone}=req.body;
    if(!name || !email|| phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({ message: "Create Contact" });
};

//@desc Get a specific contact
//@route GET /api/contacts/:id
//@access public
const getSpecificContact = (req, res) => {
    const contactId = req.params.id;
    res.status(200).json({ message: `Get Contact for ${contactId}` });
};

//@desc Update a specific contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    const contactId = req.params.id;
    res.status(200).json({ message: `Update Contact for ${contactId}` });
};


//@desc Update a specific contact
//@route delete /api/contacts/delete:id
//@access public

const deleteContact = (req, res) => {
    
    const contactId = req.params.id;
    res.status(200).json({ message: `Delete Contact for ${contactId}` });
};



module.exports = {
    getContact,
    createContact,
    getSpecificContact,
    updateContact,
    deleteContact
};
