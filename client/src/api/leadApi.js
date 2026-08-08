import API from "./axios";

export const getLeads = () => {
  return API.get("/leads");
};

export const createLead = (lead) => {
  return API.post("/leads", lead);
};

export const getLeadById = (id) => {
  return API.get(`/leads/${id}`);
};

export const updateLead = (id, lead) => {
  return API.put(`/leads/${id}`, lead);
};

export const deleteLead = (id) => {
  return API.delete(`/leads/${id}`);
};

export const assignLead = (id, employeeId) => {
  return API.put(`/leads/${id}/assign`, {
    employeeId
  });
};