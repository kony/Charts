function multiLayerCatalouge() {
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_Layers.htm";
    this.pushDemo = function(demoName, demoObject) {
        this.demos.demoNames.push(demoName);
        this.demos.demoObjects.push(demoObject);
    }
    this.pushDemo("Shared Layers-Non Overlapping", k_dv_dataviz_multiLayer_demo_sample_1);
    this.pushDemo("Shared Layers-Overlapping", k_dv_dataviz_multiLayer_demo_sample_2);
    this.pushDemo("Dash Board-3 Layers", k_dv_dataviz_multiLayer_demo_sample_3);
    this.pushDemo("Column+Bar-2 Layers", k_dv_dataviz_multiLayer_demo_sample_4);
    this.pushDemo("Multiple Y Axes/ 4 Y Axes", k_dv_dataviz_multiLayer_demo_sample_5);
    this.pushDemo("Progress Indicator Bar/2 Layers", k_dv_dataviz_multiLayer_demo_sample_6);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_multiLayer_demo_sample_1 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "sharedLayerMode": true,
            "layers": ["layer1", "layer2"],
            "layer1": {
                "position": [0, 0, 100, 70],
                "title": {
                    "text": "Stock Timeline: MultiLayer with Crosshair",
                    "font": {
                        "size": [14],
                        "family": ["Verdana"],
                        "style": ["Bold"],
                        "color": ["0xaaaaaaff"]
                    },
                    "alignment": "left",
                    "containerWt": 10,
                    "background": {
                        "fillType": "gradient",
                        "color": ["0x323232FF", "0x070707ff"]
                    }
                },
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "color": ["0x323232FF", "0x070707ff"]
                    }
                },
                "dataSetMapping": {
                    "setId": "dataset1",
                    "eventsSetId": "eventsMap1"
                },
                "axis": {
                    "xAxis": {
                        "axisLine": {
                            "line": {
                                "color": ["0xaaaaaaff"]
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
                    },
                    "yAxis": {
                        "title": {
                            "text": "Price",
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
                            "margin": [30, 0, 0, 0],
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["bold"],
                                "color": ["0xaaaaaaff"]
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
                    "type": ["xAxisMajorGrid", "yAxisMajorGrid"],
                    "xAxisMajorGrid": {
                        "line": {
                            "color": ["0x273241ff"]
                        }
                    },
                    "yAxisMajorGrid": {
                        "line": {
                            "color": ["0x273241ff"]
                        }
                    }
                },
                "drawEntities": ["axis", "grid", "areaChart"],
                "areaChart": {
                    "columnId": [0],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "plotMissingValues": "assumeZero",
                    "area": {
                        "fillType": ["gradient"],
                        "color": ["0xff0000ff", "0x00ff00ff"],
                        "colorAboveXAxis": [
                            ["0x40a4bcff", "0x1d4e61ff"]
                        ],
                        "colorBelowXAxis": ["0xff0000ff"]
                    },
                    "line": {
                        "color": ["0xfbf56bff"],
                        "width": [6]
                    },
                    "plotPoints": {
                        "visible": false
                    }
                }
            },
            "layer2": {
                "position": [0, 65, 100, 100],
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "color": ["0x070707ff", "0x323232FF"]
                    }
                },
                "dataSetMapping": {
                    "setId": "dataset1",
                    "eventsSetId": "eventsMap1"
                },
                "axis": {
                    "xAxis": {
                        "axisLine": {
                            "line": {
                                "color": ["0xffffffff"]
                            }
                        },
                        "labels": {
                            "margin": [0, 0, 30, 0],
                            "orientationAngle": 90,
                            "font": {
                                "size": [10],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0xffffffff"]
                            }
                        }
                    },
                    "yAxis": {
                        "title": {
                            "text": "Volume",
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"]
                            }
                        },
                        "scale": {
                            "minValue": 0,
                            "maxValue": 500,
                            "majorInterval": 250
                        },
                        "axisLine": {
                            "visible": false
                        },
                        "labels": {
                            "margin": [30, 0, 0, 0],
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["bold"],
                                "color": ["0xaaaaaaff"]
                            }
                        },
                        "intervalMarks": {
                            "major": {
                                "line": {
                                    "color": ["0xaaaaaaff"]
                                }
                            }
                        }
                    }
                },
                "grid": {
                    "type": ["xAxisMajorGrid", "yAxisMajorGrid"],
                    "xAxisMajorGrid": {
                        "line": {
                            "color": ["0x273241ff"]
                        }
                    },
                    "yAxisMajorGrid": {
                        "line": {
                            "color": ["0x273241ff"]
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
                        "gradientRatios": [
                            [0, 20, 50, 100]
                        ],
                        "color": [
                            ["0x40a4bcff", "0x1d4e61ff"]
                        ]
                    },
                    "border": {
                        "line": {
                            "color": ["0xfbf56bff"]
                        }
                    }
                }
            }
        },
        "chartData": {
            "dataSets": ["dataset1"],
            "dataset1": {
                "rowNames": {
                    "values": ["Jun 01", "Jun 02", "Jun 03", "Jun 04", "Jun 05", "Jun 06", "Jun 07", "Jun 08", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28", "Jun 29", "Jun 30", "Jul 01", "Jul 02", "Jul 03", "Jul 04", "Jul 05", "Jul 06", "Jul 07", "Jul 08", "Jul 09", "Jul 10", "Jul 11", "Jul 12", "Jul 13", "Jul 14", "Jul 15", "Jul 16", "Jul 17", "Jul 18", "Jul 19", "Jul 20", "Jul 21", "Jul 22"]
                },
                "columnNames": {
                    "values": ["Stock"]
                },
                "data": {
                    "Stock": [44, 43, 38, 52, 54, 32, 46, 36, 36, 46, 42, 60, 54, 214, 232, 234, 242, 242, 236, 233, 236, 225, 184, 175, 277, 291, 275, 311, 319, 313, 326, 328, 354, 349, 371, 356, 355, 340, 360, 332, 310, 204, 213, 197, 195, 186, 182, 168, 96, 86, 76, 68]
                }
            }
        },
        "chartEvents": {
            "events": ["eventsMap1"],
            "eventsMap1": {
                "onTouch": {
                    "crossHair": {
                        "line": {
                            "color": ["0xfbf56bff"]
                        }
                    },
                    "dataLabels": {
                        "indicators": ["columnName", "rowName", "numberValue"],
                        "separator": "newLine",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xfbf56bff"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0xfbf56bff"]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 10,
                        "color": ["0x323232FF", "0x070707ff"]
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
k_dv_dataviz_multiLayer_demo_sample_2 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "sharedLayerMode": true,
            "layers": ["layer1", "layer2"],
            "layer1": {
                "enableScrolling": true,
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "color": ["0x070707ff", "0x323232FF"]
                    }
                },
                "dataSetMapping": {
                    "setId": "dataset1",
                    "eventsSetId": "eventsMap1"
                },
                "axis": {
                    "xAxis": {
                        "visible": false,
                        "labels": {
                            "margin": [0, 0, 30, 0]
                        }
                    },
                    "yAxis": {
                        "visible": false,
                        "labels": {
                            "margin": [30, 0, 0, 0]
                        }
                    }
                },
                "drawEntities": ["axis", "columnChart"],
                "columnChart": {
                    "animations": {
                        "onInitAnimation": true
                    },
                    "plotMissingValues": "assumeZero",
                    "bar": {
                        "fillType": ["gradient"],
                        "gradientRatios": [
                            [0, 20, 50, 100]
                        ],
                        "color": [
                            ["0xFFA300FF", "0xC85400FF"]
                        ]
                    }
                }
            },
            "layer2": {
                "enableScrolling": true,
                "title": {
                    "text": "Growth trend indicator: MultiLayer, Scroll, PinchToZoom with Crosshair",
                    "font": {
                        "size": [14],
                        "family": ["Verdana"],
                        "style": ["Bold"],
                        "color": ["0xaaaaaaff"]
                    },
                    "alignment": "right",
                    "containerWt": 10,
                    "background": {
                        "fillType": "gradient",
                        "color": ["0x323232FF", "0x070707ff"]
                    }
                },
                "dataSetMapping": {
                    "setId": "dataset1",
                    "eventsSetId": "eventsMap1"
                },
                "axis": {
                    "xAxis": {
                        "axisLine": {
                            "visible": false
                        },
                        "labels": {
                            "markingReference": "atMinor",
                            "margin": [0, 0, 30, 0],
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"]
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
                    },
                    "yAxis": {
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
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"]
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
                "drawEntities": ["axis", "lineChart"],
                "lineChart": {
                    "columnId": [0],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "plotMissingValues": "assumeZero",
                    "line": {
                        "color": ["0x00ff00ff"],
                        "width": [3]
                    },
                    "plotPoints": {
                        "color": ["0x2a99ceff"],
                        "size": [12]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["JAN/2009", "FEB/2009", "MAR/2009", "APR/2009", "MAY/2009", "JUN/2009", "JUL/2009", "AUG/2009", "SEP/2009", "OCT/2009", "NOV/2009", "DEC/2009"]
            },
            "columnNames": {
                "values": ["C1"]
            },
            "data": {
                "C1": [100, 20, 40, 30, 80, 65, 70, 50, 90, 75, 20, 70]
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
                            "color": ["0x00FF00ff"]
                        }
                    },
                    "dataLabels": {
                        "indicators": ["columnName", "rowName", "numberValue"],
                        "separator": "newLine",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0x00FF00ff"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0x00FF00ff"]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 10,
                        "color": ["0x323232FF", "0x070707ff"]
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
k_dv_dataviz_multiLayer_demo_sample_3 = function() {
    /*
     * "16%:Direct Traffic","Direct(16%)","34%: Google","03%: Bing","Search
     * Engines (37%)","02%: Facebook","07%: LinkedIn","10%: StumbleUpon","13%:
     * Reddit","15%: Twitter","Referral Sites (47%)"
     */
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "layers": ["layer0", "layer1", "layer2"],
            "layer0": {
                "enableScrolling": false,
                "position": [0, 0, 55, 50],
                "title": null,
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 100],
                        "color": ["0xfbfbfbFF", "0xfefefeFF"]
                    }
                },
                "dataSetMapping": {
                    "setId": "dataset0",
                    "eventsSetId": "eventsMap1"
                },
                "drawEntities": ["pieChart"],
                "pieChart": {
                    "columnId": [0],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "spinWheel": true,
                    "plotZeroValues": false,
                    "plotMissingValues": "assumeZero",
                    "direction": "clockWise",
                    "startAngle": 0,
                    "exploded": false,
                    "pieSlice": {
                        "fillType": ["color"],
                        "gradientType": ["linearTopToBottom"],
                        "transparency": [0],
                        "color": ["0x002642ff", "0x21425aff", "0x435f73ff", "0x657c8dff", "0x8799a6ff", "0xe28436ff", "0xedb485ff", "0xfe7f7fff"]
                    },
                    "border": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "style": ["continuous"],
                            "visible": true,
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        }
                    },
                    "dataLabels": {
                        "visible": true,
                        "separator": "space",
                        "placement": "outside",
                        "indicators": ["rowName"],
                        "connector": {
                            "visible": true,
                            "line": {
                                "width": [1],
                                "style": ["continuous"],
                                "visible": true,
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            }
                        },
                        "font": {
                            "family": ["Marion"],
                            "style": ["Plain"],
                            "size": [11],
                            "transparency": [0],
                            "color": ["0x000000ff"]
                        }
                    },
                    "holeRadius": "auto",
                    "margin": [0, 0, 0, 0]
                }
            },
            "layer1": {
                "enableScrolling": false,
                "position": [55, 0, 100, 50],
                "title": null,
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 100],
                        "color": ["0xfbfbfbFF", "0xfefefeFF"]
                    }
                },
                "dataSetMapping": {
                    "setId": "dataset1",
                    "eventsSetId": "eventsMap1"
                },
                "axis": {
                    "type": ["xAxis", "yAxis"],
                    "xAxis": {
                        "visible": false,
                        "axisLine": {
                            "line": {
                                "color": ["0xaaaaaaff"]
                            }
                        },
                        "labels": {
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
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
                    },
                    "yAxis": {
                        "scale": {
                            "type": "fixedGapMajorInterval",
                            "gap": 150,
                            "offset": {
                                "value": [0, 0],
                                "type": "pixels"
                            }
                        },
                        "axisLine": {
                            "visible": false,
                            "crossOtherAxisAt": "value",
                            "value": 0
                        },
                        "labels": {
                            "font": {
                                "size": [11],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0x000000ff"],
                                "transparency": [0]
                            }
                        }
                    }
                },
                "drawEntities": ["axis", "barChart"],
                "barChart": {
                    "columnId": [0],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "graphType": "normal",
                    "dataAlignToAxis": ["primaryXAxis"],
                    "plotMissingValues": "leaveGap",
                    "bar": {
                        "width": [400],
                        "fillType": ["color"],
                        "transparency": [0],
                        "gradientType": ["linearTopToBottom"],
                        "gradientRatios": [
                            [0, 20, 50, 100]
                        ],
                        "color": [
                            ["0xFE7E81FF"],
                            ["0x00000000"],
                            ["0xF4D5BEFF"],
                            ["0xE28336FF"],
                            ["0x00000000"],
                            ["0x8799a5ff"],
                            ["0x657c8bff"],
                            ["0x435f71ff"],
                            ["0x214258ff"],
                            ["0x012640ff"],
                            ["0x0000000"]
                        ]
                    },
                    "dataLabels": {
                        "visible": true,
                        "indicators": ["numberValue"],
                        "separator": "space",
                        "placement": "inside",
                        "orientationAngle": 0,
                        "font": {
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"],
                            "transparency": [0]
                        }
                    }
                }
            },
            "layer2": {
                "enableScrolling": false,
                "position": [0, 50, 100, 100],
                "title": null,
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 100],
                        "color": ["0xfefefeFF", "0xe3e3e3FF"]
                    }
                },
                "dataSetMapping": {
                    "setId": "dataset2",
                    "eventsSetId": "eventsMap1"
                },
                "axis": {
                    "type": ["xAxis", "yAxis"],
                    "xAxis": {
                        "title": {
                            "text": "April",
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0x000000ff"],
                                "transparency": [0]
                            },
                            "alignment": "center",
                            "position": "outer",
                            "direction": "up",
                            "margin": [1, 1, 1, 1]
                        },
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
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0x000000ff"],
                                "transparency": [0]
                            }
                        }
                    },
                    "yAxis": {
                        "title": {
                            "text": "Visits",
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0x000000ff"],
                                "transparency": [0]
                            },
                            "alignment": "middle",
                            "position": "outer",
                            "direction": "up",
                            "margin": [1, 1, 1, 1]
                        },
                        "scale": {
                            "minValue": 0,
                            "majorInterval": 300,
                            "minorInterval": 3,
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
                                "size": [12],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0x000000ff"],
                                "transparency": [0]
                            }
                        },
                        "intervalMarks": {
                            "major": {
                                "line": {
                                    "color": ["0x00000ff"]
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
                    "visible": true,
                    "type": ["xAxisMajorGrid", "yAxisMajorGrid", "yAxisMinorGrid"],
                    "xAxisMajorGrid": {
                        "line": {
                            "color": ["0x929292ff"]
                        }
                    },
                    "yAxisMajorGrid": {
                        "line": {
                            "color": ["0x929292ff"]
                        }
                    },
                    "yAxisMinorGrid": {
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "background": {
                        "fillType": "color",
                        "color": ["0xffffffff"]
                    }
                },
                "drawEntities": ["axis", "grid", "areaChart"],
                "areaChart": {
                    "columnId": [0, 1, 2, 3, 4, 5],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "graphType": "stacked",
                    "lineType": "smooth",
                    "dataAlignToAxis": ["primaryYAxis"],
                    "plotMissingValues": "assumeZero",
                    "area": {
                        "fillType": ["color"],
                        "transparency": [0, 0, 0],
                        "color": ["0x00ff00ff", "0x00ff00ff"],
                        "colorAboveXAxis": ["0xf57773af", "0xe59b4eff", "0x8698a6ff", "0x8698a6ff", "0x62798cff", "0x425e74ff"],
                        "colorBelowXAxis": ["0xff0000ff"]
                    },
                    "line": {
                        "visible": true,
                        "color": ["0xffffffff", "0xffffffff", "0xffffffff"],
                        "width": [1],
                        "transparency": [30, 30, 30]
                    },
                    "plotPoints": {
                        "visible": true,
                        "colorIndicator": "columns",
                        "marker": {
                            "type": ["circle"],
                            "fillType": "color"
                        },
                        "color": ["0xffffffff"],
                        "transparency": [50],
                        "size": [0, 0, 0, 0, 0, 5]
                    }
                }
            }
        },
        "chartData": {
            "dataSets": ["dataset0", "dataset1", "dataset2", "dataset3"],
            "dataset0": {
                "rowNames": {
                    "values": ["Twitter", "Reddit", "StumbleUpon", "LinkedIn", "Facebook", "Google", "Bing", "Direct Traffic"]
                },
                "columnNames": {
                    "values": ["Amount1"]
                },
                "data": {
                    "Amount1": [15, 13, 10, 7, 2, 34, 3, 16]
                }
            },
            "dataset1": {
                "rowNames": {
                    "values": ["16%:Direct Traffic", "Direct", "Google", "Bing", "Search Engines (37%)", "Facebook", "LinkedIn", "StumbleUpon", "Reddit", "Twitter", "Referral Sites (47%)"]
                },
                "columnNames": {
                    "values": ["c1"]
                },
                "data": {
                    "c1": [16, null, 3, 34, null, 2, 7, 10, 13, 15, null]
                }
            },
            "dataset2": {
                "rowNames": {
                    "values": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
                },
                "columnNames": {
                    "values": ["16%:Direct Traffic", "Direct", "Google", "Bing", "Search Engines (37%)", "Facebook", "LinkedIn", "StumbleUpon"]
                },
                "data": {
                    "LinkedIn": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                    "Facebook": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                    "Search Engines (37%)": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                    "Google": [5, 1, 11, 7, 2, 3, 4, 3, 6, 1, 6, 3, 4, 1, 6, 2, 3, 4, 6, 5, 2, 4, 1, 6],
                    "Direct": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                    "16%:Direct Traffic": [28, 20, 34, 36, 36, 18, 14, 26, 8, 8, 34, 62, 44, 28, 11, 26, 12, 23, 30, 26, 20, 44, 16]
                }
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
                            "color": ["0xf57773af"],
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
                            "color": ["0xf57773af", "0xe59b4eff", "0x8698a6ff", "0x8698a6ff", "0x62798cff", "0x425e74ff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 100],
                        "color": ["0xfefefeFF", "0xe3e3e3FF"]
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
k_dv_dataviz_multiLayer_demo_sample_4 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "layers": ["layer1", "layer2"],
            "layer1": {
                "position": [0, 0, 100, 33],
                "dataSetMapping": {
                    "setId": "dataset1",
                    "eventsSetId": "eventsMap1"
                },
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "color": ["0x323232FF", "0x070707ff"]
                    }
                },
                "title": {
                    "text": "YTD November 2012",
                    "font": {
                        "size": [18],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [40]
                    },
                    "containerWt": 20,
                    "background": {
                        "fillType": "gradient",
                        "color": ["0x39393BFF", "0x000000FF"]
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
                            "visible": false
                        },
                        "labels": {
                            "visible": false,
                            "margin": [1, 1, 1, 1],
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"]
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
                            "visible": false
                        },
                        "labels": {
                            "visible": false,
                            "margin": [1, 1, 1, 1],
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"]
                            }
                        }
                    }
                },
                "drawEntities": ["axis", "barChart"],
                "barChart": {
                    "columnId": [0, 1, 2],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "graphType": "stacked",
                    "plotMissingValues": "assumeZero",
                    "bar": {
                        "width": [140],
                        "color": [
                            ["0x05B3A9FF"],
                            ["0xCBBEDAFF"],
                            ["0xFDCB9EFF"]
                        ]
                    },
                    "dataLabels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["bold"],
                            "color": ["0xFFFFFFFF"],
                            "transparency": [40]
                        }
                    }
                }
            },
            "layer2": {
                "position": [0, 33, 100, 100],
                "dataSetMapping": {
                    "setId": "dataset2",
                    "eventsSetId": "eventsMap2"
                },
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "color": ["0x323232FF", "0x070707ff"]
                    }
                },
                "legend": {
                    "indicators": ["marker", "textLabel"],
                    "marker": {
                        "type": "colorBox",
                        "color": ["0x05B3A9FF", "0xCBBEDAFF", "0xFDCB9EFF"]
                    },
                    "textLabel": {
                        "text": ["Net Interest", "Operating Margins", "Net Revenue"],
                        "color": ["0xFFFFFFFF"],
                        "margin": [5, 5, 0, 0]
                    },
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["bold"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [40]
                    },
                    "position": "right",
                    "alignment": "middle",
                    "layout": "vertical",
                    "containerWt": 30
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
                                "size": [12],
                                "family": ["Verdana"],
                                "style": ["bold"],
                                "color": ["0xFFFFFFFF"],
                                "transparency": [40]
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
                        "scale": {
                            "maxValue": 2500
                        },
                        "axisLine": {
                            "visible": false
                        },
                        "labels": {
                            "visible": false,
                            "margin": [30, 0, 0, 0],
                            "font": {
                                "size": [12],
                                "family": ["Verdana"],
                                "style": ["bold"],
                                "color": ["0xFFFFFFFF"],
                                "transparency": [40]
                            }
                        }
                    }
                },
                "drawEntities": ["axis", "columnChart"],
                "columnChart": {
                    "columnId": [0, 1, 2],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "graphType": "stacked",
                    "plotMissingValues": "assumeZero",
                    "bar": {
                        "color": [
                            ["0x05B3A9FF"],
                            ["0xCBBEDAFF"],
                            ["0xFDCB9EFF"]
                        ]
                    },
                    "dataLabels": {
                        "indicators": ["percentValue"],
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["bold"],
                            "color": ["0xFFFFFFFF"],
                            "transparency": [40]
                        }
                    }
                }
            }
        },
        "chartData": {
            "dataSets": ["dataset1", "dataset2"],
            "dataset1": {
                "rowNames": {
                    "values": ["Jan"]
                },
                "columnNames": {
                    "values": ["C1", "C2", "C3"]
                },
                "data": {
                    "C1": [651],
                    "C2": [251],
                    "C3": [151]
                }
            },
            "dataset2": {
                "rowNames": {
                    "values": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                },
                "columnNames": {
                    "values": ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9"]
                },
                "data": {
                    "C1": [551, 453, 567, 67, 79, 563, 789, 888, 234, 627, 328, 123],
                    "C2": [451, 253, 597, 967, 629, 363, 989, 388, 283, 427, 628, 323],
                    "C3": [891, 893, 457, 567, 379, 893, 349, 488, 894, 457, 458, 423]
                }
            }
        },
        "chartEvents": {
            "events": ["eventsMap1", "eventsMap2"],
            "eventsMap1": {
                "onPinchZoom": {
                    "minimumZoomScale": 1,
                    "maximumZoomScale": 2
                },
                "onTouch": {
                    "crossHair": {
                        "line": {
                            "color": ["0x000000FF"],
                            "transparency": [20]
                        }
                    },
                    "dataLabels": {
                        "separator": "newLine",
                        "font": {
                            "size": [12],
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
                        "transparency": 20,
                        "color": ["0xf2f2f2ff"]
                    }
                }
            },
            "eventsMap2": {
                "onPinchZoom": {
                    "minimumZoomScale": 1,
                    "maximumZoomScale": 2
                },
                "onTouch": {
                    "crossHair": {
                        "line": {
                            "color": ["0x000000FF"],
                            "transparency": [20]
                        }
                    },
                    "dataLabels": {
                        "separator": "newLine",
                        "font": {
                            "size": [12],
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
                        "transparency": 20,
                        "color": ["0xf2f2f2ff"]
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
k_dv_dataviz_multiLayer_demo_sample_5 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "sharedLayerMode": true,
            "layers": ["layer1", "layer2"],
            "layer2": {
                "enableScrolling": false,
                "position": [0, 0, 100, 100],
                "title": {
                    "visible": true,
                    "text": "",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["Bold"],
                        "color": ["0x000000ff"],
                        "transparency": [0]
                    },
                    "position": "top",
                    "alignment": "center",
                    "direction": "up",
                    "containerWt": 15,
                    "margin": [0, 0, 0, 0],
                    "border": {
                        "visible": false,
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 100,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                    }
                },
                "legend": {
                    "visible": true,
                    "indicators": [],
                    "separator": "space",
                    "marker": {
                        "type": "colorBox",
                        "color": ["0x276379FF", "0xDC0D0Dff", "0x8b0000ff", "0x11FC5FFF"]
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
                        "text": ["primaryYAxis", "secondaryYAxis", "tertiaryYAxis", "quaternaryYAxis"],
                        "color": ["0x276379FF", "0xDC0D0Dff", "0x8b0000ff", "0x11FC5FFF"],
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
                    "position": "right",
                    "alignment": "middle",
                    "layout": "vertical",
                    "containerWt": 20,
                    "margin": [0, 0, 0, 0],
                    "padding": [0, 0, 0, 0],
                    "border": {
                        "visible": false,
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 100,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                    }
                },
                "layerArea": {
                    "border": {
                        "visible": false,
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 100,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 30, 70, 100],
                        "color": ["0xecedf0FF", "0xbabec8FF", "0xadb1bcFF", "0xecedf0FF"]
                    }
                },
                "dataSetMapping": {
                    "setId": "Table1",
                    "eventsSetId": "eventsMap2"
                },
                "axis": {
                    "visible": true,
                    "type": ["xAxis", "yAxis", "secondaryYAxis"],
                    "xAxis": {
                        "visible": true,
                        "title": {
                            "visible": true,
                            "text": "",
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            },
                            "alignment": "center",
                            "position": "outer",
                            "direction": "up",
                            "margin": [1, 1, 1, 1]
                        },
                        "scale": {
                            "type": "auto",
                            "gap": 0,
                            "offset": {
                                "value": [6, 6],
                                "type": "numberOfIntervals"
                            }
                        },
                        "axisLine": {
                            "visible": false,
                            "crossOtherAxisAt": "start",
                            "value": 0,
                            "line": {
                                "color": ["0x000000ff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "labels": {
                            "visible": true,
                            "allowOverlap": false,
                            "placement": "axis",
                            "position": "outer",
                            "positionWrtMarkings": "left",
                            "markingReference": "atMajor",
                            "margin": [0, 0, 0, 0],
                            "orientationAngle": 90,
                            "format": {
                                "prefix": [""],
                                "suffix": [""]
                            },
                            "font": {
                                "size": [10],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0x000000ff"],
                                "transparency": [100]
                            },
                            "padding": [0, 50, 15, 50]
                        },
                        "intervalMarks": {
                            "visible": false,
                            "major": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 10
                            },
                            "minor": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 5
                            },
                            "placement": "atLabels"
                        }
                    },
                    "yAxis": {
                        "visible": true,
                        "title": {
                            "visible": true,
                            "text": "tertiaryYAxis",
                            "font": {
                                "size": [10],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0x8b0000ff"],
                                "transparency": [0]
                            },
                            "alignment": "middle",
                            "position": "outer",
                            "direction": "up",
                            "margin": [1, 1, 1, 1]
                        },
                        "scale": {
                            "type": "linear",
                            "minValue": 0,
                            "maxValue": "auto",
                            "majorInterval": "auto",
                            "minorInterval": "auto",
                            "offset": {
                                "value": [0, 0],
                                "type": "pixels"
                            }
                        },
                        "axisLine": {
                            "visible": true,
                            "crossOtherAxisAt": "value",
                            "value": "2014 Jun 01",
                            "line": {
                                "color": ["0x8b0000ff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "labels": {
                            "visible": true,
                            "allowOverlap": false,
                            "placement": "axis",
                            "position": "outer",
                            "positionWrtMarkings": "middle",
                            "markingReference": "atMajor",
                            "margin": [3, 3, 3, 3],
                            "orientationAngle": 0,
                            "format": {
                                "prefix": [""],
                                "suffix": [""]
                            },
                            "font": {
                                "size": [10],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0x8b0000ff"],
                                "transparency": [10]
                            }
                        },
                        "intervalMarks": {
                            "visible": false,
                            "major": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 10
                            },
                            "minor": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 5
                            },
                            "placement": "atLabels"
                        }
                    },
                    "secondaryYAxis": {
                        "visible": true,
                        "title": {
                            "visible": true,
                            "text": "quaternaryYAxis",
                            "font": {
                                "size": [10],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0x11FC5FFF"],
                                "transparency": [0]
                            },
                            "alignment": "middle",
                            "position": "outer",
                            "direction": "up",
                            "margin": [1, 1, 1, 1]
                        },
                        "scale": {
                            "type": "linear",
                            "minValue": 0,
                            "maxValue": "auto",
                            "majorInterval": "auto",
                            "minorInterval": "auto",
                            "offset": {
                                "value": [0, 0],
                                "type": "pixels"
                            }
                        },
                        "axisLine": {
                            "visible": true,
                            "crossOtherAxisAt": "value",
                            "value": "2014 Jul 22",
                            "line": {
                                "color": ["0x11FC5FFF"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "labels": {
                            "visible": true,
                            "allowOverlap": false,
                            "placement": "axis",
                            "position": "outer",
                            "positionWrtMarkings": "center",
                            "markingReference": "atMajor",
                            "margin": [3, 3, 3, 3],
                            "orientationAngle": 0,
                            "format": {
                                "prefix": [""],
                                "suffix": [""]
                            },
                            "font": {
                                "size": [10],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0x11FC5FFF"],
                                "transparency": [10]
                            }
                        },
                        "intervalMarks": {
                            "visible": false,
                            "major": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 10
                            },
                            "minor": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 5
                            },
                            "placement": "atLabels"
                        }
                    }
                },
                "drawArea": {
                    "margin": [0, 0, 0, 0],
                    "padding": [5, 5, 5, 5],
                    "border": {
                        "visible": false,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 100,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                    }
                },
                "grid": {
                    "visible": true,
                    "type": ["xAxisMajorGrid", "yAxisMajorGrid", "xAxisMinorGrid", "yAxisMinorGrid", "secondaryXAxisMajorGrid", "secondaryYAxisMajorGrid", "secondaryXAxisMinorGrid", "secondaryYAxisMinorGrid"],
                    "xAxisMajorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0xe6e6faff"],
                            "width": [1],
                            "transparency": 50
                        }
                    },
                    "yAxisMajorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "xAxisMinorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "yAxisMinorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "secondaryXAxisMajorGrid": {
                        "visible": true,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "secondaryYAxisMajorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "secondaryXAxisMinorGrid": {
                        "visible": true,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "secondaryYAxisMinorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "alternateGradientColor",
                        "alternateColorPattern": "xMajorMajor",
                        "transparency": 100,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                    }
                },
                "drawEntities": ["axis", "grid", "lineChart"],
                "lineChart": {
                    "columnId": [2, 3],
                    "animations": {
                        "onInitAnimation": false
                    },
                    "graphType": "normal",
                    "lineType": ["normal", "normal", "normal", "normal"],
                    "dataAlignToAxis": ["primaryYAxis", "secondaryYAxis"],
                    "plotMissingValues": "continueLine",
                    "line": {
                        "color": ["0x8b0000ff", "0x11FC5FFF"],
                        "width": [1, 1, 1, 1],
                        "transparency": [0, 0, 0, 0]
                    },
                    "plotPoints": {
                        "visible": false,
                        "colorIndicator": "columns",
                        "marker": {
                            "type": null,
                            "fillType": "color"
                        },
                        "color": null,
                        "transparency": [0],
                        "size": [5]
                    },
                    "dataLabels": {
                        "visible": false,
                        "indicators": ["numberValue"],
                        "separator": "space",
                        "placement": "inside",
                        "orientationAngle": 0,
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xaaaaaaff"],
                            "transparency": [0]
                        }
                    }
                }
            },
            "layer1": {
                "chartHeight": 48,
                "enableScrolling": false,
                "position": [0, 0, 100, 100],
                "title": {
                    "visible": true,
                    "text": "Multiple Y Axes/ 4 Y Axes Using 2 Layers",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["Bold"],
                        "color": ["0x000000ff"],
                        "transparency": [0]
                    },
                    "position": "top",
                    "alignment": "center",
                    "direction": "up",
                    "containerWt": 15,
                    "margin": [0, 0, 0, 0],
                    "border": {
                        "visible": false,
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 100,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                    }
                },
                "legend": {
                    "visible": true,
                    "indicators": ["marker", "textLabel"],
                    "separator": "space",
                    "marker": {
                        "type": "colorBox",
                        "color": ["0x276379FF", "0xDC0D0Dff", "0x8b0000ff", "0x11FC5FFF"]
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
                        "text": ["primaryYAxis", "secondaryYAxis", "tertiaryYAxis", "quaternaryYAxis"],
                        "color": ["0x276379FF", "0xDC0D0Dff", "0x8b0000ff", "0x11FC5FFF"],
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
                    "position": "right",
                    "alignment": "middle",
                    "layout": "vertical",
                    "containerWt": 20,
                    "margin": [0, 0, 0, 0],
                    "padding": [0, 0, 0, 0],
                    "border": {
                        "visible": false,
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 100,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                    }
                },
                "layerArea": {
                    "border": {
                        "visible": false,
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 30, 70, 100],
                        "color": ["0xecedf0FF", "0xbabec8FF", "0xadb1bcFF", "0xecedf0FF"]
                    }
                },
                "dataSetMapping": {
                    "setId": "Table1",
                    "eventsSetId": "eventsMap1"
                },
                "axis": {
                    "visible": true,
                    "type": ["xAxis", "yAxis", "secondaryYAxis"],
                    "xAxis": {
                        "visible": true,
                        "title": {
                            "visible": true,
                            "text": "",
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"],
                                "transparency": [0]
                            },
                            "alignment": "center",
                            "position": "outer",
                            "direction": "up",
                            "margin": [1, 1, 1, 1]
                        },
                        "scale": {
                            "type": "auto",
                            "gap": 0,
                            "offset": {
                                "value": [6, 6],
                                "type": "numberOfIntervals"
                            }
                        },
                        "axisLine": {
                            "visible": true,
                            "crossOtherAxisAt": "start",
                            "value": 0,
                            "line": {
                                "color": ["0x000000ff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "labels": {
                            "visible": true,
                            "allowOverlap": false,
                            "placement": "axis",
                            "position": "outer",
                            "positionWrtMarkings": "left",
                            "markingReference": "atMajor",
                            "margin": [0, 0, 0, 0],
                            "orientationAngle": 90,
                            "format": {
                                "prefix": [""],
                                "suffix": [""]
                            },
                            "font": {
                                "size": [10],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0x000000ff"],
                                "transparency": [0]
                            },
                            "padding": [0, 50, 15, 50]
                        },
                        "intervalMarks": {
                            "visible": false,
                            "major": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 10
                            },
                            "minor": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 5
                            },
                            "placement": "atLabels"
                        }
                    },
                    "yAxis": {
                        "visible": true,
                        "title": {
                            "visible": true,
                            "text": "primaryYAxis",
                            "font": {
                                "size": [10],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0x276379FF"],
                                "transparency": [0]
                            },
                            "alignment": "middle",
                            "position": "outer",
                            "direction": "up",
                            "margin": [1, 1, 1, 1]
                        },
                        "scale": {
                            "type": "linear",
                            "minValue": 0,
                            "maxValue": "auto",
                            "majorInterval": "auto",
                            "minorInterval": "auto",
                            "offset": {
                                "value": [0, 0],
                                "type": "pixels"
                            }
                        },
                        "axisLine": {
                            "visible": true,
                            "crossOtherAxisAt": "start",
                            "value": 0,
                            "line": {
                                "color": ["0x276379FF"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "labels": {
                            "visible": true,
                            "allowOverlap": false,
                            "placement": "axis",
                            "position": "outer",
                            "positionWrtMarkings": "middle",
                            "markingReference": "atMajor",
                            "margin": [3, 3, 3, 3],
                            "orientationAngle": 0,
                            "format": {
                                "prefix": [""],
                                "suffix": [""]
                            },
                            "font": {
                                "size": [12],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0x276379FF"],
                                "transparency": [10]
                            }
                        },
                        "intervalMarks": {
                            "visible": false,
                            "major": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 10
                            },
                            "minor": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 5
                            },
                            "placement": "atLabels"
                        }
                    },
                    "secondaryYAxis": {
                        "visible": true,
                        "title": {
                            "visible": true,
                            "text": "secondaryYAxis",
                            "font": {
                                "size": [10],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xDC0D0Dff"],
                                "transparency": [0]
                            },
                            "alignment": "middle",
                            "position": "outer",
                            "direction": "up",
                            "margin": [1, 1, 1, 1]
                        },
                        "scale": {
                            "type": "linear",
                            "minValue": 0,
                            "maxValue": "auto",
                            "majorInterval": "auto",
                            "minorInterval": "auto",
                            "offset": {
                                "value": [0, 0],
                                "type": "pixels"
                            }
                        },
                        "axisLine": {
                            "visible": true,
                            "crossOtherAxisAt": "end",
                            "value": 0,
                            "line": {
                                "color": ["0xDC0D0Dff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "labels": {
                            "visible": true,
                            "allowOverlap": false,
                            "placement": "axis",
                            "position": "outer",
                            "positionWrtMarkings": "center",
                            "markingReference": "atMajor",
                            "margin": [3, 3, 3, 3],
                            "orientationAngle": 0,
                            "format": {
                                "prefix": [""],
                                "suffix": [""]
                            },
                            "font": {
                                "size": [12],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0xDC0D0Dff"],
                                "transparency": [10]
                            }
                        },
                        "intervalMarks": {
                            "visible": false,
                            "major": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 10
                            },
                            "minor": {
                                "visible": true,
                                "position": "outer",
                                "line": {
                                    "color": ["0xaaaaaaff"],
                                    "width": [1],
                                    "transparency": [0]
                                },
                                "length": 5
                            },
                            "placement": "atLabels"
                        }
                    }
                },
                "drawArea": {
                    "margin": [0, 0, 0, 0],
                    "padding": [0, 0, 0, 50],
                    "border": {
                        "visible": false,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 100,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"]
                    }
                },
                "grid": {
                    "visible": true,
                    "type": ["xAxisMajorGrid", "yAxisMajorGrid", "xAxisMinorGrid", "yAxisMinorGrid", "secondaryXAxisMajorGrid", "secondaryYAxisMajorGrid", "secondaryXAxisMinorGrid", "secondaryYAxisMinorGrid"],
                    "xAxisMajorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0xe6e6faff"],
                            "width": [1],
                            "transparency": 50
                        }
                    },
                    "yAxisMajorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "xAxisMinorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "yAxisMinorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "secondaryXAxisMajorGrid": {
                        "visible": true,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "secondaryYAxisMajorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "secondaryXAxisMinorGrid": {
                        "visible": true,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "secondaryYAxisMinorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0x000000FF"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "alternateGradientColor",
                        "alternateColorPattern": "xMajorMajor",
                        "transparency": 100,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xff1234ff", "0xffffffff", "0x12121212", "0x23456789"],
                        "visible": true
                    }
                },
                "drawEntities": ["axis", "grid", "lineChart"],
                "lineChart": {
                    "columnId": [0, 1],
                    "animations": {
                        "onInitAnimation": false
                    },
                    "graphType": "normal",
                    "lineType": "normal",
                    "dataAlignToAxis": ["primaryYAxis", "secondaryYAxis"],
                    "plotMissingValues": "continueLine",
                    "line": {
                        "color": ["0x276379FF", "0xDC0D0Dff"],
                        "width": [1, 1, 1, 1],
                        "transparency": [10, 10, 10, 10]
                    },
                    "plotPoints": {
                        "visible": false,
                        "colorIndicator": "columns",
                        "marker": {
                            "type": ["bubble", "bubble", "bubble", "bubble"],
                            "fillType": "color"
                        },
                        "color": ["0x276379FF", "0xDC0D0Dff", "0x57A40Bff", "0x690569FF"],
                        "transparency": [0],
                        "size": [5]
                    },
                    "dataLabels": {
                        "visible": false,
                        "indicators": ["numberValue"],
                        "separator": "space",
                        "placement": "inside",
                        "orientationAngle": 0,
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xaaaaaaff"],
                            "transparency": [0]
                        }
                    }
                }
            }
        },
        "chartData": {
            "dataSets": ["Table1"],
            "Table1": {
                "rowNames": {
                    "values": ["2014 Jun 01", "2014 Jun 02", "2014 Jun 03", "2014 Jun 04", "2014 Jun 05", "2014 Jun 06", "2014 Jun 07", "2014 Jun 08", "2014 Jun 09", "2014 Jun 10", "2014 Jun 11", "2014 Jun 12", "2014 Jun 13", "2014 Jun 14", "2014 Jun 15", "2014 Jun 16", "2014 Jun 17", "2014 Jun 18", "2014 Jun 19", "2014 Jun 20", "2014 Jun 21", "2014 Jun 22", "2014 Jun 23", "2014 Jun 24", "2014 Jun 25", "2014 Jun 26", "2014 Jun 27", "2014 Jun 28", "2014 Jun 29", "2014 Jun 30", "2014 Jul 01", "2014 Jul 02", "2014 Jul 03", "2014 Jul 04", "2014 Jul 05", "2014 Jul 06", "2014 Jul 07", "2014 Jul 08", "2014 Jul 09", "2014 Jul 10", "2014 Jul 11", "2014 Jul 12", "2014 Jul 13", "2014 Jul 14", "2014 Jul 15", "2014 Jul 16", "2014 Jul 17", "2014 Jul 18", "2014 Jul 19", "2014 Jul 20", "2014 Jul 21", "2014 Jul 22"]
                },
                "columnNames": {
                    "values": ["primaryYAxis", "secondaryYAxis", "tertiaryYAxis", "quaternaryYAxis"]
                },
                "data": {
                    "primaryYAxis": [13, 18, 12, 14, 12, 16, 16, 16, 16, 160, 132, 110, 104, 113, 184, 197, 195, 186, 182, 168, 196, 186, 176, 168, 12, 10, 14, 114, 132, 134, 142, 142, 136, 133, 136, 125, 184, 175, 177, 191, 175, 111, 119, 113, 126, 128, 154, 149, 171, 156, 155, 140],
                    "secondaryYAxis": [233, 236, 225, 284, 275, 277, 291, 275, 211, 219, 213, 226, 228, 254, 249, 271, 256, 255, 240, 260, 232, 210, 204, 213, 297, 295, 286, 254, 23, 28, 22, 24, 22, 26, 26, 26, 26, 22, 20, 24, 214, 232, 234, 242, 242, 236, 282, 268, 296, 286, 276, 268],
                    "tertiaryYAxis": [33, 38, 32, 34, 32, 36, 36, 36, 36, 32, 30, 34, 104, 314, 332, 334, 342, 342, 336, 333, 336, 325, 184, 175, 277, 291, 275, 311, 319, 313, 326, 328, 354, 349, 371, 356, 355, 340, 360, 332, 310, 204, 213, 197, 195, 186, 182, 168, 96, 86, 76, 68],
                    "quaternaryYAxis": [414, 432, 434, 442, 442, 436, 433, 436, 425, 184, 175, 277, 291, 275, 411, 419, 413, 426, 428, 454, 449, 471, 456, 455, 440, 460, 432, 410, 204, 213, 197, 195, 154, 43, 38, 52, 54, 32, 46, 36, 36, 46, 42, 60, 54, 186, 182, 168, 96, 86, 76, 68]
                }
            }
        },
        "chartEvents": {
            "events": ["eventsMap1", "eventsMap2"],
            "eventsMap1": {
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
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x276379FF", "0xDC0D0Dff"],
                            "transparency": [0]
                        }
                    },
                    "border": {
                        "visible": true,
                        "line": {
                            "color": ["0x000000ff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "color",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xffffffff"]
                    }
                }
            },
            "eventsMap2": {
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
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x8b0000ff", "0x11FC5FFF"],
                            "transparency": [0]
                        }
                    },
                    "border": {
                        "visible": true,
                        "line": {
                            "color": ["0x000000ff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "color",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xffffffff"]
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
k_dv_dataviz_multiLayer_demo_sample_6 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 12,
            "sharedLayerMode": true,
            "layers": ["layer2", "layer1"],
            "layer1": {
                "dataSetMapping": {
                    "setId": "dataset1"
                },
                "axis": {
                    "type": ["xAxis", "yAxis"],
                    "visible": false,
                    "xAxis": {
                        "scale": {
                            "minValue": 0,
                            "maxValue": 100,
                            "majorInterval": 20
                        },
                        "labels": {
                            "format": {
                                "suffix": ["%"]
                            },
                            "font": {
                                "size": [12],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0x000000ff"]
                            }
                        }
                    },
                    "yAxis": {
                        "axisLine": {
                            "visible": false
                        }
                    }
                },
                "drawEntities": ["axis", "barChart"],
                "barChart": {
                    "columnId": [0],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "bar": {
                        "width": [20],
                        "fillType": ["color"],
                        "color": ["0xFF4538FF"]
                    }
                }
            },
            "layer2": {
                "layerArea": {
                    "background": {
                        "fillType": "color",
                        "color": ["0xFFFFFFFF"]
                    }
                },
                "dataSetMapping": {
                    "setId": "dataset2"
                },
                "axis": {
                    "type": ["xAxis", "yAxis"],
                    "xAxis": {
                        "scale": {
                            "minValue": 0,
                            "maxValue": 100,
                            "majorInterval": 20
                        },
                        "axisLine": {
                            "visible": false
                        },
                        "labels": {
                            "format": {
                                "suffix": ["%"]
                            },
                            "font": {
                                "size": [12],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0x000000ff"]
                            }
                        }
                    },
                    "yAxis": {
                        "axisLine": {
                            "visible": false
                        }
                    }
                },
                "drawEntities": ["axis", "barChart"],
                "barChart": {
                    "graphType": "stacked",
                    "columnId": [0, 1, 2],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "bar": {
                        "fillType": ["color"],
                        "color": ["0xA3D72DFF", "0x01A2D9FF", "0xF2E100FF"]
                    }
                }
            }
        },
        "chartData": {
            "dataSets": ["dataset1", "dataset2"],
            "dataset2": {
                "rowNames": {
                    "values": ["Bands"]
                },
                "columnNames": {
                    "values": ["Band1", "Band2", "Band3"]
                },
                "data": {
                    "Band1": [51],
                    "Band2": [20],
                    "Band3": [29]
                }
            },
            "dataset1": {
                "rowNames": {
                    "values": ["StockStatus"]
                },
                "columnNames": {
                    "values": ["ProgressBar"]
                },
                "data": {
                    "ProgressBar": [60]
                }
            }
        }
    };
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////