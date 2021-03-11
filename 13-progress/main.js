$(function(){
  let $pro=$('progress'),
      $start=$('#start'),
      $stop=$('#stop'),
      $reset=$('#reset'),
      now=null;

  $start.click(()=>{
    now=setInterval(time,100);
  })
  $stop.click(()=>{
    clearInterval(now);
  })
  $reset.click(()=>{
    $pro.val(0);
  })

  function time(){
    var num=$pro.val();
    num++;
    $pro.val(num);
  }
});
