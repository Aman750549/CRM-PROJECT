import API from "./axios";


export const getCustomers = () => {

    return API.get("/customers");

};


export const createCustomer = (customer) => {

    return API.post("/customers", customer);

};


export const getCustomerById = (id) => {

    return API.get(`/customers/${id}`);

};


export const updateCustomer = (id, customer) => {

    return API.put(`/customers/${id}`, customer);

};


export const deleteCustomer = (id) => {

    return API.delete(`/customers/${id}`);

};