 // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main'));

  let xData=[],
      yData=[];

for(let i=0;i<=1;i+=0.1){
  xData.push(i);
  yData.push(h(i));
}

function h(p){
  return -1*p*Math.log2(p)-(1-p)*Math.log2(1-p);
}

 // 指定图表的配置项和数据
  var option = {
    title: {
      text: '二进熵函数曲线'
    },
    tooltip: {},
      legend: {
        data:['H(X)']
      },
      xAxis: {
        //data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        data:xData
      },
      yAxis: {},
      series: [{
        name: '销量',
        //type: 'bar',
        type:'line',
        smooth:true,
        data:yData
      }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option); 
