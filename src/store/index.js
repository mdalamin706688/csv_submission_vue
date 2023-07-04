import { createStore } from 'vuex';
import apiClient from '../services/api';

const store = createStore({
  state: {},
  mutations: {},
  actions: {
    async submitData(_, payload) {
      try {
        const response = await apiClient.post('/submit', payload);
        return response.data;
      } catch (error) {
        console.error('Error submitting data:', error);
        throw error;
      }
    },
  },
});

export default store;
