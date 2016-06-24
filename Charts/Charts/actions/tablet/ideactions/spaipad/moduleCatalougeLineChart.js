function lineChartCatalouge() {
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_linechart.htm";
    this.pushDemo = function(demoName, demoObject) {
        this.demos.demoNames.push(demoName);
        this.demos.demoObjects.push(demoObject);
    }
    this.pushDemo("Single Series-Scrolling", k_dv_dataviz_linechart_demo_sample_1);
    this.pushDemo("Multi Series/Clustered", k_dv_dataviz_linechart_demo_sample_2);
    this.pushDemo("Clustered With Plot Points", k_dv_dataviz_linechart_demo_sample_3);
    this.pushDemo("Step Line", k_dv_dataviz_linechart_demo_sample_4);
    this.pushDemo("Line Chart With Target Line", k_dv_dataviz_linechart_demo_sample_5);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_linechart_demo_sample_1 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": true,
            "title": {
                "text": "Account Balance: Scrolling, PinchToZoom, Crosshair",
                "font": {
                    "size": [14],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0xffffffff"]
                },
                "alignment": "left",
                "containerWt": 10,
                "background": {
                    "fillType": "gradient",
                    "color": ["0x054486FF", "0x0599D3FF"]
                }
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "color": ["0x0599D3FF", "0x054486FF"]
                }
            },
            "axis": {
                "xAxis": {
                    "scale": {
                        "type": "fixedGapMajorInterval",
                        "gap": 150,
                        "offset": {
                            "value": [50, 50],
                            "type": "percent"
                        }
                    },
                    "axisLine": {
                        "crossOtherAxisAt": "end",
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "transparency": [90]
                        }
                    },
                    "labels": {
                        "markingReference": "atMinor",
                        "font": {
                            "size": [9],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xfefefeff"],
                            "transparency": [0]
                        }
                    }
                },
                "yAxis": {
                    "scale": {
                        "minValue": 0,
                        "maxValue": 18000,
                        "majorInterval": 6000,
                        "minorInterval": 3,
                        "offset": {
                            "value": [20, 20],
                            "type": "percent"
                        }
                    },
                    "axisLine": {
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "position": "inner",
                        "font": {
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xfefefeff"]
                        }
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "yAxisMajorGrid", "yAxisMinorGrid"],
                "xAxisMajorGrid": {
                    "line": {
                        "color": ["0xaaaaaaff"],
                        "transparency": [90]
                    }
                },
                "yAxisMajorGrid": {
                    "line": {
                        "color": ["0xaaaaaaff"],
                        "transparency": [90]
                    }
                },
                "yAxisMinorGrid": {
                    "line": {
                        "color": ["0xaaaaaaff"],
                        "transparency": [90]
                    }
                }
            },
            "drawEntities": ["axis", "grid", "lineChart"],
            "lineChart": {
                "columnId": [0],
                "animations": {
                    "onInitAnimation": true
                },
                "plotMissingValues": "assumeZero",
                "line": {
                    "color": ["0xaaaaaaff"],
                    "width": [3]
                },
                "plotPoints": {
                    "color": ["0xffffffff", "0x2a99ceff", "0xff0000ff"],
                    "size": [12]
                },
                "dataLabels": {
                    "placement": "top",
                    "font": {
                        "size": [9],
                        "family": ["Verdana"],
                        "style": ["Bold"],
                        "color": ["0xaaaaaaff"]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["4/13", "4/15", "4/17", "4/18", "4/19", "4/21", "4/22", "4/23", "4/26", "4/27", "4/28", "4/29", "4/30"]
            },
            "columnNames": {
                "values": ["Amount", "Credit"]
            },
            "data": {
                "Amount": [3662, 2008, 4220, 4555, 4100, 3895, 2128, 2782, 3780, 3675, 5340, 5565, 6450],
                "Credit": [35, 30, 44, 40, 38, 30, 25, 18, 34, 40, 45, 51, 48]
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
                            "color": ["0xA8C7E3FF"],
                            "transparency": [90]
                        }
                    },
                    "dataLabels": {
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xA8C7E3FF"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0xFFFFFFFF"],
                            "transparency": [80]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "gradientRatios": [0, 50, 50, 100],
                        "color": ["0x0599D3FF", "0x054486FF", "0x054486FF", "0x0599D3FF"]
                    }
                }
            }
        }
    }
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
var k_dv_dataviz_linechart_demo_sample_2 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "Production Output indicator: Multi Chart, PinchToZoom, Crosshair",
                "font": {
                    "size": ["20"],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0x000000ff"],
                    "transparency": [30]
                },
                "position": "top",
                "alignment": "center",
                "direction": "up",
                "containerWt": 10,
                "margin": [0, 0, 0, 0],
                "background": {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0xffffffff"]
                }
            },
            "legend": {
                "visible": true,
                "indicators": ["marker", "textLabel"],
                "separator": "space",
                "marker": {
                    "type": "colorBox",
                    "color": ["0x9fd500ff", "0x22b8dbff", "0x0D0664ff", "0x949094FF"]
                },
                "rowName": {
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "numberValue": {
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "percentValue": {
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "columnName": {
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "textLabel": {
                    "text": ["Entity1", "Entity2", "Entity3", "Entity4"],
                    "color": ["0x9fd500ff", "0x22b8dbff", "0x0D0664ff", "0x949094FF"],
                    "margin": [3, 5, 1, 1]
                },
                "textValue": {
                    "text": ["$909", "$309", "$609"],
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "font": {
                    "size": [12],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xaaaaaaff"],
                    "transparency": [0]
                },
                "position": "bottom",
                "alignment": "right",
                "layout": "horizantal",
                "containerWt": 8,
                "margin": [10, 10, 10, 10],
                "padding": [1, 1, 1, 1],
                "background": {
                    "fillType": "gradient",
                    "transparency": 100,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                }
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0xffffffff"]
                }
            },
            "dataSetMapping": {
                "setId": "dataset1",
                "eventsSetId": null
            },
            "axis": {
                "type": ["xAxis", "yAxis"],
                "xAxis": {
                    "scale": {
                        "type": "fixedGapMajorInterval",
                        "gap": 150
                    },
                    "axisLine": {
                        "visible": false,
                        "crossOtherAxisAt": "value"
                    },
                    "labels": {
                        "orientationAngle": 90,
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"],
                            "transparency": [0]
                        }
                    }
                },
                "yAxis": {
                    "axisLine": {
                        "visible": false,
                        "crossOtherAxisAt": "start"
                    },
                    "labels": {
                        "margin": [30, 0, 0, 0],
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"],
                            "transparency": [10]
                        }
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid"],
                "xAxisMajorGrid": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                }
            },
            "lineChart": {
                "columnId": [0, 1, 2, 4],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "normal",
                "lineType": "normal",
                "dataAlignToAxis": ["primaryYAxis"],
                "plotMissingValues": "assumeZero",
                "line": {
                    "color": ["0x9fd500ff", "0x22b8dbff", "0x0D0664ff", "0x949094FF"],
                    "width": [3],
                    "transparency": [0]
                },
                "plotPoints": {
                    "visible": false,
                    "colorIndicator": "columns",
                    "marker": {
                        "type": ["bubble", "bubble", "bubble"],
                        "fillType": "color"
                    },
                    "color": ["0xa9e200ff", "0x22b8dbff", "0xf7d700ff"],
                    "transparency": [0],
                    "size": [12]
                },
                "dataLabels": null
            },
            "drawEntities": ["axis", "grid", "areaChart", "lineChart"],
            "areaChart": {
                "columnId": [3],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "normal",
                "lineType": "normal",
                "dataAlignToAxis": ["primaryYAxis"],
                "plotMissingValues": "assumeZero",
                "area": {
                    "fillType": ["color"],
                    "transparency": [20],
                    "color": ["0x00ff00ff"],
                    "colorAboveXAxis": ["0xB4B4B4FF"],
                    "colorBelowXAxis": ["0xff0000ff"],
                    "visible": true
                },
                "line": {
                    "visible": false,
                    "color": ["0xff0000ff"],
                    "width": [1],
                    "transparency": [0]
                },
                "plotPoints": {
                    "visible": false
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["01/2008", "02/2008", "03/2008", "04/2008", "05/2008", "06/2008", "07/2008", "08/2008", "09/2008", "10/2008", "11/2008", "12/2008", "01/2009", "02/2009", "03/2009", "04/2009", "05/2009", "06/2009", "07/2009", "08/2009", "09/2009", "10/2009", "11/2009", "12/2009"]
            },
            "columnNames": {
                "values": ["Deposit", "Cash", "Credit", "Target", "Achieved"]
            },
            "data": {
                "Deposit": [234, 236, 224, 244, 240, 218, 256, 254, 248, 226, 234, 228, 234, 236, 224, 344, 340, 318, 356, 324, 344, 340, 318, 356],
                "Cash": [524, 512, 514, 526, 534, 536, 522, 544, 342, 318, 328, 324, 324, 312, 314, 326, 434, 436, 422, 455, 426, 434, 436, 422],
                "Credit": [344, 335, 336, 334, 332, 324, 322, 425, 444, 446, 448, 446, 444, 435, 436, 434, 532, 524, 522, 536, 534, 532, 524, 522],
                "Achieved": [78, 79, 67, 87, 76, 54, 34, 90, 87, 88, 59, 45, 78, 80, 80, 35, 68, 78, 75, 70, 75, 83, 78, 75],
                "Target": [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120]
            }
        },
        "chartEvents": {
            "onPinchZoom": {
                "minimumZoomScale": 1,
                "maximumZoomScale": 2
            },
            "onTouch": {
                "crossHair": {
                    "line": {
                        "color": ["0xAAAAAAFF"],
                        "width": [1],
                        "transparency": [0]
                    }
                },
                "dataLabels": {
                    "visible": true,
                    "indicators": ["numberValue"],
                    "separator": "space",
                    "font": {
                        "size": [14],
                        "family": ["Verdana"],
                        "style": ["Bold"],
                        "color": ["0xAAAAAAFF"],
                        "transparency": [0]
                    }
                },
                "border": {
                    "visible": true,
                    "line": {
                        "color": ["0x9fd500ff"],
                        "width": [1],
                        "transparency": [0]
                    }
                },
                "background": {
                    "fillType": "color",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [],
                    "color": ["0xffffffff"]
                }
            }
        }
    };
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_linechart_demo_sample_3 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "Stock Monitoring 2008: MultiSeries, PinchToZoom, Crosshair",
                "font": {
                    "size": ["20"],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0x000000ff"],
                    "transparency": [0]
                },
                "position": "top",
                "alignment": "center",
                "direction": "up",
                "containerWt": 10,
                "margin": [0, 0, 0, 0],
                "background": {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0xffffffff"]
                }
            },
            "legend": {
                "visible": true,
                "indicators": ["marker", "textLabel"],
                "separator": "space",
                "marker": {
                    "type": "colorBox",
                    "color": ["0xa9e200ff", "0x22b8dbff", "0xf7d700ff"]
                },
                "rowName": {
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "numberValue": {
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "percentValue": {
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "columnName": {
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "textLabel": {
                    "text": ["Stock1", "Stock2", "Stock3"],
                    "color": ["0x000000ff", "0x000000ff", "0x000000ff"],
                    "margin": [3, 5, 1, 1]
                },
                "textValue": {
                    "text": ["$909", "$309", "$609"],
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "font": {
                    "size": [12],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xaaaaaaff"],
                    "transparency": [0]
                },
                "position": "top",
                "alignment": "left",
                "layout": "horizantal",
                "containerWt": 8,
                "margin": [10, 10, 10, 10],
                "padding": [1, 1, 1, 1],
                "background": {
                    "fillType": "gradient",
                    "transparency": 100,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                }
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0xffffffff"]
                }
            },
            "dataSetMapping": {
                "setId": "dataset1",
                "eventsSetId": null
            },
            "axis": {
                "type": ["xAxis", "yAxis"],
                "xAxis": {
                    "scale": {
                        "type": "fixedGapMajorInterval",
                        "gap": 150
                    },
                    "axisLine": {
                        "crossOtherAxisAt": "value",
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "orientationAngle": 90,
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"],
                            "transparency": [0]
                        }
                    }
                },
                "yAxis": {
                    "scale": {
                        "minValue": 0,
                        "maxValue": 60,
                        "majorInterval": 10,
                        "minorInterval": 5,
                        "offset": {
                            "value": [0, 0],
                            "type": "pixels"
                        }
                    },
                    "axisLine": {
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "margin": [30, 0, 0, 0],
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"],
                            "transparency": [0]
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
                        },
                        "placement": "atLabels"
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "yAxisMajorGrid"],
                "xAxisMajorGrid": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "yAxisMajorGrid": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                }
            },
            "drawEntities": ["axis", "grid", "lineChart"],
            "lineChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "normal",
                "lineType": "normal",
                "dataAlignToAxis": ["primaryYAxis"],
                "plotMissingValues": "assumeZero",
                "line": {
                    "color": ["0x9fd500ff", "0x22b8dbff", "0xf7d700ff"],
                    "width": [3],
                    "transparency": [0]
                },
                "plotPoints": {
                    "visible": true,
                    "colorIndicator": "columns",
                    "marker": {
                        "type": ["bubble", "bubble", "bubble"],
                        "fillType": "color"
                    },
                    "color": ["0xa9e200ff", "0x22b8dbff", "0xf7d700ff"],
                    "transparency": [0],
                    "size": [12]
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["01/2008", "02/2008", "03/2008", "04/2008", "05/2008", "06/2008", "07/2008", "08/2008", "09/2008", "10/2008", "11/2008", "12/2008"]
            },
            "columnNames": {
                "values": ["Cash", "Deposit", "Credit"]
            },
            "data": {
                "Cash": [24, 12, 14, 26, 34, 36, 22, 44, 42, 18, 28, 24],
                "Deposit": [34, 36, 24, 44, 40, 18, 56, 54, 48, 26, 34, 28],
                "Credit": [44, 35, 36, 34, 32, 24, 22, 25, 44, 46, 48, 46]
            }
        },
        "chartEvents": {
            "onSwipe": null,
            "onPinchZoom": {
                "minimumZoomScale": 1,
                "maximumZoomScale": 2
            },
            "onTouch": {
                "crossHair": {
                    "line": {
                        "color": ["0xAAAAAAFF"],
                        "width": [1],
                        "transparency": [0]
                    }
                },
                "dataLabels": {
                    "visible": true,
                    "indicators": ["numberValue"],
                    "separator": "space",
                    "font": {
                        "size": [14],
                        "family": ["Verdana"],
                        "style": ["Bold"],
                        "color": ["0xAAAAAAFF"],
                        "transparency": [0]
                    }
                },
                "border": {
                    "visible": true,
                    "line": {
                        "color": ["0x9fd500ff"],
                        "width": [1],
                        "transparency": [0]
                    }
                },
                "background": {
                    "fillType": "color",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [],
                    "color": ["0xffffffff"]
                }
            }
        }
    };
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_linechart_demo_sample_4 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "StepLine: MultiSeries, PinchToZoom, Crosshair",
                "font": {
                    "size": ["20"],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0x000000ff"],
                    "transparency": [0]
                },
                "position": "top",
                "alignment": "center",
                "direction": "up",
                "containerWt": 10,
                "margin": [0, 0, 0, 0],
                "background": {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0xffffffff"]
                }
            },
            "legend": {
                "visible": true,
                "indicators": ["marker", "textLabel"],
                "separator": "space",
                "marker": {
                    "type": "colorBox",
                    "color": ["0xa9e200ff", "0x22b8dbff", "0xf7d700ff"]
                },
                "rowName": {
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "numberValue": {
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "percentValue": {
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "columnName": {
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "textLabel": {
                    "text": ["Stock1", "Stock2", "Stock3"],
                    "color": ["0x000000ff", "0x000000ff", "0x000000ff"],
                    "margin": [3, 5, 1, 1]
                },
                "textValue": {
                    "text": ["$909", "$309", "$609"],
                    "color": ["0x169EECFF", "0xBE0056ff", "0xFCC40EFF"],
                    "margin": [5, 5, 0, 0]
                },
                "font": {
                    "size": [12],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xaaaaaaff"],
                    "transparency": [0]
                },
                "position": "top",
                "alignment": "left",
                "layout": "horizantal",
                "containerWt": 8,
                "margin": [10, 10, 10, 10],
                "padding": [1, 1, 1, 1],
                "background": {
                    "fillType": "gradient",
                    "transparency": 100,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                }
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0xffffffff"]
                }
            },
            "dataSetMapping": {
                "setId": "dataset1",
                "eventsSetId": null
            },
            "axis": {
                "type": ["xAxis", "yAxis"],
                "xAxis": {
                    "scale": {
                        "type": "fixedGapMajorInterval",
                        "gap": 150
                    },
                    "axisLine": {
                        "crossOtherAxisAt": "value",
                        "value": 0,
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "orientationAngle": 90,
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"],
                            "transparency": [0]
                        }
                    }
                },
                "yAxis": {
                    "scale": {
                        "minValue": 0,
                        "maxValue": 60,
                        "majorInterval": 10,
                        "minorInterval": 5,
                        "offset": {
                            "value": [0, 0],
                            "type": "pixels"
                        }
                    },
                    "axisLine": {
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "margin": [30, 0, 0, 0],
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"],
                            "transparency": [0]
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
                        },
                        "placement": "atLabels"
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "yAxisMajorGrid"],
                "xAxisMajorGrid": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "yAxisMajorGrid": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                }
            },
            "drawEntities": ["axis", "grid", "lineChart"],
            "lineChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "normal",
                "lineType": "stepLine",
                "dataAlignToAxis": ["primaryYAxis"],
                "plotMissingValues": "assumeZero",
                "line": {
                    "color": ["0x9fd500ff", "0x22b8dbff", "0xf7d700ff"],
                    "width": [3],
                    "transparency": [0]
                },
                "plotPoints": {
                    "visible": true,
                    "colorIndicator": "columns",
                    "marker": {
                        "type": ["bubble", "bubble", "bubble"],
                        "fillType": "color"
                    },
                    "color": ["0xa9e200ff", "0x22b8dbff", "0xf7d700ff"],
                    "transparency": [0],
                    "size": [12]
                },
                "dataLabels": null
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["01/2008", "02/2008", "03/2008", "04/2008", "05/2008", "06/2008", "07/2008", "08/2008", "09/2008", "10/2008", "11/2008", "12/2008"]
            },
            "columnNames": {
                "values": ["Cash", "Deposit", "Credit"]
            },
            "data": {
                "Cash": [24, 12, 14, 26, 34, 36, 22, 44, 42, 18, 28, 24],
                "Deposit": [34, 36, 24, 44, 40, 18, 56, 54, 48, 26, 34, 28],
                "Credit": [44, 35, 36, 34, 32, 24, 22, 25, 44, 46, 48, 46]
            }
        },
        "chartEvents": {
            "onSwipe": null,
            "onPinchZoom": {
                "minimumZoomScale": 1,
                "maximumZoomScale": 2
            },
            "onTouch": {
                "crossHair": {
                    "line": {
                        "color": ["0xAAAAAAFF"],
                        "width": [1],
                        "transparency": [0]
                    }
                },
                "dataLabels": {
                    "visible": true,
                    "indicators": ["numberValue"],
                    "separator": "space",
                    "font": {
                        "size": [14],
                        "family": ["Verdana"],
                        "style": ["Bold"],
                        "color": ["0xAAAAAAFF"],
                        "transparency": [0]
                    }
                },
                "border": {
                    "visible": true,
                    "line": {
                        "color": ["0x9fd500ff"],
                        "width": [1],
                        "transparency": [0]
                    }
                },
                "background": {
                    "fillType": "color",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [],
                    "color": ["0xffffffff"]
                }
            }
        }
    };
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_linechart_demo_sample_5 = function() {
    function getChartInfo() {
        var chartInfo = {
            "chartProperties": {
                "chartHeight": 67,
                "title": {
                    "text": "SLA Evolution",
                    "font": {
                        "size": [16],
                        "style": ["normal"],
                        "family": ["Verdana"],
                        "color": ["0x575d6eff"]
                    },
                    "margin": [1, 0, 0, 0],
                    "alignment": "left",
                    "containerWt": 10
                },
                "legend": {
                    "indicators": ["marker", "textLabel"],
                    "marker": {
                        "type": "roundedEdgeHorizontalColorBox",
                        "color": ["0x494c5eff", "0xd9585dff"]
                    },
                    "textLabel": {
                        "text": ["Measure SLA(%)", "Contracted SLA(%)"],
                        "color": ["0x575d6eff", "0x575d6eff"],
                        "margin": [5, 10, 0, 0]
                    },
                    "font": {
                        "size": [10],
                        "style": ["normal"],
                        "family": ["Verdana"],
                        "color": ["0x575d6eff"]
                    },
                    "position": "bottom",
                    "alignment": "right",
                    "layout": "horizantal",
                    "containerWt": 8
                },
                "layerArea": {
                    "background": {
                        "color": ["0x0FFFFFFFF"]
                    }
                },
                "axis": {
                    "margin": [15, 0, 0, 0],
                    "xAxis": {
                        "axisLine": {
                            "line": {
                                "color": ["0x000000ff"],
                                "transparency": [0]
                            }
                        },
                        "labels": {
                            "markingReference": "atMinor",
                            "margin": [0, 0, 10, 0],
                            "font": {
                                "size": [10],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0x575d6eff"],
                                "transparency": [0]
                            }
                        }
                    },
                    "yAxis": {
                        "scale": {
                            "minValue": 99.0,
                            "maxValue": 100.0,
                            "majorInterval": 0.2,
                            "offset": {
                                "value": [0, 0],
                                "type": "pixels"
                            }
                        },
                        "axisLine": {
                            "visible": false
                        },
                        "labels": {
                            "format": {
                                "suffix": ["%"],
                                "numberFormat": {
                                    //support for this map is in beta
                                    "numDecimals": 2
                                }
                            },
                            "font": {
                                "size": [10],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0x575d6eff"]
                            }
                        }
                    }
                },
                "grid": {
                    "type": ["yAxisMajorGrid"],
                    "yAxisMajorGrid": {
                        "line": {
                            "color": ["0xb3e2f2ff"]
                        }
                    }
                },
                "drawEntities": ["axis", "grid", "lineChart"],
                "lineChart": {
                    "columnId": [0, 1],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "plotMissingValues": "assumeZero",
                    "line": {
                        "color": ["0x494c5eff", "0xd9585dff"],
                        "width": [1]
                    },
                    "plotPoints": {
                        "colorIndicator": "rows", //indicator for color to be applied along rows
                        "color": [ /*colors here will be upadted base on data later*/ ],
                        "size": [12],
                        "transparency": [0, 100]
                    }
                }
            },
            "chartData": {
                "rowNames": {
                    "values": ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O"]
                },
                "columnNames": {
                    "values": ["SLAData", "TargetData"] //Target Data here is a dummie column for  plotting target line
                },
                "data": {
                    "SLAData": [99.2, 99.6, 99.9, 99.1, 99.7, 99.6, 99.8, 99.9, 99.9, 99.8] /*actual data to be shown on the chart*/ ,
                    "TargetData": [ /*data here will be updated later based on target value*/ ]
                }
            }
        }
        return chartInfo;
    }
    var targetValue = 99.5; //change this value to change target value
    var chartInfo = getChartInfo();
    var data = [];
    data = chartInfo.chartData.data.SLAData;
    for (var i = 0; i < data.length; i++) {
        if (data[i] >= 99.5) {
            chartInfo.chartProperties.lineChart.plotPoints.color[i] = "0x00ff00ff"; //color for values above target value
        } else {
            chartInfo.chartProperties.lineChart.plotPoints.color[i] = "0xff0000ff"; //color for values below target value
        }
        chartInfo.chartData.data["TargetData"].push(targetValue);
    }
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////