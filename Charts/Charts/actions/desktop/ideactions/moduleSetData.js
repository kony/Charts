///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.setData = {};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function func_demo_init_frm_setData() {
    k_dv.dataviz.demos.setData.chartWidgetId = [];
    var demoIndex = 0;
    var demoViewForm = k_dv.dataviz.demos.setData.demoFormSetData();
    // assign
    var usecase_array = [];
    var index = -1;
    usecase_array[++index] = k_dv_dataviz_demo9_demo_sample_0;
    usecase_array[++index] = k_dv_dataviz_demo9_demo_sample_1;
    
    //remove widgets
    var widgets = demoViewForm.widgets();
    if(widgets){
    	for(var i = 0; i < widgets.length; i++){
    		demoViewForm.remove(widgets[i]);
    	}
    }
    // execute
    for (var i = 0; i < usecase_array.length; i++) {
        var chartInfo = usecase_array[i]();
        var chartIndex = demoIndex++;
        var chart2d3d = createChartWidget(chartInfo, chartIndex);
        k_dv.dataviz.demos.setData.chartWidgetId[i] = chart2d3d;
        demoViewForm.add(chart2d3d);
    }
    demoViewForm.show();
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.setData.demoFormSetData = function(){
	return frmMiscDemo;
}
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_demo9_demo_sample_0 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 30,
            "title": {
                "font": {
                    "size": [14],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0x000000ff"]
                },
                "alignment": "right",
                "containerWt": 10
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "gradientRatios": [0, 30, 70, 100],
                    "color": ["0xffffffFF"]
                }
            },
            "axis": {
                "xAxis": {
                    "title": {
                        "text": "",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "axisLine": {
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "margin": [0, 0, 30, 0],
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0x000000ff"]
                        }
                    }
                },
                "yAxis": {
                    "title": {
                        "text": "",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "axisLine": {
                        "visible": false,
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "margin": [30, 0, 0, 0],
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0x000000ff"]
                        }
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0xaaaaaaff"]
                            }
                        },
                        "minor": {
                            "line": {
                                "color": ["0xaaaaaaff"]
                            }
                        }
                    }
                }
            },
            "grid": {
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                }
            },
            "drawEntities": ["axis", "grid", "columnChart"],
            "columnChart": {
                "animations": {
                    "onInitAnimation": true
                },
                "plotMissingValues": "assumeZero",
                "bar": {
                    "fillType": ["gradient"],
                    "color": [
                        ["0xF41717FF", "0x9B0A0AFF"],
                        ["0xF524F2FF", "0x520851FF"],
                        ["0x5E4FEEFF", "0x0D083FFF"]
                    ]
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Gold", "Silver", "Bronze"]
            },
            "columnNames": {
                "values": ["Medals"]
            },
            "data": {
                "Medals": [20, 30, 20]
            }
        },
        "chartEvents": {
            "events": ["eventsMap1"],
            "eventsMap1": {
                "onPinchZoom": {
                    "minimumZoomScale": 1,
                    "maximumZoomScale": 2
                },
                "onTouch": {
                    "crossHair": {
                        "line": {
                            "color": ["0xAAAAAAFF"]
                        }
                    },
                    "dataLabels": {
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xAAAAAAFF"]
                        }
                    }
                }
            }
        }
    };
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_demo9_demo_sample_1 = function () {
    k_dv_dataviz_setdata_donutchart_chartinfo = function () {
        var chartInfo = {
            "chartProperties": {
                "chartHeight": 42,
                "title": {
                    "text": "Olympic Medals: SpinWheel onTap sets ColumnChart data",
                    "font": {
                        "size": [18],
                        "family": ["Helvetica"],
                        "style": ["normal"],
                        "color": ["0x000000ff"]
                    },
                    "containerWt": 10,
                    "background": {
                        "fillType": "gradient",
                        "color": ["0xF4F5F7FF", "0xAAAEB9FF"]
                    }
                },
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "gradientRatios": [0, 30, 70, 100],
                        "color": ["0xecedf0FF", "0xbabec8FF", "0xadb1bcFF", "0xecedf0FF"]
                    }
                },
                "drawEntities": ["donutChart"],
                "donutChart": {
                    "columnId": [0],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "plotMissingValues": "assumeZero",
                    "startAngle": 0,
                    "holeRadius": 50,
                    "pieSlice": {
                        "fillType": ["gradient"],
                        "color": [
                            ["0xf91818ff", "0x980a0aff"],
                            ["0xf31515ff", "0x500b0bff"],
                            ["0xcd3539ff", "0x470305ff"],
                            ["0xe53340ff", "0x6d030bff"],
                            ["0xf415f1ff", "0x460745ff"],
                            ["0xf415f1ff", "0x460745ff"],
                            ["0xf415f1ff", "0x460745ff"],
                            ["0x6253f6ff", "0x0a0538ff"],
                            ["0x6253f6ff", "0x0a0538ff"],
                            ["0x6253f6ff", "0x0a0538ff"]
                        ]
                    },
                    "border": {
                        "line": {
                            "color": ["0xffffffff"]
                        }
                    },
                    "dataLabels": {
                        "placement": "inside",
                        "indicators": ["rowName"],
                        "connector": {
                            "line": {
                                "style": ["continuous"],
                                "color": ["aaaaaaff"]
                            }
                        },
                        "font": {
                            "family": ["HelveticaNeue"],
                            "style": ["Bold"],
                            "size": [15],
                            "color": ["0xffffffff"]
                        }
                    },
                    "margin": [0, 0, 0, 0]
                }
            },
            "chartData": {
                "rowNames": {
                    "values": ["China", "USA", "Russia", "Britian", "Germany", "Australia", "Korea", "Japan", "Italy", "Ukraine"]
                },
                "columnNames": {
                    "values": ["Amount1", "Amount2"]
                },
                "data": {
                    "Amount1": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20],
                    "Amount2": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20]
                }
            },
            "chartEvents": {
                "events": ["eventsMap1"],
                "eventsMap1": {
                    "onPinchZoom": {
                        "minimumZoomScale": 1,
                        "maximumZoomScale": 2
                    },
                    "onTouch": {
                        "dataLabels": {
                            "indicators": ["rowName", "numberValue"],
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xffffffff"]
                            }
                        },
                        "border": {
                            "line": {
                                "color": ["0xffffffff"],
                                "width": [2]
                            }
                        },
                        "background": {
                            "transparency": 30,
                            "color": ["0x000000ff"]
                        }
                    }
                }
            }
        };
        return chartInfo;
    };
    ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////
    onTapFunction = function (args) {
        //var widgetId = args["widgetId"];
        var columnNumber = args["columnNumber"];
        var rowNumber = args["rowNumber"];
        var dataElement = args["dataElement"];
        kony.print("chartevents --- usecase_1_onTap");
        kony.print("chartevents_onTap - begin");
        kony.print("chartevents_onTap - columnNumber");
        kony.print(columnNumber);
        kony.print("chartevents_onTap - rowNumber");
        kony.print(rowNumber);
        kony.print(dataElement);
        var getChartDataSrc = function () {
            var chartData = {
                "rowNames": {
                    "values": ["Aus", "Bel", "Can", "Denm", "Egy", "Fin", "Fra", "Chin", "Ind", "Bri", "Ita", "Lib", "Mal", "Pak", "Rom", "USA"]
                },
                "columnNames": {
                    "values": ["GOLD", "SLIVER", "BRONZ", "TOTAL", "AMOUNT"]
                },
                "data": {
                    "GOLD": [30, 40, 50, 60, 12, 15, 11, 13, 34, 78, 50, 10, 56, 15, 67, 11],
                    "SLIVER": [10, 70, 30, 80, 90, 11, 40, 80, 75, 98, 50, 0, 50, 65, 60, 23],
                    "BRONZ": [34, 50, 55, 60, 16, 19, 77, 54, 35, 89, 50, 100, 56, 52, 74, 78],
                    "TOTAL": [74, 160, 135, 200, 118, 45, 128, 147, 144, 265, 150, 110, 162, 132, 201, 112],
                    "AMOUNT": [3400, 5000, 505, 600, 1600, 1978, 7547, 5224, 3532, 8009, 2350, 1300, 5006, 5222, 7884, 7128]
                }
            };
            return chartData;
        };
        var getChartData = function () {
            var chartData = {
                "rowNames": {
                    "values": ["Gold", "Silver", "Bronze"]
                },
                "columnNames": {
                    "values": ["Medals"]
                },
                "data": {
                    "Medals": [40, 50, 20]
                }
            };
            return chartData;
        };
        if (rowNumber >= 0) {
            var chartDataSrc = getChartDataSrc();
            var chartData = getChartData();
            chartData.data.Medals[0] = chartDataSrc.data.GOLD[rowNumber];
            chartData.data.Medals[1] = chartDataSrc.data.SLIVER[rowNumber];
            chartData.data.Medals[2] = chartDataSrc.data.BRONZ[rowNumber];
            k_dv.dataviz.demos.setData.chartWidgetId[0].setData(chartData);
        }
        kony.print("chartevents_onTap - end");
    };
    ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////
    ///////////////////////////////////////////////////
    var chartInfo = k_dv_dataviz_setdata_donutchart_chartinfo();
    chartInfo.chartEvents.eventsMap1.onTap = onTapFunction;
    chartInfo.chartProperties.title.text = "Olympic Medals: SpinWheel onTap sets ColumnChart data";
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////