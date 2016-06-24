function proportionalBarChartCatalouge() {
    
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_barchart.htm";
    
    this.pushDemo = function(demoName, demoObject){
    	this.demos.demoNames.push(demoName);
    	this.demos.demoObjects.push(demoObject);
    }
    
    this.pushDemo("Example 1", k_dv_dataviz_proportionalBarChart_demo_sample_1);
    this.pushDemo("Example 2", k_dv_dataviz_proportionalBarChart_demo_sample_2);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_proportionalBarChart_demo_sample_1 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": null,
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
                    "fillType": "color",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0x0B4475FF"]
                }
            },
            "drawArea": {
                "margin": [0, 0, 250, 0],
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
                    "transparency": 0,
                    "gradientType": "linearLeftToRight",
                    "gradientRatios": [0, 50, 50, 100],
                    "color": ["0x02112DFF", "0x144068FF", "0x144068FF", "0x02112DFF"]
                }
            },
            "dataSetMapping": {
                "setId": "dataset1",
                "eventsSetId": "eventsMap1"
            },
            "drawEntities": ["barChart"],
            "barChart": {
                "columnId": [0],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "proportional",
                "dataAlignToAxis": ["primaryXAxis"],
                "plotMissingValues": "assumeZero",
                "bar": {
                    "width": [400],
                    "fillType": ["color"],
                    "transparency": [0],
                    "gradientType": ["linearTopToBottom"],
                    "gradientRatios": [
                        [0, 20, 50, 100]
                    ],
                    "color": ["0x319349FF", "0x153D4EFF", "0xA20F17FF"],
                    "height": [85],
                    "depth": [14]
                },
                "border": {
                    "visible": false,
                    "line": {
                        "color": ["0xaaaaaaff"],
                        "width": [1],
                        "transparency": [0]
                    }
                },
                "dataLabels": {
                    "visible": true,
                    "indicators": ["numberValue"],
                    "separator": "space",
                    "placement": "inside",
                    "orientationAngle": 0,
                    "font": {
                        "size": [12, 18],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0x81878DFF", "0xFFFFFFFF"],
                        "transparency": [0]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["STARTING BALANCE", "CREDITS", "DEBITS"]
            },
            "columnNames": {
                "values": ["Amount"]
            },
            "data": {
                "Amount": [80, 40, 50]
            }
        },
        "chartEvents": null
    };
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_proportionalBarChart_demo_sample_2 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": null,
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
                    "fillType": "color",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 20, 50, 100],
                    "color": ["0x0B4475FF"]
                }
            },
            "drawArea": {
                "margin": [0, 0, 250, 0],
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
                    "fillType": "gradiant",
                    "transparency": 0,
                    "gradientType": "linearLeftToRight",
                    "gradientRatios": [0, 50, 50, 100],
                    "color": ["0xffffffFF", "0x144068FF", "0x144068FF", "0x02112DFF"]
                }
            },
            "dataSetMapping": {
                "setId": "dataset1",
                "eventsSetId": "eventsMap1"
            },
            "drawEntities": ["barChart"],
            "barChart": {
                "columnId": [0],
                "animations": {
                    "onInitAnimation": true
                },
                "graphType": "proportional",
                "dataAlignToAxis": ["primaryXAxis"],
                "plotMissingValues": "assumeZero",
                "bar": {
                    "width": [400],
                    "fillType": ["color"],
                    "transparency": [0],
                    "gradientType": ["linearTopToBottom"],
                    "gradientRatios": [
                        [0, 20, 50, 100]
                    ],
                    "color": ["0x319349FF", "0xA20F17FF"],
                    "height": [85],
                    "depth": [14]
                },
                "border": {
                    "visible": false,
                    "line": {
                        "color": ["0xaaaaaaff"],
                        "width": [1],
                        "transparency": [0]
                    }
                },
                "dataLabels": {
                    "visible": true,
                    "indicators": ["numberValue"],
                    "separator": "space",
                    "placement": "inside",
                    "orientationAngle": 0,
                    "font": {
                        "size": [12, 18],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0x81878DFF", "0xFFFFFFFF"],
                        "transparency": [0]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["BALANCE", "DEBITS"]
            },
            "columnNames": {
                "values": ["Amount"]
            },
            "data": {
                "Amount": [80, 30]
            }
        },
        "chartEvents": null
    };
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////