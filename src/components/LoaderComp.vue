<template>
  <div class="preloader">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
   name:'LoaderComp',
}
</script>

<style>
.preloader {
  /* Add styles to center the preloader on the page */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader {
  /* Add styles for your loading animation */
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>