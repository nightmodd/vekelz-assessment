export function createColumnSeries() {
  const root = am5.Root.new("chartdiv5");

  root._logo.dispose(); //remove amcahrt logo

  const chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout,
      maxTooltipDistance: 30,
    })
  );

  const data = [
    {
      time: "1pm",
      value: 100,
    },
    {
      time: "2pm",
      value: 90,
    },
    {
      time: "3pm",
      value: 157,
    },
    {
      time: "4pm",
      value: 95,
    },
    {
      time: "5pm",
      value: 120,
    },
    {
      time: "6pm",
      value: 70,
    },
    {
      time: "7pm",
      value: 100,
    },
  ];

  const yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        minGridDistance: 1000,
      }),
      visible: false,
    })
  );

  const xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(root, {
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 40,
      }),
      categoryField: "time",
    })
  );

  xAxis.data.setAll(data);

  const series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      categoryXField: "time",
      fill: am5.color("#dbe2e3"),
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{categoryX} \n{valueY}k",
      }),
    })
  );

  xAxis.labelsContainer.set(
    "tooltip",
    am5.Tooltip.new(root, {
      pointerOrientation: "down",
    })
  );

  const cursor = chart.set(
    "cursor",
    am5xy.XYCursor.new(root, {
      xAxis: xAxis,
    })
  );

  cursor.lineY.set("visible", false);

  series.columns.template.setAll({
    fillOpacity: 0.5,
    width: am5.percent(50),
  });

  series.columns.template.set("interactive", true);

  series.columns.template.states.create("hover", {
    fill: am5.color("#2884FF"),
  });

  series.data.setAll(data);
}
