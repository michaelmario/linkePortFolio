<template>
  <div class="container-resume">
    <div class="competance">
      <transition name="fade">
        <h1 v-if="show">Compétances</h1>
      </transition>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="resume-item mt-5 w3-animate-left">
          <div
            v-for="(item, index) in resume"
            :key="index"
            class="resume-item-inner card"
          >
            <h5 class="ml-2 py-2">
              <b-icon icon="patch-check-fill" class="mr-2"></b-icon>
              {{ item.title }} {{ item.name }}(RNCP)
            </h5>
            <ul>
              <li>{{ item.bloc1 }}</li>
              <li>{{ item.bloc2 }}</li>
              <li>{{ item.bloc3 }}</li>
              <li>{{ item.bloc4 }}</li>
              <li>{{ item.bloc5 }}</li>
              <li>{{ item.bloc6 }}</li>
              <li>{{ item.bloc7 }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="resume-item mt-5 w3-animate-left">
          <div
            v-for="(item, index) in simplon"
            :key="index"
            class="resume-item-inner card"
          >
            <h5 class="ml-2 py-2">
              <b-icon icon="patch-check-fill" class="mr-2"></b-icon>
              {{ item.name }} {{ item.title }}
            </h5>
            <ul>
              <li>{{ item.bloc1 }}</li>
              <li>{{ item.bloc2 }}</li>
              <li>{{ item.bloc3 }}</li>
              <li>{{ item.bloc4 }}</li>
              <li>{{ item.bloc5 }}</li>
              <li>{{ item.bloc6 }}</li>
              <li>{{ item.bloc7 }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="resume-item mt-5 w3-animate-left">
          <div
            v-for="(item, index) in freeCodeCamp"
            :key="index"
            class="resume-item-inner card"
          >
            <h5 class="ml-2 py-2">
              <b-icon icon="patch-check-fill" class="mr-2"></b-icon>
              {{ item.name }} {{ item.title }}
            </h5>
            <ul>
              <li>{{ item.bloc1 }}</li>
              <li>{{ item.bloc2 }}</li>
              <li>{{ item.bloc3 }}</li>
              <li>{{ item.bloc4 }}</li>
              <li>{{ item.bloc5 }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="resume-item mt-5 w3-animate-left">
          <div class="resume-item-inner card" >
            <h5 class="TextCompetance"> <b-icon icon="gear-fill" aria-hidden="true" class=""></b-icon> Je recherche un Contract d'alternance </h5>
            <p><strong>Des compétences sans test dans le monde réel du travail ne servent à rien, si vous avez besoin de mes compétences appelez moi je me ferai un plaisir d'être à votre service.</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Resume",
  data() {
    return {
      show: false,
      resume: [
        {
          name: "OpenClassRoom",
          title: "Développeur Web",
          bloc1: "Intégrer une page web depuis une maquette",
          bloc2: "Créer un site web multi pages",
          bloc3: "Optimiser la visibilité d'un site web",
          bloc4: "Créer un site web dynamique",
          bloc5: "Créer un site web avec une base de données",
          bloc6:
            "Interagir avec l'utilisateur et des services externes en JavaScript",
          bloc7: "Assurer en interne la bonne gestion des données",
        },
      ],
      simplon: [
        {
          name: "Simplon",
          title: "Certification RNCP",
          bloc1: "Développer le back",
          bloc2: "Développer le front",
          bloc3: "Déployer l’application web",
          bloc4: "Assurer la sécurité de l’application web",
          bloc5: "Travailler en équipe",
          bloc6: "Être autonome et auto-apprendre",
          bloc7:
            "S’exprimer sur des éléments techniques auprès de ses collaborateurs",
        },
      ],
      freeCodeCamp: [
        {
          name: "freeCodeCamp",
          title: "Certification Site Web Adatatif",
          bloc1: "Créer une page d'hommage",
          bloc2: "Créer un Formulaire d'enquête",
          bloc3: "Construire une page de destination de produit",
          bloc4: "Créer une page de documantation technique",
          bloc5: "Construire un siteWeb de portfolio ",
        },
      ],
    };
  },
  components: {},
  created() {
    setTimeout(() => {
      this.show = !this.show;
    }, 1000);
  },
};
</script>
<style>
.container-resume {
  margin-left: 10%;
  height: 800px;
}
.competance {
  font-size: 20px;
  padding: 20px;
  border-bottom: 5px solid navy;
}
.container-resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid #1f5297;
  position: relative;
}
.container-resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #fff;
  border: 2px solid #1f5297;
}
.resume-item-inner {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  position: relative;
}
.TextCompetance{
  font-size: 20px;
  padding: 20px;
  border-bottom: 5px solid navy;
  margin-left:10px;
  padding:10px;
  color:green;
  font-weigth:bolder;
}

</style>
