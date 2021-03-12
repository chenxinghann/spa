$(function(){
  let $pro=$('progress'),
      $start=$('#start'),
      $stop=$('#stop'),
      $reset=$('#reset'),
      now=null,
      t=new Array();

  $start.click(()=>{
    now=setInterval(time,100);
    t.push(now);
  })
  $stop.click(()=>{
    for(var i=0;i<t.length;i++){
      clearInterval(t[i]);
    }
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
