const ChartsEmbedSDK = window.ChartsEmbedSDK;

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-project-0-qtuye",
});

const dashboard = sdk.createDashboard({
  dashboardId: "62c6d778-6bc4-4f6e-83c7-15b909f7506e",
  height: "900px",
  background: "transparent",
});

dashboard.render(document.getElementById("dash1"));
