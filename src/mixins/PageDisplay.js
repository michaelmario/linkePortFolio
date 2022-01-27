export default {
  methods: {
    displayIndex() {
      this.$router.push("/");
      document.querySelector("#isLoading").style.display = "block";
    },
    displayAbout() {
      this.$router.push("/about");
      document.querySelector("#isLoading").style.display = "none";
    },    
    displayResume() {
      this.$router.push("/resume");
      document.querySelector("#isLoading").style.display = "none";
    },
    displayPortfolio() {
      this.$router.push("/portfolio");
      document.querySelector("#isLoading").style.display = "none";
    },
    displayContact() {
      this.$router.push("/contact");
      document.querySelector("#isLoading").style.display = "none";
    },
  },
};