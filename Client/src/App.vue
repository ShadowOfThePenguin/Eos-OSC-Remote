<template>
  <div id="app" app-data="true" dark>
    <div id="nav" v-if="signedIn">
      <router-link to="/">NoServer</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/logIn">login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    signedIn: Boolean
  },
  calculated: {
    height: function() {
      return window.innerHeight;
    },
    width: function() {
      return window.innerWidth;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
