<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <AsideNavigation />
        </div>
        <div class="col-md-10">
          <div id="isLoading">
          <HelloWorld /> 
          </div> 
          <router-view />        
           </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AsideNavigation from "@/components/AsideNavigation.vue";
import PageDisplay from "../mixins/PageDisplay.js";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
   data() {
    return {
     
    };
  },
  components: {
    AsideNavigation,
    HelloWorld,
    Footer
  },
  
   mixins: [PageDisplay], 
   
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
