import { createColumnSeries } from "./column_series.js";
import { createChart } from "./piechart.js";
import { createSmoothedLineSeries } from "./smoothed_line_series.js";

am5.ready(function () {
  createColumnSeries();
  createSmoothedLineSeries();

  createChart("chartdiv1", 45, 55, 45, "#FFFFFF");
  createChart("chartdiv2", 157, 140, 53, "#FF7E86");
  createChart("chartdiv3", 9, 91, 9, "#A162F7");
  createChart("chartdiv4", 25, 75, 25, "#F6CC0D");
});
