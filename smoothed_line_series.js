export function createSmoothedLineSeries() {
  const root = am5.Root.new("chartdiv6");
  root._logo.dispose(); //remove amcahrt logo
  root.setThemes([am5themes_Animated.new(root)]);

  const chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panY: false,
      wheelY: "zoomX",
      layout: root.verticalLayout,
    })
  );

  const data = [
    {
      time: new Date(2021, 0, 1, 1).getTime(),
      value: 1,
    },
    {
      time: new Date(2021, 0, 1, 2).getTime(),
      value: 2.7,
    },
    {
      time: new Date(2021, 0, 1, 3).getTime(),
      value: 2,
    },
    {
      time: new Date(2021, 0, 1, 4).getTime(),
      value: 3.5,
    },
    {
      time: new Date(2021, 0, 1, 5).getTime(),
      value: 2.7,
    },
    {
      time: new Date(2021, 0, 1, 6).getTime(),
      value: 2,
    },
    {
      time: new Date(2021, 0, 1, 7).getTime(),
      value: 3.5,
    },
    {
      time: new Date(2021, 0, 1, 8).getTime(),
      value: 2.2,
    },
  ];

  const yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      extraTooltipPrecision: 1,
      renderer: am5xy.AxisRendererY.new(root, {
        minGridDistance: 1000,
      }),
      visible: false,
    })
  );

  const xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
      baseInterval: { timeUnit: "minute", count: 1 },
      gridIntervals: [
        { timeUnit: "minute", count: 10 },
        { timeUnit: "hour", count: 1 },
      ],
      renderer: am5xy.AxisRendererX.new(root, {}),
    })
  );

  const series = chart.series.push(
    am5xy.SmoothedXLineSeries.new(root, {
      name: "Series #1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "time",
      stroke: am5.color(0x087f8c),
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{valueYField} \n{value}k",
      }),
    })
  );
  xAxis.labelsContainer.set(
    "tooltip",
    am5.Tooltip.new(root, {
      pointerOrientation: "down",
    })
  );

  series.strokes.template.set("strokeWidth", 2);

  series.fills.template.setAll({
    fillOpacity: 0.1,
    visible: true,
  });

  series.fills.template.set(
    "fillGradient",
    am5.LinearGradient.new(root, {
      stops: [
        {
          color: am5.color("#ff860d"),
          offset: 0.7,
        },
        {
          color: am5.color(0x946b49),
        },
      ],
      rotation: 90,
    })
  );

  var tooltip = series.set("tooltip", am5.Tooltip.new(root, {}));
  tooltip.label.set("text", "{valueY}");

  series.data.setAll(data);

  chart.set(
    "cursor",
    am5xy.XYCursor.new(root, {
      behavior: "zoomXY",
      xAxis: xAxis,
    })
  );
}
