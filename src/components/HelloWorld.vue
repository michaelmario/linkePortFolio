<template>
  <div class="hello d-flex flex-column justify-content-center pl-5">
    <h1 class="fw-bolder">{{ msg }}</h1>
     <Typewriter  title="Je suis developpeur web Junior  |" :words="['Application Web Mobile...','De Html5...', 'De CSS & CSS3...', 'De Javascript...', 'VueJs...']"> </Typewriter>
    </div>
</template>

<script>
import Typewriter from "./TypeWritter.vue";
export default {
  name: "HelloWorld",
   data() {
    return {
      msg: "Michael Mario Achille",
     
    };
  },
  components: {
    Typewriter
  },
   methods: {
     
  },
  computed:{
   
  },
  
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap { border-right: 0.08em solid #fff}
.hello {
  color: #fff;
  background-image:url('../assets/img/hero-bg.jpg');
  background-size: cover;
  padding:20px 25px;
   margin-left:10px;
  color:#fff;
  width:100%;
  height:100vh;
  position:fixed;
}

.hello h1 {
    margin: 0 0 10px 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: #fff;
}
@media(max-width:768px){
  .hello{
    margin-left:0px;
    position:relative;
    height:77vh;
  }
}

</style>
