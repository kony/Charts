function candleStickChartCatalouge() {
    
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_candlestickchart.htm";
    
    this.pushDemo = function(demoName, demoObject){
    	this.demos.demoNames.push(demoName);
    	this.demos.demoObjects.push(demoObject);
    }
    
    this.pushDemo("Candle", k_dv_dataviz_candleStickChart_demo_sample_1);
    this.pushDemo("Ticker", k_dv_dataviz_candleStickChart_demo_sample_2);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function func_init_frm_009_candlestick_chart_001() {
    k_dv.dataviz.app.initAppEnv();
    var demoIndex = 0;
    var demoViewForm = k_dv.dataviz.app.frm.demoFormSG();
    // assign
    var usecase_array = [];
    var index = -1;
    usecase_array[++index] = k_dv_dataviz_candleStickChart_demo_sample_1;
    usecase_array[++index] = k_dv_dataviz_candleStickChart_demo_sample_2;
    // execute
    k_dv.dataviz.app.showDemosOnForm(demoIndex, demoViewForm, usecase_array);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
var k_dv_dataviz_candleStickChart_demo_sample_1 = function() {
        var chartInfo = {
            "chartProperties": {
                "chartHeight": 67,
                "enableScrolling": false,
                "position": [0, 0, 100, 100],
                "title": {
                    "visible": true,
                    "text": "Monthly Stock Price and Volume: PinchToZoom",
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
                    "containerWt": 8,
                    "margin": [0, 0, 0, 0],
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
                        "fillType": "color",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 100],
                        "color": ["0x000000ff"]
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
                            "orientationAngle": 90,
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
                                    "color": ["0xaaaaaaff"]
                                }
                            },
                            "placement": "atLabels"
                        }
                    },
                    "yAxis": {
                        "title": {
                            "text": "Volume",
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
                            "maxValue": 20000000,
                            "majorInterval": 2000000,
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
                            "text": "Price",
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
                            "minValue": 590,
                            "maxValue": 680,
                            "majorInterval": 10,
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
                    "type": ["yAxisMajorGrid"],
                    "yAxisMajorGrid": {
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "background": {
                        "fillType": "color",
                        "color": ["0x222222ff"]
                    }
                },
                "drawEntities": ["axis", "grid", "columnChart", "candleStickChart"],
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
                            [0, 20, 50, 100]
                        ],
                        "color": [
                            ["0x0194ffff", "0x0c1eaaff"]
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
                "candleStickChart": {
                    "columnId": [1, 2, 3, 4],
                    "graphType": "candle",
                    "animations": {
                        "onInitAnimation": true
                    },
                    "dataAlignToAxis": ["secondaryYAxis"],
                    "candleStick": {
                        "width": [400],
                        "up": {
                            "fillType": ["color"],
                            "transparency": [0],
                            "color": ["0x00ff00ff"]
                        },
                        "down": {
                            "fillType": ["color"],
                            "transparency": [0],
                            "color": ["0x8D1923FF"]
                        }
                    },
                    "dataLabels": {
                        "visible": true,
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
            "chartData": {
                "rowNames": {
                    "values": ["20-Dec-11", "21-Dec-11", "22-Dec-11", "23-Dec-11", "27-Dec-11", "28-Dec-11", "29-Dec-11", "30-Dec-11", "3-Jan-12", "4-Jan-12", "5-Jan-12", "6-Jan-12", "9-Jan-12", "10-Jan-12", "12-Jan-12", "12-Jan-12", "13-Jan-12", "17-Jan-12", "18-Jan-12", "19-Jan-12"]
                },
                "columnNames": {
                    "values": ["volume", "open", "high", "low", "close"]
                },
                "data": {
                    "volume": [6100000, 2500000, 3000000, 2000000, 2200000, 2000000, 2300000, 4000000, 5900000, 2500000, 2700000, 2500000, 300000, 1700000, 1500000, 200000, 1700000, 1700000, 2200000, 2100000],
                    "open": [628, 630.01, 627.95, 632, 632.05, 642.75, 641.49, 642.02, 652.94, 665.03, 662.13, 659.15, 646.5, 629.75, 623.5, 631.22, 626.26, 631.98, 626.63, 640.99],
                    "high": [631.84, 631.82, 631.73, 634.68, 644.49, 645, 643, 646.76, 668.15, 670.25, 663.97, 660, 647, 633.8, 629.39, 632.89, 626.95, 631.98, 634, 640.99],
                    "low": [627.99, 618.96, 627.01, 630.56, 632, 638.1, 635.2, 642.02, 652.37, 660.62, 656.23, 649.79, 621.23, 616.91, 621.12, 626.5, 621.06, 625.68, 622.12, 631.46],
                    "close": [630.37, 625.82, 629.7, 633.14, 640.25, 639.7, 642.4, 645.9, 665.41, 668.28, 659.01, 650.02, 622.46, 623.14, 625.96, 629.64, 624.99, 628.58, 632.91, 639.57]
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
                                "color": ["0xAAAAAAFF"],
                                "transparency": [0]
                            }
                        },
                        "border": {
                            "visible": true,
                            "line": {
                                "color": ["0x3d6290ff"],
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
/*
var chartInfoTable = k_dv_dataviz_candleStickChart_demo_sample_1();
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
k_dv_dataviz_candleStickChart_demo_sample_2 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "Monthly Stock Price and Volume: PinchToZoom",
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
                "containerWt": 8,
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
                        "gap": 150,
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
                        "markingReference": "atMinor",
                        "orientationAngle": 90,
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
                                "color": ["0xaaaaaaff"]
                            }
                        },
                        "placement": "atLabels"
                    }
                },
                "yAxis": {
                    "title": {
                        "text": "Volume",
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
                        "maxValue": 20000000,
                        "majorInterval": 2000000,
                        "minorInterval": "auto",
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
                        "text": "Price",
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
                        "minValue": 590,
                        "maxValue": 680,
                        "majorInterval": 10,
                        "minorInterval": "auto",
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
                "type": ["yAxisMajorGrid"],
                "yAxisMajorGrid": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "background": {
                    "fillType": "color",
                    "color": ["0x222222ff"]
                }
            },
            "drawEntities": ["axis", "grid", "columnChart", "candleStickChart"],
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
                        [0, 20, 50, 100]
                    ],
                    "color": [
                        ["0x0194ffff", "0x0c1eaaff"]
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
            "candleStickChart": {
                "columnId": [1, 2, 3, 4],
                "graphType": "ticker",
                "animations": {
                    "onInitAnimation": true
                },
                "dataAlignToAxis": ["secondaryYAxis"],
                "candleStick": {
                    "width": [400],
                    "up": {
                        "fillType": ["color"],
                        "transparency": [0],
                        "color": ["0x00ff00ff"]
                    },
                    "down": {
                        "fillType": ["none"],
                        "transparency": [0],
                        "color": ["0x8D1923FF"]
                    }
                },
                "dataLabels": {
                    "visible": true,
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
        "chartData": {
            "rowNames": {
                "values": ["20-Dec-11", "21-Dec-11", "22-Dec-11", "23-Dec-11", "27-Dec-11", "28-Dec-11", "29-Dec-11", "30-Dec-11", "3-Jan-12", "4-Jan-12", "5-Jan-12", "6-Jan-12", "9-Jan-12", "10-Jan-12", "12-Jan-12", "12-Jan-12", "13-Jan-12", "17-Jan-12", "18-Jan-12", "19-Jan-12"]
            },
            "columnNames": {
                "values": ["volume", "open", "high", "low", "close"]
            },
            "data": {
                "volume": [6100000, 2500000, 3000000, 2000000, 2200000, 2000000, 2300000, 4000000, 5900000, 2500000, 2700000, 2500000, 300000, 1700000, 1500000, 200000, 1700000, 1700000, 2200000, 2100000],
                "open": [628, 630.01, 627.95, 632, 632.05, 642.75, 641.49, 642.02, 652.94, 665.03, 662.13, 659.15, 646.5, 629.75, 623.5, 631.22, 626.26, 631.98, 626.63, 640.99],
                "high": [631.84, 631.82, 631.73, 634.68, 644.49, 645, 643, 646.76, 668.15, 670.25, 663.97, 660, 647, 633.8, 629.39, 632.89, 626.95, 631.98, 634, 640.99],
                "low": [627.99, 618.96, 627.01, 630.56, 632, 638.1, 635.2, 642.02, 652.37, 660.62, 656.23, 649.79, 621.23, 616.91, 621.12, 626.5, 621.06, 625.68, 622.12, 631.46],
                "close": [630.37, 625.82, 629.7, 633.14, 640.25, 639.7, 642.4, 645.9, 665.41, 668.28, 659.01, 650.02, 622.46, 623.14, 625.96, 629.64, 624.99, 628.58, 632.91, 639.57]
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
                            "color": ["0xAAAAAAFF"],
                            "transparency": [0]
                        }
                    },
                    "border": {
                        "visible": true,
                        "line": {
                            "color": ["0x3d6290ff"],
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