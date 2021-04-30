<template>
  <div id="nav">
    <div id="nav-content">
      <h2><a href="/#splash">Reid Patterson</a></h2>
      <div id="nav-links">
        <a href="/#about">About</a>
        <a href="/#portfolio">Portfolio</a>
        <a href="/#resume">Resume</a>
        <a href="/#contact">Contact</a>
        
        </div>

      <!-- <router-link to="/about">About</router-link> -->
    </div>
  </div>
  <router-view />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 350px;
  width: 100%;
}

#nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin: 0px;
  padding: 0px;
  height: 40px;
  width: 100%;
  background: #ffffffb7;
  position: fixed;
  z-index: 5;
}

#nav-content {
  max-width: 1200px;
  align-items: center;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#nav h2 {
  margin-right: 20px;
  margin-left: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0px 10px;
}
#nav a:hover {
  color: var(--primary);
}

a:active {
  color: white;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
