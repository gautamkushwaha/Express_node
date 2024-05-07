// @desc get all the contacts
//@route GET /api/contacts
//@acess public

const getContacts = (req, res)=>{
    res.status(200).json({message:"Get all the contacts"})
};

// @desc create new contacts
//@route POST /api/contacts
//@acess public

const createContact = (req, res)=>{
    console.log("The request body is ",req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are Mandatory !");
    }

    res.status(200).json({message:"create all the contacts"})
};

// @desc get new contacts
//@route GET /api/contacts/:id
//@acess public

const getContact = (req, res)=>{
    res.status(200).json({message:`Get  the contacts for ${req.params.id}`})
};

// @desc update new contacts
//@route PUT /api/contacts/:id
//@acess public

const updateContact = (req, res)=>{
    res.status(200).json({message:`update  the contacts for ${req.params.id}`})
};

// @desc delete new contacts
//@route DELETE /api/contacts/:id
//@acess public

const deleteContact = (req, res)=>{
    res.status(200).json({message:`Delete  the contacts for ${req.params.id}`})
};

module.exports ={
    getContacts,
     createContact,
     getContact,
     updateContact,
     deleteContact 
    };