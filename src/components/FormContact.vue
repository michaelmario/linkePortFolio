<template>
 <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group label="Votre Nom" label-for="form-name" label-cols-lg="2">
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon icon="person-fill"></b-icon>
          </b-input-group-prepend>
          <b-form-input id="form-name"  placeholder="Mario"  v-model="form.name"  required></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group 
       label="E-mail:"
       label-for="form-mail"
       description="Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre." label-cols-lg="2">
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon icon="envelope-fill"></b-icon>
          </b-input-group-prepend>
          <b-form-input id="form-email" placeholder="Entrez l'e-mail" v-model="form.email" type="email"  required></b-form-input>
        </b-input-group>
      </b-form-group>
      <b-form-group id="input-group-3" label="Message:" label-for="input-3">
         <b-form-textarea
      id="input-3"
      v-model="form.message"
      placeholder="Ecrivez votre message ici..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="success">Envoyer</b-button>
      <b-button type="reset" variant="danger" class="ml-2">
        <b-icon icon="circle-fill" animation="throb" font-scale="1"></b-icon>
      </b-button>
    </b-form>
    </div>
</template>

<script>
import {auth, db } from './../firebase';
import Swal from "sweetalert2";
const Toast = Swal.mixin({
  toast: true,
  position: "center-end",
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
 });
  export default {
      name:"FormContact",
    data() {
      return {
        form: {
          email: '',
          name: '',
          message:'',
          date:new Date()         
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        let messages = this.form;
        auth.signInAnonymously()
          .then(() => {
             db.collection("message").
              add({messages}).then(()=>{
                 Toast.fire({
              icon: "success",
              title: "Votre Message a bien etait envoyer",
            }); 
             this.form.email = ''
             this.form.name = ''
             this.form.message = ''
              })
              .catch((err) => {
                console.log(err);
              });
             
            })
          .catch((err) => {
            console.log(err);
          });
        },
       
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.message = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
  
</script>