
const dashboard24HoursPerformanceChart = {
  data: (canvas) => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      datasets: [
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354],
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420],
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484],
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5,
            //padding: 20
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "#ccc",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false,
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
          },
        },
      ],
    },
  },
};

const popularityOnGoogle = {
  data: (canvas) => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
      ],
      datasets: [
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          fill:false,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [300, 310, 600, 522, 530, 426, 333, 345, 338, 354 , 40],
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          fill:false,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [320, 340, 588, 460, 470, 385, 390, 384, 408, 420 , 50],
        },
        {
          borderColor: "#51cbce",
          backgroundColor: "#51cbce",
          pointRadius: 0,
          fill:false,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [370, 694, 615, 609, 525, 445, 460, 450, 478, 484 , 20],
        },
        {
          borderColor: "#000",
          backgroundColor: "#000",
          pointRadius: 0,
          fill:false,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [12, 29 ,80 ,90 ,70 ,65 , 33 , 25 , 20 , 22 , 10],
        },
        {
          borderColor: "#fbc658",
          backgroundColor: "#fbc658",
          pointRadius: 0,
          fill:false,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [10 , 25 , 70 , 60 , 65 , 55 , 30 , 28 , 17 , 18 ,20 , 5],
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5,
            //padding: 20
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "#ccc",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false,
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
          },
        },
      ],
    },
  },
};

const dashboardEmailStatisticsChart = {
  data: (canvas) => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [342, 480, 530, 120],
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};
const regionWiseStatistic = {
  data: (canvas) => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157" , "#6bd098",],
          borderWidth: 0,
          data: [120, 70, 300, 430 , 20],
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};

const dashboardNASDAQChart = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      },
      {
        data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
        fill: false,
        borderColor: "#51CACF",
        backgroundColor: "transparent",
        pointBorderColor: "#51CACF",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      },
    ],
  },
  options: {
    legend: {
      display: false,
      position: "top",
    },
  },
};

const searchWordTermTrend = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [50, 38, 60, 90, 50, 28, 33, 40, 55, 60, 3, 0],
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      },
      {
        data: [80, 57, 40, 80, 40, 27, 95, 34, 42, 80, 6, 0],
        fill: false,
        borderColor: "#51CACF",
        backgroundColor: "transparent",
        pointBorderColor: "#51CACF",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      },
      {
      data: [80, 190, 200, 250, 180, 160, 120, 109, 99, 90, 26, 0],
        fill: false,
        borderColor: "#ef8157",
        backgroundColor: "transparent",
        pointBorderColor: "#ef8157",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      },
    ],
  },
  options: {
    legend: {
      display: false,
      position: "top",
    },
  },
};

module.exports = {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  popularityOnGoogle,
  dashboardNASDAQChart,
  regionWiseStatistic,
  searchWordTermTrend
};
