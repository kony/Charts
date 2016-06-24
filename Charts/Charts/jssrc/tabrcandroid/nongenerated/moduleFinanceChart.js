///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance = {};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function func_demo_init_frm_financeChart() {
    k_dv.dataviz.demos.finance.chartWidget = null;
    k_dv.dataviz.demos.finance.chartType = 0;
    // 0 - candleStick,  
    // 1 - LineChart, 
    // 2 - comparisionChart
    k_dv.dataviz.demos.finance.prevChartType = 0; // previous Chart Type
    k_dv.dataviz.demos.finance.dataType = 1;
    // 0 - weekData, 
    // 1 - MonthData, 
    // 2 - YearData
    var frm = k_dv.dataviz.demos.finance.demoFormFinanceChart();
    var containerWidget = k_dv.dataviz.demos.finance.containerWidget();
    var chartWidget = k_dv.dataviz.demos.finance.getStockChartWidget();
    //remove widgets
    var widgets = containerWidget.widgets();
    for (var i = 0; i < widgets.length; i++) {
        containerWidget.remove(widgets[i]);
    }
    containerWidget.add(chartWidget);
    frm.show();
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.demoFormFinanceChart = function() {
    return frmFinanceChart;
}
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.containerWidget = function() {
    var frm = k_dv.dataviz.demos.finance.demoFormFinanceChart();
    return frm.hboxStockChart;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.getStockChartWidget = function() {
    var chartInfoTable = k_dv.dataviz.demos.finance.stockChartProperties(0);
    var chart2d3d = createChartWidget(chartInfoTable, 0);
    k_dv.dataviz.demos.finance.chartWidget = chart2d3d;
    return chart2d3d;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.stockChartProperties = function(arg) {
    k_dv.dataviz.demos.finance.setChartType(arg);
    var chartProperties_1 = {};
    var chartProperties_2 = k_dv.dataviz.demos.finance.columnChartProperties();
    if (0 === arg) chartProperties_1 = k_dv.dataviz.demos.finance.candleStickChartProperties();
    else if (1 === arg) chartProperties_1 = k_dv.dataviz.demos.finance.lineChartProperties();
    else if (2 === arg) chartProperties_1 = k_dv.dataviz.demos.finance.comparisionChartProperties();
    chartProperties_1.position = [0, 0, 100, 70];
    chartProperties_2.position = [0, 70, 100, 100];
    if (k_dv.dataviz.demos.finance.getDataType() == 0) {
        chartProperties_1.axis.xAxis.labels.skipLabelInterval = 0;
        chartProperties_2.axis.xAxis.labels.skipLabelInterval = 0;
    } else if (k_dv.dataviz.demos.finance.getDataType() == 1) {
        chartProperties_1.axis.xAxis.labels.skipLabelInterval = 7;
        chartProperties_2.axis.xAxis.labels.skipLabelInterval = 7;
    } else if (k_dv.dataviz.demos.finance.getDataType() == 2) {
        chartProperties_1.axis.xAxis.labels.skipLabelInterval = 30;
        chartProperties_2.axis.xAxis.labels.skipLabelInterval = 30;
    }
    var getChartProperties = function() {
            var value = {
                "chartHeight": 65,
                "sharedLayerMode": true,
                "layers": ["layer0", "layer1"],
                "layer0": chartProperties_1,
                "layer1": chartProperties_2
            };
            return value;
        };
    var getChartData = function() {
            if (k_dv.dataviz.demos.finance.getDataType() == 0) return k_dv.dataviz.demos.finance.weekData();
            else if (k_dv.dataviz.demos.finance.getDataType() == 1) return k_dv.dataviz.demos.finance.monthData();
            else if (k_dv.dataviz.demos.finance.getDataType() == 2) return k_dv.dataviz.demos.finance.yearData();
        };
    var getChartEvents = function() {
            return k_dv.dataviz.demos.finance.events();
        };
    var chartInfo = {};
    chartInfo.chartProperties = getChartProperties();
    chartInfo.chartData = getChartData();
    chartInfo.chartEvents = getChartEvents();
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.monthData = function() {
    var chartData = {
        "rowNames": {
            "values": ["Jun1", "Jun2", "Jun3", "Jun4", "Jun5", "Jun6", "Jun7", "Jun8", "Jun9", "Jun10", "Jun11", "Jun12", "Jun13", "Jun14", "Jun15", "Jun16", "Jun17", "Jun18", "Jun19", "Jun20", "Jun21", "Jun22", "Jun23", "Jun24", "Jun25", "Jun26", "Jun27", "Jun28", "Jun29", "Jun30"]
        },
        "columnNames": {
            "values": ["open", "high", "low", "close", "closeOfOtherCompany", "volume"]
        },
        "data": {
            "open": [628, 630.01, 627.95, 632, 632.05, 642.75, 641.49, 642.02, 652.94, 665.03, 662.13, 659.15, 646.5, 629.75, 623.5, 631.22, 626.26, 631.98, 626.63, 640.99, 628, 630.01, 627.95, 632, 632.05, 642.75, 641.49, 642.02, 652.94, 661.49, 642.02, 652.94],
            "high": [631.84, 631.82, 631.73, 634.68, 644.49, 645, 643, 646.76, 668.15, 670.25, 663.97, 660, 647, 633.8, 629.39, 632.89, 626.95, 631.98, 634, 640.99, 631.84, 631.82, 631.73, 634.68, 644.49, 645, 643, 646.76, 668.15, 670.25, 646.76, 668.15, 670.25],
            "low": [627.99, 618.96, 627.01, 630.56, 632, 638.1, 635.2, 642.02, 652.37, 660.62, 656.23, 649.79, 621.23, 616.91, 621.12, 626.5, 621.06, 625.68, 622.12, 631.46, 627.99, 618.96, 627.01, 630.56, 632, 638.1, 635.2, 642.02, 652.37, 660.62, 642.02, 652.37, 660.62],
            "close": [630.37, 625.82, 629.7, 633.14, 640.25, 639.7, 642.4, 645.9, 665.41, 668.28, 659.01, 650.02, 622.46, 623.14, 625.96, 629.64, 624.99, 628.58, 632.91, 639.57, 630.37, 625.82, 629.7, 633.14, 640.25, 639.7, 642.4, 645.9, 665.41, 642.4],
            "closeOfOtherCompany": [660.37, 653.82, 650.7, 660.14, 660.25, 659.7, 662.4, 655.9, 675.41, 668.28, 659.01, 660.02, 652.46, 666.14, 665.96, 669.66, 664.99, 658.58, 662.91, 659.57, 650.37, 665.82, 656.7, 665.14, 665.25, 669.7, 662.4, 665.9, 665.41, 668.2],
            "volume": [6100000, 2500000, 3000000, 2000000, 2200000, 2000000, 2300000, 4000000, 5900000, 2500000, 2700000, 2500000, 300000, 1700000, 1500000, 200000, 1700000, 1700000, 2200000, 2100000, 6100000, 2500000, 3000000, 2000000, 2200000, 2000000, 2300000, 4000000, 5900000, 2500000, 4000000, 5900000, 2500000]
        }
    };
    return chartData;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.weekData = function() {
    var chartData = {
        "rowNames": {
            "values": ["Jun1", "Jun2", "Jun3", "Jun4", "Jun5", "Jun6", "Jun7"]
        },
        "columnNames": {
            "values": ["open", "high", "low", "close", "closeOfOtherCompany", "volume"]
        },
        "data": {
            "open": [628, 630.01, 627.95, 632, 632.05, 642.75, 641.49],
            "high": [631.84, 631.82, 631.73, 634.68, 644.49, 645, 643],
            "low": [627.99, 618.96, 627.01, 630.56, 632, 638.1, 635.2],
            "close": [630.37, 625.82, 629.7, 633.14, 640.25, 639.7, 642.4],
            "closeOfOtherCompany": [660.37, 653.82, 650.7, 660.14, 660.25, 659.7, 662.4],
            "volume": [6100000, 2500000, 3000000, 2000000, 2200000, 2800000, 2300000]
        }
    };
    return chartData;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.yearData = function() {
    var chartData = {
        "rowNames": {
            "values": ["Jun", "Jun2", "Jun3", "Jun4", "Jun5", "Jun6", "Jun7", "Jun8", "Jun9", "Jun10", "Jun11", "Jun12", "Jun13", "Jun14", "Jun15", "Jun16", "Jun17", "Jun18", "Jun19", "Jun20", "Jun21", "Jun22", "Jun23", "Jun24", "Jun25", "Jun26", "Jun27", "Jun28", "Jun29", "Jun30", "July", "July2", "July3", "July4", "July5", "July6", "July7", "July8", "July9", "July10", "July11", "July12", "July13", "July14", "July15", "July16", "July17", "July18", "July19", "July20", "July21", "July22", "July23", "July24", "July25", "July26", "July27", "July28", "July29", "July30", "Aug", "Aug2", "Aug3", "Aug4", "Aug5", "Aug6", "Aug7", "Aug8", "Aug9", "Aug10", "Aug11", "Aug12", "Aug13", "Aug14", "Aug15", "Aug16", "Aug17", "Aug18", "Aug19", "Aug20", "Aug21", "Aug22", "Aug23", "Aug24", "Aug25", "Aug26", "Aug27", "Aug28", "Aug29", "Aug30", "Sep", "Sep2", "Sep3", "Sep4", "Sep5", "Sep6", "Sep7", "Sep8", "Sep9", "Sep10", "Sep11", "Sep12", "Sep13", "Sep14", "Sep15", "Sep16", "Sep17", "Sep18", "Sep19", "Sep20", "Sep21", "Sep22", "Sep23", "Sep24", "Sep25", "Sep26", "Sep27", "Sep28", "Sep29", "Sep30"]
        },
        "columnNames": {
            "values": ["open", "high", "low", "close", "closeOfOtherCompany", "volume"]
        },
        "data": {
            "open": [628, 630.01, 627.95, 632, 632.05, 642.75, 641.49, 642.02, 652.94, 665.03, 662.13, 659.15, 646.5, 629.75, 623.5, 631.22, 626.26, 631.98, 626.63, 640.99, 628, 630.01, 627.95, 632, 632.05, 642.75, 641.49, 642.02, 652.94, 665.03, 662.13, 659.15, 646.5, 629.75, 623.5, 631.22, 626.26, 631.98, 626.63, 640.99, 628, 630.01, 627.95, 632, 632.05, 642.75, 641.49, 642.02, 652.94, 665.03, 662.13, 659.15, 646.5, 629.75, 623.5, 631.22, 626.26, 631.98, 626.63, 640.99, 628, 630.01, 627.95, 632, 632.05, 642.75, 641.49, 642.02, 652.94, 665.03, 662.13, 659.15, 646.5, 629.75, 623.5, 631.22, 626.26, 631.98, 626.63, 640.99, 628, 630.01, 627.95, 632, 632.05, 642.75, 641.49, 642.02, 652.94, 665.03, 662.13, 659.15, 646.5, 629.75, 623.5, 631.22, 626.26, 631.98, 626.63, 640.99, 628, 630.01, 627.95, 632, 632.05, 642.75, 641.49, 642.02, 652.94, 665.03, 662.13, 659.15, 646.5, 629.75, 623.5, 631.22, 626.26, 631.98, 626.63, 640.99],
            "high": [631.84, 631.82, 631.73, 634.68, 644.49, 645, 643, 646.76, 668.15, 670.25, 663.97, 660, 647, 633.8, 629.39, 632.89, 626.95, 631.98, 634, 640.99, 631.84, 631.82, 631.73, 634.68, 644.49, 645, 643, 646.76, 668.15, 670.25, 663.97, 660, 647, 633.8, 629.39, 632.89, 626.95, 631.98, 634, 640.99, 631.84, 631.82, 631.73, 634.68, 644.49, 645, 643, 646.76, 668.15, 670.25, 663.97, 660, 647, 633.8, 629.39, 632.89, 626.95, 631.98, 634, 640.99, 631.84, 631.82, 631.73, 634.68, 644.49, 645, 643, 646.76, 668.15, 670.25, 663.97, 660, 647, 633.8, 629.39, 632.89, 626.95, 631.98, 634, 640.99, 631.84, 631.82, 631.73, 634.68, 644.49, 645, 643, 646.76, 668.15, 670.25, 663.97, 660, 647, 633.8, 629.39, 632.89, 626.95, 631.98, 634, 640.99, 631.84, 631.82, 631.73, 634.68, 644.49, 645, 643, 646.76, 668.15, 670.25, 663.97, 660, 647, 633.8, 629.39, 632.89, 626.95, 631.98, 634, 640.99],
            "low": [627.99, 618.96, 627.01, 630.56, 632, 638.1, 635.2, 642.02, 652.37, 660.62, 656.23, 649.79, 621.23, 616.91, 621.12, 626.5, 621.06, 625.68, 622.12, 631.46, 627.99, 618.96, 627.01, 630.56, 632, 638.1, 635.2, 642.02, 652.37, 660.62, 656.23, 649.79, 621.23, 616.91, 621.12, 626.5, 621.06, 625.68, 622.12, 631.46, 627.99, 618.96, 627.01, 630.56, 632, 638.1, 635.2, 642.02, 652.37, 660.62, 656.23, 649.79, 621.23, 616.91, 621.12, 626.5, 621.06, 625.68, 622.12, 631.46, 627.99, 618.96, 627.01, 630.56, 632, 638.1, 635.2, 642.02, 652.37, 660.62, 656.23, 649.79, 621.23, 616.91, 621.12, 626.5, 621.06, 625.68, 622.12, 631.46, 627.99, 618.96, 627.01, 630.56, 632, 638.1, 635.2, 642.02, 652.37, 660.62, 656.23, 649.79, 621.23, 616.91, 621.12, 626.5, 621.06, 625.68, 622.12, 631.46, 627.99, 618.96, 627.01, 630.56, 632, 638.1, 635.2, 642.02, 652.37, 660.62, 656.23, 649.79, 621.23, 616.91, 621.12, 626.5, 621.06, 625.68, 622.12, 631.46],
            "close": [630.37, 625.82, 629.7, 633.14, 640.25, 639.7, 642.4, 645.9, 665.41, 668.28, 659.01, 650.02, 622.46, 623.14, 625.96, 629.64, 624.99, 628.58, 632.91, 639.57, 630.37, 625.82, 629.7, 633.14, 640.25, 639.7, 642.4, 645.9, 665.41, 668.28, 659.01, 650.02, 622.46, 623.14, 625.96, 629.64, 624.99, 628.58, 632.91, 639.57, 630.37, 625.82, 629.7, 633.14, 640.25, 639.7, 642.4, 645.9, 665.41, 668.28, 659.01, 650.02, 622.46, 623.14, 625.96, 629.64, 624.99, 628.58, 632.91, 639.57, 630.37, 625.82, 629.7, 633.14, 640.25, 639.7, 642.4, 645.9, 665.41, 668.28, 659.01, 650.02, 622.46, 623.14, 625.96, 629.64, 624.99, 628.58, 632.91, 639.57, 630.37, 625.82, 629.7, 633.14, 640.25, 639.7, 642.4, 645.9, 665.41, 668.28, 659.01, 650.02, 622.46, 623.14, 625.96, 629.64, 624.99, 628.58, 632.91, 639.57, 630.37, 625.82, 629.7, 633.14, 640.25, 639.7, 642.4, 645.9, 665.41, 668.28, 659.01, 650.02, 622.46, 623.14, 625.96, 629.64, 624.99, 628.58, 632.91, 639.57],
            "closeOfOtherCompany": [660.37, 653.82, 650.7, 660.14, 660.25, 659.7, 662.4, 655.9, 675.41, 668.28, 659.01, 660.02, 652.46, 666.14, 665.96, 669.66, 664.99, 658.58, 662.91, 659.57, 650.37, 665.82, 656.7, 665.14, 665.25, 669.7, 662.4, 665.9, 665.41, 668.28, 669.01, 660.02, 666.46, 666.14, 665.96, 669.66, 659.99, 658.58, 672.91, 669.57, 650.37, 665.82, 669.7, 666.14, 660.25, 669.7, 662.4, 665.9, 665.41, 668.28, 659.01, 650.02, 672.46, 653.14, 665.96, 669.66, 664.99, 658.58, 662.91, 666.57, 656.37, 666.82, 662.7, 657.14, 665.25, 666.7, 666.4, 676.9, 665.41, 656.28, 659.01, 666.02, 663.46, 663.14, 654.96, 665.66, 675.99, 663.58, 666.91, 676.57, 686.37, 687.82, 666.7, 665.14, 666.25, 653.7, 653.4, 675.9, 674.41, 674.28, 666.01, 662.02, 662.46, 666.14, 666.96, 674.66, 666.99, 668.58, 666.91, 656.57, 675.37, 676.82, 662.7, 653.14, 666.25, 666.7, 675.4, 675.9, 674.41, 653.28, 666.01, 675.02, 676.46, 665.14, 676.96, 665.66, 666.99, 653.58, 666.91, 655.57],
            "volume": [6100000, 2500000, 3000000, 2000000, 2200000, 2000000, 2300000, 4000000, 5900000, 2500000, 2700000, 2500000, 300000, 1700000, 1500000, 200000, 1700000, 1700000, 2200000, 2100000, 6100000, 2500000, 3000000, 2000000, 2200000, 2000000, 2300000, 4000000, 5900000, 2500000, 2700000, 2500000, 300000, 1700000, 1500000, 200000, 1700000, 1700000, 2200000, 2100000, 6100000, 2500000, 3000000, 2000000, 2200000, 2000000, 2300000, 4000000, 5900000, 2500000, 2700000, 2500000, 300000, 1700000, 1500000, 200000, 1700000, 1700000, 2200000, 2100000, 6100000, 2500000, 3000000, 2000000, 2200000, 2000000, 2300000, 4000000, 5900000, 2500000, 2700000, 2500000, 300000, 1700000, 1500000, 200000, 1700000, 1700000, 2200000, 2100000, 6100000, 2500000, 3000000, 2000000, 2200000, 2000000, 2300000, 4000000, 5900000, 2500000, 2700000, 2500000, 300000, 1700000, 1500000, 200000, 1700000, 1700000, 2200000, 2100000, 6100000, 2500000, 3000000, 2000000, 2200000, 2000000, 2300000, 4000000, 5900000, 2500000, 2700000, 2500000, 300000, 1700000, 1500000, 200000, 1700000, 1700000, 2200000, 2100000]
        }
    };
    return chartData;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.candleStickChartProperties = function() {
    var chartProperties = {
        "chartHeight": 35,
        "layerArea": {
            "background": {
                "color": ["0xffffffff"]
            }
        },
        "axis": {
            "type": ["xAxis", "secondaryYAxis"],
            "xAxis": {
                "axisLine": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "labels": {
                    "font": {
                        "size": [10],
                        "family": ["Verdana"],
                        "style": ["bold"],
                        "color": ["0x000000ff"]
                    }
                }
            },
            "secondaryYAxis": {
                "axisLine": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "labels": {
                    "font": {
                        "size": [10],
                        "family": ["Verdana"],
                        "style": ["bold"],
                        "color": ["0x000000ff"]
                    }
                }
            }
        },
        "grid": {
            "type": ["xAxisMajorGrid", "secondaryYAxisMajorGrid", "secondaryYAxisMinorGrid"],
            "xAxisMajorGrid": {
                "line": {
                    "color": ["0xccd5deff"]
                }
            },
            "secondaryYAxisMajorGrid": {
                "line": {
                    "color": ["0xccd5deff"]
                }
            },
            "secondaryYAxisMinorGrid": {
                "line": {
                    "color": ["0xaaaaaaff"]
                }
            }
        },
        "drawEntities": ["axis", "grid", "candleStickChart"],
        "candleStickChart": {
            "columnId": [0, 1, 2, 3],
            "graphType": "candle",
            "animations": {
                "onInitAnimation": true
            },
            "dataAlignToAxis": ["secondaryYAxis"],
            "candleStick": {
                "up": {
                    "color": ["0x569728FF"]
                },
                "down": {
                    "color": ["0x8D1923FF"]
                }
            },
            "dataLabels": {
                "font": {
                    "size": [14],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0xaaaaaaff"]
                }
            }
        }
    };
    return chartProperties;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.columnChartProperties = function() {
    var chartProperties = {
        "chartHeight": 30,
        "layerArea": {
            "background": {
                "color": ["0xffffffff"]
            }
        },
        "axis": {
            "type": ["xAxis", "secondaryYAxis"],
            "xAxis": {
                "axisLine": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "labels": {
                    "visible": false
                }
            },
            "secondaryYAxis": {
                "axisLine": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "labels": {
                    "font": {
                        "size": [10],
                        "family": ["Verdana"],
                        "style": ["bold"],
                        "color": ["0x000000ff"]
                    }
                }
            }
        },
        "grid": {
            "type": ["xAxisMajorGrid", "secondaryYAxisMajorGrid", "secondaryYAxisMinorGrid"],
            "xAxisMajorGrid": {
                "line": {
                    "color": ["0xccd5deff"]
                }
            },
            "secondaryYAxisMajorGrid": {
                "line": {
                    "color": ["0xccd5deff"]
                }
            },
            "secondaryYAxisMinorGrid": {
                "line": {
                    "color": ["0xaaaaaaff"]
                }
            }
        },
        "drawEntities": ["axis", "grid", "columnChart"],
        "columnChart": {
            "columnId": [5],
            "animations": {
                "onInitAnimation": true
            },
            "dataAlignToAxis": ["secondaryYAxis"],
            "plotMissingValues": "assumeZero",
            "bar": {
                "color": [
                    ["0x355489ff"]
                ]
            }
        }
    };
    return chartProperties;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.lineChartProperties = function() {
    var chartProperties = {
        "chartHeight": 35,
        "layerArea": {
            "background": {
                "color": ["0xffffffff"]
            }
        },
        "axis": {
            "type": ["xAxis", "secondaryYAxis"],
            "xAxis": {
                "axisLine": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "labels": {
                    "font": {
                        "size": [10],
                        "family": ["Verdana"],
                        "style": ["bold"],
                        "color": ["0x000000ff"]
                    }
                }
            },
            "secondaryYAxis": {
                "axisLine": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "labels": {
                    "font": {
                        "size": [10],
                        "family": ["Verdana"],
                        "style": ["bold"],
                        "color": ["0x000000ff"]
                    }
                }
            }
        },
        "grid": {
            "type": ["xAxisMajorGrid", "secondaryYAxisMajorGrid", "secondaryYAxisMinorGrid"],
            "xAxisMajorGrid": {
                "line": {
                    "color": ["0xccd5deff"]
                }
            },
            "secondaryYAxisMajorGrid": {
                "line": {
                    "color": ["0xccd5deff"]
                }
            },
            "secondaryYAxisMinorGrid": {
                "line": {
                    "color": ["0xaaaaaaff"]
                }
            }
        },
        "drawEntities": ["axis", "grid", "lineChart"],
        "lineChart": {
            "columnId": [3],
            "animations": {
                "onInitAnimation": true
            },
            "dataAlignToAxis": ["secondaryYAxis"],
            "plotMissingValues": "assumeZero",
            "line": {
                "color": ["0x355489ff"]
            },
            "plotPoints": {
                "visible": false,
                "color": ["0x2a99ceff"],
                "size": [12]
            }
        }
    };
    return chartProperties;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.comparisionChartProperties = function() {
    var prevChartType = k_dv.dataviz.demos.finance.getPrevChartType();
    var chartProperties = {};
    if (prevChartType == 0) {
        chartProperties = k_dv.dataviz.demos.finance.candleStickChartProperties();
        chartProperties.drawEntities = ["axis", "grid", "candleStickChart", "lineChart"];
        chartProperties["lineChart"] = {
            "columnId": [0],
            "animations": {
                "onInitAnimation": true
            },
            "plotMissingValues": "assumeZero",
            "line": {
                "color": ["0xaaaaaaff"]
            },
            "plotPoints": {
                "color": ["0x2a99ceff"],
                "size": [8]
            },
            "dataLabels": {
                "placement": "inside",
                "font": {
                    "size": [14],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0xaaaaaaff"]
                }
            }
        };
        chartProperties.lineChart.columnId = [4];
        chartProperties.lineChart.line.color = ["0xff0000ff"];
        chartProperties.lineChart.dataLabels = null;
    } else if (prevChartType == 1) {
        chartProperties = k_dv.dataviz.demos.finance.lineChartProperties();
        chartProperties.drawEntities = ["axis", "grid", "lineChart"];
        chartProperties.lineChart.columnId = [3, 4];
        chartProperties.lineChart.line.color = ["0x355489ff", "0xff0000ff"];
    }
    chartProperties.lineChart.dataAlignToAxis = ["secondaryYAxis"];
    chartProperties.lineChart.plotPoints.visible = false;
    chartProperties.lineChart.line.width = [1];
    return chartProperties;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.events = function() {
    var chartEvents = {
        "events": ["eventsMap1"],
        "eventsMap1": {
            "onTouch": {
                "crossHair": {
                    "line": {
                        "color": ["0x355489ff"],
                        "width": [2]
                    }
                },
                "dataLabels": {
                    "indicators": ["rowName", "numberValue"],
                    "font": {
                        "size": [10],
                        "family": ["Verdana"],
                        "style": ["bold"],
                        "color": ["0x355489ff"]
                    }
                },
                "border": {
                    "line": {
                        "color": ["0x355489ff"],
                        "width": [2]
                    }
                },
                "background": {
                    "fillType": "gradient",
                    "transparency": 30,
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0xffffffff"]
                }
            }
        }
    };
    return chartEvents;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.getChartInfoByChartType = function(chartType) {
    return k_dv.dataviz.demos.finance.stockChartProperties(chartType);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function func_112_demo_frm013FinanceChartForm_onClick_LineChart() {
    var getChartInfo = function() {
            return k_dv.dataviz.demos.finance.stockChartProperties(1);
        };
    var chartInfo = {};
    chartInfo = getChartInfo();
    var chartWidget = k_dv.dataviz.demos.finance.chartWidget;
    chartWidget.setProperties(chartInfo);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function func_112_demo_frm013FinanceChartForm_onClick_CandleStick() {
    var getChartInfo = function() {
            return k_dv.dataviz.demos.finance.stockChartProperties(0);
        };
    var chartInfo = {};
    chartInfo = getChartInfo();
    var chartWidget = k_dv.dataviz.demos.finance.chartWidget;
    chartWidget.setProperties(chartInfo);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function func_112_demo_frm013FinanceChartForm_onClick_Comparision() {
    var chartType = k_dv.dataviz.demos.finance.getChartType();
    if (chartType != 2) k_dv.dataviz.demos.finance.setPrevChartType(chartType);
    var getChartInfo = function() {
            return k_dv.dataviz.demos.finance.stockChartProperties(2);
        };
    var chartInfo = {};
    chartInfo = getChartInfo();
    var chartWidget = k_dv.dataviz.demos.finance.chartWidget;
    chartWidget.setProperties(chartInfo);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function func_112_demo_frm013FinanceChartForm_onClick_SimpleAverages() {};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function func_112_demo_frm013FinanceChartForm_onClick_WeekData() {
    k_dv.dataviz.demos.finance.setDataType(0);
    var chartType = k_dv.dataviz.demos.finance.getChartType();
    var getChartInfo = function() {
            return k_dv.dataviz.demos.finance.getChartInfoByChartType(chartType);
        };
    var getChartData = function() {
            return func_112_demo_frm013FinanceChartForm_onClick_getWeekData();
        };
    var chartInfo = {};
    chartInfo = getChartInfo();
    chartInfo.chartData = getChartData();
    var chartProperties = chartInfo.chartProperties;
    chartProperties.layer0.axis.xAxis.labels.skipLabelInterval = 0;
    chartProperties.layer1.axis.xAxis.labels.skipLabelInterval = 0;
    chartInfo.chartProperties = chartProperties;
    var chartWidget = k_dv.dataviz.demos.finance.chartWidget;
    chartWidget.setProperties(chartInfo);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function func_112_demo_frm013FinanceChartForm_onClick_MonthData() {
    k_dv.dataviz.demos.finance.setDataType(1);
    var chartType = k_dv.dataviz.demos.finance.getChartType();
    var getChartInfo = function() {
            return k_dv.dataviz.demos.finance.getChartInfoByChartType(chartType);
        };
    var getChartData = function() {
            return func_112_demo_frm013FinanceChartForm_onClick_getMonthData();
        };
    var chartInfo = {};
    chartInfo = getChartInfo();
    chartInfo.chartData = getChartData();
    var chartProperties = chartInfo.chartProperties;
    chartProperties.layer0.axis.xAxis.labels.skipLabelInterval = 7;
    chartProperties.layer1.axis.xAxis.labels.skipLabelInterval = 7;
    chartInfo.chartProperties = chartProperties;
    var chartWidget = k_dv.dataviz.demos.finance.chartWidget;
    chartWidget.setProperties(chartInfo);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function func_112_demo_frm013FinanceChartForm_onClick_YearData() {
    k_dv.dataviz.demos.finance.setDataType(2);
    var chartType = k_dv.dataviz.demos.finance.getChartType();
    var getChartInfo = function() {
            return k_dv.dataviz.demos.finance.getChartInfoByChartType(chartType);
        };
    var getChartData = function() {
            return func_112_demo_frm013FinanceChartForm_onClick_getYearData();
        };
    var chartInfo = {};
    chartInfo = getChartInfo();
    chartInfo.chartData = getChartData();
    var chartProperties = chartInfo.chartProperties;
    chartProperties.layer0.axis.xAxis.labels.skipLabelInterval = 30;
    chartProperties.layer1.axis.xAxis.labels.skipLabelInterval = 30;
    chartInfo.chartProperties = chartProperties;
    var chartWidget = k_dv.dataviz.demos.finance.chartWidget;
    chartWidget.setProperties(chartInfo);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function func_112_demo_frm013FinanceChartForm_onClick_getWeekData() {
    return k_dv.dataviz.demos.finance.weekData();
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function func_112_demo_frm013FinanceChartForm_onClick_getMonthData() {
    return k_dv.dataviz.demos.finance.monthData();
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function func_112_demo_frm013FinanceChartForm_onClick_getYearData() {
    return k_dv.dataviz.demos.finance.yearData();
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.getChartType = function() {
    return k_dv.dataviz.demos.finance.chartType;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.getDataType = function() {
    return k_dv.dataviz.demos.finance.dataType;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.setChartType = function(arg) {
    k_dv.dataviz.demos.finance.chartType = arg;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.setDataType = function(arg) {
    k_dv.dataviz.demos.finance.dataType = arg;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.setPrevChartType = function(arg) {
    k_dv.dataviz.demos.finance.prevChartType = arg;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.finance.getPrevChartType = function() {
    return k_dv.dataviz.demos.finance.prevChartType;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////