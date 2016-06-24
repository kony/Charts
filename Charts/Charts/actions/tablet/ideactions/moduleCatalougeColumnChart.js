function columnChartCatalouge() {
    
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_columnchart.htm";
    
    this.pushDemo = function(demoName, demoObject){
    	this.demos.demoNames.push(demoName);
    	this.demos.demoObjects.push(demoObject);
    }
    
    this.pushDemo("Multi Series/Clustered", k_dv_dataviz_columnchart_demo_1);
    this.pushDemo("Multi Series/Stacked", k_dv_dataviz_columnchart_demo_2);
    this.pushDemo("Multi Series/100% Stacked", k_dv_dataviz_columnchart_demo_3);
    this.pushDemo("Multi Layer/Nested Clustered", k_dv_dataviz_columnchart_demo_4);
    this.pushDemo("Single Series/Normal", k_dv_dataviz_columnchart_demo_5);
    this.pushDemo("Clustered-Scrolling", k_dv_dataviz_columnchart_demo_6);
    this.pushDemo("Stacked+Clustered Combo", k_dv_dataviz_columnchart_demo_7);
    this.pushDemo("Stacked With Legend", k_dv_dataviz_columnchart_demo_8);
    this.pushDemo("Single Series", k_dv_dataviz_columnchart_demo_9);
    this.pushDemo("Stacked/Sales Dashboard", k_dv_dataviz_columnchart_demo_10);
    this.pushDemo("Clustered", k_dv_dataviz_columnchart_demo_11);
    this.pushDemo("Stacked", k_dv_dataviz_columnchart_demo_12);
    this.pushDemo("Clustered", k_dv_dataviz_columnchart_demo_13);
    this.pushDemo("Single Series", k_dv_dataviz_columnchart_demo_14);
    this.pushDemo("Single Series", k_dv_dataviz_columnchart_demo_15);
    this.pushDemo("Single Series-Scrolling", k_dv_dataviz_columnchart_demo_16);
    this.pushDemo("Shape-Round Rectangle", k_dv_dataviz_columnchart_demo_17);
    this.pushDemo("Shape-Triangle", k_dv_dataviz_columnchart_demo_18);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function k_dv_dataviz_columnchart_demo_1() {
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
                        "text": "Share Price ($)",
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        }
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
                }
            },
            "grid": {
                "visible": true,
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "visible": false
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "yMajorMajor",
                    "transparency": 80,
                    "color": ["0x323232FF", "0x070707FF"]
                }
            },
            "drawEntities": ["axis", "grid", "columnChart"],
            "columnChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "bar": {
                    "fillType": ["gradient"],
                    "gradientType": ["linearLeftToRight"],
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
                    "placement": "above",
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
/*
 var chartInfoTable = k_dv_dataviz_columnchart_demo_1();
 var konyDVWidget = new kony.ui.Chart2D3D({
 "id": "chartWidget",
 "isVisible": true
 }, {
 "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
 "vExpand": true,
 "hExpand": true,
 "margin": [0, 0, 0, 0],
 "padding": [0, 0, 0, 0],
 "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
 "marginInPixel": true,
 "paddingInPixel": true,
 "containerWeight": 100
 }, chartInfoTable);
 */
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function k_dv_dataviz_columnchart_demo_2() {
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
                        "text": "Share Price ($)",
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        }
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
                }
            },
            "grid": {
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "visible": false
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "yMajorMajor",
                    "transparency": 80,
                    "color": ["0x323232FF", "0x070707FF"]
                }
            },
            "drawEntities": ["axis", "grid", "columnChart"],
            "columnChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "stacked",
                "bar": {
                    "fillType": ["gradient"],
                    "gradientType": ["linearLeftToRight"],
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
function k_dv_dataviz_columnchart_demo_3() {
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
                    "color": ["0xffffffff"],
                    "transparency": [40]
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
                        "text": "Share Price (%)",
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        }
                    },
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
                }
            },
            "grid": {
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "visible": false
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "yMajorMajor",
                    "transparency": 80,
                    "color": ["0x323232FF", "0x070707FF"]
                }
            },
            "drawEntities": ["axis", "grid", "columnChart"],
            "columnChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "percentStacked",
                "bar": {
                    "fillType": ["gradient"],
                    "gradientType": ["linearLeftToRight"],
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
function k_dv_dataviz_columnchart_demo_4() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "layers": ["layer3", "layer2", "layer1"],
            "sharedLayerMode": true,
            "layer1": {
                "title": {
                    "text": "No of ODI's Won Vs Country between 2001-2012",
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
                        "labels": {
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"]
                            }
                        }
                    },
                    "yAxis": {
                        "scale": {
                            "minValue": 0,
                            "maxValue": 150,
                            "majorInterval": 15
                        }
                    }
                },
                "drawEntities": ["axis", "columnChart"],
                "columnChart": {
                    "columnId": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "bar": {
                        "fillType": ["gradient"],
                        "gradientType": ["linearLeftToRight"],
                        "gradientRatios": [
                            [0, 50, 100]
                        ],
                        "color": [
                            [
                                ["0x76a326ff", "0xddff80ff", "0x76a326ff"]
                            ]
                        ]
                    },
                    "dataLabels": {
                        "indicators": ["columnName"],
                        "placement": "above",
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
                    "containerWt": 10
                },
                "dataSetMapping": {
                    "setId": "dataset2",
                    "eventsSetId": "eventsMap2"
                },
                "axis": {
                    "visible": false,
                    "xAxis": {
                        "labels": {
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["Bold"],
                                "color": ["0xaaaaaaff"]
                            }
                        }
                    },
                    "yAxis": {
                        "scale": {
                            "minValue": 0,
                            "maxValue": 150,
                            "majorInterval": 15
                        }
                    }
                },
                "drawEntities": ["axis", "columnChart"],
                "columnChart": {
                    "columnId": [0, 1, 2, 3],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "bar": {
                        "fillType": ["gradient"],
                        "gradientType": ["linearLeftToRight"],
                        "gradientRatios": [
                            [0, 50, 100]
                        ],
                        "color": [
                            [
                                ["0xd9b534ff", "0xffdb80ff", "0xd9b534ff"]
                            ]
                        ]
                    },
                    "dataLabels": {
                        "indicators": ["columnName"],
                        "placement": "above",
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
                    "containerWt": 10
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
                    }
                },
                "grid": {
                    "type": ["yAxisMajorGrid"],
                    "yAxisMajorGrid": {
                        "visible": false
                    },
                    "background": {
                        "fillType": "alternateColor",
                        "alternateColorPattern": "yMajorMajor",
                        "transparency": 80,
                        "color": ["0x323232FF", "0x070707FF"]
                    }
                },
                "drawEntities": ["axis", "grid", "columnChart"],
                "columnChart": {
                    "animations": {
                        "onInitAnimation": true
                    },
                    "bar": {
                        "fillType": ["gradient"],
                        "gradientType": ["linearLeftToRight"],
                        "gradientRatios": [
                            [0, 50, 100]
                        ],
                        "color": [
                            ["0xce7a24ff", "0xffb980ff", "0xce7a24ff"]
                        ]
                    },
                    "dataLabels": {
                        "indicators": ["columnName"],
                        "placement": "above",
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
                    "values": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
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
                    "09": [30, 90, 70],
                    "10": [70, 50, 90],
                    "11": [60, 95, 30],
                    "12": [85, 80, 90]
                }
            },
            "dataset2": {
                "rowNames": {
                    "type": "string",
                    "values": ["IND", "AUS", "SA"]
                },
                "columnNames": {
                    "type": "string",
                    "values": ["01-03", "04-06", "07-09", "10-12"]
                },
                "data": {
                    "01-03": [100, 110, 110],
                    "04-06": [110, 105, 115],
                    "07-09": [120, 110, 100],
                    "10-12": [100, 105, 110]
                }
            },
            "dataset3": {
                "rowNames": {
                    "type": "string",
                    "values": ["IND", "AUS", "SA"]
                },
                "columnNames": {
                    "type": "string",
                    "values": ["01-12"]
                },
                "data": {
                    "01-12": [130, 120, 130]
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
                        "visible": true,
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
                        "indicators": ["rowName", "columnName", "numberValue"],
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
function k_dv_dataviz_columnchart_demo_5() {
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
                        "text": "Bill Amount ($)",
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"]
                        }
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
                }
            },
            "grid": {
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "visible": false
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "yMajorMajor",
                    "transparency": 80,
                    "color": ["0x323232FF", "0x070707FF"]
                }
            },
            "drawEntities": ["axis", "grid", "columnChart"],
            "columnChart": {
                "animations": {
                    "onInitAnimation": true
                },
                "bar": {
                    "fillType": ["gradient"],
                    "gradientType": ["linearLeftToRight"],
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
                    "placement": "above",
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
var k_dv_dataviz_columnchart_demo_6 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": true,
            "title": {
                "text": "Sales Distribution in States: Scroll, PichToZoom and onTouch Indicators",
                "font": {
                    "size": [16],
                    "family": ["Helvetica"],
                    "style": ["bold"],
                    "color": ["0x000000FF"]
                },
                "alignment": "right",
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
                        "visible": false,
                        "crossOtherAxisAt": "start"
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
                        "maxValue": 110,
                        "majorInterval": 10
                    },
                    "axisLine": {
                        "crossOtherAxisAt": "start",
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
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0x00000ff"]
                            }
                        },
                        "minor": {
                            "line": {
                                "color": ["0x00000ff"]
                            }
                        }
                    }
                }
            },
            "grid": {
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "visible": false
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "yMajorMajor",
                    "color": ["0xE9E9E9FF", "0xDEE0E5FF"]
                }
            },
            "drawEntities": ["axis", "grid", "columnChart"],
            "columnChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "bar": {
                    "fillType": ["gradient"],
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
                        "color": ["0xFFFFFFFF"],
                        "transparency": [20]
                    }
                },
                "dataLabels": {
                    "font": {
                        "size": [10],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0x000000FF"],
                        "transparency": [30]
                    }
                }
            }
        },
        "chartData": {
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
k_dv_dataviz_columnchart_demo_7 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Team Win Analysis: PichToZoom and onTouch Indicators",
                "font": {
                    "size": [16],
                    "family": ["Helvetica"],
                    "style": ["bold"],
                    "color": ["0x000000FF"],
                    "transparency": [10]
                },
                "alignment": "right",
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
                        "maxValue": 110,
                        "majorInterval": 10
                    },
                    "axisLine": {
                        "crossOtherAxisAt": "start",
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
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0x00000ff"]
                            }
                        },
                        "minor": {
                            "line": {
                                "color": ["0x00000ff"]
                            }
                        }
                    }
                }
            },
            "grid": {
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "visible": false,
                    "line": {
                        "color": ["0xaaaaaaff"]
                     }
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "yMajorMajor",
                    "color": ["0xE9E9E9FF", "0xDEE0E5FF"]
                }
            },
            "drawEntities": ["axis", "grid", "columnChart"],
            "columnChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "stacked",
                "bar": {
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
                        "color": ["0xFFFFFFFF"],
                        "transparency": [20]
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
k_dv_dataviz_columnchart_demo_8 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "EPS Drivers",
                "font": {
                    "size": [18],
                    "family": ["Helvetica"],
                    "style": ["bold"],
                    "color": ["0xFFFFFFFF"]
                },
                "containerWt": 10,
                "background": {
                    "fillType": "gradient",
                    "color": ["0x39393BFF", "0x000000FF"]
                }
            },
            "legend": {
                "indicators": ["marker", "textLabel"],
                "marker": {
                    "type": "colorBox",
                    "color": ["0x97A855FF", "0x675794FF", "0x945695FF", "0x568E98FF", "0x55995EFF", "0xF3BD40FF", "0xEF742BFF", "0x3BC7C3FF"]
                },
                "textLabel": {
                    "text": ["Other1", "Other2", "Share", "Taxes", "Net Interest", "Equity Income", "Operating Margins", "Net Revenue"],
                    "color": ["0xFFFFFFFF"],
                    "margin": [5, 5, 0, 0]
                },
                "font": {
                    "size": [12],
                    "family": ["Verdana"],
                    "style": ["bold"],
                    "color": ["0xFFFFFFFF"]
                },
                "position": "right",
                "alignment": "middle",
                "layout": "vertical",
                "containerWt": 30
            },
            "layerArea": {
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
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["bold"],
                            "color": ["0xFFFFFFFF"]
                        }
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0xFFFFFFFF"]
                            }
                        },
                        "minor": {
                            "line": {
                                "color": ["0xFFFFFFFF"]
                            }
                        }
                    }
                }
            },
            "drawEntities": ["axis", "columnChart"],
            "columnChart": {
                "columnId": [0, 1, 2, 3, 4, 5, 6, 7],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "stacked",
                "plotMissingValues": "assumeZero",
                "bar": {
                    "gradientRatios": [
                        [0, 20, 50, 100]
                    ],
                    "color": [
                        ["0x97A855FF"],
                        ["0x675794FF"],
                        ["0x945695FF"],
                        ["0x568E98FF"],
                        ["0x55995EFF"],
                        ["0xF3BD40FF"],
                        ["0xEF742BFF"],
                        ["0x3BC7C3FF"]
                    ]
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            "columnNames": {
                "values": ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9"]
            },
            "data": {
                "C1": [551, 453, 567, 67, 79, 563, 789, 888, 234, 627, 328, 123],
                "C2": [451, 253, 597, 967, 629, 363, 989, 388, 283, 427, 628, 323],
                "C3": [891, 893, 457, 567, 379, 893, 349, 488, 894, 457, 458, 423],
                "C4": [551, 453, 567, 67, 79, 563, 789, 888, 234, 627, 328, 123],
                "C5": [451, 253, 597, 967, 629, 363, 989, 388, 283, 427, 628, 323],
                "C6": [891, 893, 457, 567, 379, 893, 349, 488, 894, 457, 458, 423],
                "C7": [551, 453, 567, 67, 79, 563, 789, 888, 234, 627, 328, 123],
                "C8": [451, 253, 597, 967, 629, 363, 989, 388, 283, 427, 628, 323],
                "C9": [891, 893, 457, 567, 379, 893, 349, 488, 894, 457, 458, 423]
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
k_dv_dataviz_columnchart_demo_9 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "BILL HISTORY",
                "font": {
                    "size": [20],
                    "family": ["Helvetica"],
                    "style": ["normal"],
                    "color": ["0x466e92ff"]
                },
                "alignment": "left",
                "containerWt": 10,
                "margin": [5, 0, 0, 0]
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "color": ["0xEAEAEAff"]
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
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x393939ff"]
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
                        "minValue": 0,
                        "maxValue": 1000,
                        "majorInterval": 50
                    },
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x393939ff"]
                        }
                    }
                }
            },
            "grid": {
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "visible": true,
                    "line": {
                        "color": ["0xc7c7c7ff"]
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
                    "transparency": [10],
                    "color": ["0x64b2e8ff"]
                },
                "border": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "dataLabels": {
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0x000000FF"],
                        "transparency": [30]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Nov 12", "Dec 12", "Jan 13", "Feb 13", "Mar 13", "Apr 13", "May 13", "Jun 13"]
            },
            "columnNames": {
                "values": ["c1"]
            },
            "data": {
                "c1": [500, 700, 350, 400, 650, 800, 750, 950]
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
                            "color": ["0xffffffff"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0x151a29ff"],
                            "width": [2]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0x192c56ff"]
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
k_dv_dataviz_columnchart_demo_10 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Sales Dashboard",
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
                    "color": ["0x962c0aff", "0x157015ff", "0x868715ff"]
                },
                "textLabel": {
                    "text": ["Net Revenue", "Operating Margins", "Discounts"],
                    "color": ["0x000000FF", "0x000000FF", "0x000000FF"],
                    "margin": [5, 5, 0, 0]
                },
                "font": {
                    "size": [12],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xFFFFFFFF"],
                    "transparency": [40]
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
                    "color": ["0xF4F5F7FF", "0xF4F5F7FF"]
                }
            },
            "axis": {
                "xAxis": {
                    "title": {
                        "visible": false,
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "axisLine": {
                        "crossOtherAxisAt": "start",
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
                            "color": ["0x00000ff"]
                        }
                    },
                    "scale": {
                        "minValue": 0,
                        "maxValue": 2400,
                        "majorInterval": 300
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
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0x00000ff"]
                            }
                        },
                        "minor": {
                            "line": {
                                "color": ["0x00000ff"]
                            }
                        }
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "yAxisMajorGrid"],
                "xAxisMajorGrid": {
                    "line": {
                        "color": ["0x000000ff"],
                        "transparency": [50]
                    }
                },
                "yAxisMajorGrid": {
                    "line": {
                        "color": ["0xaaaaaaff"],
                        "transparency": [50]
                    }
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "yMajorMajor",
                    "color": ["0xffffffff", "0xf2f2f2ff"]
                }
            },
            "drawEntities": ["axis", "grid", "columnChart"],
            "columnChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "stacked",
                "plotMissingValues": "assumeZero",
                "bar": {
                    "fillType": ["gradient"],
                    "transparency": [20],
                    "gradientRatios": [
                        [0, 20, 50, 100]
                    ],
                    "color": [
                        [
                            ["0xe06841ff", "0x962c0aff"]
                        ],
                        [
                            ["0x48c948ff", "0x157015ff"]
                        ],
                        [
                            ["0xcccd43ff", "0x868715ff"]
                        ]
                    ]
                },
                "border": {
                    "line": {
                        "color": ["0x962c0aff", "0x157015ff", "0x868715ff"],
                        "transparency": [40]
                    }
                },
                "dataLabels": {
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0x000000FF"],
                        "transparency": [30]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
        		"values": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            "columnNames": {
                "values": ["C1", "C2", "C3"]
            },
            "data": {
                "C1": [551, 453, 567, 67, 79, 563, 789, 888, 234, 627, 328, 123],
                "C2": [451, 253, 597, 967, 629, 363, 989, 388, 283, 427, 628, 323],
                "C3": [891, 893, 457, 567, 379, 893, 349, 488, 894, 457, 458, 423]
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
                        "separator": "newLine",
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
k_dv_dataviz_columnchart_demo_11 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Sales Cube Analytics",
                "font": {
                    "size": [20],
                    "family": ["Helvetica"],
                    "style": ["normal"],
                    "color": ["0xf7f7f7ff"]
                },
                "containerWt": 10,
                "background": {
                    "fillType": "gradient",
                    "color": ["0x505050ff", "0x040404ff"]
                }
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "color": ["0x222222ff"]
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
                        "visible": false,
                        "crossOtherAxisAt": "start"
                    },
                    "labels": {
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x4a4a4aff"]
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
                            "color": ["0x4a4a4aff"]
                        }
                    }
                }
            },
            "grid": {
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "visible": true,
                    "line": {
                        "color": ["0x4a4a4aff"]
                    }
                },
                "background": {
                    "alternateColorPattern": "yMajorMajor",
                    "color": ["0x222222ff"]
                }
            },
            "drawEntities": ["axis", "grid", "columnChart"],
            "columnChart": {
                "columnId": [0, 1, 2, 3],
                "animations": {
                    "onInitAnimation": true
                },
                "bar": {
                    "fillType": ["gradient"],
                    "transparency": [20],
                    "gradientRatios": [
                        [0, 20, 50, 100]
                    ],
                    "color": [
                        [
                            ["0x0194ffff", "0x0c1eaaff"]
                        ],
                        [
                            ["0x0592ffff", "0x081eaaff"]
                        ],
                        [
                            ["0x0c91fdff", "0x0c1da8ff"]
                        ],
                        [
                            ["0x0c91ffff", "0x081ea9ff"]
                        ]
                    ]
                },
                "dataLabels": {
                    "font": {
                        "size": [10],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0x000000FF"],
                        "transparency": [30]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["2008-02-19", "2008-05-20", "2008-08-19", "2008-11-18", "2008-11-15"]
            },
            "columnNames": {
                "values": ["c1", "c2", "c3", "c4"]
            },
            "data": {
                "c1": [1000, 12000, 25000, 30000, 6780],
                "c2": [21000, 14000, 15000, 13000, 5600],
                "c3": [25000, 14000, 16000, 16400, 4500],
                "c4": [22000, 23000, 24000, 12300, 14560]
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
                            "color": ["0xFFFFFFFF"],
                            "transparency": [20]
                        }
                    },
                    "dataLabels": {
                        "indicators": ["columnName", "rowName", "numberValue"],
                        "separator": "newLine",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xFFFFFFff"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0xFFFFFFff"]
                        }
                    },
                    "background": {
                        "transparency": 20,
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
k_dv_dataviz_columnchart_demo_12 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "SALES TREND",
                "font": {
                    "size": [18],
                    "family": ["Helvetica"],
                    "style": ["bold"],
                    "color": ["0xFFFFFFFF"],
                    "transparency": [40]
                },
                "containerWt": 10,
                "background": {
                    "fillType": "gradient",
                    "color": ["0x39393BFF", "0x000000FF"]
                }
            },
            "legend": {
                "indicators": ["marker", "textLabel"],
                "marker": {
                    "type": "colorBox",
                    "color": ["0x7142ABFF", "0x91D064FF"]
                },
                "textLabel": {
                    "text": ["Volume %", "Value %"],
                    "color": ["0xFFFFFFFF", "0xFFFFFFFF"],
                    "margin": [5, 5, 0, 0]
                },
                "font": {
                    "size": [12],
                    "family": ["Verdana"],
                    "style": ["bold"],
                    "color": ["0xFFFFFFFF"],
                    "transparency": [40]
                },
                "position": "bottom",
                "alignment": "center",
                "layout": "horizantal",
                "containerWt": 8,
                "margin": [10, 10, 10, 10]
            },
            "layerArea": {
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
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "margin": [30, 0, 0, 0],
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["bold"],
                            "color": ["0xFFFFFFFF"],
                            "transparency": [40]
                        }
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0xFFFFFFFF"]
                            }
                        },
                        "minor": {
                            "position": "outer",
                            "line": {
                                "color": ["0xFFFFFFFF"]
                            }
                        }
                    }
                }
            },
            "drawEntities": ["axis", "columnChart"],
            "columnChart": {
                "columnId": [0, 1],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "stacked",
                "plotMissingValues": "assumeZero",
                "bar": {
                    "color": [
                        ["0x7142ABFF"],
                        ["0x91D064FF"]
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
        },
        "chartData": {
            "rowNames": {
                "values": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            "columnNames": {
                "values": ["C1", "C2"]
            },
            "data": {
                "C1": [551, 453, 567, 67, 79, 563, 789, 888, 234, 627, 328, 123],
                "C2": [451, 253, 597, 967, 629, 363, 989, 388, 283, 427, 628, 323]
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
                        "separator": "newLine",
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
k_dv_dataviz_columnchart_demo_13 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Volume Growth by Operating Group",
                "font": {
                    "size": [18],
                    "family": ["Helvetica"],
                    "style": ["normal"],
                    "color": ["0xFFFFFFFF"],
                    "transparency": [40]
                },
                "containerWt": 10,
                "background": {
                    "fillType": "gradient",
                    "color": ["0x39393BFF", "0x000000FF"]
                }
            },
            "legend": {
                "indicators": ["marker", "textLabel"],
                "marker": {
                    "type": "colorBox",
                    "color": ["0xB8FEFBFF", "0x91D064FF"]
                },
                "textLabel": {
                    "text": ["IC", "FC"],
                    "color": ["0xFFFFFFFF", "0xFFFFFFFF"],
                    "margin": [5, 5, 0, 0]
                },
                "font": {
                    "size": [12],
                    "family": ["Verdana"],
                    "style": ["bold"],
                    "color": ["0xFFFFFFFF"],
                    "transparency": [40]
                },
                "position": "bottom",
                "alignment": "center",
                "layout": "horizantal",
                "containerWt": 8,
                "margin": [10, 10, 10, 10]
            },
            "layerArea": {
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
                        "placement": "oppositeAxis",
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
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "margin": [30, 0, 0, 0],
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["bold"],
                            "color": ["0xFFFFFFFF"]
                        }
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0xFFFFFFFF"]
                            }
                        },
                        "minor": {
                            "line": {
                                "color": ["0xFFFFFFFF"]
                            }
                        }
                    }
                }
            },
            "drawEntities": ["axis", "columnChart"],
            "columnChart": {
                "columnId": [0, 1],
                "animations": {
                    "onInitAnimation": true
                },
                "plotMissingValues": "assumeZero",
                "bar": {
                    "color": [
                        ["0xB8FEFBFF"],
                        ["0x91D064FF"]
                    ]
                },
                "dataLabels": {
                    "indicators": ["percentValue"],
                    "placement": "above",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["bold"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [20]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
               "values": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            "columnNames": {
                "values": ["C1", "C2"]
            },
            "data": {
                "C1": [551, 453, 567, 67, 79, 563, 689, 688, 234, 627, 328, 123],
                "C2": [451, -253, -597, -667, 629, -363, 689, 388, 283, 427, 628, 323]
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
                        "fillType": "color",
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
k_dv_dataviz_columnchart_demo_14 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "2007 - YTD 2011",
                "font": {
                    "size": [18],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xFFFFFFFF"],
                    "transparency": [40]
                },
                "containerWt": 10,
                "background": {
                    "fillType": "gradient",
                    "color": ["0x39393BFF", "0x000000FF"]
                }
            },
            "layerArea": {
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
                        "margin": [0, 0, 30, 0],
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
                        "margin": [30, 0, 0, 0],
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xaaaaaaff"]
                        }
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
                    "color": ["0x00B2A9FF"]
                },
                "dataLabels": {
                    "indicators": ["percentValue"],
                    "placement": "above",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["bold"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [20]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
               "values": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            "columnNames": {
                "values": ["C1"]
            },
            "data": {
                "C1": [551, -453, -567, -67, 79, -563, 789, 888, 234, 627, 328, 123]
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
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_columnchart_demo_15 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "VOLUME GROWTH RATES %",
                "font": {
                    "size": [18],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0xFFFFFFFF"],
                    "transparency": [40]
                },
                "alignment": "left",
                "containerWt": 10,
                "background": {
                    "fillType": "gradient",
                    "color": ["0x39393BFF", "0x000000FF"]
                }
            },
            "layerArea": {
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
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "visible": false,
                        "margin": [30, 0, 0, 0],
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xaaaaaaff"]
                        }
                    }
                }
            },
            "drawEntities": ["axis", "columnChart"],
            "columnChart": {
                "columnId": [0],
                "animations": {
                    "onInitAnimation": true
                },
                "plotMissingValues": "assumeZero",
                "bar": {
                    "color": ["0x323232FF", "0x555555FF", "0x888888FF", "0xFBB74DFF", "0x323232FF"]
                },
                "dataLabels": {
                    "indicators": ["percentValue"],
                    "placement": "above",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["bold"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [20]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["2001", "2002", "2003", "2004", "2005","2006", "2007", "2008", "2009", "2010","2011", "2012"]
            },
            "columnNames": {
                "values": ["C1"]
            },
            "data": {
                "C1": [551, 453, 567, 677, 789, 563, 789, 888, 234, 627, 328, 123]
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
k_dv_dataviz_columnchart_demo_16 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": true,
            "title": {
                "text": "Account Balance: Scrolling, PinchToZoom, Crosshair",
                "font": {
                    "size": [14],
                    "family": ["Helvetica"],
                    "style": ["bold"],
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
                    "gradientRatios": [0, 50, 100],
                    "color": ["0x054486FF", "0x0599D3FF", "0x054486FF", "0x0599D3FF"]
                }
            },
            "axis": {
                "xAxis": {
                    "scale": {
                        "gap": 40,
                        "offset": {
                            "value": [150, 0],
                            "type": "pixels"
                        }
                    },
                    "axisLine": {
                        "visible": false,
                        "crossOtherAxisAt": "mid",
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "placement": "oppositeAxis",
                        "font": {
                            "size": [10],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xfefefeff"]
                        }
                    }
                },
                "yAxis": {
                    "scale": {
                        "minValue": -100,
                        "maxValue": 100,
                        "majorInterval": 25
                    },
                    "axisLine": {
                        "visible": false
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
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "line": {
                        "color": ["0x0d76afff"],
                        "transparency": [90]
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
                    "transparency": [30],
                    "gradientRatios": [
                        [0, 20, 50, 100]
                    ],
                    "color": [
                        ["0xaaaaaaff", "0xabc4dbff"],
                        ["0x2b9bd1ff", "0x2b639dff"],
                        ["0x2b9bd1ff", "0x2b639dff"],
                        ["0x2b9bd1ff", "0x2b639dff"],
                        ["0xaaaaaaff", "0xabc4dbff"],
                        ["0x2b9bd1ff", "0x2b639dff"],
                        ["0xaaaaaaff", "0xabc4dbff"],
                        ["0x2b9bd1ff", "0x2b639dff"],
                        ["0xaaaaaaff", "0xabc4dbff"],
                        ["0xaaaaaaff", "0xabc4dbff"],
                        ["0x37bbf2ff", "0x37b3f7ff"],
                        ["0x2b9bd1ff", "0x2b639dff"],
                        ["0x2b9bd1ff", "0x2b639dff"],
                        ["0xaaaaaaff", "0xabc4dbff"],
                        ["0x37bbf2ff", "0x37b3f7ff"],
                        ["0xaaaaaaff", "0xabc4dbff"],
                        ["0x2b9bd1ff", "0x2b639dff"],
                        ["0xaaaaaaff", "0xabc4dbff"],
                        ["0x2b9bd1ff", "0x2b639dff"],
                        ["0xaaaaaaff", "0xabc4dbff"],
                        ["0x2b9bd1ff", "0x2b639dff"],
                        ["0x2b9bd1ff", "0x2b639dff"],
                        ["0xaaaaaaff", "0xabc4dbff"],
                        ["0x2b9bd1ff", "0x2b639dff"],
                        ["0xaaaaaaff", "0xabc4dbff"],
                        ["0x2b9bd1ff", "0x2b639dff"],
                        ["0xaaaaaaff", "0xabc4dbff"],
                        ["0xaaaaaaff", "0xabc4dbff"],
                        ["0x37bbf2ff", "0x37b3f7ff"],
                        ["0x2b9bd1ff", "0x2b639dff"]
                    ]
                },
                "border": {
                    "line": {
                        "color": ["0xadc4d8ff"],
                        "transparency": [90]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
            },
            "columnNames": {
                "values": ["C1"]
            },
            "data": {
                "C1": [52, -53, 17, 97, 79, -63, -39, -54, 23, -34, 56, 68, 89, 64, 35, -78, -9, 64, -73, 34, 76, -43, 23, 79, 45, -84, -19, -25, 12, -34]
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
                            "transparency": [100]
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
k_dv_dataviz_columnchart_demo_17 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "visible": true,
                "text": "Iphone Sales, First 3 days",
                "font": {
                    "size": [20],
                    "family": ["Verdana"],
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
                    "color": ["0x070707ff", "0x323232FF"]
                }
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 100],
                    "color": ["0x070707ff", "0x323232FF"]
                }
            },
            "axis": {
                "visible": true,
                "type": ["xAxis", "yAxis"],
                "margin": [5, 5, 5, 5],
                "xAxis": {
                    "visible": true,
                    "title": {
                        "visible": true,
                        "text": "",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0x000000FF"],
                            "transparency": [0]
                        },
                        "alignment": "center",
                        "position": "outer",
                        "direction": "up",
                        "margin": [1, 1, 1, 1]
                    },
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
                        "value": 0,
                        "line": {
                            "color": ["0x000000FF"],
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
                        "markingReference": "atMinor",
                        "margin": [0, 0, 0, 0],
                        "orientationAngle": 0,
                        "format": {
                            "prefix": [""],
                            "suffix": [""]
                        },
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        }
                    }
                },
                "yAxis": {
                    "visible": true,
                    "title": {
                        "visible": true,
                        "text": "Millions Sold",
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        },
                        "alignment": "middle",
                        "position": "outer",
                        "direction": "up",
                        "margin": [0, 0, 0, 0]
                    },
                    "scale": {
                        "type": "linear",
                        "minValue": "auto",
                        "maxValue": "auto",
                        "majorInterval": "auto",
                        "minorInterval": "auto",
                        "offset": {
                            "value": [0, 0],
                            "type": "pixels"
                        }
                    },
                    "axisLine": {
                        "visible": false,
                        "crossOtherAxisAt": "start",
                        "value": 0,
                        "line": {
                            "color": ["0x000000FF"],
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
                        "margin": [0, 0, 0, 0],
                        "orientationAngle": 0,
                        "format": {
                            "prefix": [""],
                            "suffix": [""]
                        },
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        }
                    }
                }
            },
            "grid": {
                "visible": true,
                "type": ["yAxisMajorGrid", "yAxisMinorGrid"],
                "yAxisMajorGrid": {
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
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "yMajorMinor",
                    "transparency": 90,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0x323232FF", "0x070707FF"]
                }
            },
            "drawEntities": ["axis", "grid", "columnChart"],
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
                    "gradientType": ["linearTopToBottom"],
                    "gradientRatios": [
                        [0, 20, 21, 80, 81, 100]
                    ],
                    "color": [
                        ["0xFFFFFFff", "0xFFFFFFff", "0x000000ff", "0x000000ff", "0xFFFFFFff", "0xFFFFFFff"]
                    ],
                    "shape": "roundRectangle",
                    "cornerWidth": 15
                },
                "border": {
                    "visible": true,
                    "line": {
                        "color": ["0x000000FF"],
                        "width": [1],
                        "transparency": [0]
                    }
                },
                "dataLabels": {
                    "visible": true,
                    "indicators": ["numberValue"],
                    "separator": "space",
                    "placement": "above",
                    "orientationAngle": 0,
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xffffffff"],
                        "transparency": [0]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["2008", "2009", "2010", "2011", "2012"]
            },
            "columnNames": {
                "values": ["Millions Sold"]
            },
            "data": {
                "Millions Sold": [2, 2, 3, 4, 5]
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
                            "width": [1],
                            "transparency": [100]
                        }
                    },
                    "dataLabels": {
                        "visible": true,
                        "indicators": ["rowName", "numberValue"],
                        "separator": "space",
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000ff"],
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
                        "fillType": "gradient",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
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
k_dv_dataviz_columnchart_demo_18 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "LIFE EXPECTANCY AT BIRTH(2006-10)",
                "font": {
                    "size": [20],
                    "family": ["Helvetica"],
                    "style": ["normal"],
                    "color": ["0x000000FF"]
                },
                "alignment": "left",
                "containerWt": 10,
                "margin": [2, 0, 0, 0]
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "gradientRatios": [0, 30, 70, 100],
                    "color": ["0xbabec8FF", "0xecedf0FF", "0xecedf0FF", "0xadb1bcFF"]
                }
            },
            "legend": {
                "indicators": ["marker", "textLabel"],
                "marker": {
                    "type": "colorBox",
                    "color": ["0x4f7cdbff", "0x1c283eff", "0x9bbbc0ff"]
                },
                "textLabel": {
                    "text": ["Male", "Female", "Total"],
                    "color": ["0x000000FF", "0x000000FF", "0x000000FF"],
                    "margin": [5, 5, 0, 0]
                },
                "alignment": "right",
                "layout": "horizantal",
                "containerWt": 8
            },
            "axis": {
                "xAxis": {
                    "title": {
                        "text": "State",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000FF"]
                        }
                    },
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "orientationAngle":60,
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000FF"]
                        }
                    }
                },
                "yAxis": {
                    "title": {
                        "text": "Life Expectancy(Yrs)",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000FF"]
                        }
                    },
                    "scale": {
                        "minValue": 50,
                        "maxValue": 80,
                        "majorInterval": 10
                    },
                    "axisLine": {
                        "visible": false
                    },
                    "labels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x000000FF"]
                        }
                    }
                }
            },
            "grid": {
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "visible": true,
                    "line": {
                        "color": ["0xc7c7c7ff"]
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
                    "transparency": [10],
                    "color": [["0x4f7cdbff"], ["0x1c283eff"], ["0x9bbbc0ff"]],
                    "shape":"triangle"
                },
                "border": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "dataLabels": {
                    "placement":"above",
                    "orientationAngle":90,
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0x000000FF"],
                        "transparency": [30]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Andhra Pradesh", "Assam", "Bihar", "Gujarat", "Haryana", "Karnataka"]
            },
            "columnNames": {
                "values": ["Male", "Female", "Total"]
            },
            "data": {
                "Male":[63.5, 61.0, 65.5, 64.9, 67.0, 64.9],
                "Female":[68.2, 63.2, 66.2, 69.0, 69.5, 69.7],
                "Total": [65.8, 61.9, 65.8, 66.8, 67.0, 67.2]
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
                            "color": ["0xffffffff"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0x151a29ff"],
                            "width": [2]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "gradientRatios": [0, 20, 50, 100],
                        "color": ["0x192c56ff"]
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