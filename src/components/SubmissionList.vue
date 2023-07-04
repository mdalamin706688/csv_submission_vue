<template>
    <div class="submission-list">
      <h2>Submission List</h2>
      <div class="submission-container">
        <ul>
          <li v-for="(submission, index) in submissions" :key="submission._id">
            <strong>Email:</strong> {{ submission.email }}<br />
            <strong>Source:</strong> {{ submission.source }}<br />
            <strong>User Agent:</strong> {{ submission.userAgent }}<br />
            <strong>Timestamp:</strong> {{ submission.timestamp }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive, onMounted, watch } from 'vue';
  import apiClient from '../services/api';
  
  export default {
    setup() {
      const state = reactive({
        submissions: [],
      });
  
      const fetchSubmissions = async () => {
        try {
          const response = await apiClient.get('/submissions', {
            headers: {
              'x-api-key': '47010c01-31d3-4ef8-ae76-9a6121416a51',
              'Content-Type': 'application/json',
            },
          });
          state.submissions = response.data;
        } catch (error) {
          console.error('Error fetching submissions:', error);
        }
      };
  
      // Fetch submissions on component mount
      onMounted(() => {
        fetchSubmissions();
      });
  
      // Watch for changes to 'submissions' and fetch new data when updated
      watch(
        () => state.submissions,
        () => {
          fetchSubmissions();
        }
      );
  
      return state;
    },
  };
  </script>
  
  <style>
  .submission-list {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  h2 {
    text-align: center;
  }
  
  .submission-container {
    max-height: 200px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #888 #f5f5f5;
  }
  
  .submission-container::-webkit-scrollbar {
    width: 8px;
  }
  
  .submission-container::-webkit-scrollbar-track {
    background: #f5f5f5;
  }
  
  .submission-container::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
    border: none;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>
  