<template>
    <div>
      <button @click="downloadCSV" class="download-button">Download CSV Data</button>
    </div>
  </template>
  
  <script>
  import apiClient from '../services/api';
  
  export default {
    methods: {
      async downloadCSV() {
        try {
          const response = await apiClient.get('/submissions/csv', {
            headers: {
              'x-api-key': '47010c01-31d3-4ef8-ae76-9a6121416a51',
              'Content-Type': 'application/json',
            },
            responseType: 'blob',
          });
  
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'submissions.csv');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error('Error downloading CSV:', error);
        }
      },
    },
  };
  </script>
  
  <style>
  .download-button {
    padding: 8px 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .download-button:hover {
    background-color: #45a049;
  }
  </style>
  