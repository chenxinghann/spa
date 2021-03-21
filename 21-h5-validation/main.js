$(()=>{
    //get dom elem
    let $width=$('#width'),
        $height=$('#height'),
        //$btnCal=$("#calc"),
        $form=$('#main'),
        $perimeter=$('#perimeter'),
        $area=$('#area');

    //calc button click
    $form.submit((e)=>{
      e.preventDefault();
    //get value
      let w=Number($width.val()),
          h=Number($height.val());
    //calc
      let p=(w+h)*2,
          a=w*h;
    //output
      $perimeter.val(p);
      $area.val(a);                                                        
    });
});
