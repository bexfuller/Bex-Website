Highcharts.chart('barcontainer', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Column chart with negative values'
  },
  xAxis: {
      categories: ['Guava', 'Mango', 'Pears', 'Blueberry', 'Bananas']
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Bex',
      data: [-2, 7, 5, 8, 4]
  }, {
      name: 'Jane',
      data: [2, -2, -3, 2, 1]
  }, {
      name: 'Joe',
      data: [3, 4, 4, -2, 5]
  }]
});