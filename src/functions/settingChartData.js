import { convertDate } from "./convertDate"

export const settingChartData = (setChartData, prices1, prices2, crypto1, crypto2) => {
  if (Array.isArray(prices1) && Array.isArray(prices2)) {
    // if(prices2) {
      setChartData({
        labels: prices1.map((price) => convertDate(price[0])),
        datasets: [
          {
            label: "Crypto 1",
            data: prices1.map((price) => price[1]),
            borderColor: "#3a80e9",
            borderWidth: 2,
            fill: true,
            tension: 0.5,
            backgroundColor: "rgba(58, 128, 233,0.1)",
            borderColor: "#3a80e9",
            pointRadius: 0,
            yAxisID: "crypto1",
          },
          {
            label: "Crypto2",
            data: prices2.map((price) => price[1]),
            borderColor: "#3a80e9",
            borderWidth: 2,
            fill: true,
            tension: 0.5,
            backgroundColor: "rgba(58, 128, 233,0.1)",
            borderColor: "#26cf29",
            pointRadius: 0,
            yAxisID: "crypto2",
          }
        ]
      })
    }
    else if(Array.isArray(prices1)) {
      setChartData({
        labels: prices1.map((price) => convertDate(price[0])),
        datasets: [
          {
            label: "Crypto2",
            data: prices1.map((price) => price[1]),
            // borderColor: "#3a80e9",
            borderWidth: 2,
            fill: true,
            tesion: 0.50,
            backgroundColor: "rgba(58, 128, 233,0.1)",
            borderColor: "#378cd1",
            pointRadius: 0,
            yAxisID: "crypto1",
          },
        ],
      });
    } else {
  setChartData({
    labels: [],
    datasets: [],
  });
}
};
