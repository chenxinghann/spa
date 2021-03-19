$(()=>{
    //get dom elem
    let $width=$('#width'),
        $height=$('#height'),
        $btnCal=$("#calc"),
        //$form  =$('#main'),
        $perimeter=$('#perimeter'),
        $widthValidate=$('#width-validate'),
        $heightValidate=$('#height-validate'),
        $area=$('#area');

    //字段校验
    //$form.focusout((e)=>{
        //console.log(e.target);
    //});

$width.keypress((e)=>{
  //console.log(e.key);
  //console.log(e.target);
  //console.log(e.target.value);
  //console.log(e.target.selectionStart);
  let key=e.key,
      val=e.target.value,
      pos=e.target.selectionStart;
  /*if(/[abcdf-zABCDF-Z`~!@#$%^&()=_+[\]{}|;:'",<>/?\\]/ .test(key)) e.preventDefault();
  //合法字符规则
  //合法字符：e
  //在一个科学技术法的数字前面，中间和后面都不能再出现e
  if(val.indexOf('e') !== -1) e.preventDefault();
  */
  val=val.slice(0,pos) + key +val.slice(pos,val.length);
  if(!/^(0|[1-9]\d*)(\.\d+)?((e|E)(\+|-)?\d+)?$/.test(val)) e.preventDefault();
});
$height.keypress((e)=>{
  let key=e.key,
      val=e.target.value,
      pos=e.target.selectionStart;
  val=val.slice(0,pos)+key+val.slice(pos,val.length);
  if(!/^(0|[1-9]\d*)(\.\d+)?((e|E)(\+|-)?\d+)?$/.test(val)) e.preventDefault();
});

    $width.focusout(()=>{
      if(validate($width,$widthValidate)){
        $width.select();
      }
    });

    $height.focusout(()=>{
      if(validate($height,$heightValidate)){
        $height.select();
      }
    });

    //calc button click
    $btnCal.click(()=>{
    //get valuz
      let w=Number($width.val()),
          h=Number($height.val());
      if(validate($width,$widthValidate) && validate($height,$heightValidate)){
    //calc
      let p=(w+h)*2,
          a=w*h;
    //output
      $perimeter.val(p);
      $area.val(a);                                        }                           
    });
});
//表单校验
function validate(input,output){
  //isempty
  if(input.val()===''){
    output.html('该字段不能为空');
    return false;
  }else{
    output.html('');
  }
  //is number
  let val=Number(input.val());
  if(isNaN(val)){
    output.html('该字段应该是数值');
    return false;
  }else{
    output.html('');
  }
  //is +
  if(val<0){
    output.html('该数值不能小于零');
    return false;
  }else{
    output.html('');
  } 
  return true;
}

