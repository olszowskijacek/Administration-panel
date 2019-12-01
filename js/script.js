
const burger = document.querySelector('.burger');

const burgerIcon = document.querySelector('.fa-bars')

const xIcon = document.querySelector('.fa-times')
const column = document.querySelector('.sidebar');


burger.addEventListener('click', function(){
    burgerIcon.classList.toggle('show')
    xIcon.classList.toggle('show');
    column.classList.toggle('show');
})




var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  // 1 (chart type)
  type: 'bar',
  data: {
    // 2 (labels for the X axis)
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3 (data series setting)
    datasets: [
      {
        // 4 (naming the data series)
        label: 'Signups',
        // 5 (data series color selection)
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        // 6 (supplement with sample data)
        data: [246, 211, 232, 362, 619, 391, 289, 269, 278, 296]
      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [311, 368, 294, 273, 471, 422, 287, 562, 324, 303]
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [378, 689, 263, 287, 445, 297, 238, 390, 301, 249],
        // 7
        hidden: true
      }
    ]
  }
});