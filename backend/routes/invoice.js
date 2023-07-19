const express = require("express");
const router = express.Router();
var fetchUser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");
const Invoice = require("../models/Invoice");
// const multer = require('multer');
// File storage 

// const Storage = multer.diskStorage({
//   destination:'../bills',
//   filename:(req,file,cb)=>{
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({
//   storage:Storage
// }).single('testImage')
// Route 1: Get All the Entries using: GET "/api/invoice/getuser". Login required
router.get("/fetchEntries", fetchUser, async (req, res) => {
  try {
    const invoices = await Invoice.find({ user: req.user.id });
    res.json(invoices);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route 2: Add a new Entrie using: POST "/api/invoice/addInvoice". Login required
router.post(
  "/addInvoice",
  fetchUser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag} = req.body;
      //If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
         const invoice = new Invoice({
            title,
            description,
            tag,
            user: req.user.id,
          });
          
     
      // console.log(invoice)
      // console.log(file)
      const savedInvoice = await invoice.save();
      res.json(savedInvoice);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route 3: Update an existing Invoice-Frame using: Put "/api/invoice/updateInvoice". Login required
router.put("/updateInvoice/:id", fetchUser, async (req, res) => {
  const { title, description, tag } = req.body;
  // Create a newInvoice object
  try {
  const newInvoice = {};
  if (title) {
    newInvoice.title = title;
  }
  if (description) {
    newInvoice.description = description;
  }
  if (tag) {
    newInvoice.tag = tag;
  }

  //Find the invoice-frame to be updated...
  let invoice = await Invoice.findById(req.params.id);
  if (!invoice) {
    return res.status(404).send("Not Found");
  }
  if (invoice.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed");
  }
  invoice = await Invoice.findByIdAndUpdate(
    req.params.id,
    { $set: newInvoice },
    { new: true }
  );
  res.json({ invoice });
  }
  catch (error) {
   console.error(error.message);
   res.status(500).send("Internal Server Error");
 }
});
// Route 4: Delete an existing Invoice-Frame using: delete "/api/invoice/deleteInvoice". Login required
router.delete("/deleteInvoice/:id", fetchUser, async (req, res) => {
   try {
  //Find the invoice-frame to be deleted...
  let invoice = await Invoice.findById(req.params.id);
  if (!invoice) {
    return res.status(404).send("Not Found");
  }
  //Allow deletion only if user owns this Invoice frame
  if (invoice.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed");
  }
  invoice = await Invoice.findByIdAndDelete(req.params.id);
  res.json({ "Success!":"Invoice frame is Deleted" , invoice: invoice});
}
catch (error) {
   console.error(error.message);
   res.status(500).send("Internal Server Error");
 }
});
module.exports = router;
