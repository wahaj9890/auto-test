<template>
  <div id="app">
    <div class="row">
      <div class="col">
        <LeftSlider />
      </div>
      <div class="col-6">
        <BodyDetails />
      </div>
      <div class="col mx-4">
        <RightSlider />
      </div>
    </div>
  </div>
</template>

<script>
/*eslint no-unused-vars: "off"*/
/*eslint vue/no-unused-components: "off"*/
import LeftSlider from "./components/LeftSlider.vue";
import BodyDetails from "./components/BodyDetails.vue";
import RightSlider from "./components/RightSlider.vue";

export default {
  name: "App",

  components: {
    LeftSlider,
    BodyDetails,
    RightSlider,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
