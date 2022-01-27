 import Typed from 'typed-js';

 export default{
    // Hero typed
    typed: function(){
     let typedoc = document.querySelector('.typed');
  if (typedoc.length) {
    let typed_strings = typedoc.data('typed-items');
    typed_strings = typed_strings.split(',');
    console.log(typed_strings);
    new Typed(typedoc, {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
}
 }