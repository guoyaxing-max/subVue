<template>
  <div id="app">
    <nav>
      <router-link to="/swhy-service/swap-summary">One</router-link> |
      <router-link to="/swhy-service/swap-funds">Two</router-link> |
      <router-link to="/swhy-service/target-monitoring">Three</router-link> |
      <router-link to="/swhy-service/customer-target-monitoring">Four</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
