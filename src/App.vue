<template>
  <div id="nav">
    <div id="nav-content">
      <h2><a href="/#splash">Reid Patterson</a></h2>
      <div id="nav-links">
        <a href="/#portfolio">Portfolio</a>
        <a href="/#about">About</a>

        <a href="/#resume">Resume</a>
        <a href="/#contact">Contact</a>
      </div>

      <!-- <router-link to="/about">About</router-link> -->
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
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
  top: 0;
  padding: 0px;
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

#nav-links {
  display: flex;
  flex-wrap: wrap;
}

a:active {
  color: white;
}

#nav a.router-link-exact-active {
  color: white;
}

$base: #0f192300;
$white: #ece8e1;
$pink: var(--primary);
$height: 54px;
$transition: 0.3s ease-out all;

.slide-button {
  width: 100%;
  max-width: 240px;
  height: $height;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: 900;
  color: $pink;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  margin: 10px 0;

  &:after,
  &:before {
    content: "";
    width: 1px;
    position: absolute;
    height: 8px;
    background: $base;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &:before {
    right: 0;
    left: initial;
  }
  & p {
    margin: 0;
    height: $height;
    line-height: $height;
    box-sizing: border-box;
    z-index: 1;
    left: 0;
    font-size: 1.2rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    & span.base {
      box-sizing: border-box;
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      left: 0;
      border: 2px solid $pink;
      &:before {
        content: "";
        width: 2px;
        height: 2px;
        left: -1px;
        top: -1px;
        background: $base;
        position: absolute;
        transition: $transition;
      }
    }
    & span.bg {
      left: -5%;
      position: absolute;
      background: $pink;
      width: 0;
      height: 100%;
      z-index: 3;
      transition: $transition;
      transform: skewX(-10deg);
    }
    & span.text {
      z-index: 4;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;

      &:after {
        content: "";
        width: 4px;
        height: 4px;
        right: 0;
        bottom: 0;
        background: $base;
        position: absolute;
        transition: $transition;
        z-index: 5;
      }
    }
  }
  &:hover {
    & span.bg {
      width: 110%;
    }
    & span.text {
      color: var(--ruby);
    }
  }
}
</style>
