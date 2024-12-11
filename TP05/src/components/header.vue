<template>
<div class="container">
 
    <nav>
        <div class="header">
      <!-- Header link with active class -->
      <router-link to="/page1">Header</router-link>
    </div>
    <div class="btn">
      <!-- Navigation buttons with active class -->
      <router-link to="/page1" active-class="active">Page 1</router-link>
      <router-link to="/page2" active-class="active">Page 2</router-link>
      <router-link to="/page3" active-class="active">Page 3</router-link>
    </div>
    </nav>
       
</div>
  </template>
  
  <style>
  .container {
    border-bottom: 3px solid #ece7e7;
  }
  
  .header{
    display: flex;
    justify-content: start;
}
 .btn:hover {
    background: transparent;

}
.btn{
    color: #333;
    text-decoration: none;
    padding-left: 50px;
}
  nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  /* Active link color */
  .active {
    color: red;
  }
  </style>
  
  