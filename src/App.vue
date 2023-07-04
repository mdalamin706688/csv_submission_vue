<template>
  <div class="container">
    <h1 class="center">Data Form</h1>
    <div class="csv">
      <DownloadCsvVue />
    </div>

    <DataForm />
  </div>
</template>

<script>
import DataForm from './components/DataForm.vue';
import DownloadCsvVue from './components/DownloadCsv.vue';

export default {
  components: {
    DataForm,
    DownloadCsvVue
  },
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
}

.center {
  text-align: center;
}

.csv {
  display: flex;
  justify-content: center;
  justify-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
