function radialBarChartCatalouge() {
    
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_RadialBarChart.htm";
    
    this.pushDemo = function(demoName, demoObject){
    	this.demos.demoNames.push(demoName);
    	this.demos.demoObjects.push(demoObject);
    }
    
    this.pushDemo("Single Series/Normal", k_dv_dataviz_radialbarchartchart_2_demo_1);
    this.pushDemo("Multi Series/Clustered", k_dv_dataviz_radialbarchartchart_2_demo_2);
    this.pushDemo("Multi Series/Stacked", k_dv_dataviz_radialbarchartchart_2_demo_3);
    this.pushDemo("Major, Minor Interval Marks", k_dv_dataviz_radialbarchartchart_2_demo_4);
    this.pushDemo("End Angle As 180 Degrees", k_dv_dataviz_radialbarchartchart_2_demo_5);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function k_dv_dataviz_radialbarchartchart_2_demo_1() {
    var chartJSObj = {
        "chartProperties": {
            "chartHeight": 67,
            "drawEntities": ["radialBarChart"],

            "title": {
                "visible": true,
                "text": "Radial Bar chart single series and graphType as normal",
                "font": {
                    "size": [18],
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
                    "gradientRatios": [0, 100],
                    "color": ["0xF4F5F7FF", "0xAAAEB9FF"]
                }
            },
            
            
            "layerArea":
            {
                "background":
                {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 30, 70, 100],
                    "color": ["0xecedf0FF", "0xbabec8FF", "0xadb1bcFF", "0xecedf0FF"]
                }
            },
           
            
            "radialBarChart": {
                "radius": 90,
                "columnId": [0],
                "graphType": "normal",
                "background": {
                    "radius": 0,
                    "fillType": "gradient",
                    "color": ["0xefeffeff", "0xefeffeff"]
                },
                "dataLabels": {
                    "visible": true,
                    "indicators": ["numberValue"],
                    "placement": "inside",
                    "orientationAngle": -90,
                    "font": {
                        "color": ["0x000000ff"]
                    }
                },
                "bars": {
                    "width": 70,
                    "transparency": [0],
                    "fillType": ["gradient"],
                    "color": [
                        ["0x76a326ff", "0xddff80ff"],
                        ["0xd9b534ff", "0xffdb80ff"],
                        ["0xce7a24ff", "0xffb980ff"]
                    ],
                    "bgVisible": false,
                    "bgWidth": 100,
                    "bgFillType": ["color"],
                    "bgColor": ["0xccccffff"]
                },
                "axis": {
                    "circularAxis": {
                        "visible": true,
                        "radius": 100,
                        "maxValue": 70,
                        "endAngle": 270,
                        "majorIntervals": 10,
                        "minorIntervals": 6,
                        "intervalMarks": {
                            "visible": true,
                            "major": {
                                "visible": true,
                                "placement": "onAxis",
                                "line": {
                                    "width": [2],
                                    "color": ["0x000000ff"],
                                    "transparency": [30]
                                },
                                "labels": {
                                    "placement": "outsideAxis",
                                    "font": {
                                        "family": ["Verdana"],
                                        "size": [12]
                                    }
                                }
                            },
                            "minor": {
                                "visible": false
                            }
                        }
                    },
                    "radialAxis": {
                        "font": {
                            "family": ["Verdana"],
                            "size": [15]
                        }
                    }
                },
                "grid": {
                    "visible": true,
                    "circularGrid": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "color": ["0x000000ff"],
                            "transparency": [0]
                        }
                    },
                    "radialGrid": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "color": ["0x000000ff"],
                            "transparency": [30]
                        }
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Nov", "Dec", "Jan", "Feb", "Mar"]
            },
            "columnNames": {
                "values": ["Apple", "Microsoft", "Facebook"]
            },
            "data": {
                "Apple": [50, 70, 65],
                "Microsoft": [30, 20, 35],
                "Facebook": [40, 70, 55]
            }
        },
        "chartEvents": {
            "events": ["eventsMap1"],
            "eventsMap1": {
                "onTouch": {
                    "crossHair": null,
                    "dataLabels": {
                        "visible": true,
                        "indicators": ["rowName", "numberValue"],
                        "separator": "space",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        }
                    },
                    "border": {
                        "visible": true,
                        "roundedCorner": false,
                        "line": {
                            "color": ["0xffffffff"],
                            "width": [2],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "color",
                        "transparency": 30,
                        "color": ["0x000000ff"]
                    }
                }
            }
        }
    };
    return chartJSObj;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function k_dv_dataviz_radialbarchartchart_2_demo_2() {
    var chartJSObj = {
        "chartProperties": {
            "chartHeight": 67,
            "drawEntities": ["radialBarChart"],

            "title": {
                "visible": true,
                "text": "Radial Bar chart with multi series / clustered",
                "font": {
                    "size": [18],
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
                    "gradientRatios": [0, 100],
                    "color": ["0xF4F5F7FF", "0xAAAEB9FF"]
                }
            },
            
            
            "layerArea":
            {
                "background":
                {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 30, 70, 100],
                    "color": ["0xecedf0FF", "0xbabec8FF", "0xadb1bcFF", "0xecedf0FF"]
                }
            },
            
            "radialBarChart": {
                "radius": 90,
                "columnId": [0, 1, 2],
                "graphType": "normal",
                "dataLabels": {
                    "visible": true,
                    "indicators": ["numberValue"],
                    "placement": "inside",
                    "orientationAngle": -90,
                    "font": {
                        "color": ["0x000000ff"]
                    }
                },
                "bars": {
                    "width": 70,
                    "transparency": [
                        [0]
                    ],
                    "fillType": [
                        ["gradient"],
                        ["gradient"],
                        ["gradient"]
                    ],
                    "color": [
                        [
                            ["0x76a326ff", "0xddff80ff"]
                        ],
                        [
                            ["0xd9b534ff", "0xffdb80ff"]
                        ],
                        [
                            ["0xce7a24ff", "0xffb980ff"]
                        ]
                    ],
                    "bgVisible": false,
                    "bgWidth": 100,
                    "bgFillType": ["color"],
                    "bgColor": ["0xccccffff"]
                },
                "axis": {
                    "circularAxis": {
                        "visible": true,
                        "radius": 100,
                        "maxValue": 70,
                        "endAngle": 270,
                        "majorIntervals": 10,
                        "minorIntervals": 6,
                        "intervalMarks": {
                            "visible": true,
                            "major": {
                                "visible": true,
                                "placement": "onAxis",
                                "line": {
                                    "width": [2],
                                    "color": ["0x000000ff"],
                                    "transparency": [30]
                                },
                                "labels": {
                                    "placement": "outsideAxis",
                                    "font": {
                                        "family": ["Verdana"],
                                        "size": [12]
                                    }
                                }
                            },
                            "minor": {
                                "visible": false
                            }
                        }
                    },
                    "radialAxis": {
                        "font": {
                            "family": ["Verdana"],
                            "size": [15]
                        }
                    }
                },
                "grid": {
                    "visible": true,
                    "circularGrid": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "color": ["0x000000ff"],
                            "transparency": [0]
                        }
                    },
                    "radialGrid": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "color": ["0x000000ff"],
                            "transparency": [30]
                        }
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Nov", "Dec", "Jan", "Feb", "Mar"]
            },
            "columnNames": {
                "values": ["Apple", "Microsoft", "Facebook"]
            },
            "data": {
                "Apple": [50, 70, 65],
                "Microsoft": [30, 20, 35],
                "Facebook": [40, 70, 55]
            }
        },
        "chartEvents": {
            "events": ["eventsMap1"],
            "eventsMap1": {
                "onTouch": {
                    "crossHair": null,
                    "dataLabels": {
                        "visible": true,
                        "indicators": ["rowName", "numberValue"],
                        "separator": "space",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        }
                    },
                    "border": {
                        "visible": true,
                        "roundedCorner": false,
                        "line": {
                            "color": ["0xffffffff"],
                            "width": [2],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "color",
                        "transparency": 30,
                        "color": ["0x000000ff"]
                    }
                }
            }
        }
    };
    return chartJSObj;
};

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function k_dv_dataviz_radialbarchartchart_2_demo_3() {
    var chartJSObj = {
        "chartProperties": {
            "chartHeight": 67,
            "drawEntities": ["radialBarChart"],
            
            "title": {
                "visible": true,
                "text": "Radial bar chart with multi series and graphType as stacked",
                "font": {
                    "size": [18],
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
                    "gradientRatios": [0, 100],
                    "color": ["0xF4F5F7FF", "0xAAAEB9FF"]
                }
            },
            
            
            "layerArea":
            {
                "background":
                {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 30, 70, 100],
                    "color": ["0xecedf0FF", "0xbabec8FF", "0xadb1bcFF", "0xecedf0FF"]
                }
            },
            
            "radialBarChart": {
                "radius": 90,
                "columnId": [0, 1, 2],
                "graphType": "stacked",
                "dataLabels": {
                    "visible": true,
                    "indicators": ["numberValue"],
                    "placement": "inside",
                    "orientationAngle": -90,
                    "font": {
                        "color": ["0x000000ff"]
                    }
                },
                "bars": {
                    "width": 70,
                    "transparency": [
                        [0]
                    ],
                    "fillType": [
                        ["gradient"],
                        ["gradient"],
                        ["gradient"]
                    ],
                    "color": [
                        [
                            ["0x76a326ff", "0xddff80ff"]
                        ],
                        [
                            ["0xd9b534ff", "0xffdb80ff"]
                        ],
                        [
                            ["0xce7a24ff", "0xffb980ff"]
                        ]
                    ],
                    "bgVisible": false,
                    "bgWidth": 100,
                    "bgFillType": ["color"],
                    "bgColor": ["0xccccffff"]
                },
                "axis": {
                    "circularAxis": {
                        "visible": true,
                        "radius": 100,
                        "maxValue": 70,
                        "endAngle": 270,
                        "majorIntervals": 10,
                        "minorIntervals": 6,
                        "intervalMarks": {
                            "visible": true,
                            "major": {
                                "visible": true,
                                "placement": "onAxis",
                                "line": {
                                    "width": [2],
                                    "color": ["0x000000ff"],
                                    "transparency": [30]
                                },
                                "labels": {
                                    "placement": "outsideAxis",
                                    "font": {
                                        "family": ["Verdana"],
                                        "size": [12]
                                    }
                                }
                            },
                            "minor": {
                                "visible": false
                            }
                        }
                    },
                    "radialAxis": {
                        "font": {
                            "family": ["Verdana"],
                            "size": [15]
                        }
                    }
                },
                "grid": {
                    "visible": true,
                    "circularGrid": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "color": ["0x000000ff"],
                            "transparency": [0]
                        }
                    },
                    "radialGrid": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "color": ["0x000000ff"],
                            "transparency": [30]
                        }
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Nov", "Dec", "Jan", "Feb", "Mar"]
            },
            "columnNames": {
                "values": ["Apple", "Microsoft", "Facebook"]
            },
            "data": {
                "Apple": [50, 70, 65],
                "Microsoft": [30, 20, 35],
                "Facebook": [40, 70, 55]
            }
        },
        "chartEvents": {
            "events": ["eventsMap1"],
            "eventsMap1": {
                "onTouch": {
                    "crossHair": null,
                    "dataLabels": {
                        "visible": true,
                        "indicators": ["rowName", "numberValue"],
                        "separator": "space",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        }
                    },
                    "border": {
                        "visible": true,
                        "roundedCorner": false,
                        "line": {
                            "color": ["0xffffffff"],
                            "width": [2],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "color",
                        "transparency": 30,
                        "color": ["0x000000ff"]
                    }
                }
            }
        }
    };
    return chartJSObj;
};

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function k_dv_dataviz_radialbarchartchart_2_demo_4() {
    var chartJSObj = {
        "chartProperties": {
            "chartHeight": 67,
            "drawEntities": ["radialBarChart"],
            
            "title": {
                "visible": true,
                "text": "Radial Bar chart with major, minor interval marks and labels",
                "font": {
                    "size": [18],
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
                    "gradientRatios": [0, 100],
                    "color": ["0xF4F5F7FF", "0xAAAEB9FF"]
                }
            },
            
            
            "layerArea":
            {
                "background":
                {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 30, 70, 100],
                    "color": ["0xecedf0FF", "0xbabec8FF", "0xadb1bcFF", "0xecedf0FF"]
                }
            },
            
            "radialBarChart": {
                "radius": 80,
                "columnId": [0],
                "graphType": "normal",
                "dataLabels": {
                    "visible": true,
                    "indicators": ["numberValue"],
                    "placement": "inside",
                    "orientationAngle": -90,
                    "font": {
                        "color": ["0x000000ff"]
                    }
                },
                "bars": {
                    "width": 70,
                    "transparency": [0],
                    "fillType": ["gradient"],
                    "color": [
                        ["0x76a326ff", "0xddff80ff"],
                        ["0xd9b534ff", "0xffdb80ff"],
                        ["0xce7a24ff", "0xffb980ff"]
                    ],
                    "bgVisible": false,
                    "bgWidth": 100,
                    "bgFillType": ["color"],
                    "bgColor": ["0xccccffff"]
                },
                "axis": {
                    "circularAxis": {
                        "visible": true,
                        "radius": 100,
                        "maxValue": 70,
                        "endAngle": 270,
                        "majorIntervals": 7,
                        "minorIntervals": 3,
                        "intervalMarks": {
                            "visible": true,
                            "major": {
                                "visible": true,
                                "placement": "outsideAxis",
                                "length": 4,
                                "line": {
                                    "width": [3],
                                    "color": ["0xff3333ff"],
                                    "transparency": [0]
                                },
                                "labels": {
                                    "visible": true,
                                    "placement": "outsideAxis",
                                    "gap": 3,
                                    "orientationAngle": 0,
                                    "font": {
                                        "family": ["Verdana"],
                                        "style": ["bold"],
                                        "size": [14],
                                        "transparency": [0],
                                        "color": ["0x0000ffff"]
                                    }
                                }
                            },
                            "minor": {
                                "visible": true,
                                "placement": "outsideAxis",
                                "length": 2,
                                "line": {
                                    "width": [1],
                                    "color": ["0x555555ff"],
                                    "transparency": [0]
                                },
                                "labels": {
                                    "visible": true,
                                    "placement": "outsideAxis",
                                    "gap": 2,
                                    "orientationAngle": 0,
                                    "font": {
                                        "family": ["Verdana"],
                                        "style": ["normal"],
                                        "size": [8],
                                        "transparency": [0],
                                        "color": ["0x000000ff"]
                                    }
                                }
                            }
                        }
                    }
                },
                "grid": {
                    "visible": true,
                    "circularGrid": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "color": ["0x000000ff"],
                            "transparency": [0]
                        }
                    },
                    "radialGrid": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "color": ["0x000000ff"],
                            "transparency": [30]
                        }
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Nov", "Dec", "Jan", "Feb", "Mar"]
            },
            "columnNames": {
                "values": ["Apple", "Microsoft", "Facebook"]
            },
            "data": {
                "Apple": [50, 70, 65]
            }
        },
        "chartEvents": {
            "events": ["eventsMap1"],
            "eventsMap1": {
                "onTouch": {
                    "crossHair": null,
                    "dataLabels": {
                        "visible": true,
                        "indicators": ["rowName", "numberValue"],
                        "separator": "space",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        }
                    },
                    "border": {
                        "visible": true,
                        "roundedCorner": false,
                        "line": {
                            "color": ["0xffffffff"],
                            "width": [2],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "color",
                        "transparency": 30,
                        "color": ["0x000000ff"]
                    }
                }
            }
        }
    };
    return chartJSObj;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function k_dv_dataviz_radialbarchartchart_2_demo_5() {
    var chartJSObj = {
        "chartProperties": {
            "chartHeight": 67,
            "drawEntities": ["radialBarChart"],

            "title": {
                "visible": true,
                "text": "Radial Bar chart - endAngle as 180 degrees",
                "font": {
                    "size": [18],
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
                    "gradientRatios": [0, 100],
                    "color": ["0xF4F5F7FF", "0xAAAEB9FF"]
                }
            },
            
            
            "layerArea":
            {
                "background":
                {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 30, 70, 100],
                    "color": ["0xecedf0FF", "0xbabec8FF", "0xadb1bcFF", "0xecedf0FF"]
                }
            },
            
            "radialBarChart": {
                "radius": 80,
                "columnId": [0],
                "graphType": "normal",
                "dataLabels": {
                    "visible": true,
                    "indicators": ["numberValue"],
                    "placement": "inside",
                    "orientationAngle": -90,
                    "font": {
                        "color": ["0x000000ff"]
                    }
                },
                "bars": {
                    "width": 70,
                    "transparency": [0],
                    "fillType": ["gradient"],
                    "color": [
                        ["0x76a326ff", "0xddff80ff"],
                        ["0xd9b534ff", "0xffdb80ff"],
                        ["0xce7a24ff", "0xffb980ff"]
                    ],
                    "bgVisible": false,
                    "bgWidth": 100,
                    "bgFillType": ["color"],
                    "bgColor": ["0xccccffff"]
                },
                "axis": {
                    "circularAxis": {
                        "visible": true,
                        "radius": 100,
                        "maxValue": 70,
                        "endAngle": 180,
                        "majorIntervals": 7,
                        "minorIntervals": 3,
                        "intervalMarks": {
                            "visible": true,
                            "major": {
                                "visible": true,
                                "placement": "outsideAxis",
                                "length": 4,
                                "line": {
                                    "width": [3],
                                    "color": ["0xff3333ff"],
                                    "transparency": [0]
                                },
                                "labels": {
                                    "visible": true,
                                    "placement": "outsideAxis",
                                    "gap": 3,
                                    "orientationAngle": 0,
                                    "font": {
                                        "family": ["Verdana"],
                                        "style": ["bold"],
                                        "size": [14],
                                        "transparency": [0],
                                        "color": ["0x0000ffff"]
                                    }
                                }
                            },
                            "minor": {
                                "visible": false
                            }
                        }
                    }
                },
                "grid": {
                    "visible": true,
                    "circularGrid": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "color": ["0x000000ff"],
                            "transparency": [0]
                        }
                    },
                    "radialGrid": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "color": ["0x000000ff"],
                            "transparency": [30]
                        }
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Nov", "Dec", "Jan", "Feb", "Mar"]
            },
            "columnNames": {
                "values": ["Apple", "Microsoft", "Facebook"]
            },
            "data": {
                "Apple": [50, 70, 65]
            }
        },
                "chartEvents": {
            "events": ["eventsMap1"],
            "eventsMap1": {
                "onTouch": {
                    "crossHair": null,
                    "dataLabels": {
                        "visible": true,
                        "indicators": ["rowName", "numberValue"],
                        "separator": "space",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xffffffff"],
                            "transparency": [0]
                        }
                    },
                    "border": {
                        "visible": true,
                        "roundedCorner": false,
                        "line": {
                            "color": ["0xffffffff"],
                            "width": [2],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "color",
                        "transparency": 30,
                        "color": ["0x000000ff"]
                    }
                }
            }
        }
    };
    return chartJSObj;
};




