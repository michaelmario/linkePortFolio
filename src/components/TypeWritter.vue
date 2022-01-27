<template>
 <div class="d-flex">
  <h6 class="TypeText1">
    {{ title }}
  </h6>
  <h6 class="TypeText">
      {{ displayText.join("") }}
    </h6>
  </div>
</template>
<script>
export default{
name : "TypeWritter",
props: {
       title: String,
    speed: {
      type: Number,
      default: 500
    },
    deleteSpeed: {
      type: Number,
      default: 166
    },
     words: {
        type: Array,
        default: () => []
      }    
  },
  data() {
    return {
      displayText: [],
      currentWord: "",
      wordIdx: 0,
      charIdx: 0,
       };
  },
  computed: {
    // can adjust speeds based on other factors if needed
    nextCharInterval() {
      return this.speed;
    },
    TYPE_SPEED() { return this.speed } ,
    DELETE_SPEED(){ return this.deleteSpeed },
   
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      if (this.words && this.words.length > 0) {
        this.currentWord = this.words[this.wordIdx].split("");
        this.wordIdx++;
        this.animate = setTimeout(this.type, this.timeoutSpeed);
      }
    },
    type() {
      // if typing...
      if (this.currentWord.length > 0) {
        this.displayText.push(this.currentWord.shift());
        // if done typing, then delete
      } else if (this.currentWord.length === 0 && this.displayText.length > 0) {
        this.timeoutSpeed = this.DELETE_SPEED;
        this.displayText.pop();
        // if done typing & deleting
      } else if (
        this.currentWord.length === 0 &&
        this.displayText.length === 0
      ) {
        // change words
        if (this.wordIdx < this.words.length) {
          this.currentWord = this.words[this.wordIdx].split("");
          this.wordIdx++;
          this.timeoutSpeed = this.TYPE_SPEED;
          this.displayText.push(this.currentWord.shift());
        } else {
          // reset
          this.wordIdx = 0;
          this.currentWord = this.words[this.wordIdx].split("");
          this.displayText.push(this.currentWord.shift());
        }
      }
      setTimeout(this.type, this.timeoutSpeed);
    }
  },



}

</script>
<style scoped lang="scss">
.TypeText1{
  font-size:1.5em;
  font-weight:bold;
  color:#fff;
  text-align:center;
  margin-top:10px;
}
.TypeText{
  font-size:1.5em;
  font-weight:bold;
  color:#000;
  text-align:center;
  margin-top:10px;
}
</style> 