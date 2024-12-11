<template>
    <aside class="menu">
      <ul>
        <li><button @click="click" class="menu-item">Menu</button></li>
        <li><button class="menu-item">Section 1</button></li>
        <li><button class="menu-item">Section 2</button></li>
        <li><button class="menu-item">Section 3</button></li>
        <li><button class="menu-item">Section 4</button></li>
      </ul>
    </aside>
  </template>
  
  <style>
  .menu {
    width: 200px;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
  }
  
  .menu ul {
    list-style: none;
    padding: 0;
  }
  
  .menu li {
    margin-bottom: 10px;
  }
  
  .menu-item {
    width: 100%;
    padding: 10px;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
  }
  
  .menu-item:hover {
    background-color: #ececec;
  }
  </style>
  