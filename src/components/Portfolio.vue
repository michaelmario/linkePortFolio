<template>
  <div class="container-fluid container-portfolio px-5">
    <b-navbar toggleable="lg" type="dark" class="bgDark">
      <b-navbar-brand>
        <router-link to="/portfolio">Portfolio</router-link>
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item
          ><router-link to="/realisation">Realisation </router-link></b-nav-item
        >
        <b-nav-item
          ><router-link to="/contact">Contact</router-link></b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
   <Realisation />
  </div>
</template>
<script>
import Realisation from "@/components/Realisation.vue";
export default {
  name: "Portfolio",
  components: {
    Realisation
  },
};
</script>
<style lang="scss" scoped>
.container-portfolio {
  height: auto;
  overflow: hidden;
  color: #fff;
  position: relative;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  width: 100%;
  margin-left: 1%;
  background-size: cover;
  object-fit: cover;
}
/*.container-portfolio:after{
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
  }*/
.bgDark {
  background-color: rgba(117, 190, 218, 0.5);
  color: #fff;
  position:fixed;
}
.container-portfolio:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;

  -webkit-transform: translateZ(0) scale(1, 1);
  -moz-transform: translateZ(0) scale(1, 1);
  -ms-transform: translateZ(0) scale(1, 1);
  -o-transform: translateZ(0) scale(1, 1);
  transform: translateZ(0) scale(1, 1);
  background-image: url("../assets/img/rain.jpg");

  -webkit-background-size: cover;
  background-size: cover;

  background-attachment: fixed;
  animation: increase 50s linear 10ms infinite;

  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  z-index: -2;
}
@-webkit-keyframes increase {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@-moz-keyframes increase {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes increase {
 
    0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
a {
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
}
</style>
