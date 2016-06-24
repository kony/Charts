function barChartCatalouge() {
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_barchart.htm";
    this.pushDemo = function(demoName, demoObject) {
        this.demos.demoNames.push(demoName);
        this.demos.demoObjects.push(demoObject);
    }
    this.pushDemo("Multi Series/Clustered", k_dv_dataviz_barchart_demo_1);
    this.pushDemo("Multi Series/Stacked", k_dv_dataviz_barchart_demo_2);
    this.pushDemo("Multi Series/100% Stacked", k_dv_dataviz_barchart_demo_3);
    this.pushDemo("Multi Layer/Nested Clustered", k_dv_dataviz_barchart_demo_4);
    this.pushDemo("Single Series/Normal", k_dv_dataviz_barchart_demo_5);
    this.pushDemo("Stacked+Clustered Combo", k_dv_dataviz_barchart_demo_6);
    this.pushDemo("Multi Layer/Nested Clustered", k_dv_dataviz_barchart_demo_7);
    this.pushDemo("Multi Layer/Non Overlapping", k_dv_dataviz_barchart_demo_8);
    this.pushDemo("Multi Layer/Nested Stacked", k_dv_dataviz_barchart_demo_9);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function k_dv_dataviz_barchart_demo_1() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Share Value - Clustered",
                "font": {
                    "size": [20],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xffffffff"]
                },
                "containerWt": 10,
                "background": {
                    "fillType": "gradient",
                    "color": ["0x070707ff", "0x323232FF"]
                }
            },
            "legend": {
                "indicators": ["marker", "textLabel"],
                "marker": {
                    "type": "colorBox",
                    "color": ["0x9ab93eff", "0xf1d13fff", "0xdfa03eff"]
                },
                "textLabel": {
                    "text": ["Apple", "Microsoft", "Facebook"],
                    "color": ["0xffffffff", "0xffffffff", "0xffffffff"],
                    "margin": [5, 5, 0, 0]
                },
                "font": {
                    "size": [12],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xaaaaaaff"]
                },
                "position": "bottom",
                "alignment": "right",
                "layout": "horizantal",
                "containerWt": 8,
                "margin": [10, 10, 10, 10]
            },
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
                    "title": {
                        "text": "Share Price ($)",
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        },
                        "margin": [0, 0, 10, 0]
                    },
                    "scale": {
                        "minValue": 0,
                        "maxValue": 1000,
                        "majorInterval": 100
                    },
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
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
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        }
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "xAxisMinorGrid"],
                "xAxisMajorGrid": {
                    "visible": false
                },
                "xAxisMinorGrid": {
                    "visible": false
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "xMajorMinor",
                    "transparency": 80,
                    "color": ["0x323232FF", "0x070707FF"]
                }
            },
            "drawEntities": ["axis", "grid", "barChart"],
            "barChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "bar": {
                    "width": [400],
                    "fillType": ["gradient"],
                    "gradientRatios": [
                        [0, 50, 100]
                    ],
                    "color": [
                        [
                            ["0x76a326ff", "0xddff80ff", "0x76a326ff"]
                        ],
                        [
                            ["0xd9b534ff", "0xffdb80ff", "0xd9b534ff"]
                        ],
                        [
                            ["0xce7a24ff", "0xffb980ff", "0xce7a24ff"]
                        ]
                    ]
                },
                "dataLabels": {
                    "placement": "right",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xffffffff"]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Nov '12", "Dec '12", "Jan '13", "Feb '13", "Mar '13"]
            },
            "columnNames": {
                "values": ["Apple", "Microsoft", "Facebook"]
            },
            "data": {
                "Apple": [500, 700, 350, 400, 650],
                "Microsoft": [300, 400, 650, 200, 350],
                "Facebook": [400, 600, 850, 900, 550]
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
                            "color": ["0xAAAAAAFF"],
                            "transparency": [100]
                        }
                    },
                    "dataLabels": {
                        "indicators": ["columnName", "rowName", "numberValue"],
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"]
                        }
                    },
                    "border": {
                        "visible": true,
                        "line": {
                            "color": ["0x000000ff"]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xFFFFFFff"]
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
function k_dv_dataviz_barchart_demo_2() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Share Value - Stacked",
                "font": {
                    "size": [20],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xffffffff"]
                },
                "containerWt": 10,
                "background": {
                    "fillType": "gradient",
                    "color": ["0x070707ff", "0x323232FF"]
                }
            },
            "legend": {
                "indicators": ["marker", "textLabel"],
                "marker": {
                    "type": "colorBox",
                    "color": ["0x9ab93eff", "0xf1d13fff", "0xdfa03eff"]
                },
                "textLabel": {
                    "text": ["Apple", "Microsoft", "Facebook"],
                    "color": ["0xffffffff", "0xffffffff", "0xffffffff"],
                    "margin": [5, 5, 0, 0]
                },
                "font": {
                    "size": [12],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xFFFFFFFF"]
                },
                "position": "bottom",
                "alignment": "left",
                "layout": "horizantal",
                "containerWt": 8,
                "margin": [10, 10, 10, 10]
            },
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
                    "title": {
                        "text": "Share Price ($)",
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        },
                        "margin": [0, 0, 10, 0]
                    },
                    "scale": {
                        "minValue": 0,
                        "maxValue": 3000,
                        "majorInterval": 300
                    },
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
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
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        }
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "xAxisMinorGrid"],
                "xAxisMajorGrid": {
                    "visible": false
                },
                "xAxisMinorGrid": {
                    "visible": false
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "xMajorMinor",
                    "transparency": 80,
                    "color": ["0x323232FF", "0x070707FF"]
                }
            },
            "drawEntities": ["axis", "grid", "barChart"],
            "barChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "stacked",
                "bar": {
                    "width": [400],
                    "fillType": ["gradient"],
                    "gradientRatios": [
                        [0, 50, 100]
                    ],
                    "color": [
                        [
                            ["0x76a326ff", "0xddff80ff", "0x76a326ff"]
                        ],
                        [
                            ["0xd9b534ff", "0xffdb80ff", "0xd9b534ff"]
                        ],
                        [
                            ["0xce7a24ff", "0xffb980ff", "0xce7a24ff"]
                        ]
                    ]
                },
                "dataLabels": {
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xffffffff"]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Nov '12", "Dec '12", "Jan '13", "Feb '13", "Mar '13", "Apr '13"]
            },
            "columnNames": {
                "values": ["Apple", "Microsoft", "Facebook"]
            },
            "data": {
                "Apple": [500, 700, 350, 800, 650, 800],
                "Microsoft": [1200, 600, 1150, 600, 850, 900],
                "Facebook": [800, 900, 850, 900, 750, 400]
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
                        "indicators": ["columnName", "rowName", "numberValue"],
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
                        "fillType": "gradient",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xFFFFFFff"]
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
function k_dv_dataviz_barchart_demo_3() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Share Value - 100 % Stacked",
                "font": {
                    "size": [20],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xffffffff"]
                },
                "containerWt": 10,
                "background": {
                    "fillType": "gradient",
                    "color": ["0x070707ff", "0x323232FF"]
                }
            },
            "legend": {
                "indicators": ["marker", "textLabel"],
                "marker": {
                    "type": "colorBox",
                    "color": ["0x9ab93eff", "0xf1d13fff", "0xdfa03eff"]
                },
                "textLabel": {
                    "text": ["Apple", "Microsoft", "Facebook"],
                    "color": ["0xffffffff", "0xffffffff", "0xffffffff"],
                    "margin": [5, 5, 0, 0]
                },
                "font": {
                    "size": [12],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xffffffff"]
                },
                "position": "bottom",
                "alignment": "left",
                "layout": "horizantal",
                "containerWt": 8,
                "margin": [10, 10, 10, 10]
            },
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
                    "title": {
                        "text": "Share Price (%)",
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        },
                        "margin": [0, 0, 10, 0]
                    },
                    "scale": {
                        "minValue": 0,
                        "maxValue": 100,
                        "majorInterval": 10
                    },
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "format": {
                            "prefix": [""],
                            "suffix": ["%"]
                        },
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
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
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        }
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "xAxisMinorGrid"],
                "xAxisMajorGrid": {
                    "visible": false
                },
                "xAxisMinorGrid": {
                    "visible": false
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "xMajorMinor",
                    "transparency": 80,
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0x323232FF", "0x070707FF"]
                }
            },
            "drawEntities": ["axis", "grid", "barChart"],
            "barChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "percentStacked",
                "bar": {
                    "width": [400],
                    "fillType": ["gradient"],
                    "gradientRatios": [
                        [0, 40, 41, 60, 61, 100]
                    ],
                    "color": [
                        [
                            ["0x9ab93eff", "0x9ab93eff", "0x98b83dff", "0x7aa629ff", "0x76a326ff", "0x76a326ff"]
                        ],
                        [
                            ["0xf1d13fff", "0xf1d13fff", "0xf0d03eff", "0xdab634ff", "0xd9b534ff", "0xd9b534ff"]
                        ],
                        [
                            ["0xdfa03eff", "0xdfa03eff", "0xde9e3bff", "0xcf7c25ff", "0xce7a24ff", "0xce7a24ff"]
                        ]
                    ]
                },
                "dataLabels": {
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xFFFFFFFF"]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Nov '12", "Dec '12", "Jan '13", "Feb '13", "Mar '13", "Apr '13"]
            },
            "columnNames": {
                "values": ["Apple", "Microsoft", "Facebook"]
            },
            "data": {
                "Apple": [500, 700, 350, 400, 650, 800],
                "Microsoft": [300, 400, 650, 200, 350, 900],
                "Facebook": [400, 600, 850, 900, 550, 100]
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
                        "indicators": ["columnName", "rowName", "numberValue"],
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
                        "fillType": "gradient",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xFFFFFFff"]
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
function k_dv_dataviz_barchart_demo_4() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "layers": ["layer3", "layer2", "layer1"],
            "sharedLayerMode": true,
            "layer1": {
                "title": {
                    "text": "No of ODI's Won Vs Country between 2001-2009",
                    "font": {
                        "size": [20],
                        "family": ["Helvetica"],
                        "style": ["normal"],
                        "color": ["0xffffffff"]
                    },
                    "containerWt": 10,
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
                    "visible": false,
                    "xAxis": {
                        "scale": {
                            "minValue": 0,
                            "maxValue": 150,
                            "majorInterval": 15
                        }
                    },
                    "yAxis": {
                        "labels": {
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"]
                            }
                        },
                        "intervalMarks": {
                            "visible": true,
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
                "grid": {
                    "visible": false,
                    "type": ["xAxisMajorGrid", "yAxisMajorGrid", "xAxisMinorGrid", "yAxisMinorGrid"],
                    "xAxisMajorGrid": {
                        "visible": true,
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "yAxisMajorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "xAxisMinorGrid": {
                        "visible": true,
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "yAxisMinorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0xaaaaaaff"],
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
                "drawEntities": ["axis", "grid", "barChart"],
                "barChart": {
                    "columnId": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "bar": {
                        "width": [400],
                        "fillType": ["gradient"],
                        "gradientRatios": [
                            [0, 40, 41, 60, 61, 100]
                        ],
                        "color": [
                            [
                                ["0x9ab93eff", "0x9ab93eff", "0x98b83dff", "0x7aa629ff", "0x76a326ff", "0x76a326ff"]
                            ]
                        ]
                    },
                    "dataLabels": {
                        "indicators": ["columnName"],
                        "placement": "right",
                        "font": {
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x76a326ff"]
                        }
                    }
                }
            },
            "layer2": {
                "title": {
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
                        "color": ["0x146EBDFF", "0x05102Bff"]
                    }
                },
                "dataSetMapping": {
                    "setId": "dataset2",
                    "eventsSetId": "eventsMap2"
                },
                "axis": {
                    "visible": false,
                    "xAxis": {
                        "scale": {
                            "minValue": 0,
                            "maxValue": 150,
                            "majorInterval": 15
                        }
                    },
                    "yAxis": {
                        "labels": {
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"]
                            }
                        },
                        "intervalMarks": {
                            "visible": true,
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
                "grid": {
                    "visible": false,
                    "type": ["xAxisMajorGrid", "yAxisMajorGrid", "xAxisMinorGrid", "yAxisMinorGrid"],
                    "xAxisMajorGrid": {
                        "visible": true,
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "yAxisMajorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "xAxisMinorGrid": {
                        "visible": true,
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "yAxisMinorGrid": {
                        "visible": false,
                        "line": {
                            "color": ["0xaaaaaaff"],
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
                "drawEntities": ["axis", "grid", "barChart"],
                "barChart": {
                    "columnId": [0, 1, 2, 3],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "bar": {
                        "width": [400],
                        "fillType": ["gradient"],
                        "gradientRatios": [
                            [0, 40, 41, 60, 61, 100]
                        ],
                        "color": [
                            [
                                ["0xf1d13fff", "0xf1d13fff", "0xf0d03eff", "0xdab634ff", "0xd9b534ff", "0xd9b534ff"]
                            ]
                        ]
                    },
                    "dataLabels": {
                        "indicators": ["columnName"],
                        "placement": "right",
                        "font": {
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xd9b534ff"]
                        }
                    }
                }
            },
            "layer3": {
                "title": {
                    "containerWt": 10,
                    "background": {
                        "fillType": "gradient",
                        "color": ["0x146EBDFF", "0x05102Bff"]
                    }
                },
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "color": ["0x070707ff", "0x323232FF"]
                    }
                },
                "dataSetMapping": {
                    "setId": "dataset3",
                    "eventsSetId": "eventsMap3"
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
                        "scale": {
                            "minValue": 0,
                            "maxValue": 150,
                            "majorInterval": 15
                        },
                        "axisLine": {
                            "visible": false
                        },
                        "labels": {
                            "font": {
                                "size": [12],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0xffffffff"]
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
                            "font": {
                                "size": [12],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0xffffffff"]
                            }
                        }
                    }
                },
                "grid": {
                    "type": ["xAxisMajorGrid", "xAxisMinorGrid"],
                    "xAxisMajorGrid": {
                        "visible": false
                    },
                    "xAxisMinorGrid": {
                        "visible": false
                    },
                    "background": {
                        "fillType": "alternateColor",
                        "alternateColorPattern": "xMajorMinor",
                        "transparency": 80,
                        "color": ["0x323232FF", "0x070707FF"]
                    }
                },
                "drawEntities": ["axis", "grid", "barChart"],
                "barChart": {
                    "animations": {
                        "onInitAnimation": true
                    },
                    "bar": {
                        "width": [400],
                        "fillType": ["gradient"],
                        "gradientRatios": [
                            [0, 40, 41, 60, 61, 100]
                        ],
                        "color": [
                            ["0xdfa03eff", "0xdfa03eff", "0xde9e3bff", "0xcf7c25ff", "0xce7a24ff", "0xce7a24ff"]
                        ]
                    },
                    "dataLabels": {
                        "visible": true,
                        "indicators": ["columnName"],
                        "placement": "right",
                        "font": {
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xce7a24ff"]
                        }
                    }
                }
            }
        },
        "chartData": {
            "dataSets": ["dataset1", "dataset2", "dataset3"],
            "dataset1": {
                "rowNames": {
                    "type": "string",
                    "values": ["IND", "AUS", "SA"]
                },
                "columnNames": {
                    "type": "string",
                    "values": ["01", "02", "03", "04", "05", "06", "07", "08", "09"]
                },
                "data": {
                    "01": [40, 70, 80],
                    "02": [50, 70, 85],
                    "03": [30, 90, 65],
                    "04": [100, 20, 40],
                    "05": [90, 100, 80],
                    "06": [30, 80, 65],
                    "07": [75, 20, 70],
                    "08": [60, 90, 55],
                    "09": [30, 90, 70]
                }
            },
            "dataset2": {
                "rowNames": {
                    "type": "string",
                    "values": ["IND", "AUS", "SA"]
                },
                "columnNames": {
                    "type": "string",
                    "values": ["01-03", "04-06", "07-09"]
                },
                "data": {
                    "01-03": [100, 110, 110],
                    "04-06": [110, 105, 115],
                    "07-09": [120, 110, 100]
                }
            },
            "dataset3": {
                "rowNames": {
                    "type": "string",
                    "values": ["IND", "AUS", "SA"]
                },
                "columnNames": {
                    "type": "string",
                    "values": ["01-09"]
                },
                "data": {
                    "01-09": [130, 120, 130]
                }
            }
        },
        "chartEvents": {
            "events": ["eventsMap1", "eventsMap2", "eventsMap3"],
            "eventsMap1": {
                "onPinchZoom": {
                    "minimumZoomScale": 1,
                    "maximumZoomScale": 2
                },
                "onTouch": {
                    "crossHair": {
                        "line": {
                            "color": ["0xAAAAAAFF"],
                            "transparency": [100]
                        }
                    },
                    "dataLabels": {
                        "indicators": ["rowName", "columnName", "numberValue"],
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x76a326ff"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0x000000ff"]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
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
                            "transparency": [100]
                        }
                    },
                    "dataLabels": {
                        "indicators": ["rowName", "columnName", "numberValue"],
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xd9b534ff"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0x000000ff"]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xffffffff"]
                    }
                }
            },
            "eventsMap3": {
                "onPinchZoom": {
                    "minimumZoomScale": 1,
                    "maximumZoomScale": 2
                },
                "onTouch": {
                    "crossHair": {
                        "line": {
                            "color": ["0xAAAAAAFF"],
                            "transparency": [100]
                        }
                    },
                    "dataLabels": {
                        "visible": true,
                        "indicators": ["rowName", "columnName", "numberValue"],
                        "separator": "space",
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xce7a24ff"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0x000000ff"]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "gradientRatios": [0, 20, 50, 100],
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
function k_dv_dataviz_barchart_demo_5() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Bill History - Normal",
                "font": {
                    "size": [20],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xffffffff"]
                },
                "containerWt": 10,
                "background": {
                    "fillType": "gradient",
                    "color": ["0x070707ff", "0x323232FF"]
                }
            },
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
                    "title": {
                        "text": "Bill Amount ($)",
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        },
                        "margin": [0, 0, 10, 0]
                    },
                    "scale": {
                        "minValue": 0,
                        "maxValue": 1000,
                        "majorInterval": 100
                    },
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
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
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        }
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "xAxisMinorGrid"],
                "xAxisMajorGrid": {
                    "visible": false
                },
                "xAxisMinorGrid": {
                    "visible": false
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "xMajorMinor",
                    "transparency": 80,
                    "color": ["0x323232FF", "0x070707FF"]
                }
            },
            "drawEntities": ["axis", "grid", "barChart"],
            "barChart": {
                "animations": {
                    "onInitAnimation": true
                },
                "bar": {
                    "width": [400],
                    "fillType": ["gradient"],
                    "gradientRatios": [
                        [0, 40, 41, 60, 61, 100]
                    ],
                    "color": [
                        ["0x9ab93eff", "0x9ab93eff", "0x98b83dff", "0x7aa629ff", "0x76a326ff", "0x76a326ff"]
                    ]
                },
                "border": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "dataLabels": {
                    "placement": "right",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xffffffff"]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Nov '12", "Dec '12", "Jan '13", "Feb '13", "Mar '13", "Apr '13", "May '13", "Jun '13", "July '13"]
            },
            "columnNames": {
                "values": ["c1"]
            },
            "data": {
                "c1": [500, 700, 350, 400, 650, 800, 750, 950, 650]
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
                            "color": ["0xAAAAAAFF"],
                            "transparency": [100]
                        }
                    },
                    "dataLabels": {
                        "indicators": ["rowName", "numberValue"],
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"]
                        }
                    },
                    "border": {
                        "visible": true,
                        "line": {
                            "color": ["0x000000ff"]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xFFFFFFff"]
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
function k_dv_dataviz_barchart_demo_6() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Team Win Analysis: MultiSeries, PichToZoom, onTouch indicators",
                "font": {
                    "size": [16],
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
                    "color": ["0xAAAEB9FF", "0xF4F5F7FF"]
                }
            },
            "dataSetMapping": {
                "setId": "dataset1",
                "eventsSetId": "eventsMap1"
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
                    "scale": {
                        "minValue": 0,
                        "maxValue": 120,
                        "majorInterval": 10
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
                        "crossOtherAxisAt": "value",
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"]
                        }
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "xAxisMinorGrid"],
                "xAxisMajorGrid": {
                    "visible": false
                },
                "xAxisMinorGrid": {
                    "visible": false
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "xMajorMinor",
                    "color": ["0xE9E9E9FF", "0xDEE0E5FF"]
                }
            },
            "drawEntities": ["axis", "grid", "barChart"],
            "barChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "stacked",
                "bar": {
                    "width": [400],
                    "fillType": ["gradient"],
                    "gradientRatios": [
                        [0, 20, 50, 100]
                    ],
                    "color": [
                        [
                            ["0xd23535ff", "0xea4342ff"], null, null, ["0xd23535ff", "0xea4342ff"],
                            ["0xbd3546ff", "0xbe487cff"], null, null, ["0xbd3546ff", "0xbe487cff"],
                            ["0x8e398fff", "0xb247b2ff"], null, null, ["0x8e398fff", "0xb247b2ff"],
                            ["0x5439bdff", "0x7a47bfff"], null, null, ["0x5439bdff", "0x7a47bfff"]
                        ],
                        [
                            ["0xe66136ff", "0xe07943ff"],
                            ["0xe66136ff", "0xe07943ff"], null, ["0xe66136ff", "0xe07943ff"], null, ["0xbc5e4aff", "0xbd7d72ff"], null, ["0xbc5e4aff", "0xbd7d72ff"], null, ["0xa56994ff", "0xb37aa7ff"], null, ["0xa56994ff", "0xb37aa7ff"], null, ["0x6664bcff", "0x7c7cbfff"], null, ["0x6664bcff", "0x7c7cbfff"]
                        ],
                        [
                            ["0xfb7f38ff", "0xf69644ff"], null, ["0xfb7f38ff", "0xf69644ff"],
                            ["0xfb7f38ff", "0xf69644ff"], null, null, ["0xbb7e44ff", "0xbe8783ff"],
                            ["0xbb7e44ff", "0xbe8783ff"], null, null, ["0xbf8186ff", "0xc1897eff"],
                            ["0xbf8186ff", "0xc1897eff"], null, null, ["0x7581bcff", "0x7d88bfff"],
                            ["0x7581bcff", "0x7d88bfff"]
                        ]
                    ]
                },
                "border": {
                    "line": {
                        "color": ["0xFFFFFFFF"]
                    }
                },
                "dataLabels": {
                    "font": {
                        "size": [10],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0x000000ff"]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["KKR-Won", "KKR-Lost", "KKR-Tie", "KKR", "RCB-Won", "RCB-Lost", "RCB-Tie", "RCB", "DC-Won", "DC-Lost", "DC-Tie", "DC", "CSK-Won", "CSK-Lost", "CSK-Tie", "CSK"]
            },
            "columnNames": {
                "values": ["Won", "Lost", "Tie"]
            },
            "data": {
                "Won": [51, null, null, 51, 23, null, null, 23, 28, null, null, 28, 21, null, null, 21],
                "Lost": [null, 28, null, 28, null, 28, null, 28, null, 15, null, 15, null, 10, null, 10],
                "Tie": [null, null, 27, 27, null, null, 21, 21, null, null, 17, 17, null, null, 15, 15]
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
                            "color": ["0xAAAAAAFF"],
                            "transparency": [20]
                        }
                    },
                    "dataLabels": {
                        "indicators": ["columnName", "rowName", "numberValue"],
                        "separator": "newLine",
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
                        "transparency": 20,
                        "gradientRatios": [0, 20, 50, 100],
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
function k_dv_dataviz_barchart_demo_7() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "sharedLayerMode": true,
            "layers": ["layer2", "layer1"],
            "layer1": {
                "title": {
                    "text": "Sales Distribution Across: Multilayer, PinchToZoom, onTouch indicators",
                    "font": {
                        "size": [16],
                        "family": ["Helvetica"],
                        "style": ["normal"]
                    },
                    "containerWt": 6,
                    "background": {
                        "fillType": "gradient",
                        "color": ["0xF4F5F7FF", "0xAAAEB9FF"]
                    }
                },
                "dataSetMapping": {
                    "setId": "dataset1",
                    "eventsSetId": "eventsMap1"
                },
                "axis": {
                    "visible": false,
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
                        "scale": {
                            "minValue": 0,
                            "maxValue": 250,
                            "majorInterval": 25
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
                        "labels": {
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
                    "bar": {
                        "width": [400],
                        "fillType": ["gradient"],
                        "transparency": [5],
                        "gradientRatios": [
                            [0, 20, 50, 100]
                        ],
                        "color": [
                            [
                                ["0xd23535ff", "0xea4342ff"],
                                ["0xbd3546ff", "0xbe487cff"],
                                ["0x8e398fff", "0xb247b2ff"],
                                ["0x5439bdff", "0x7a47bfff"],
                                ["0xd23535ff", "0xea4342ff"],
                                ["0xbd3546ff", "0xbe487cff"],
                                ["0x8e398fff", "0xb247b2ff"],
                                ["0x5439bdff", "0x7a47bfff"],
                                ["0xd23535ff", "0xea4342ff"],
                                ["0xbd3546ff", "0xbe487cff"],
                                ["0x8e398fff", "0xb247b2ff"],
                                ["0x5439bdff", "0x7a47bfff"],
                                ["0xd23535ff", "0xea4342ff"]
                            ],
                            [
                                ["0xe66136ff", "0xe07943ff"],
                                ["0xbc5e4aff", "0xbd7d72ff"],
                                ["0xa56994ff", "0xb37aa7ff"],
                                ["0x6664bcff", "0x7c7cbfff"],
                                ["0xe66136ff", "0xe07943ff"],
                                ["0xbc5e4aff", "0xbd7d72ff"],
                                ["0xa56994ff", "0xb37aa7ff"],
                                ["0x6664bcff", "0x7c7cbfff"],
                                ["0xe66136ff", "0xe07943ff"],
                                ["0xbc5e4aff", "0xbd7d72ff"],
                                ["0xa56994ff", "0xb37aa7ff"],
                                ["0x6664bcff", "0x7c7cbfff"],
                                ["0xe66136ff", "0xe07943ff"]
                            ],
                            [
                                ["0xfb7f38ff", "0xf69644ff"],
                                ["0xbb7e44ff", "0xbe8783ff"],
                                ["0xbf8186ff", "0xc1897eff"],
                                ["0x7581bcff", "0x7d88bfff"],
                                ["0xfb7f38ff", "0xf69644ff"],
                                ["0xbb7e44ff", "0xbe8783ff"],
                                ["0xbf8186ff", "0xc1897eff"],
                                ["0x7581bcff", "0x7d88bfff"],
                                ["0xfb7f38ff", "0xf69644ff"],
                                ["0xbb7e44ff", "0xbe8783ff"],
                                ["0xbf8186ff", "0xc1897eff"],
                                ["0x7581bcff", "0x7d88bfff"],
                                ["0xfb7f38ff", "0xf69644ff"]
                            ]
                        ]
                    },
                    "border": {
                        "line": {
                            "color": ["0xffffffff"]
                        }
                    },
                    "dataLabels": {
                        "placement": "right",
                        "font": {
                            "size": [10],
                            "style": ["normal"]
                        }
                    }
                }
            },
            "layer2": {
                "title": {
                    "containerWt": 6
                },
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "color": ["0xAAAEB9FF", "0xF4F5F7FF"]
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
                            "text": "",
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"]
                            }
                        },
                        "scale": {
                            "minValue": 0,
                            "maxValue": 250,
                            "majorInterval": 25
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
                            "crossOtherAxisAt": "value",
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
                    }
                },
                "grid": {
                    "visible": true,
                    "type": ["xAxisMajorGrid", "xAxisMinorGrid"],
                    "xAxisMajorGrid": {
                        "visible": false
                    },
                    "xAxisMinorGrid": {
                        "visible": false
                    },
                    "background": {
                        "fillType": "alternateColor",
                        "alternateColorPattern": "xMajorMinor",
                        "color": ["0xE9E9E9FF", "0xDEE0E5FF"]
                    }
                },
                "drawEntities": ["axis", "grid", "barChart"],
                "barChart": {
                    "animations": {
                        "onInitAnimation": true
                    },
                    "bar": {
                        "width": [400],
                        "fillType": ["gradient"],
                        "transparency": [10],
                        "gradientRatios": [
                            [0, 20, 50, 100]
                        ],
                        "color": [
                            ["0xfb7f38ff", "0xf69644ff"],
                            ["0xbb7e44ff", "0xbe8783ff"],
                            ["0xbf8186ff", "0xc1897eff"],
                            ["0x7581bcff", "0x7d88bfff"],
                            ["0xfb7f38ff", "0xf69644ff"],
                            ["0xbb7e44ff", "0xbe8783ff"],
                            ["0xbf8186ff", "0xc1897eff"],
                            ["0x7581bcff", "0x7d88bfff"],
                            ["0xfb7f38ff", "0xf69644ff"],
                            ["0xbb7e44ff", "0xbe8783ff"],
                            ["0xbf8186ff", "0xc1897eff"],
                            ["0x7581bcff", "0x7d88bfff"],
                            ["0xfb7f38ff", "0xf69644ff"]
                        ]
                    },
                    "border": {
                        "line": {
                            "color": ["0xffffffff"]
                        }
                    },
                    "dataLabels": {
                        "placement": "right",
                        "font": {
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000FF"]
                        }
                    }
                }
            }
        },
        "chartData": {
            "dataSets": ["dataset1", "dataset2"],
            "dataset1": {
                "rowNames": {
                    "values": ["AP", "TN", "KA", "KL", "UP", "MP", "JK", "WB", "MH", "GA", "JK", "DL", "HR"]
                },
                "columnNames": {
                    "values": ["Gold", "Silver", "Bronze"]
                },
                "data": {
                    "Gold": [51, 66, 23, 96, 51, 36, 23, 99, 67, 56, 34, 26, 88],
                    "Silver": [28, 36, 100, 28, 15, 28, 36, 14, 48, 15, 38, 85, 25],
                    "Bronze": [29, 38, 85, 25, 21, 38, 15, 75, 51, 36, 23, 99, 67]
                }
            },
            "dataset2": {
                "rowNames": {
                    "values": ["AP", "TN", "KA", "KL", "UP", "MP", "JK", "WB", "MH", "GA", "JK", "DL", "HR"]
                },
                "columnNames": {
                    "values": ["Total"]
                },
                "data": {
                    "Total": [108, 140, 208, 149, 87, 102, 74, 188, 166, 107, 95, 210, 180]
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
                            "color": ["0xAAAAAAFF"],
                            "transparency": [20]
                        }
                    },
                    "dataLabels": {
                        "indicators": ["columnName", "rowName", "numberValue"],
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
                        "transparency": 20,
                        "gradientRatios": [0, 20, 50, 100],
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
k_dv_dataviz_barchart_demo_8 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "layers": ["layer1", "layer2", "layer3"],
            "layer1": {
                "position": [0, 0, 100, 30],
                "title": {
                    "text": "Effectiveness - Revenue",
                    "font": {
                        "size": [20],
                        "family": ["Helvetica"],
                        "style": ["normal"],
                        "color": ["0x000000ff"]
                    },
                    "alignment": "left",
                    "containerWt": 15,
                    "background": {
                        "fillType": "gradient",
                        "color": ["0xF4F5F7FF", "0xAAAEB9FF"]
                    }
                },
                "legend": {
                    "indicators": ["marker", "textLabel"],
                    "marker": {
                        "type": "colorBox",
                        "color": ["0xffcf13ff", "0xefb812ff", "0xc6c6c6ff"],
                        "margin": [3, 3, 0, 0]
                    },
                    "textLabel": {
                        "text": ["Completed", "Projected", "Target"],
                        "color": ["0x000000FF", "0x000000FF", "0x000000FF", "0x000000FF"],
                        "margin": [3, 5, 0, 0]
                    },
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xaaaaaaff"]
                    },
                    "position": "bottom",
                    "layout": "horizantal",
                    "containerWt": 15,
                    "padding": [10, 10, 10, 10],
                    "background": {
                        "fillType": "gradient",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xf0f0f0ff"]
                    }
                },
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "color": ["0xF4F5F7FF", "0xAAAEB9FF"]
                    }
                },
                "dataSetMapping": {
                    "setId": "dataset1",
                    "eventsSetId": "eventsMap1"
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
                        "scale": {
                            "minValue": 0,
                            "maxValue": 100,
                            "majorInterval": 20
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
                            "line": {
                                "color": ["0xaaaaaaff"]
                            }
                        }
                    },
                    "margin": [0, 0, 25, 0]
                },
                "grid": {
                    "type": ["xAxisMajorGrid"],
                    "xAxisMajorGrid": {
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    }
                },
                "drawEntities": ["axis", "grid", "barChart"],
                "barChart": {
                    "columnId": [0, 1, 2],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "graphType": "stacked",
                    "bar": {
                        "width": [400],
                        "fillType": ["gradient"],
                        "gradientType": ["linearLeftToRight"],
                        "color": [
                            [
                                ["0xffcf13ff", "0xffe987ff"]
                            ],
                            [
                                ["0xefb812ff", "0xefb812ff"]
                            ],
                            [
                                ["0xc6c6c6ff", "0xe6e6e6ff"]
                            ]
                        ]
                    },
                    "border": {
                        "line": {
                            "color": ["0xefcb43ff", "0xe9b51fff", "0xc7c7c7ff"]
                        }
                    },
                    "dataLabels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"]
                        }
                    }
                }
            },
            "layer2": {
                "position": [0, 30, 100, 65],
                "title": {
                    "text": "Effectiveness - Presence",
                    "font": {
                        "size": [20],
                        "family": ["Helvetica"],
                        "style": ["normal"],
                        "color": ["0x000000ff"],
                        "transparency": [10]
                    },
                    "alignment": "left",
                    "containerWt": 15,
                    "background": {
                        "fillType": "gradient",
                        "transparency": 0,
                        "color": ["0xF4F5F7FF", "0xAAAEB9FF"]
                    }
                },
                "legend": {
                    "indicators": ["marker", "textLabel"],
                    "marker": {
                        "type": "colorBox",
                        "color": ["0xffcf13ff", "0xefb812ff", "0xc6c6c6ff", "0xb5dc68ff"],
                        "margin": [3, 3, 0, 0]
                    },
                    "textLabel": {
                        "text": ["Completed", "Projected", "Target", "Planned"],
                        "color": ["0x000000FF", "0x000000FF", "0x000000FF", "0x000000FF", "0x000000FF"],
                        "margin": [3, 5, 0, 0]
                    },
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xaaaaaaff"]
                    },
                    "position": "bottom",
                    "layout": "horizantal",
                    "containerWt": 15,
                    "padding": [10, 10, 10, 10],
                    "background": {
                        "fillType": "gradient",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xf0f0f0ff"]
                    }
                },
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "color": ["0xF4F5F7FF", "0xAAAEB9FF"]
                    }
                },
                "dataSetMapping": {
                    "setId": "dataset2",
                    "eventsSetId": "eventsMap1"
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
                        "scale": {
                            "minValue": 0,
                            "maxValue": 50,
                            "majorInterval": 10
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
                            "line": {
                                "color": ["0xaaaaaaff"]
                            }
                        }
                    },
                    "margin": [0, 0, 25, 0]
                },
                "grid": {
                    "type": ["xAxisMajorGrid"],
                    "xAxisMajorGrid": {
                        "visible": true,
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    }
                },
                "drawEntities": ["axis", "grid", "barChart"],
                "barChart": {
                    "columnId": [0, 1, 2, 3],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "graphType": "stacked",
                    "bar": {
                        "width": [400],
                        "fillType": ["gradient"],
                        "gradientType": ["linearLeftToRight"],
                        "color": [
                            [
                                ["0xffcf13ff", "0xffe987ff"]
                            ],
                            [
                                ["0xefb812ff", "0xefb812ff"]
                            ],
                            [
                                ["0xc6c6c6ff", "0xe6e6e6ff"]
                            ],
                            [
                                ["0xb5dc68ff", "0xd6f1a2ff"]
                            ]
                        ]
                    },
                    "border": {
                        "line": {
                            "color": ["0xefcb43ff", "0xe9b51fff", "0xc7c7c7ff", "0xb2d875ff"]
                        }
                    },
                    "dataLabels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"]
                        }
                    }
                }
            },
            "layer3": {
                "position": [0, 65, 100, 100],
                "title": {
                    "text": "Effectiveness - Visits",
                    "font": {
                        "size": [20],
                        "family": ["Helvetica"],
                        "style": ["normal"],
                        "color": ["0x000000ff"],
                        "transparency": [10]
                    },
                    "alignment": "left",
                    "containerWt": 15,
                    "background": {
                        "fillType": "gradient",
                        "color": ["0xF4F5F7FF", "0xAAAEB9FF"]
                    }
                },
                "legend": {
                    "indicators": ["marker", "textLabel"],
                    "marker": {
                        "type": "colorBox",
                        "color": ["0xffcf13ff", "0xd1bc61ff", "0xefb812ff", "0xc6c6c6ff", "0xb5dc68ff"],
                        "margin": [3, 3, 0, 0]
                    },
                    "textLabel": {
                        "text": ["Finished", "Cancelled", "Completed", "Target", "Planned"],
                        "color": ["0x000000FF", "0x000000FF", "0x000000FF", "0x000000FF", "0x000000FF"],
                        "margin": [3, 5, 0, 0]
                    },
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xaaaaaaff"]
                    },
                    "position": "bottom",
                    "layout": "horizantal",
                    "containerWt": 15,
                    "padding": [10, 10, 10, 10],
                    "background": {
                        "fillType": "gradient",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0xf0f0f0ff"]
                    }
                },
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "color": ["0xF4F5F7FF", "0xAAAEB9FF"]
                    }
                },
                "dataSetMapping": {
                    "setId": "dataset3",
                    "eventsSetId": "eventsMap1"
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
                        "scale": {
                            "minValue": 0,
                            "maxValue": 35,
                            "majorInterval": 5
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
                            "line": {
                                "color": ["0xaaaaaaff"]
                            }
                        }
                    },
                    "margin": [0, 0, 25, 0]
                },
                "grid": {
                    "visible": true,
                    "type": ["xAxisMajorGrid"],
                    "xAxisMajorGrid": {
                        "visible": true,
                        "line": {
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    }
                },
                "drawEntities": ["axis", "grid", "barChart"],
                "barChart": {
                    "columnId": [0, 1, 2, 3, 4, 5],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "graphType": "stacked",
                    "bar": {
                        "width": [400],
                        "fillType": ["gradient"],
                        "gradientType": ["linearLeftToRight"],
                        "color": [
                            [
                                ["0xffcf13ff", "0xffe987ff"]
                            ],
                            [
                                ["0xd1bc61ff", "0xd1bc61ff"]
                            ],
                            [
                                ["0xefb812ff", "0xefb812ff"]
                            ],
                            [
                                ["0x000000ff", "0x000000ff"]
                            ],
                            [
                                ["0xc6c6c6ff", "0xe6e6e6ff"]
                            ],
                            [
                                ["0xb5dc68ff", "0xd6f1a2ff"]
                            ]
                        ]
                    },
                    "border": {
                        "line": {
                            "color": ["0xefcb43ff", "0xbca957ff", "0xe9b51fff", "0x000000ff", "0xc7c7c7ff", "0xb2d875ff"]
                        }
                    },
                    "dataLabels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"]
                        }
                    }
                }
            }
        },
        "chartData": {
            "dataSets": ["dataset1", "dataset2", "dataset3"],
            "dataset1": {
                "rowNames": {
                    "values": ["r1", "r2"]
                },
                "columnNames": {
                    "values": ["Completed", "Projected", "Target"]
                },
                "data": {
                    "Completed": [null, 31],
                    "Projected": [null, 45],
                    "Target": [59, null]
                }
            },
            "dataset2": {
                "rowNames": {
                    "values": ["r1", "r2", "r3"]
                },
                "columnNames": {
                    "values": ["Completed", "Projected", "Target", "Planned"]
                },
                "data": {
                    "Completed": [null, null, 17],
                    "Projected": [null, null, 23],
                    "Target": [null, 29, null],
                    "Planned": [34, null, null]
                }
            },
            "dataset3": {
                "rowNames": {
                    "values": ["r1", "r2", "r3"]
                },
                "columnNames": {
                    "values": ["Finished", "Cancelled", "Completed", "Projected", "Target", "Planned"]
                },
                "data": {
                    "Completed": [null, null, 6],
                    "Finished": [null, null, 9],
                    "Cancelled": [null, null, 8],
                    "Projected": [null, null, null],
                    "Target": [null, 29, null],
                    "Planned": [34, null, null]
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
                            "color": ["0x000000FF"],
                            "transparency": [20]
                        }
                    },
                    "dataLabels": {
                        "indicators": ["columnName", "rowName", "numberValue"],
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
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
k_dv_dataviz_barchart_demo_9 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "sharedLayerMode": true,
            "layers": ["layer2", "layer1"],
            "layer1": {
                "title": {
                    "text": "Aircraft Orders",
                    "font": {
                        "size": [32],
                        "family": ["Helvetica"],
                        "style": ["normal"],
                        "color": ["0x344c62ff"]
                    },
                    "containerWt": 6,
                    "background": {
                        "fillType": "gradient",
                        "color": ["0x6d90b5FF", "0xe1e7eeFF"]
                    }
                },
                "legend": {
                    "indicators": ["marker", "textLabel"],
                    "marker": {
                        "type": "colorBox",
                        "color": ["0x9DA8B4FF", "0x223182ff", "0x6443B8ff"]
                    },
                    "textLabel": {
                        "text": ["Ordered Total", "Delivered Total", "Delivered this year"],
                        "color": ["0x9DA8B4FF", "0x223182ff", "0x6443B8ff"],
                        "margin": [5, 5, 0, 0]
                    },
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xFFFFFFFF"]
                    },
                    "position": "top",
                    "alignment": "left",
                    "layout": "horizantal",
                    "containerWt": 6,
                    "margin": [10, 0, 0, 0]
                },
                "axis": {
                    "visible": false,
                    "type": ["secondaryXAxis", "yAxis"],
                    "secondaryXAxis": {
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
                            "minValue": 0,
                            "maxValue": 70,
                            "majorInterval": 10
                        }
                    },
                    "yAxis": {
                        "title": {
                            "text": "",
                            "font": {
                                "size": [4],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"]
                            }
                        },
                        "labels": {
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
                    "columnId": [1, 2],
                    "graphType": "stacked",
                    "dataAlignToAxis": ["secondaryXAxis"],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "bar": {
                        "width": [50],
                        "fillType": ["color"],
                        "color": ["0x223182ff", "0x6443B8ff"]
                    },
                    "dataLabels": {
                        "placement": "center",
                        "font": {
                            "size": [10],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        }
                    }
                }
            },
            "layer2": {
                "title": {
                    "containerWt": 6
                },
                "legend": {
                    "visible": true,
                    "indicators": ["marker", "textLabel"],
                    "marker": {
                        "type": "colorBox",
                        "color": ["0x9DA8B4FF", "0x223182ff", "0x6443B8ff"]
                    },
                    "textLabel": {
                        "text": ["Ordered Total", "Delivered Total", "Delivered this year"],
                        "color": ["0x9DA8B4FF", "0x223182ff", "0x6443B8ff"],
                        "margin": [5, 5, 0, 0]
                    },
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xFFFFFFFF"]
                    },
                    "position": "top",
                    "alignment": "left",
                    "layout": "horizantal",
                    "containerWt": 6,
                    "margin": [10, 0, 0, 0]
                },
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "color": ["0xeff0f5ff", "0xe7ebf0ff"]
                    }
                },
                "axis": {
                    "type": ["secondaryXAxis", "yAxis"],
                    "secondaryXAxis": {
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
                            "minValue": 0,
                            "maxValue": 70,
                            "majorInterval": 10
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
                            "crossOtherAxisAt": "value",
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
                    }
                },
                "grid": {
                    "visible": true,
                    "type": ["secondaryXAxisMajorGrid"],
                    "secondaryXAxisMajorGrid": {
                        "visible": true
                    }
                },
                "drawEntities": ["axis", "grid", "barChart"],
                "barChart": {
                    "columnId": [0],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "dataAlignToAxis": ["secondaryXAxis"],
                    "bar": {
                        "width": [50],
                        "fillType": ["color"],
                        "color": ["0x9DA8B4FF"]
                    },
                    "dataLabels": {
                        "placement": "right",
                        "font": {
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000FF"]
                        }
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Boeing 742-300 CZ", "Boeing 777-300 ER", "Boeing 747-8F", "Airbus A350-1000", "Airbus A350-900", "Airbus A330-300", "Airbus A321"]
            },
            "columnNames": {
                "values": ["Ordered Total", "Delivered Total", "Delivered this year"]
            },
            "data": {
                "Ordered Total": [21, 68, 14, 26, 22, 46, 2],
                "Delivered Total": [null, 53, 13, null, null, 38, null],
                "Delivered this year": [null, null, null, null, null, 5, 2]
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
                            "color": ["0xAAAAAAFF"],
                            "transparency": [20]
                        }
                    },
                    "dataLabels": {
                        "indicators": ["columnName", "rowName", "numberValue"],
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
                        "transparency": 20,
                        "gradientRatios": [0, 20, 50, 100],
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