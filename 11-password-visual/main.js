$(function(){
  let $inp=$('input'),
      $eye=$('#eye');

  $eye.mouseover(()=>{
    $eye.attr("class","fa fa-eye");
    $inp.attr("type","text");
  })
  $eye.mouseout(()=>{
    $eye.attr("class","fa fa-eye-slash");
    $inp.attr("type","password");
  })
});
