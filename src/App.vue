<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style src="./normalize.css"></style>
<style lang="scss">
body, html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}

html {
  font-size: 62.5%; // 1.0rem = 10px
}

body {
  font-family: 'SF Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  'Helvetica Neue', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
  'Droid Sans', sans-serif;
  font-size: 1.2rem;
}

#app {
  background-color: #050505;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  height: 100%;
  width: 100%;
}

h3 {
  font-size: 1.4rem;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
