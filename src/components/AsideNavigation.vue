<template>
  <div v-if="asidenavigation">
    <div class="aside-navigation">
      <div class="mt-1 text-center profile">
        <b-avatar
          src="https://picsum.photos/125/125/?image=58"
          size="6rem"
          alt="avatar-mario"
        ></b-avatar>
        <h4 class="mx-2 mt-3">{{ message }}</h4>
      </div>
      <div class="social-links mt-3 text-center">
        <a href="#"><b-icon icon="facebook" class="mr-2"></b-icon></a>
        <a href="#"> <b-icon icon="twitter" class="mr-2"></b-icon></a>
        <a href="#"> <b-icon icon="instagram" class="mr-2"></b-icon></a>
        <a href="#"> <b-icon icon="linkedin" class="mr-2"></b-icon></a>
      </div>
      <div class="mt-3 d-flex flex-column">
        <div class="btnNav" @click="displayIndex">
          <b-icon icon="house-fill" font-scale="2" variant="dark"> </b-icon>
          Accueil
        </div>
        <div class="btnNav" @click="displayAbout">
          <b-icon icon="person-circle" font-scale="2" variant="dark"> </b-icon>
          A Propos
        </div>
        <div class="btnNav" @click="displayResume">
          <b-icon icon="file-earmark" font-scale="2" variant="dark"> </b-icon>
          Resume
        </div>
        <div class="btnNav" @click="displayPortfolio">
          <b-icon icon="file-earmark-word-fill" font-scale="2" variant="dark">
          </b-icon>
          PortFolio
        </div>
        <div class="btnNav" @click="displayContact">
          <b-icon icon="menu-button-wide-fill" font-scale="2" variant="dark">
          </b-icon>
          Contact
        </div>
      </div>    
</div>
</div>
<div v-else>
  <NaveBarCollapse />
</div> 
</template>
<script>
import PageDisplay from "../mixins/PageDisplay.js";
import NaveBarCollapse from "../components/NaveBarCollapse.vue";
export default {
  name: "AsideNavigation",

  data() {
    return {
      message: "Michael Mario Achille",
      asidenavigation:true
    };
  },
  components:{
    NaveBarCollapse
  },
  methods:{
    displayNavebar(){
      if(window.innerWidth<=768){
        this.asidenavigation=false;
      }
      else{
        this.asidenavigation=true;
      }
      
    }

  },
  mounted(){
    this.displayNavebar();
    window.addEventListener("resize",this.displayNavebar);
  },

  mixins: [PageDisplay],
};
</script>
<style lang="scss" scoped>
.aside-navigation {
  background-color: #000;
  height: 100vh;
  width: 20%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 10px;
  transition: all 0.5s;
  color: #ccc;
}
.btnNav {
  background-color: #000;
  color: #fff;
  border: none;
  width: 100%;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 1px solid #555;
}
.social-links a {
  font-size: 18px;
  display: inline-block;
  background: #212431;
  color: #fff;
  line-height: 1;
  padding: 8px 9px;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}
.profile img {
  margin: 15px auto;
  display: block;
  width: 120px;
  border: 8px solid #2c2f3f;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #f8f9fa;
}
a:hover {
  color: #42b983;
  text-decoration: none;
}
.btnNav:hover {
  color: #42b983;
  .b-icon {
    fill: #42b983;
  }
}

@media (max-width: 768px) {
  .aside-navigation {
    display: none;
  }
}
</style>
