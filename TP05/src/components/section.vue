<template>
    <div>
      <h2>This is Section {{ $route.params.id }} of Page {{ $route.params.nb }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    name: "Section",
  };
  </script>
  