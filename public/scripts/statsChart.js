const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
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
    ],
    datasets: [
      {
        label: "Utilizatori platforma",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [],
        borderColor: "#000",
        tension: 0.3,
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
