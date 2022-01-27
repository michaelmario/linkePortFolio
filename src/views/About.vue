<template>
  <div class="container-about">
    <div class="about">
      <transition name="fade">
        <h1 v-if="show">À Propos</h1>
      </transition>
      <div class="w3-animate-left">
        <p>
          Bienvenue au bon endroit si vous cherchez un développeur web, je suis
          un développeur front-end, intégrateur web et créateur d'application
          web
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mt-3 w3-animate-left">
          <img src="../assets/img/ordinateur.jpg" alt="" />
        </div>
        <div class="col-md-8 mt-3">
          <transition name="fade">
            <h1 v-if="show">Développeur front-end !</h1>
          </transition>

          <p>
            Autodidacte, je m'efforce d'expliquer au client comment va se dérouler son projet du planning aux coûts. Et faire de mon mieux pour livrer les meilleurs produits et services à temps
          </p>
          <div class="row">
            <div class="col-md-6 mt-3">
              <ul v-for="(item,idx) in marioData" :key="idx">
                <li class="dataEntry"><strong>Date de naissance :</strong>{{item.dateofbirth}}</li>
                 <li class="dataEntry">
                  <strong>SiteWeb:</strong
                  ><a :href="item.website">Mauricode Academy</a>
                </li>
                <li class="dataEntry"><strong>Phone:</strong>{{item.phone}}</li>
                <li class="dataEntry"><strong>Ville:</strong>{{item.town}}</li>
               </ul>
            </div>
            <div class="col-md-6 mt-3">
              <ul v-for="(item , idx) in marioData" :key="idx">
                <li><strong>Age :</strong>{{item.age}}</li>
                <li><strong>Diplôme :</strong>{{item.diplôme}}</li>
                <li><strong>Courriel :</strong>{{item.courriel}}</li>
                <li><strong>GitHub : </strong><a :href="item.github">Mes dépôt sur Github</a></li>
              </ul>
            </div>
            <div class="">
            <p>
            Ce portfolio est une vitrine de l'utilisation de vue js qui est un framework de javascript pour ecrire des (components)  réutilisables
            
            </p>
            <p>Sur ce Site, je documenterai chaque action que j'ai faite pour montrer comment j'ai obtenu ces effets .<br>
            
            Vous avez une animation simple lorsque vous entrez. j'ai utilisé le rendu conditionnel avec une animation v-if show et keyframe css3 pour "fadeIn" et "animateLeft".<br> Pour remplir mes informations j'ai utilisé des données externes au format json</p>
            <h4 class="dataEntry">
              Afin que vous puissiez avoir une idée de la façon dont je pourrai contribuer à votre entreprise.
           </h4>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "../data.json";
export default {
  name: "About",
  data() {
    return {
      show: false,
      marioData:data
    };
  },
  components: {},
  created() {
    setTimeout(() => {
      this.show = !this.show;
    }, 1000);
  },
  methods:{
  
  },
  
};
</script>
<style>
.container-about {
  margin-left:5%;
}
.about {
  font-size: 20px;
  padding: 20px;
  border-bottom: 5px solid navy;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.w3-animate-left {
  position: relative;
  animation: animateleft 0.4s;
}
.dataEntry{
animation: fadeIn 1000ms 200ms ease-out backwards;

}
@keyframes animateleft {
  from {
    left: -300px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}
@-webkit-keyframes fadeIn {
  0% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
