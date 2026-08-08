import API from "./axios";


export const getEmployees = () => {
    return API.get("/employees");
};


export const createEmployee = (employee) => {
    return API.post("/employees", employee);
};


export const getEmployeeById = (id) => {
    return API.get(`/employees/${id}`);
};


export const updateEmployee = (id, employee) => {
    return API.put(`/employees/${id}`, employee);
};


export const deleteEmployee = (id) => {
    return API.delete(`/employees/${id}`);
};




