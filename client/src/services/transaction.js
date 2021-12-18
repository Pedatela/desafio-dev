import api from './api';

export default {
  getAll() {
    return api.get('transactions')
  },

  getOneByStoreName(store_name) {
    return api.get(`transaction/${store_name}`)
  },

  create(file) {
    return api.post('transactions', file)
  },
}
  
