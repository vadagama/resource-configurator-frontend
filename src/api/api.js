import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3001/',
});

export const API = {
  //Services
  getServices() {
    return instance.get(`services`);
  },
  getServicesFilteredByType(id) {
    return instance.get(`services/?type=${id}`);
  },
  getResultTable() {
    return instance.get(`result-table`);
  },
  getServiceTypes() {
    return instance.get(`types`);
  },

  //My configuration
  getConfig() {
    return instance.get(`config`);
  },
  addItemToConfig(object) {
    return instance.post(`config`, object);
  },
  deleteItemFromConfig(itemId) {
    return instance.delete(`config/${itemId}`);
  },
  changeItemFromConfig(object) {
    return instance.put(`config`, { object });
  },
  saveConfig(items) {
    return instance.post(`saved_configs`, items);
  },

  //Saved configuration
  getSaved() {
    return instance.get(`saved_configs`);
  },
  addConfigToSaved(object) {
    return instance.post(`saved_configs`, object);
  },
  deleteConfigFromSavedAC(itemId) {
    return instance.delete(`saved_configs/${itemId}`);
  },
};
