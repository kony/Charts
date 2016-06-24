function pyramidChartCatalouge() {
    
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_pyramidchart.htm";
    
    this.pushDemo = function(demoName, demoObject){
    	this.demos.demoNames.push(demoName);
    	this.demos.demoObjects.push(demoObject);
    }
    
    this.pushDemo("FillType-Color", k_dv_dataviz_pyramidchart_demo_sample_1);
    this.pushDemo("Gradient-LeftToRight", k_dv_dataviz_pyramidchart_demo_sample_2);
    this.pushDemo("Gradient-TopToBottom", k_dv_dataviz_pyramidchart_demo_sample_3);
    this.pushDemo("Inverted", k_dv_dataviz_pyramidchart_demo_sample_4);
    this.pushDemo("Separated Slices", k_dv_dataviz_pyramidchart_demo_sample_5);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
var k_dv_dataviz_pyramidchart_demo_sample_1 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
                "title": {
                    "visible": true,
                    "text": "Pyramid chart with fillType as color",
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
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "gradientRatios": [0, 30, 70, 100],
                    "color": ["0xbabec8FF", "0xecedf0FF", "0xecedf0FF", "0xadb1bcFF"]
                }
            },
            "drawEntities": ["pyramidChart"],
            "pyramidChart" : {
                "columnId": [0],
                "margin": [60, 60, 0, 0],
                "pyramidSlice": {
                    "fillType":["color"],
                    "color" : ["0x427200ff", "0x175faaff", "0x6b4d95ff", "0xfa821dff"]
                },
                "dataLabels": {
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [30]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Stocks", "Bonds", "Funds", "Cash"]
            },
            "columnNames": {
                "values": ["Amount"]
            },
            "data": {
                "Amount": [350, 280, 180, 200]
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
k_dv_dataviz_pyramidchart_demo_sample_2 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
                "title": {
                    "visible": true,
                    "text": "Pyramid chart with fillType-gradient & gradientType-LinearLeftToRight",
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
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "gradientRatios": [0, 30, 70, 100],
                    "color": ["0xbabec8FF", "0xecedf0FF", "0xecedf0FF", "0xadb1bcFF"]
                }
            },
            "drawEntities": ["pyramidChart"],
            "pyramidChart" : {
                "columnId": [0],
                "margin": [60, 60, 0, 0],
                "pyramidSlice": {
                    "fillType":["gradient"],
                    "gradientType":"linearLeftToRight",
                    "color" : [["0x4D8000ff", "0xCCFF7FFF"], ["0x004080ff", "0x7FBFFFff"], ["0x350080ff","0xB27FFFff"], ["0x803A00ff", "0xFFB97Fff"]]
                },
                "dataLabels": {
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [30]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Stocks", "Bonds", "Funds", "Cash"]
            },
            "columnNames": {
                "values": ["Amount"]
            },
            "data": {
                "Amount": [350, 280, 180, 200]
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
k_dv_dataviz_pyramidchart_demo_sample_3 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
                "title": {
                    "visible": true,
                    "text": "Pyramid chart with fillType-gradient & gradientType-LinearTopToBottom",
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
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "gradientRatios": [0, 30, 70, 100],
                    "color": ["0xbabec8FF", "0xecedf0FF", "0xecedf0FF", "0xadb1bcFF"]
                }
            },
            "drawEntities": ["pyramidChart"],
            "pyramidChart" : {
                "columnId": [0],
                "margin": [60, 60, 0, 0],
                "pyramidSlice": {
                    "fillType":["gradient"],
                    "gradientType":"linearTopToBottom",
                    "color" : [["0x4D8000ff", "0xCCFF7FFF"], ["0x004080ff", "0x7FBFFFff"], ["0x350080ff","0xB27FFFff"], ["0x803A00ff", "0xFFB97Fff"]]
                },
                "dataLabels": {
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [30]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Stocks", "Bonds", "Funds", "Cash"]
            },
            "columnNames": {
                "values": ["Amount"]
            },
            "data": {
                "Amount": [350, 280, 180, 200]
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
k_dv_dataviz_pyramidchart_demo_sample_4 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
                "title": {
                    "visible": true,
                    "text": "Pyramid chart with invert as true",
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
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "gradientRatios": [0, 30, 70, 100],
                    "color": ["0xbabec8FF", "0xecedf0FF", "0xecedf0FF", "0xadb1bcFF"]
                }
            },
            "drawEntities": ["pyramidChart"],
            "pyramidChart" : {
                "columnId": [0],
                "margin": [60, 60, 0, 0],
                "invert": true,
                "pyramidSlice": {
                    "fillType":["color"],
                    "color" : ["0x427200ff", "0x175faaff", "0x6b4d95ff", "0xfa821dff"]
                },
                "dataLabels": {
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [30]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Stocks", "Bonds", "Funds", "Cash"]
            },
            "columnNames": {
                "values": ["Amount"]
            },
            "data": {
                "Amount": [350, 280, 180, 200]
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
k_dv_dataviz_pyramidchart_demo_sample_5 = function () {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
                "title": {
                    "visible": true,
                    "text": "Pyramid chart with separatorWidth as 20px",
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
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "gradientRatios": [0, 30, 70, 100],
                    "color": ["0xbabec8FF", "0xecedf0FF", "0xecedf0FF", "0xadb1bcFF"]
                }
            },
            "drawEntities": ["pyramidChart"],
            "pyramidChart" : {
                "columnId": [0],
                "margin": [60, 60, 0, 0],
                "separatorWidth" : 20,
                "pyramidSlice": {
                    "fillType":["color"],
                    "color" : ["0x427200ff", "0x175faaff", "0x6b4d95ff", "0xfa821dff"]
                },
                "dataLabels": {
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0xFFFFFFFF"],
                        "transparency": [30]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Stocks", "Bonds", "Funds", "Cash"]
            },
            "columnNames": {
                "values": ["Amount"]
            },
            "data": {
                "Amount": [350, 280, 180, 200]
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