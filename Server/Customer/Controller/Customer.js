const CustomerModel = require("../Model/Customer");

const AddCustomer = async (req, res) => {
    try {
        const { FirstName, LastName, Phonenumber, Email } = req.body;

        const Customer = await CustomerModel.create({
            FirstName,
            LastName,
            Phonenumber,
            Email,
        });

        res.status(201).send(Customer);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const GetCustomerById = async (req, res) => {
    try {
        const { Id } = req.query;

        if (!Id) {
            return res.status(400).json({ message: "Customer ID is required" });
        }

        const customerData = await CustomerModel.findById(Id);

        if (!customerData) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).send(customerData);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const UpdateCustomer = async (req, res) => {
    try {
        
        const { FirstName, LastName, PhoneNumber, Email ,Id} = req.body;

        if (!Id) {
            return res.status(400).json({ message: "Customer ID is required" });
        }

        const Customer = await CustomerModel.findByIdAndUpdate(
            Id,
            { FirstName, LastName, PhoneNumber, Email },
            { new: true }
        );

        if (!Customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).send(Customer);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const DeleteCustomer = async (req, res) => {
    try {
        const { Id } = req.query;

        if (!Id) {
            return res.status(400).json({ message: "Customer ID is required" });
        }

        const Customer = await CustomerModel.findByIdAndDelete(Id);

        if (!Customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).send(Customer);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

module.exports = { AddCustomer, GetCustomerById, UpdateCustomer, DeleteCustomer };
