<template>
    <div class="parent">
      <div class="form-container">
        <h2>Submit Data</h2>
        <form @submit.prevent="submitData" class="form">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>
  
          <div class="form-group">
            <label for="source">Source:</label>
            <input type="text" id="source" v-model="formData.source" required>
          </div>
  
          <div class="form-group">
            <label for="userAgent">User Agent:</label>
            <input type="text" id="userAgent" v-model="formData.userAgent" required>
          </div>
  
          <div class="form-group">
            <label for="timestamp">Timestamp:</label>
            <input type="datetime-local" id="timestamp" v-model="formData.timestamp" required>
          </div>
  
          <button type="submit" class="submit-button">Submit</button>
        </form>
      </div>
      <div>
        <submissionList />
      </div>
    </div>
  </template>
  
  <script>
  import submissionList from "./SubmissionList.vue"
  import { reactive } from 'vue';
  import { useStore } from 'vuex';
  import apiClient from '../services/api';
  
  export default {
    components: {
      submissionList,
    },
    setup() {
      const store = useStore();
  
      const formData = reactive({
        email: '',
        source: '',
        userAgent: '',
        timestamp: '',
      });
  
      const submitData = async () => {
        try {
          const response = await apiClient.post('/submit', {
            email: formData.email,
            source: formData.source,
            userAgent: formData.userAgent,
            timestamp: formData.timestamp,
          }, {
            headers: {
              'x-api-key': '47010c01-31d3-4ef8-ae76-9a6121416a51',
              'Content-Type': 'application/json',
            },
          });
          console.log('Data submitted:', response.data);
          // Optionally, perform any success actions or navigate to a different page
  
          // Clear the form data
          formData.email = '';
          formData.source = '';
          formData.userAgent = '';
          formData.timestamp = '';
        } catch (error) {
          console.error('Error submitting data:', error);
          // Optionally, handle error and show appropriate feedback to the user
        }
      };
  
      return {
        formData,
        submitData,
      };
    },
  };
  </script>
  
  <style>
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  h2 {
    text-align: center;
  }
  
  .form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="email"],
  input[type="text"],
  input[type="datetime-local"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 100%;
  }
  
  .submit-button {
    padding: 8px 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #45a049;
  }
  </style>
  