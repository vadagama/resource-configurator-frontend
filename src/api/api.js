import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3001/',
});

export const API = {
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

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  setUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateUserStatus(status) {
    console.log(status);
    return instance.put(`profile/status`, { status: status });
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login/`);
  },
};
