const {AddCustomer,GetCustomerById, UpdateCustomer, DeleteCustomer} = require("../Controller/Customer");
const express = require("express")
const router = express.Router()



router.post("/addcustomer",AddCustomer);
router.get("/getcustomer",GetCustomerById);
router.put("/update",UpdateCustomer);
router.delete("/deletecustomer",DeleteCustomer);



module.exports = router;
