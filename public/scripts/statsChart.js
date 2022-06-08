const ctx = document.getElementById("myChart").getContext("2d");
const ctx2 = document.getElementById("chart2").getContext("2d");
const luni = [
  "Ianuarie",
  "Februarie",
  "Martie",
  "Aprilie",
  "Mai",
  "Iunie",
  "Iulie",
  "August",
  "Septembrie",
  "Octombrie",
  "Noiembrie",
  "Decembrie",
];

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: luni,
    datasets: [
      {
        label: "Vizionari Pagina Universitati",
        data: [12, 19, 3, 5, 2, 3, 5, 5, 6, 2, 10, 25, 30],
        backgroundColor: "#f44336",
        borderColor: "#f44336",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

/////////////////////////////////////////////////////

const chart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: luni,
    datasets: [
      {
        label: "Utilizatori noi pe platforma",
        data: [12, 19, 3, 5, 2, 3, 30, 40, 35, 70, 60, 40],
        backgroundColor: "#f44336",
        borderColor: "#f44336",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
