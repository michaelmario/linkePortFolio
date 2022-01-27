<template>
  <section class="container-contact" id="contact">
    <div class="container" >
      <h1 class="text-center mb-3">CONTACT</h1>
      <div class="row">
        <div class="col-md-6 p-4 p-md-5 mb-4">
          <h1 class="display-8 fst-italic">Let's talk</h1>
          <p class="lead my-3">
            Si vous voulez en savoir plus sur moi - ou si vous avez besoin de mes services de quelque manière que ce soit - contactez-moi pour discuter à tout moment à votre convenance
          </p>
          <div class="row">
            <div class="col list-group mx-0">
              <label class="list-group-item d-flex gap-2">
                <span>
                  <h3>
                    <b-icon icon="telephone-fill" scale="1"> </b-icon> :
                    <b-icon icon="envelope" scale="1"> </b-icon>
                  </h3>
                  <span class="d-block text-muted display-7 fst-italic">
                    <i class="fa fa-home text-orange"></i> +0262178016
                  </span>
                  <span class="d-block text-muted"
                    ><i class="fa fa-mobile text-orange"></i> +0693041147
                  </span>
                </span>
              </label>
              <label class="list-group-item d-flex gap-2">
                <a
                  href="mailto:marioachil@gmail.com"
                  rel="noopener"
                  class="btn btn-outline-primary"
                >
                  <b-icon icon="envelope" scale="1"> </b-icon> Mario Achille</a
                >
              </label>
              <label class="list-group-item d-flex gap-2">
                <span>
                  <small class="d-block fw-bolder text-muted"
                    >marioachil@gmail.com</small
                  >
                </span>
              </label>
            </div>

            <div class="col list-group cardAdress">
              <label class="list-group-item d-flex gap-2">
                <b-icon icon="shop" scale="2"> </b-icon>
                <span class="ml-3">
                  32 Avenue 14 juillet 1789 Le Port 79420 Réunion
                </span>
              </label>
              <label class="list-group-item d-flex gap-2">
                <a
                  href="https://www.facebook.com/w3schoolscom/"
                  target="_blank"
                  rel="noopener"
                  title="Facebook"
                >
                  <b-icon icon="facebook" scale="1"> </b-icon>
                  <span> FaceBook </span>
                </a>
              </label>
              <label class="list-group-item d-flex gap-2">
                <a
                  href="https://www.instagram.com/w3schools.com_official/"
                  target="_blank"
                  rel="noopener"
                  title="Instagram"
                >
                  <b-icon icon="instagram" scale="1"> </b-icon>
                  <span> Instagram </span>
                </a>
              </label>
              <label class="list-group-item d-flex gap-2">
                <a
                  href="https://www.linkedin.com/company/w3schools.com/"
                  target="_blank"
                  rel="noopener"
                  title="LinkedIn"
                >
                  <b-icon icon="linkedin" scale="1"> </b-icon>
                  <span> LinkedIn </span>
                </a>
              </label>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card formContainer ">
            <div
              class="
                card-header
                text-upercase
                topheader
                text-center text-white
                mt-1
                mb-3
              "
            >
              <b-img
                thumbnail
                fluid
                src="./img/matrix.gif"
                alt="Image 1"
              ></b-img>
            </div>
            <b-card class="mt-1" header="Laissez vos messages ici">
               <pre class="m-0"><FormContact /></pre>
            </b-card>
            </div>
          </div>
        </div>
      </div>
    
  </section>
</template>
<script>
import FormContact from '@/components/FormContact.vue'
export default {
  name: "contact",
  components:{
 FormContact
  },
  data() {
    return {
      form: document.querySelectorAll('.needs-validation'),
      name:null,
      familyName: null,
      email: null,
      city: null,
      message: null,
      invalidCheck: null,
      output: null,
      emailOutput:null,
      allow: false,
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },
  methods: {
    formValidation(event) {
    event.preventDefault();
    if(
      this.email === null && 
      this.familyName === null &&
       this.email === null && 
       this.city === null &&
       this.message === null &&
       this.invalidCheck === null){
      this.output = "Remplissez les champs du formulaire  S.V.P Merci !";
    }else if (this.email) {
      let notAllow = /[< $ >``{}''""^ ]/gi;
        if (this.reg.test(this.email)) {
          this.emailOutput = "Merci le Email est bien formate";
          this.allow = true;
        }else if (this.email.search(notAllow) > -1) {
          this.email = this.email.replace(notAllow, "");
          this.emailOutput = "Les Caractere speciaux sont interdits !";
           this.allow = false;
        }  
    }
    
     
    },
    
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.container-contact{    
    height:800px;
    overflow: hidden;
    margin-top:50px;
     margin-left: 5%;
    }
    .invalidFeedback {
  display:none;
   width: 100%;
    margin-top: 0.25rem;
    font-size: .875em;
    color: #dc3545;
}
.logo {
  width: 100%;
  height: 200px;
}
.formContainer:hover{
transitions:flip .5s linear 0s;
}
@keyframes flip {
  0% {
    transform: perspective(400px) rotateY(0);
  }
  50% {
    transform: perspective(400px) rotateY(180deg);
  }
  100% {
    transform: perspective(400px) rotateY(360deg);
  }
}
</style>