<template>
  <footer id="footer">
    <div class="container">
      <div class="copyright">
        © Copyright <strong><span>{{name}} @2022 </span></strong>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      name: "Michael Mario Achille",
    };
  },
};
</script>
<style>
#footer {
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  font-size: 12px;
  position: fixed;
  bottom: 0;
  width: 100%; 
  border-top: 1px solid #eee;
   margin-top: 20px;
}
</style>
