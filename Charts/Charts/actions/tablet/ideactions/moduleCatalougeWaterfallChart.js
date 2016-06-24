function waterFallChartCatalouge() {
    
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_waterfallchart.htm";
    
    this.pushDemo = function(demoName, demoObject){
    	this.demos.demoNames.push(demoName);
    	this.demos.demoObjects.push(demoObject);
    }
    
    this.pushDemo("Single Series-Horizontal Layout", k_dv_dataviz_waterfallchart_demo_sample_1);
    this.pushDemo("Single Series-Vertical Layout", k_dv_dataviz_waterfallchart_demo_sample_2);
    this.pushDemo("Multi Series-Horizontal Layout", k_dv_dataviz_waterfallchart_demo_sample_3);
    this.pushDemo("Multi Series-Vertical Layout", k_dv_dataviz_waterfallchart_demo_sample_4);
    this.pushDemo("Rounded Bar-Dotted Connecter", k_dv_dataviz_waterfallchart_demo_sample_5);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
var k_dv_dataviz_waterfallchart_demo_sample_1 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Company Profit(in USD) - 2013",
                "font": {
                    "size": [20],
                    "family": ["Helvetica"],
                    "style": ["normal"],
                    "color": ["0x466e92ff"]
                },
                "alignment": "center",
                "containerWt": 10
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "color": ["0xffffffff"]
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
                            "color": ["0x393939ff"]
                        },
                        "format" : {
                            "prefix":[""],
                            "suffix":["$"]
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
            "drawEntities": ["axis", "grid", "waterFallChart"],
            "waterFallChart": {
                "animations": {
                    "onInitAnimation": true
                },
                "layout":"horizontal",
                "columnId": [0],
                "dataAlignToAxis": ["primaryYAxis"],
                "plotMissingValues": "assumeZero",
                "bar": {
                    "transparency": [10],
                    "color": ["0x628218ff", "0x628218ff", "0xbf1f22ff", "0xbf1f22ff"]
                },
                "border": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "dataLabels": {
                    "placement": "inside",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [30]
                    }
                },
                "connector": {
            		"visible": true,
            		"line": {
                        "style": ["dotted"],
                        "color": ["0xaaaaaaff"],
                        "width": [1],
                        "transparency": [0]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Product Revenue", "Service Revenue", "Fixed Costs", "Variable Costs"]
            },
            "columnNames": {
                "values": ["Amount"]
            },
            "data": {
                "Amount": [450, 280, -180, -140]
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
                            "color": ["0x000000ff"],
                            "width": [2]
                        }
                    },
                    "background": {
                        "color": ["0xFFFFFFFF"]
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
k_dv_dataviz_waterfallchart_demo_sample_2 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Company Profit(in USD) - 2013",
                "font": {
                    "size": [20],
                    "family": ["Helvetica"],
                    "style": ["normal"],
                    "color": ["0x466e92ff"]
                },
                "alignment": "center",
                "containerWt": 10
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "color": ["0xffffffff"]
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
                            "color": ["0x393939ff"]
                        },
                        "format" : {
                            "prefix":[""],
                            "suffix":["$"]
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
                            "color": ["0x393939ff"]
                        }
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid"],
                "xAxisMajorGrid": {
                    "visible": true,
                    "line": {
                        "color": ["0xc7c7c7ff"]
                    }
                }
            },
            "drawEntities": ["axis", "grid", "waterFallChart"],
            "waterFallChart": {
                "animations": {
                    "onInitAnimation": true
                },
                "layout":"vertical",
                "columnId": [0],
                "dataAlignToAxis": ["primaryXAxis"],
                "plotMissingValues": "assumeZero",
                "bar": {
                    "transparency": [10],
                    "color": ["0x628218ff", "0x628218ff", "0xbf1f22ff", "0xbf1f22ff"]
                },
                "border": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "dataLabels": {
                    "placement": "inside",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [30]
                    }
                },
                "connector": {
            		"visible": true,
            		"line": {
                        "style": ["dotted"],
                        "color": ["0xaaaaaaff"],
                        "width": [1],
                        "transparency": [0]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Product Revenue", "Service Revenue", "Fixed Costs", "Variable Costs"]
            },
            "columnNames": {
                "values": ["Amount"]
            },
            "data": {
                "Amount": [450, 280, -180, -140]
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
                            "color": ["0x000000ff"],
                            "width": [2]
                        }
                    },
                    "background": {
                        "color": ["0xFFFFFFFF"]
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
k_dv_dataviz_waterfallchart_demo_sample_3 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Company Profit(in USD) - 2013",
                "font": {
                    "size": [20],
                    "family": ["Helvetica"],
                    "style": ["normal"],
                    "color": ["0x466e92ff"]
                },
                "alignment": "center",
                "containerWt": 10
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "color": ["0xffffffff"]
                }
            },
            "legend": {
                "indicators": ["marker", "textLabel"],
                "marker": {
                    "type": "colorBox",
                    "color": ["0xAF002AFF", "0x28589CFF"]
                },
                "textLabel": {
                    "text": ["Company A", "Company B"],
                    "color": ["0x000000FF", "0x000000FF"],
                    "margin": [0, 10, 0, 0]
                },
                "alignment": "right",
                "layout": "horizantal",
                "containerWt": 8
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
                            "color": ["0x393939ff"]
                        },
                        "format" : {
                            "prefix":[""],
                            "suffix":["$"]
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
            "drawEntities": ["axis", "grid", "waterFallChart"],
            "waterFallChart": {
                "animations": {
                    "onInitAnimation": true
                },
                "layout":"horizontal",
                "columnId": [0,1],
                "dataAlignToAxis": ["primaryYAxis"],
                "plotMissingValues": "assumeZero",
                "bar": {
                    "transparency": [10],
                    "color": [["0x628218ff", "0x628218ff", "0xbf1f22ff", "0xbf1f22ff"],
                              ["0x628218ff", "0x628218ff", "0xbf1f22ff", "0xbf1f22ff"]]
                },
                "border": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "dataLabels": {
                    "placement": "inside",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [30]
                    }
                },
                "connector": {
            		"visible": true,
            		"line": {
                        "style": ["continuous"],
                        "color": ["0xAF002AFF", "0x28589CFF"],
                        "width": [2],
                        "transparency": [0]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Product Revenue", "Service Revenue", "Fixed Costs", "Variable Costs"]
            },
            "columnNames": {
                "values": ["companyA", "companyB"]
            },
            "data": {
                "companyA": [450, 280, -180, -140],
                "companyB": [620, 340, -150, -190]
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
                            "color": ["0x000000ff"],
                            "width": [2]
                        }
                    },
                    "background": {
                        "color": ["0xFFFFFFFF"]
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
k_dv_dataviz_waterfallchart_demo_sample_4 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Company Profit(in USD) - 2013",
                "font": {
                    "size": [20],
                    "family": ["Helvetica"],
                    "style": ["normal"],
                    "color": ["0x466e92ff"]
                },
                "alignment": "center",
                "containerWt": 10
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "color": ["0xffffffff"]
                }
            },
            "legend": {
                "indicators": ["marker", "textLabel"],
                "marker": {
                    "type": "colorBox",
                    "color": ["0xAF002AFF", "0x28589CFF"]
                },
                "textLabel": {
                    "text": ["Company A", "Company B"],
                    "color": ["0x000000FF", "0x000000FF"],
                    "margin": [0, 10, 0, 0]
                },
                "alignment": "left",
                "layout": "horizantal",
                "containerWt": 8
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
                            "color": ["0x393939ff"]
                        },
                        "format" : {
                            "prefix":[""],
                            "suffix":["$"]
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
                            "color": ["0x393939ff"]
                        }
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid"],
                "xAxisMajorGrid": {
                    "visible": true,
                    "line": {
                        "color": ["0xc7c7c7ff"]
                    }
                }
            },
            "drawEntities": ["axis", "grid", "waterFallChart"],
            "waterFallChart": {
                "animations": {
                    "onInitAnimation": true
                },
                "layout":"vertical",
                "columnId": [0,1],
                "dataAlignToAxis": ["primaryXAxis"],
                "plotMissingValues": "assumeZero",
                "bar": {
                    "transparency": [10],
                    "color": [["0x628218ff", "0x628218ff", "0xbf1f22ff", "0xbf1f22ff"],
                              ["0x628218ff", "0x628218ff", "0xbf1f22ff", "0xbf1f22ff"]]
                },
                "border": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "dataLabels": {
                    "placement": "inside",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [30]
                    }
                },
                "connector": {
            		"visible": true,
            		"line": {
                        "style": ["continuous"],
                        "color": ["0xAF002AFF", "0x28589CFF"],
                        "width": [1],
                        "transparency": [0]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Product Revenue", "Service Revenue", "Fixed Costs", "Variable Costs"]
            },
            "columnNames": {
                "values": ["companyA", "companyB"]
            },
            "data": {
                "companyA": [450, 280, -180, -140],
                "companyB": [620, 340, -150, -190]
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
                            "color": ["0x000000ff"],
                            "width": [2]
                        }
                    },
                    "background": {
                        "color": ["0xFFFFFFFF"]
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
k_dv_dataviz_waterfallchart_demo_sample_5 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Company Profit(in USD) - 2013",
                "font": {
                    "size": [20],
                    "family": ["Helvetica"],
                    "style": ["normal"],
                    "color": ["0x466e92ff"]
                },
                "alignment": "center",
                "containerWt": 10
            },
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "color": ["0xffffffff"]
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
                            "color": ["0x393939ff"]
                        },
                        "format" : {
                            "prefix":[""],
                            "suffix":["$"]
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
            "drawEntities": ["axis", "grid", "waterFallChart"],
            "waterFallChart": {
                "animations": {
                    "onInitAnimation": true
                },
                "layout":"horizontal",
                "columnId": [0],
                "dataAlignToAxis": ["primaryYAxis"],
                "plotMissingValues": "assumeZero",
                "bar": {
                    "transparency": [10],
                    "color": ["0x628218ff", "0x628218ff", "0xbf1f22ff", "0xbf1f22ff"],
                    "shape":"roundRectangle",
                    "cornerWidth":20
                },
                "dataLabels": {
                    "placement": "inside",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [30]
                    }
                },
                "connector": {
            		"visible": true,
            		"line": {
                        "style": ["dotted"],
                        "color": ["0x000000ff"],
                        "width": [2],
                        "transparency": [0]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Product Revenue", "Service Revenue", "Fixed Costs", "Variable Costs"]
            },
            "columnNames": {
                "values": ["Amount"]
            },
            "data": {
                "Amount": [450, 280, -180, -140]
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
                            "color": ["0x000000ff"],
                            "width": [2]
                        }
                    },
                    "background": {
                        "color": ["0xFFFFFFFF"]
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