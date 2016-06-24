///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function setPropertiesCatalouge() {
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_Methods.htm";
    this.pushDemo = function(demoName, demoObject) {
        this.demos.demoNames.push(demoName);
        this.demos.demoObjects.push(demoObject);
    }
    this.pushDemo("Drill Down", k_dv.dataviz.demos.demo10.usecase_1);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.demo10 = {};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.demo10.usecase_1_onTap = function(args) {
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
    var getChartDataSrc = function() {
            var chartData = {
                "rowNames": {
                    "values": []
                },
                "columnNames": {
                    "values": ["Firefox", "MSIE", "Chrome", "Safari", "Opera"]
                },
                "data": {
                    "Firefox": [0.2, 0.83, 1.58, 13.12, 5.43],
                    "MSIE": [10.85, 7.35, 33.06, 2.81],
                    "Chrome": [0.12, 0.19, 0.12, 0.36, 0.32, 9.91, 0.5, 0.22],
                    "Safari": [4.55, 1.42, 0.23, 0.21, 0.2, 0.33],
                    "Opera": [0.12, 0.37, 1.65]
                }
            };
            return chartData;
        };
    var getChartData = function() {
            var chartData = {
                "rowNames": {
                    "values": ["Gold", "Silver", "Bronze"]
                },
                "columnNames": {
                    "values": ["perCentofMarketShare"]
                },
                "data": {
                    "perCentofMarketShare": [40, 50, 60]
                }
            };
            return chartData;
        };
    if (rowNumber >= 0 && columnNumber >= 0 && dataElement != -1) {
        var chartInfo = k_dv.dataviz.demos.demo10.properties();
        var chartDataSrc = getChartDataSrc();
        var chartData = getChartData();
        var chartProperties = chartInfo.chartProperties;
        if (rowNumber == 0) {
            chartDataSrc.rowNames.values = ["Firefox 2.0", "Firefox 3.0", "Firefox 3.5", "Firefox 3.6", "Firefox 4.0"];
            chartData.data.perCentofMarketShare = chartDataSrc.data.Firefox;
            chartProperties.columnChart.bar.color = ["0x4f7cdbff"];
            chartProperties.axis.xAxis.title.text = "Firefox Versions";
        } else if (rowNumber == 1) {
            chartDataSrc.rowNames.values = ["MSIE 6.0", "MSIE 7.0", "MSIE 8.0", "MSIE 9.0"];
            chartData.data.perCentofMarketShare = chartDataSrc.data.MSIE;
            chartProperties.columnChart.bar.color = ["0x1c283eff"];
            chartProperties.axis.xAxis.title.text = "MSIE Versions";
        } else if (rowNumber == 2) {
            chartDataSrc.rowNames.values = ["Chrome 5.0", "Chrome 6.0", "Chrome 7.0", "Chrome 8.0", "Chrome 9.0", "Chrome 10.0", "Chrome 11.0", "Chrome 12.0"];
            chartData.data.perCentofMarketShare = chartDataSrc.data.Chrome;
            chartProperties.columnChart.bar.color = ["0x9bbbc0ff"];
            chartProperties.axis.xAxis.title.text = "Chrome Versions";
            chartProperties.axis.xAxis.labels.font.size = [10];
        } else if (rowNumber == 3) {
            chartDataSrc.rowNames.values = ["Safari 3.1", "Safari 4.0", "Safari 4.1", "Safari 4.2", "Safari 5.0", "Safari 5.2"];
            chartData.data.perCentofMarketShare = chartDataSrc.data.Safari;
            chartProperties.columnChart.bar.color = ["0x7b0c00ff"];
            chartProperties.axis.xAxis.title.text = "Safari Versions";
        } else if (rowNumber == 4) {
            chartDataSrc.rowNames.values = ["Opera 9.x", "Opera 10.x", "Opera 11.x"];
            chartData.data.perCentofMarketShare = chartDataSrc.data.Opera;
            chartProperties.columnChart.bar.color = ["0x63abcfff"];
            chartProperties.axis.xAxis.title.text = "Opera Versions";
        }
        chartProperties.axis.xAxis.title.font.color = chartProperties.columnChart.bar.color;
        chartData.rowNames = chartDataSrc.rowNames;
        chartInfo.chartEvents.eventsMap1.onTap = k_dv.dataviz.demos.demo10.usecase_1_onTap2;
        chartInfo.chartProperties = chartProperties;
        chartInfo.chartData = chartData;
        frmDemo.chart0.setProperties(chartInfo);
    }
    kony.print("chartevents_onTap - end");
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.demo10.usecase_1_onTap2 = function(args) {
    //var widgetId = args["widgetId"];
    var columnNumber = args["columnNumber"];
    var rowNumber = args["rowNumber"];
    var dataElement = args["dataElement"];
    kony.print("chartevents --- usecase_2_onTap");
    kony.print("chartevents_onTap - begin");
    kony.print("chartevents_onTap - columnNumber");
    kony.print(columnNumber);
    kony.print("chartevents_onTap - rowNumber");
    kony.print(rowNumber);
    kony.print(dataElement);
    if (rowNumber >= 0 && columnNumber >= 0 && dataElement != -1) {
        var chartInfo = k_dv.dataviz.demos.demo10.properties();
        chartInfo.chartEvents.eventsMap1.onTap = k_dv.dataviz.demos.demo10.usecase_1_onTap;
        frmDemo.chart0.setProperties(chartInfo);
    }
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.demo10.usecase_1 = function() {
    var chartInfo = k_dv.dataviz.demos.demo10.properties();
    chartInfo.chartEvents.eventsMap1.onTap = k_dv.dataviz.demos.demo10.usecase_1_onTap;
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv.dataviz.demos.demo10.properties = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Browser Market Share April 2011",
                "font": {
                    "size": [20],
                    "family": ["Helvetica"],
                    "style": ["normal"],
                    "color": ["0x000000ff"]
                },
                "containerWt": 10
            },
            "legend": {
                "indicators": ["marker", "textLabel"],
                "marker": {
                    "type": "colorBox",
                    "color": ["0x4f7cdbff", "0x1c283eff", "0x9bbbc0ff", "0x7b0c00ff", "0x63abcfff"]
                },
                "textLabel": {
                    "text": ["Firefox", "MSIE", "Chrome", "Safari", "Opera"],
                    "color": ["0x000000ff", "0x000000ff", "0x000000ff", "0x000000ff", "0x000000ff"],
                    "margin": [3, 5, 1, 1]
                },
                "font": {
                    "size": [14],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xaaaaaaff"]
                },
                "position": "bottom",
                "alignment": "left",
                "layout": "horizantal",
                "containerWt": 8,
                "margin": [10, 10, 10, 10],
                "padding": [1, 1, 1, 1]
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "gradientRatios": [0, 30, 70, 100],
                    "color": ["0xbabec8FF", "0xecedf0FF", "0xecedf0FF", "0xadb1bcFF"]
                }
            },
            "axis": {
                "xAxis": {
                    "title": {
                        "text": "Browser Bands",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0x00000ff"]
                        },
                        "margin": [0, 0, 10, 0]
                    },
                    "axisLine": {
                        "crossOtherAxisAt": "start",
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"]
                        }
                    }
                },
                "yAxis": {
                    "title": {
                        "text": "Total Percentage of Market Share",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0x4f7cdbff"]
                        },
                        "margin": [10, 0, 0, 0]
                    },
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"]
                        }
                    }
                }
            },
            "grid": {
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "line": {
                        "color": ["0x000000ff"]
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
                    "color": ["0x4f7cdbff", "0x1c283eff", "0x9bbbc0ff", "0x7b0c00ff", "0x63abcfff"]
                },
                "dataLabels": {
                    "placement": "above",
                    "font": {
                        "size": [14],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0x000000ff"]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Firefox", "MSIE", "Chrome", "Safari", "Opera"]
            },
            "columnNames": {
                "values": ["% of Market Share"]
            },
            "data": {
                "% of Market Share": [55.11, 21.63, 11.94, 7.15, 2.14]
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
                            "color": ["0x000000ff"]
                        }
                    },
                    "dataLabels": {
                        "indicators": ["rowName", "numberValue"],
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0x000000ff"]
                        }
                    },
                    "background": {
                        "color": ["0xffffffff"]
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