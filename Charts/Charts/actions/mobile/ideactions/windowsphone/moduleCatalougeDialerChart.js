function dialerChartCatalouge() {
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_dialerchart.htm";
    this.pushDemo = function(demoName, demoObject) {
        this.demos.demoNames.push(demoName);
        this.demos.demoObjects.push(demoObject);
    }
    this.pushDemo("Single Axis", k_dv_dataviz_dialerChart_demo_sample_1);
    this.pushDemo("Half Dial", k_dv_dataviz_dialerChart_demo_sample_2);
    this.pushDemo("Dual Axis", k_dv_dataviz_dialerChart_demo_sample_3);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_dialerChart_demo_sample_1 = function() {
    var chartInfo = {
        "chartProperties": {
            "position": [0, 0, 100, 100],
            "drawEntities": ["dialerChart"],
            "chartHeight": 67,
            "enableScrolling": false,
            "dataSetMapping": {
                "eventsSetId": "eventsMap1",
                "setId": "dataset1",
                "seriesType": "singleSeries"
            },
            "title": {
                "visible": true,
                "text": "Dial Chart with borders",
                "font": {
                    "size": [16],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0x333333ff"],
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
            "dialerChart": {
                "radius": 90,
                "columnId": [0],
                "viewArea": "leftHalff",
                "background": {
                    "visible": true,
                    "fillType": "gradient",
                    "transparency": 50,
                    "color": ["0x00ffffff", "0x0000ffff"]
                },
                "borders": [{
                    "radius": 100,
                    "width": 5,
                    "fillType": "gradient",
                    "transparency": 0,
                    "color": ["0x6699ccFF", "0x2053a8FF"]
                }, {
                    "radius": 95,
                    "width": 5,
                    "fillType": "gradient",
                    "transparency": 0,
                    "color": ["0x2053a8FF", "0x6699ccFF"]
                }, {
                    "radius": 90,
                    "width": 6,
                    "fillType": "gradient",
                    "transparency": 0,
                    "color": ["0xffffffff", "0x487a4eff"]
                }],
                "labels": [{
                    "text": "",
                    "position": "str",
                    "orientationAngle": 0,
                    "font": {
                        "style": ["normal"],
                        "size": [30],
                        "transparency": [0],
                        "color": ["0xff0000ff"]
                    }
                }, {
                    "text": "",
                    "position": [36, 35],
                    "orientationAngle": -55,
                    "font": {
                        "family": ["Verdana"],
                        "style": ["bold"],
                        "size": [17],
                        "transparency": [0],
                        "color": ["0xffff00ff"]
                    }
                }],
                "axis": ["axisOne"],
                "axisOne": {
                    "visible": true,
                    "radius": 75,
                    "startAngle": 30,
                    "endAngle": 330,
                    "startValue": 0,
                    "endValue": 500,
                    "majorIntervals": 10,
                    "minorIntervals": 6,
                    "intervalMarks": {
                        "visible": true,
                        "major": {
                            "visible": true,
                            "placement": "outsideAxis",
                            "length": -2.3,
                            "line": {
                                "width": [2],
                                "color": ["0x000000ff"],
                                "transparency": [30]
                            },
                            "labels": {
                                "visible": true,
                                "placement": "insideAxis",
                                "gap": 0,
                                "orientationAngle": 0,
                                "font": {
                                    "family": ["Verdana"],
                                    "style": ["normal"],
                                    "size": [12],
                                    "transparency": [0],
                                    "color": ["0x000000ff"]
                                }
                            }
                        },
                        "minor": {
                            "visible": true,
                            "placement": "outsideAxis",
                            "length": -1,
                            "line": {
                                "width": [1],
                                "color": ["0x000000ff"],
                                "transparency": [30]
                            },
                            "labels": {
                                "visible": false,
                                "placement": "insideAxis",
                                "gap": 0,
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
                    },
                    "pointer": {
                        "visible": true,
                        "radius": 75,
                        "border": {
                            "visible": true,
                            "line": {
                                "color": ["0x8e88ffff"],
                                "width": [2],
                                "transparency": [0]
                            }
                        },
                        "background": {
                            "visible": true,
                            "fillType": "color",
                            "transparency": 0,
                            "color": ["0xaeaaffff"]
                        }
                    },
                    "lineVisible": true,
                    "lineWidth": 5,
                    "lineTransparency": 0,
                    "lineFillType": "gradient",
                    "lineColors": [{
                        "fromAngle": 30,
                        "toAngle": 330,
                        "color": ["0x9ea8ffff"]
                    }]
                },
                "animations": {
                    "onInitAnimation": true
                }
            }
        },
        "chartData": {
            "columnNames": {
                "values": ["Amount1"]
            },
            "data": {
                "Amount1": [30]
            },
            "rowNames": {
                "values": ["aa", "bbbbb", "abc", "Britian", "Germany", "Australia", "Korea", "", "Italy", "Ukraine"]
            }
        },
        "chartEvents": {}
    };
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_dialerChart_demo_sample_2 = function() {
    var chartInfo = {
        "chartProperties": {
            "position": [0, 0, 100, 100],
            "drawEntities": ["dialerChart"],
            "chartHeight": 67,
            "enableScrolling": false,
            "dataSetMapping": {
                "eventsSetId": "eventsMap1",
                "setId": "dataset1",
                "seriesType": "singleSeries"
            },
            "title": {
                "visible": true,
                "text": "Half Dial Chart",
                "font": {
                    "size": [16],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0x333333ff"],
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
            "dialerChart": {
                "radius": 100,
                "viewArea": "topHalf",
                "background": {
                    "transparency": 100
                },
                "axis": ["axisOne"],
                "axisOne": {
                    "visible": true,
                    "radius": 70,
                    "startValue": 10,
                    "endValue": 40,
                    "majorIntervals": 3,
                    "minorIntervals": 5,
                    "startAngle": 90,
                    "endAngle": 270,
                    "lineWidth": 40,
                    "lineColors": [{
                        "fromAngle": 90,
                        "toAngle": 140,
                        "color": "0x00c876ff"
                    }, {
                        "fromAngle": 140,
                        "toAngle": 190,
                        "color": "0x20d6b2ff"
                    }, {
                        "fromAngle": 190,
                        "toAngle": 270,
                        "color": "0x0092b6ff"
                    }],
                    "intervalMarks": {
                        "visible": true,
                        "major": {
                            "visible": true,
                            "placement": "outsideAxis",
                            "length": -3,
                            "line": {
                                "width": [3],
                                "color": ["0x000000ff"],
                                "transparency": [0]
                            },
                            "labels": {
                                "visible": true,
                                "placement": "outsideAxis",
                                "gap": 0,
                                "orientationAngle": 0,
                                "font": {
                                    "family": ["Verdana"],
                                    "style": ["normal"],
                                    "size": [14],
                                    "transparency": [0],
                                    "color": ["0x000000ff"]
                                }
                            }
                        },
                        "minor": {
                            "visible": true,
                            "placement": "outsideAxis",
                            "length": -1.5,
                            "line": {
                                "width": [1],
                                "color": ["0x000000ff"],
                                "transparency": [0]
                            },
                            "labels": {
                                "visible": false
                            }
                        }
                    },
                    "pointer": {
                        "visible": true,
                        "radius": 66,
                        "borderLine": {
                            "width": [2],
                            "visible": true,
                            "color": ["0x000000ff"],
                            "transparency": [50]
                        },
                        "background": {
                            "visible": true,
                            "fillType": "gradient",
                            "color": ["0x00c876ff", "0xffffffff"]
                        }
                    }
                }
            }
        },
        "chartData": {
            "columnNames": {
                "values": ["Amount1"]
            },
            "data": {
                "Amount1": [16]
            },
            "rowNames": {
                "values": ["aa", "bbbbb", "abc", "Britian", "Germany", "Australia", "Korea", "", "Italy", "Ukraine"]
            }
        },
        "chartEvents": {}
    };
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
var k_dv_dataviz_dialerChart_demo_sample_3 = function() {
    var chartInfo = {
        "chartProperties": {
            "drawEntities": ["dialerChart"],
            "chartHeight": 67,
            "title": {
                "visible": true,
                "text": "Dial Chart with dual axis",
                "font": {
                    "size": [16],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0x333333ff"],
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
            "dialerChart": {
                "radius": 90,
                "columnId": [0, 1],
                "background": {
                    "fillType": "gradient",
                    "transparency": 50,
                    "color": ["0x00ffffff", "0x0000ffff"]
                },
                "axis": ["axisOne", "axisTwo"],
                "axisOne": {
                    "visible": true,
                    "radius": 75,
                    "startAngle": 30,
                    "endAngle": 330,
                    "startValue": 0,
                    "endValue": 500,
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
                                "placement": "insideAxis",
                                "font": {
                                    "family": ["Verdana"],
                                    "size": [12]
                                }
                            }
                        },
                        "minor": {
                            "visible": false
                        }
                    },
                    "pointer": {
                        "radius": 75,
                        "border": {
                            "line": {
                                "color": ["0x8e88ffff"],
                                "width": [2]
                            }
                        },
                        "background": {
                            "color": ["0xaeaaffff"]
                        }
                    },
                    "lineWidth": 5,
                    "lineColors": [{
                        "fromAngle": 30,
                        "toAngle": 330,
                        "color": ["0x9ea8ffff"]
                    }]
                },
                "axisTwo": {
                    "visible": true,
                    "radius": 50,
                    "startAngle": 30,
                    "endAngle": 330,
                    "startValue": 0,
                    "endValue": 100,
                    "majorIntervals": 10,
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
                                "placement": "insideAxis",
                                "font": {
                                    "family": ["Verdana"],
                                    "size": [12]
                                }
                            }
                        },
                        "minor": {
                            "visible": false
                        }
                    },
                    "pointer": {
                        "radius": 50,
                        "border": {
                            "line": {
                                "color": ["0xff00ffff"],
                                "transparency": [30],
                                "width": [2]
                            }
                        },
                        "background": {
                            "transparency": 40,
                            "color": ["0xff00ffff"]
                        }
                    },
                    "lineWidth": 5,
                    "lineTransparency": 50,
                    "lineColors": [{
                        "fromAngle": 30,
                        "toAngle": 330,
                        "color": ["0xff00ffff"]
                    }]
                }
            }
        },
        "chartData": {
            "columnNames": {
                "values": ["Amount1", "Amount2"]
            },
            "data": {
                "Amount1": [200],
                "Amount2": [10]
            },
            "rowNames": {
                "values": ["aaa"]
            }
        }
    };
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////