<template>
  <div id="splash">
    <div id="intro">
      <h1>
        Hi, I'm <br />
        <span id="name-header">Reid Patterson</span>
      </h1>
      <p>I make interactive web experiences</p>
      <a href="/#portfolio" class="slide-button"
        ><p>
          <span class="bg"></span><span class="base"></span
          ><span class="text">My Work</span>
        </p></a
      >
      <a href="/#contact" class="slide-button"
        ><p>
          <span class="bg"></span><span class="base"></span
          ><span class="text">Contact</span>
        </p></a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
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

#name-header {
  color: var(--ruby);
}
</style>
