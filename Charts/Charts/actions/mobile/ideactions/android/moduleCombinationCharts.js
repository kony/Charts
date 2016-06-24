function combinationChartCatalouge() {
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = null;
    this.pushDemo = function(demoName, demoObject) {
        this.demos.demoNames.push(demoName);
        this.demos.demoObjects.push(demoObject);
    }
    this.pushDemo("Line+Column", k_dv_dataviz_combinationChart_demo_sample_1);
    this.pushDemo("Line+Area", k_dv_dataviz_combinationChart_demo_sample_2);
    this.pushDemo("Clustered Line+Area", k_dv_dataviz_combinationChart_demo_sample_3);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_combinationChart_demo_sample_1 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "Toal claims vs Total Paid",
                "font": {
                    "size": [20],
                    "family": ["Helvetica"],
                    "style": ["normal"],
                    "color": ["0xffffffff"],
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
                    "gradientRatios": [0, 100],
                    "color": ["0x505050ff", "0x040404ff"]
                }
            },
            "legend": {
                "visible": true,
                "indicators": ["marker", "textLabel"],
                "separator": "space",
                "marker": {
                    "type": "colorBox",
                    "color": ["0x3399ccff", "0x996699ff"],
                    "margin": [3, 3, 0, 0]
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
                    "text": ["Total Claims", "Total Paid"],
                    "color": ["0xffffffFF", "0xffffffFF"],
                    "margin": [3, 5, 0, 0]
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
                "position": "right",
                "alignment": "center",
                "layout": "vertical",
                "containerWt": 17,
                "margin": [0, 0, 0, 0],
                "padding": [10, 10, 10, 10]
            },
            "layerArea": {
                "background": {
                    "fillType": "color",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 100],
                    "color": ["0x222222ff"]
                }
            },
            "dataSetMapping": {
                "setId": "dataset1",
                "eventsSetId": "eventsMap1"
            },
            "axis": {
                "type": ["xAxis", "yAxis", "secondaryYAxis"],
                "xAxis": {
                    "scale": {
                        "type": "fixedGapMajorInterval",
                        "gap": 150
                    },
                    "axisLine": {
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "markingReference": "atMinor",
                        "font": {
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["bold"],
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        }
                    }
                },
                "yAxis": {
                    "title": {
                        "text": "Total Claims",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        },
                        "alignment": "middle",
                        "position": "outer",
                        "direction": "up",
                        "margin": [1, 1, 1, 1]
                    },
                    "scale": {
                        "minValue": 0,
                        "maxValue": 40,
                        "majorInterval": 2,
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
                        "font": {
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["bold"],
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        }
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0xffffffff"]
                            }
                        },
                        "placement": "atLabels"
                    }
                },
                "secondaryYAxis": {
                    "title": {
                        "text": "Total Paid",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        },
                        "alignment": "middle",
                        "position": "outer",
                        "direction": "up",
                        "margin": [1, 1, 1, 1]
                    },
                    "scale": {
                        "minValue": 0,
                        "maxValue": 230000,
                        "majorInterval": 10000,
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
                        "font": {
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["bold"],
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        }
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0xffffffff"]
                            }
                        },
                        "placement": "atLabels"
                    }
                }
            },
            "grid": {
                "type": ["secondaryYAxisMajorGrid", "secondaryYAxisMinorGrid"],
                "secondaryYAxisMajorGrid": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "secondaryYAxisMinorGrid": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "background": {
                    "fillType": "color",
                    "color": ["0xffffffff"]
                }
            },
            "drawEntities": ["axis", "grid", "columnChart", "lineChart"],
            "columnChart": {
                "columnId": [0],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "normal",
                "dataAlignToAxis": ["primaryYAxis"],
                "plotMissingValues": "assumeZero",
                "bar": {
                    "width": [400],
                    "fillType": ["gradient"],
                    "transparency": [0],
                    "gradientType": ["linearLeftToRight"],
                    "gradientRatios": [
                        [0, 20, 50, 100]
                    ],
                    "color": [
                        ["0x1359acff", "0x53b9fcff"]
                    ]
                },
                "border": {
                    "visible": true,
                    "line": {
                        "color": ["0x3d6290ff"],
                        "width": [1],
                        "transparency": [0]
                    }
                }
            },
            "lineChart": {
                "columnId": [1],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "normal",
                "lineType": "normal",
                "dataAlignToAxis": ["secondaryYAxis"],
                "plotMissingValues": "assumeZero",
                "line": {
                    "color": ["0x996699ff"],
                    "width": [2],
                    "transparency": [0]
                },
                "plotPoints": {
                    "visible": true,
                    "colorIndicator": "columns",
                    "marker": {
                        "type": ["circle"],
                        "fillType": "color"
                    },
                    "color": ["0x996699ff"],
                    "transparency": [0],
                    "size": [8]
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["2007", "2008", "2009", "2010", "2011"]
            },
            "columnNames": {
                "values": ["claims", "paid"]
            },
            "data": {
                "claims": [6, 11, 20, 37, 19],
                "paid": [5000, 30000, 75000, 228000, 125000]
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
                            "color": ["0x996699ff"],
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
                            "color": ["0x996699ff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "color",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [],
                        "color": ["0x222222ff"]
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
k_dv_dataviz_combinationChart_demo_sample_2 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "APPRAISALS COMPLETED ON TIME",
                "font": {
                    "size": [20],
                    "family": ["Helvetica"],
                    "style": ["normal"],
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
                    "gradientRatios": [0, 100],
                    "color": ["0xffffffff", "0xffffffff"]
                }
            },
            "legend": {
                "visible": true,
                "indicators": ["marker", "textLabel"],
                "separator": "space",
                "marker": {
                    "type": "colorBox",
                    "color": ["0xfc7a93ff", "0x0b008fff"],
                    "margin": [3, 3, 0, 0]
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
                    "text": ["Target", "Appraisals completed on time"],
                    "color": ["0x000000FF", "0x000000FF"],
                    "margin": [3, 5, 0, 0]
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
                "alignment": "center",
                "layout": "horizantal",
                "containerWt": 8,
                "margin": [0, 0, 0, 0],
                "padding": [10, 10, 10, 10],
                "background": {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0xf6f6f6ff"]
                }
            },
            "layerArea": {
                "background": {
                    "fillType": "color",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0xffffffFF"]
                }
            },
            "dataSetMapping": {
                "setId": "dataset1",
                "eventsSetId": "eventsMap1"
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
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"],
                            "transparency": [0]
                        }
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0x000000ff"]
                            }
                        },
                        "placement": "atLabels"
                    }
                },
                "yAxis": {
                    "scale": {
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
                        "font": {
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"],
                            "transparency": [0]
                        }
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0x000000ff"]
                            }
                        },
                        "placement": "atLabels"
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "yAxisMajorGrid"],
                "xAxisMajorGrid": {
                    "visible": true,
                    "line": {
                        "color": ["0xffffffff"],
                        "width": [1],
                        "transparency": [90]
                    }
                },
                "yAxisMajorGrid": {
                    "visible": true,
                    "line": {
                        "color": ["0xffffffff"],
                        "width": [1],
                        "transparency": [90]
                    }
                },
                "background": {
                    "fillType": "color",
                    "color": ["0xAAAEB9FF"]
                }
            },
            "drawEntities": ["axis", "grid", "areaChart", "lineChart"],
            "areaChart": {
                "columnId": [0],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "normal",
                "lineType": "normal",
                "dataAlignToAxis": ["primaryYAxis"],
                "plotMissingValues": "assumeZero",
                "area": {
                    "fillType": ["gradient"],
                    "transparency": [50],
                    "color": ["0x00ff00ff"],
                    "colorAboveXAxis": [
                        ["0xff0000ff", "0xfc7a93ff"]
                    ],
                    "colorBelowXAxis": ["0xff0000ff"],
                    "visible": true
                },
                "line": {
                    "visible": false,
                    "color": ["0xff0000ff"],
                    "width": [3],
                    "transparency": [0]
                },
                "plotPoints": {
                    "visible": false,
                    "colorIndicator": "columns",
                    "marker": {
                        "type": ["circle"],
                        "fillType": "color"
                    },
                    "color": ["0x2a99ceff"],
                    "transparency": [0],
                    "size": [12]
                }
            },
            "lineChart": {
                "columnId": [1],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "normal",
                "lineType": "normal",
                "dataAlignToAxis": ["primaryYAxis"],
                "plotMissingValues": "assumeZero",
                "line": {
                    "color": ["0x0b008fff"],
                    "width": [2],
                    "transparency": [0]
                },
                "plotPoints": {
                    "visible": true,
                    "colorIndicator": "columns",
                    "marker": {
                        "type": ["circle"],
                        "fillType": "color"
                    },
                    "color": ["0xffffffff"],
                    "transparency": [0],
                    "size": [4]
                },
                "dataLabels": {
                    "visible": true,
                    "indicators": ["numberValue"],
                    "separator": "space",
                    "placement": "top",
                    "orientationAngle": 0,
                    "font": {
                        "size": [9],
                        "family": ["Verdana"],
                        "style": ["Plain"],
                        "color": ["0x000000ff"],
                        "transparency": [0]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Jun 1", "Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8", "Jun 9", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21", "Jun 22"]
            },
            "columnNames": {
                "values": ["Target", "Achieved"]
            },
            "data": {
                "Target": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
                "Achieved": [78, 79, 67, 87, 76, 54, 34, 90, 87, 88, 59, 45, 78, 80, 80, 35, 68, 78, 75, 70, 75, 83]
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
                            "color": ["0x0b008fff"],
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
                            "color": ["0x000000ff"],
                            "transparency": [0]
                        }
                    },
                    "border": {
                        "visible": true,
                        "line": {
                            "color": ["0x0b008fff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "color",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 100],
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
var k_dv_dataviz_combinationChart_demo_sample_3 = function() {
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