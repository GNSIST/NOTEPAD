$(document).ready(function(){
   if($.localStorage.isSet('memo')){
      $('.tarea').val($.localStorage.get('memo'));
   }
   $('.btn_save').click(function(){
      $.localStorage.set('memo',$('.tarea').val());
      alert($('.tarea').val())
   
   });
});
   