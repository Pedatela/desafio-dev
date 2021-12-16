import api from './api';

export default {
  getAll() {
    return api.get('transactions')
  },

  getOneByStoreName(store_name) {
    return api.get(`asset/${store_name}`)
  },

  create(file) {
    return api.post('transactions', file)
  },
}
  
