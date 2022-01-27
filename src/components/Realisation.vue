<template>
<div class="container-realisation">
<div class="row">
<div class="col-md-4" v-for="cardImage in reaImg" :key="cardImage.title"  @click="openModal(cardImage)">
<div class="card">
  <b-img :src="cardImage.src" fluid-grow alt="Fluid-grow image"></b-img>
  </div>
  </div>
  </div>
    <b-modal ref="modal-1" :title="CardModal.title">
    <b-img :src="CardModal.src" fluid-grow alt="Fluid-grow image"></b-img>
    <ul class="my-4" >
    <li v-for="des in  CardModal.description" :key="des">{{des}}</li>
    </ul>
  </b-modal>
  </div>
</template>
<script>
export default{
    name:"Realisation",
    data(){
        return{
         reaImg:[
            {
                src:"https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/siteframework.png?alt=media&token=a62198b4-aadd-479d-b3d8-d1024a02a583",
                alt:"siteframework",
                title:"Siteframework",
                description:{
                 bloc1:"mettre en ligne WordPress sur un hébergeur",
                 bloc2:"prendre en main l’administration WordPress",
                 bloc3:"configurer le thème et les extensions d’un site WordPress",
                 bloc4:"personnaliser les contenus et le design d’un site WordPress",
                 bloc5 :"optimiser la configuration d’un site WordPress."                 
                },
            },
            {
                src:"https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/nathalie.png?alt=media&token=3d16a61b-2d9f-417d-b788-777ab69e6d29",
                alt:"nathalie",
                title:"Nathalie",
                description:{
                 bloc1:"Création d'un site vitrine à partir de zéro",
                 bloc2:"Mettre le site en ligne sur un hébergement de  firebase",
                 bloc3:"Configurer la Map avec google map api",
                 bloc4:"Créer une section de contact avec un formulaire",
                 bloc5 :"Récupere les données et les enregistrer dans la base de données de firebase"                 
                },
            },
            {
                src:"https://firebasestorage.googleapis.com/v0/b/porfolio-micheal-achille.appspot.com/o/mascarine.png?alt=media&token=e822e9e5-7876-471f-ad50-93e2bcbb65c9",
                alt:"mascarine",
                title:"Mascarine",
                description:{
                 bloc1:"Création d'un portfolio en ligne",
                 bloc2:"Utiliser css3 pour créer des animations",
                 bloc3:"Créer un site responsive",
                 bloc4:"lier différentes pages pour le site",
                 bloc5 :"Utiliser bootstrap pour s'adapter à la mise en page et réactif sur tous les écrans"                 
                },
            },
            {
                src:"./img/Femme974.png",
                alt:"Femmes974",
                title:"Femmes974",
                description:{
                 bloc1:"Refont du site Femmes974 en mode landing page",
                 bloc2:"Respectant le wireframe et la charte graphique ",
                 bloc3:"Créer un site responsive",
                 bloc4:"Respecter les standards d'accessibilité web et mobile",
                 bloc5 :"Analyse de la demande  du client"                 
                },
            },
             {
                src:"./img/mauri.png",
                alt:"MauricodeAcademy",
                title:"MauricodeAcademy",
                description:{
                 bloc1:"créer un site Web pour le tutoriel de codage en ligne",
                 bloc2:"Mettre le site en ligne sur un hébergement firebase",
                 bloc3:"Créer un site responsive",
                 bloc4:"Utiliser store firebase pour stocker des données",
                 bloc5 :"Utilisez Api connexion de facebook et google pour créer et connecter des utilisateurs"                 
                },
            }
            ,
             {
                src:"./img/PortFolio.png",
                alt:"Portfolio",
                title:"Portfolio",
                description:{
                 bloc1:"Créer un site Web pour le portfolio",
                 bloc2:"Mettre le site en ligne avec le github pages",
                 bloc3:"Créer un site responsive",
                 bloc4:"intégrer une maquette et respecter le wireframe",
                 bloc5 :"Utiliser l'animation avec css3 et javascript"                 
                },
            }
         ],
         CardModal :{
            src:"",
            alt:"",
            title:"",
            description:"",
         }
         } 
        },
    
    
    methods:{
        openModal(cardImage){
          this.CardModal = cardImage;
            this.$refs['modal-1'].show();
        },
        closeModal(id){
            this.$bvModal.hide(id);
        }
    }
    
}

</script>
<style lang="scss" scoped>
.container-realisation{    
    height:800px;
    overflow: hidden;
    margin-top:100px;
    

.card{
width:250px;
height:250px;
margin:10px; 
 img{
 width:100%;
 height:100%;
  object-fit:cover;
  
  }

}
.card:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor:pointer;
}
}
</style>