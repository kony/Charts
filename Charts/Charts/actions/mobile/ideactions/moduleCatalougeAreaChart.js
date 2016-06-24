
function areaChartCatalouge() {
    
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_areachart.htm";
    
    this.pushDemo = function(demoName, demoObject){
    	this.demos.demoNames.push(demoName);
    	this.demos.demoObjects.push(demoObject);
    }
    
    this.pushDemo("Multi Series/Stacked", k_dv_dataviz_areachart_demo_sample_1);
    this.pushDemo("Multi Series/Clustered", k_dv_dataviz_areachart_demo_sample_2);
    this.pushDemo("Single Series-Brown Theme", k_dv_dataviz_areachart_demo_sample_3);
    this.pushDemo("Single Series-Blue Theme", k_dv_dataviz_areachart_demo_sample_4);
    this.pushDemo("Multi Series/Clustered", k_dv_dataviz_areachart_demo_sample_5);
    this.pushDemo("Range Area", k_dv_dataviz_areachart_demo_sample_6);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
var k_dv_dataviz_areachart_demo_sample_1 = function() {
        var chartInfo = {
            "chartProperties": {
                "chartHeight": 67,
                "enableScrolling": true,
                "position": [0, 0, 100, 100],
                "title": {
                    "visible": true,
                    "text": "Energy Consumption: MultiSeries, Scrolling, PinchToZoom with Crosshair",
                    "font": {
                        "size": [14],
                        "family": ["Verdana"],
                        "style": ["Bold"],
                        "color": ["0xaaaaaaff"],
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
                        "color": ["0x323232FF", "0x070707ff"]
                    }
                },
          		 "layerArea": {
                	"background": {
                        "fillType": "gradient",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 100],
                        "color": ["0x323232FF", "0x070707ff"]
             	  	 }
           		 },
                "legend": {
                    "visible": true,
                    "indicators": ["marker", "textLabel"],
                    "separator": "space",
                    "marker": {
                        "type": "colorBox",
                        "color": ["0x355c86ff", "0x628948ff", "0xc59538ff", "0xbb423eff"]
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
                        "text": ["1970", "1980", "1990", "2000"],
                        "color": ["0xFFFFFFFF", "0xFFFFFFFF", "0xFFFFFFFF", "0xFFFFFFFF"],
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
                "dataSetMapping": {
                    "setId": "dataset1",
                    "eventsSetId": "eventsMap1"
                },
                "axis": {
                    "visible": true,
                    "type": ["xAxis", "yAxis"],
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
                            "font": {
                                "size": [14],
                                "family": ["Verdana"],
                                "style": ["normal"],
                                "color": ["0xffffffff"],
                                "transparency": [0]
                            }
                        }
                    },
                    "yAxis": {
                        "scale": {
                            "minValue": 0,
                            "majorInterval": 30000,
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
                            "position": "inner",
                            "font": {
                                "size": [12],
                                "family": ["Verdana"],
                                "style": ["normal"],
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
                            "minor": {
                                "line": {
                                    "color": ["0xaaaaaaff"]
                                }
                            },
                            "placement": "atLabels"
                        }
                    }
                },
                "drawEntities": ["axis", "areaChart"],
                "areaChart": {
                    "columnId": [0, 1, 2, 3],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "graphType": "stacked",
                    "lineType": "normal",
                    "dataAlignToAxis": ["primaryYAxis", "primaryYAxis", "primaryYAxis"],
                    "plotMissingValues": "assumeZero",
                    "area": {
                        "fillType": ["color"],
                        "transparency": [0],
                        "color": ["0x00ff00ff", "0x00ff00ff"],
                        "colorAboveXAxis": ["0x355c86ff", "0x628948ff", "0xc59538ff", "0xbb423eff"],
                        "colorBelowXAxis": ["0xff0000ff"]
                    },
                    "line": {
                        "visible": false,
                        "color": ["0x5c5ddc32", "0x6845aeff", "0xc15760b4"],
                        "width": [3],
                        "transparency": [30, 30, 30]
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
                    },
                    "dataLabels": null
                }
            },
            "chartData": {
                "rowNames": {
                    "values": ["Jun 1", "Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8", "Jun 9", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28"]
                },
                "columnNames": {
                    "values": ["Funds", "Debit", "Credit", "Amount"]
                },
                "data": {
                    "Amount": [50700, 50100, 30750, 20200, 10200, 10000, 30000, 20550, 60000, 50000, 20400, 10050, 30040, 1000, 40350, 30440, 20240, 60000, 30240, 10250, 70000, 30550, 50555, 20000, 7000, 40000, 35000, 50000],
                    "Credit": [38000, 35000, 26100, 30000, 23100, 15900, 33000, 22700, 38000, 23100, 27300, 35000, 38000, 23200, 17400, 20600, 1200, 9938, 16200, 16050, 14400, 15200, 14700, 25000, 23000, 45500, 42000, 40000],
                    "Debit": [28200, 26000, 24800, 24850, 5100, 24400, 25300, 26200, 8100, 7200, 7450, 23600, 4200, 23700, 8500, 21900, 23200, 2900, 2300, 22100, 30084, 28000, 25000],
                    "Funds": [18200, 6100, 14800, 14850, 5100, 14400, 15300, 16200, 8100, 7200, 7450, 13600, 14200, 13700, 8500, 1900, 3200, 2900, 2300, 2100, 10500, 1000, 12000, 1500, 1800, 1800, 2484, 13750, 10050],
                    "Interest": [50, 150, 4800, 4850, 5100, 4400, 5300, 6200, 8100, 7200, 7450, 3600, 4200, 3700, 8500, 1900, 3200, 2900, 2300, 2100, 1500, 1000, 2000, 500, 800, 1800, 400, 350, 320]
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
                                "color": ["0x000000ff"],
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
                                "color": ["0xbb423eff"],
                                "width": [1],
                                "transparency": [0]
                            }
                        },
                        "background": {
                            "fillType": "color",
                            "transparency": 0,
                            "gradientType": "linearTopToBottom",
                            "gradientRatios": [],
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
k_dv_dataviz_areachart_demo_sample_2 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "Available Stock: MultiSeries, Crosshair, Pinch and Zoom",
                "font": {
                    "size": [14],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0x000000FF"],
                    "transparency": [30]
                },
                "position": "top",
                "alignment": "left",
                "direction": "up",
                "containerWt": 10,
                "margin": [0, 0, 0, 0],
                "background": {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 100],
                    "color": ["0xF4F5F7FF", "0xAAAEB9FF"]
                }
            },
            "legend": {
                "visible": true,
                "indicators": ["marker", "textLabel"],
                "separator": "space",
                "marker": {
                    "type": "colorBox",
                    "color": ["0x7e7fe1ff", "0xd8dd40ff", "0xc94338ff"]
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
                    "text": ["1970", "1980", "1990"],
                    "color": ["0x000000FF", "0x000000FF", "0x000000FF"],
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
                "alignment": "center",
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
                    "gradientRatios": [0, 30, 70, 100],
                    "color": ["0xecedf0FF", "0xbabec8FF", "0xadb1bcFF", "0xecedf0FF"]
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
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "markingReference": "atMinor",
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
                        "maxValue": 21000,
                        "majorInterval": 3000,
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
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "visible": false
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "yMajorMajor",
                    "color": ["0xcdcfd7FF", "0xdee0e6FF"]
                }
            },
            "drawEntities": ["axis", "grid", "areaChart"],
            "areaChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "normal",
                "lineType": "smooth",
                "dataAlignToAxis": ["primaryYAxis", "primaryYAxis", "primaryYAxis"],
                "plotMissingValues": "assumeZero",
                "area": {
                    "fillType": ["gradient"],
                    "transparency": [0],
                    "color": ["0x00ff00ff", "0x00ff00ff"],
                    "colorAboveXAxis": [
                        ["0x7e7fe1ff", "0xa6a7e8ff"],
                        ["0xd8dd40ff", "0xd3d538ff"],
                        ["0xc94338ff", "0xd7b857ff"]
                    ],
                    "colorBelowXAxis": ["0xff0000ff"]
                },
                "line": {
                    "visible": true,
                    "color": ["0x5c5ddc32", "0x9485beff", "0xc15760b4"],
                    "width": [2],
                    "transparency": [30, 30, 30]
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
                },
                "dataLabels": null
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Jun 1", "Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8", "Jun 9", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28"]
            },
            "columnNames": {
                "values": ["Debit", "Credit", "Amount"]
            },
            "data": {
                "Amount": [400, 350, 500, 14700, 5100, 3750, 2200, 1200, 100, 300, 2550, 6000, 5000, 2400, 150, 3040, 1000, 4350, 3440, 2240, 6000, 3240, 1250, 700, 3550, 5555, 2000, 700],
                "Credit": [17500, 4959, 2050, 1600, 14907, 16100, 6500, 13100, 5900, 3500, 12700, 4100, 13100, 17300, 4050, 2900, 13200, 17400, 2600, 1200, 9938, 6200, 65, 4400, 5200, 4700, 1500, 1300],
                "Debit": [2484, 3750, 50, 8200, 600, 4800, 4850, 5100, 4400, 5300, 6200, 8100, 7200, 7450, 3600, 4200, 3700, 8500, 1900, 3200, 2900, 2300, 2100]
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
                            "color": ["0x7e7fe1ff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 100],
                        "color": ["0xecedf0FF", "0xbabec8FF", "0xadb1bcFF", "0xecedf0FF"]
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
k_dv_dataviz_areachart_demo_sample_3 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "AreaChart with Crosshair, Pinch and Zoom",
                "font": {
                    "size": [14],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0xaaaaaaff"],
                    "transparency": [0]
                },
                "position": "top",
                "alignment": "left",
                "direction": "up",
                "containerWt": 10,
                "margin": [0, 0, 0, 0],
                "background": {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 100],
                    "color": ["0x323232FF", "0x070707ff"]
                }
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 100],
                    "color": ["0x323232FF", "0x070707ff"]
                }
            },
            "dataSetMapping": {
                "setId": "dataset1",
                "eventsSetId": "eventsMap1"
            },
            "axis": {
                "visible": true,
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
                        "margin": [0, 0, 30, 0],
                        "orientationAngle": 90,
                        "font": {
                            "size": [8],
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
                }
            },
            "drawEntities": ["axis", "grid", "areaChart"],
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
                    "transparency": [50, 50],
                    "color": ["0xff0000ff", "0x00ff00ff"],
                    "colorAboveXAxis": [
                        ["0xe68000ff", "0x060400ff"]
                    ],
                    "colorBelowXAxis": ["0xff0000ff"]
                },
                "line": {
                    "visible": true,
                    "color": ["0xffffffff"],
                    "width": [1],
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
                },
                "dataLabels": null
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Jun 01", "Jun 02", "Jun 03", "Jun 04", "Jun 05", "Jun 06", "Jun 07", "Jun 08", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28", "Jun 29", "Jun 30", "Jul 01", "Jul 02", "Jul 03", "Jul 04", "Jul 05", "Jul 06", "Jul 07", "Jul 08", "Jul 09", "Jul 10", "Jul 11", "Jul 12", "Jul 13", "Jul 14", "Jul 15", "Jul 16", "Jul 17", "Jul 18", "Jul 19", "Jul 20", "Jul 21", "Jul 22", "Jul 23", "Jul 24", "Jul 25", "Jul 26", "Jul 27", "Jul 28", "Jul 29", "Jul 30", "Jul 31", "Aug 01", "Aug 02", "Aug 03", "Aug 04", "Aug 05", "Aug 06", "Aug 07", "Aug 08", "Aug 09"]
            },
            "columnNames": {
                "values": ["Stock"]
            },
            "data": {
                "Stock": [104, 84, 109, 147, 141, 154, 162, 92, 103, 132, 153, 141, 115, 132, 66, 74, 67, 94, 92, 131, 128, 122, 118, 90, 88, 65, 81, 56, 132, 114, 121, 74, 96, 114, 70, 68, 23, 46, 66, 152, 240, 287, 252, 142, 227, 144, 205, 248, 200, 318, 188, 344, 261, 294, 296, 241, 171, 254, 259, 216, 266, 295, 348, 351, 342, 368, 346, 450, 259, 250]
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
                            "color": ["0xe68000ff"],
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
                            "color": ["0xe68000ff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 100],
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
k_dv_dataviz_areachart_demo_sample_4 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "AreaChart with Crosshair, Pinch and Zoom",
                "font": {
                    "size": [14],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0xaaaaaaff"],
                    "transparency": [0]
                },
                "position": "top",
                "alignment": "left",
                "direction": "up",
                "containerWt": 10,
                "margin": [0, 0, 0, 0],
                "background": {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 100],
                    "color": ["0x323232FF", "0x070707ff"]
                }
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 100],
                    "color": ["0x323232FF", "0x070707ff"]
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
                        "margin": [0, 0, 30, 0],
                        "orientationAngle": 90,
                        "font": {
                            "size": [10],
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
                            "position": "outer",
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
                "type": ["xAxisMajorGrid", "yAxisMajorGrid"],
                "xAxisMajorGrid": {
                    "visible": true,
                    "line": {
                        "color": ["0x273241ff"],
                        "width": [1],
                        "transparency": [0]
                    }
                },
                "yAxisMajorGrid": {
                    "visible": true,
                    "line": {
                        "color": ["0x273241ff"],
                        "width": [1],
                        "transparency": [0]
                    }
                }
            },
            "drawEntities": ["axis", "grid", "areaChart"],
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
                    "transparency": [0, 0],
                    "color": ["0xff0000ff", "0x00ff00ff"],
                    "colorAboveXAxis": [
                        ["0x40a4bcff", "0x1d4e61ff"]
                    ],
                    "colorBelowXAxis": ["0xff0000ff"]
                },
                "line": {
                    "visible": true,
                    "color": ["0xfbf56bff"],
                    "width": [6],
                    "transparency": [0]
                },
                "plotPoints": {
                    "visible": false
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Jun 01", "Jun 02", "Jun 03", "Jun 04", "Jun 05", "Jun 06", "Jun 07", "Jun 08", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21", "Jun 22", "Jun 23", "Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28", "Jun 29", "Jun 30", "Jul 01", "Jul 02", "Jul 03", "Jul 04", "Jul 05", "Jul 06", "Jul 07", "Jul 08", "Jul 09", "Jul 10", "Jul 11", "Jul 12", "Jul 13", "Jul 14", "Jul 15", "Jul 16", "Jul 17", "Jul 18", "Jul 19", "Jul 20", "Jul 21", "Jul 22"]
            },
            "columnNames": {
                "values": ["Stock"]
            },
            "data": {
                "Stock": [44, 43, 38, 52, 54, 32, 46, 36, 36, 46, 42, 60, 54, 214, 232, 234, 242, 242, 236, 233, 236, 225, 184, 175, 277, 291, 275, 311, 319, 313, 326, 328, 354, 349, 371, 356, 355, 340, 360, 332, 310, 204, 213, 197, 195, 186, 182, 168, 96, 86, 76, 68]
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
                            "color": ["0xfbf56bff"],
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
                            "color": ["0x40a4bcff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 100],
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
k_dv_dataviz_areachart_demo_sample_5 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "Agriculture Produce: MultiSeries, PinchToZoom, Crosshair",
                "font": {
                    "size": [14],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0x000000FF"],
                    "transparency": [0]
                },
                "position": "top",
                "alignment": "right",
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
            "legend": {
                "visible": true,
                "indicators": ["marker", "textLabel"],
                "separator": "space",
                "marker": {
                    "type": "colorBox",
                    "color": ["0x7e7fe1ff", "0x912CEEff", "0xca573dff"]
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
                    "text": ["Rice", "Wheat", "Barley"],
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
                "position": "bottom",
                "alignment": "center",
                "layout": "horizantal",
                "containerWt": 8,
                "margin": [10, 10, 10, 10],
                "padding": [1, 1, 1, 1],
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
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "markingReference": "atMinor",
                        "orientationAngle": 90,
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
                    "scale": {
                        "minValue": 0,
                        "maxValue": 21000,
                        "majorInterval": 3000,
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
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "visible": false
                },
                "background": {
                    "fillType": "alternateColor",
                    "alternateColorPattern": "yMajorMajor",
                    "color": ["0xcdcfd7FF", "0xdee0e6FF"]
                }
            },
            "drawEntities": ["axis", "grid", "areaChart"],
            "areaChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "stacked",
                "lineType": "smooth",
                "dataAlignToAxis": ["primaryYAxis", "primaryYAxis", "primaryYAxis"],
                "plotMissingValues": "assumeZero",
                "area": {
                    "fillType": ["gradient"],
                    "transparency": [0, 0, 0],
                    "color": ["0x00ff00ff", "0x00ff00ff"],
                    "colorAboveXAxis": [
                        ["0x7e7fe1ff", "0xa6a7e8ff"],
                        ["0x912CEEff", "0xb09ab4ff"],
                        ["0xca573dff", "0xdac159ff"]
                    ],
                    "colorBelowXAxis": ["0xff0000ff"]
                },
                "line": {
                    "visible": true,
                    "color": ["0x5c5ddc32", "0x6845aeff", "0xc15760b4"],
                    "width": [2],
                    "transparency": [30, 30, 30]
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
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["01/2011", "02/2011", "03/2011", "04/2011", "05/2011", "06/2011", "07/2011", "08/2011", "09/2011", "10/2011", "11/2011", "12/2011", "01/2012", "02/2012", "03/2012", "04/2012", "05/2012", "06/2012", "07/2012", "08/2012", "09/2012", "10/2012", "11/2012", "12/2012","01/2013","02/2013","03/2013","04/2013"]
            },
            "columnNames": {
                "values": ["Rice", "Wheat", "Barley"]
            },
            "data": {
                "Rice": [400, 350, 500, 5700, 5100, 3750, 2200, 1200, 100, 300, 2550, 6000, 5000, 2400, 150, 3040, 1000, 4350, 3440, 2240, 6000, 3240, 1250, 700, 3550, 5555, 2000, 700],
                "Wheat": [17500, 4959, 2050, 1600, 14907, 16100, 6500, 13100, 5900, 3500, 12700, 4100, 13100, 17300, 4050, 2900, 13200, 17400, 2600, 1200, 9938, 6200, 65, 4400, 5200, 4700, 1500, 1300],
                "Barley": [2484, 3750, 50, 8200, 600, 4800, 4850, 5100, 4400, 5300, 6200, 8100, 7200, 7450, 3600, 4200, 3700, 8500, 1900, 3200, 2900, 2300, 2100]
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
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "dataLabels": {
                        "visible": true,
                        "indicators": ["columnName", "rowName", "numberValue"],
                        "separator": "newLine",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0x7e7fe1ff"],
                            "transparency": [0]
                        }
                    },
                    "border": {
                        "visible": true,
                        "line": {
                            "color": ["0x7e7fe1ff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 10,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 40, 60, 100],
                        "color": ["0xAAAEB9FF", "0xF4F5F7FF", "0xF4F5F7FF", "0xAAAEB9FF"]
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
var k_dv_dataviz_areachart_demo_sample_6 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "layerArea": {
                "background": {
                    "color": ["0xffffffff"]
                }
            },
            "axis": {
                "type": ["xAxis", "yAxis", "secondaryYAxis"],
                "xAxis": {
                    "axisLine": {
                        "crossOtherAxisAt": "value",
                        "value": 0,
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "markingReference": "atMajor"
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
                    "labels": {
                        "visible": true
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
                        },
                        "placement": "atLabels"
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "yAxisMajorGrid"],
                "xAxisMajorGrid": {
                    "line": {
                        "color": ["0x8b7fc0ff"]
                    }
                },
                "yAxisMajorGrid": {
                    "line": {
                        "color": ["0xbc7b82ff"]
                    }
                }
            },
            "drawEntities": ["axis", "grid", "areaChart"],
            "areaChart": {
                "columnId": [0,1],
                "graphType": "range",
                "area": {
                    "fillType": ["color"],
                    "transparency": [0],
                    "color": ["0x7e7fe1ff"]
                },
                "line": {
                    "color": ["0x5c5ddc32", "0x6845aeff", "0xc15760b4"],
                    "width": [2],
                    "transparency": [30, 30, 30]
                },
                "plotPoints": {
                    "visible": false
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Jun 1", "Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8"]
            },
            "columnNames": {
                "values": ["Amount-Min","Amount-Max"]
            },
            "data": {
                    "Amount-Min": [9500, 8400, 9600, 9500, 9700, 8650, 9800, 10000],
                    "Amount-Max": [3500, 2400, 3600, 3500, 3700, 2650, 3800, 4000]
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
                            "color": ["0x7e7fe1ff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 100],
                        "color": ["0xecedf0FF", "0xbabec8FF", "0xadb1bcFF", "0xecedf0FF"]
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