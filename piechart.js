export function createChart(divID, done, undone, percentage, color) {
  const root = am5.Root.new(divID);
  root.setThemes([am5themes_Animated.new(root)]);
  root._logo.dispose(); //remove amcahrt logo

  // Create chart
  const chart = root.container.children.push(
    am5percent.PieChart.new(root, {
      startAngle: 160,
      endAngle: 380,
    })
  );

  // Create series
  const series = chart.series.push(
    am5percent.PieSeries.new(root, {
      startAngle: 160,
      endAngle: 380,
      valueField: "percentage",
      categoryField: "task",
      innerRadius: am5.percent(80),
    })
  );

  series.slices.template.setAll({
    cornerRadius: 5,
  });

  series.ticks.template.set("forceHidden", true);
  series.labels.template.set("forceHidden", true);
  series.labels.template.wrap = true;

  chart.seriesContainer.children.push(
    am5.Label.new(root, {
      textAlign: "center",
      centerY: am5.p50,
      centerX: am5.p50,
      text: percentage + "%",
      fontSize: 20,
      fontweight: 900,
    })
  );

  const data = [
    {
      task: "done",
      percentage: done,
    },
    {
      task: "undone",
      percentage: undone,
      piecolor: { fill: am5.color("#F4F5F9") },
    },
  ];

  series.get("colors").set("colors", [am5.color(color), am5.color("#ffcefe")]);

  series.data.setAll(data);
}
