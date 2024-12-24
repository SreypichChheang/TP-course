<template>
    <div>
      <h1>Welcome to Page {{ $route.params.nb }}</h1>
      
      <router-view />
      <message/>
    </div>
  </template>
  <script>
  import message from './message.vue';
  
  export default {
    name: "Page",
    components: { message }, 
  };
  </script>
  
  