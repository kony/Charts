function pieChart3DCatalouge() {
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_3Dpiechart.htm";
    this.pushDemo = function(demoName, demoObject) {
        this.demos.demoNames.push(demoName);
        this.demos.demoObjects.push(demoObject);
    }
    this.pushDemo("Single Series", k_dv_dataviz_pieChart3D_demo_sample_1);
    this.pushDemo("Single Series-Partially Exploded", k_dv_dataviz_pieChart3D_demo_sample_2);
    this.pushDemo("Single Series-Fully Exploded", k_dv_dataviz_pieChart3D_demo_sample_3);
    this.pushDemo("Multi Series", k_dv_dataviz_pieChart3D_demo_sample_4);
    this.pushDemo("Multi Series--Partially Exploded", k_dv_dataviz_pieChart3D_demo_sample_5);
    this.pushDemo("Multi Series-Fully Exploded", k_dv_dataviz_pieChart3D_demo_sample_6);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
var k_dv_dataviz_pieChart3D_demo_sample_1 = function() {
        var chartInfo = {
            "chartProperties": {
                "chartHeight": 67,
                "enableScrolling": false,
                "position": [0, 0, 100, 100],
                "title": {
                    "visible": true,
                    "text": "Single Series: SpinWheel, onTouch indicators",
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
                "drawEntities": ["pieChart3D"],
                "pieChart3D": {
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
                        "fillType": ["gradient"],
                        "gradientType": ["linearTopToBottom"],
                        "transparency": [0],
                        "color": [
                            ["0xf91818ff", "0x980a0aff"],
                            ["0xf31515ff", "0x500b0bff"],
                            ["0xcd3539ff", "0x470305ff"],
                            ["0xe53340ff", "0x6d030bff"],
                            ["0xf415f1ff", "0x460745ff"],
                            ["0xf415f1ff", "0x460745ff"],
                            ["0xf415f1ff", "0x460745ff"],
                            ["0x6253f6ff", "0x0a0538ff"],
                            ["0x6253f6ff", "0x0a0538ff"],
                            ["0x6253f6ff", "0x0a0538ff"]
                        ]
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
                        "placement": "inside",
                        "indicators": ["rowName"],
                        "orientationAngle": 0,
                        "connector": {
                            "visible": true,
                            "line": {
                                "width": [1],
                                "style": ["continuous"],
                                "visible": true,
                                "color": ["aaaaaaff"],
                                "transparency": [0]
                            }
                        },
                        "font": {
                            "family": ["HelveticaNeue"],
                            "style": ["Bold"],
                            "size": [15],
                            "transparency": [0],
                            "color": ["0xffffffff"]
                        }
                    }
                },
                "setZOrderOnTop": false
            },
            "chartData": {
                "rowNames": {
                    "values": ["China", "USA", "Russia", "Britian", "Germany", "Australia", "Korea", "Japan", "Italy", "Ukraine"]
                },
                "columnNames": {
                    "values": ["Amount1", "Amount2"]
                },
                "data": {
                    "Amount1": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20],
                    "Amount2": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20]
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
        return chartInfo;
    };
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_pieChart3D_demo_sample_2 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "Single Series: Partially exploded 3D pie chart",
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
            "drawEntities": ["pieChart3D"],
            "pieChart3D": {
                "columnId": [0],
                "animations": {
                    "onInitAnimation": true
                },
                "spinWheel": true,
                "plotZeroValues": false,
                "plotMissingValues": "assumeZero",
                "direction": "clockWise",
                "startAngle": 0,
                "exploded": true,
                "pieSlice": {
                    "explodedIndex": [4],
                    "fillType": ["gradient"],
                    "gradientType": ["linearTopToBottom"],
                    "transparency": [0],
                    "color": [
                        ["0xf91818ff", "0x980a0aff"],
                        ["0xf31515ff", "0x500b0bff"],
                        ["0xcd3539ff", "0x470305ff"],
                        ["0xe53340ff", "0x6d030bff"],
                        ["0xf415f1ff", "0x460745ff"],
                        ["0xf415f1ff", "0x460745ff"],
                        ["0xf415f1ff", "0x460745ff"],
                        ["0x6253f6ff", "0x0a0538ff"],
                        ["0x6253f6ff", "0x0a0538ff"],
                        ["0x6253f6ff", "0x0a0538ff"]
                    ]
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
                    "placement": "inside",
                    "indicators": ["rowName"],
                    "orientationAngle": 0,
                    "connector": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "style": ["continuous"],
                            "visible": true,
                            "color": ["aaaaaaff"],
                            "transparency": [0]
                        }
                    },
                    "font": {
                        "family": ["HelveticaNeue"],
                        "style": ["Bold"],
                        "size": [15],
                        "transparency": [0],
                        "color": ["0xffffffff"]
                    }
                }
            },
            "setZOrderOnTop": false
        },
        "chartData": {
            "rowNames": {
                "values": ["China", "USA", "Russia", "Britian", "Germany", "Australia", "Korea", "Japan", "Italy", "Ukraine"]
            },
            "columnNames": {
                "values": ["Amount1", "Amount2"]
            },
            "data": {
                "Amount1": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20],
                "Amount2": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20]
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
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
var k_dv_dataviz_pieChart3D_demo_sample_3 = function() {
        var chartInfo = {
            "chartProperties": {
                "chartHeight": 67,
                "enableScrolling": false,
                "position": [0, 0, 100, 100],
                "title": {
                    "visible": true,
                    "text": "Single Series: Fully exploded 3D pie chart",
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
                "drawEntities": ["pieChart3D"],
                "pieChart3D": {
                    "columnId": [0],
                    "animations": {
                        "onInitAnimation": false
                    },
                    "spinWheel": true,
                    "plotZeroValues": false,
                    "plotMissingValues": "assumeZero",
                    "direction": "clockWise",
                    "startAngle": 0,
                    "exploded": true,
                    "pieSlice": {
                        "fillType": ["gradient"],
                        "gradientType": ["linearTopToBottom"],
                        "transparency": [0],
                        "color": [
                            ["0xf91818ff", "0x980a0aff"],
                            ["0xf31515ff", "0x500b0bff"],
                            ["0xcd3539ff", "0x470305ff"],
                            ["0xe53340ff", "0x6d030bff"],
                            ["0xf415f1ff", "0x460745ff"],
                            ["0xf415f1ff", "0x460745ff"],
                            ["0xf415f1ff", "0x460745ff"],
                            ["0x6253f6ff", "0x0a0538ff"],
                            ["0x6253f6ff", "0x0a0538ff"],
                            ["0x6253f6ff", "0x0a0538ff"]
                        ]
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
                        "placement": "inside",
                        "indicators": ["rowName"],
                        "orientationAngle": 0,
                        "connector": {
                            "visible": true,
                            "line": {
                                "width": [1],
                                "style": ["continuous"],
                                "visible": true,
                                "color": ["aaaaaaff"],
                                "transparency": [0]
                            }
                        },
                        "font": {
                            "family": ["HelveticaNeue"],
                            "style": ["Bold"],
                            "size": [15],
                            "transparency": [0],
                            "color": ["0xffffffff"]
                        }
                    }
                },
                "setZOrderOnTop": false
            },
            "chartData": {
                "rowNames": {
                    "values": ["China", "USA", "Russia", "Britian", "Germany", "Australia", "Korea", "Japan", "Italy", "Ukraine"]
                },
                "columnNames": {
                    "values": ["Amount1", "Amount2"]
                },
                "data": {
                    "Amount1": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20],
                    "Amount2": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20]
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
        return chartInfo;
    };
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_pieChart3D_demo_sample_4 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "Multi Series: SpinWheel, onTouch indicators",
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
            "drawEntities": ["pieChart3D"],
            "pieChart3D": {
                "columnId": [0, 1],
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
                    "fillType": ["gradient"],
                    "gradientType": ["linearTopToBottom"],
                    "transparency": [0],
                    "color": [
                        ["0xf91818ff", "0x980a0aff"],
                        ["0xf31515ff", "0x500b0bff"],
                        ["0xcd3539ff", "0x470305ff"],
                        ["0xe53340ff", "0x6d030bff"],
                        ["0xf415f1ff", "0x460745ff"],
                        ["0xf415f1ff", "0x460745ff"],
                        ["0xf415f1ff", "0x460745ff"],
                        ["0x6253f6ff", "0x0a0538ff"],
                        ["0x6253f6ff", "0x0a0538ff"],
                        ["0x6253f6ff", "0x0a0538ff"]
                    ]
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
                    "placement": "inside",
                    "indicators": ["rowName"],
                    "orientationAngle": 0,
                    "connector": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "style": ["continuous"],
                            "visible": true,
                            "color": ["aaaaaaff"],
                            "transparency": [0]
                        }
                    },
                    "font": {
                        "family": ["HelveticaNeue"],
                        "style": ["Bold"],
                        "size": [15],
                        "transparency": [0],
                        "color": ["0xffffffff"]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["China", "USA", "Russia", "Britian", "Germany", "Australia", "Korea", "Japan", "Italy", "Ukraine"]
            },
            "columnNames": {
                "values": ["Amount1", "Amount2"]
            },
            "data": {
                "Amount1": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20],
                "Amount2": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20]
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
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_pieChart3D_demo_sample_5 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "Multi Series: Partially exploded 3D pie chart",
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
            "drawEntities": ["pieChart3D"],
            "pieChart3D": {
                "columnId": [0, 1],
                "animations": {
                    "onInitAnimation": true
                },
                "spinWheel": true,
                "plotZeroValues": false,
                "plotMissingValues": "assumeZero",
                "direction": "clockWise",
                "startAngle": 0,
                "exploded": true,
                "pieSlice": {
                    "explodedIndex": [8],
                    "fillType": ["gradient"],
                    "gradientType": ["linearTopToBottom"],
                    "transparency": [0],
                    "color": [
                        ["0xf91818ff", "0x980a0aff"],
                        ["0xf31515ff", "0x500b0bff"],
                        ["0xcd3539ff", "0x470305ff"],
                        ["0xe53340ff", "0x6d030bff"],
                        ["0xf415f1ff", "0x460745ff"],
                        ["0xf415f1ff", "0x460745ff"],
                        ["0xf415f1ff", "0x460745ff"],
                        ["0x6253f6ff", "0x0a0538ff"],
                        ["0x6253f6ff", "0x0a0538ff"],
                        ["0x6253f6ff", "0x0a0538ff"]
                    ]
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
                    "placement": "inside",
                    "indicators": ["rowName"],
                    "orientationAngle": 0,
                    "connector": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "style": ["continuous"],
                            "visible": true,
                            "color": ["aaaaaaff"],
                            "transparency": [0]
                        }
                    },
                    "font": {
                        "family": ["HelveticaNeue"],
                        "style": ["Bold"],
                        "size": [15],
                        "transparency": [0],
                        "color": ["0xffffffff"]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["China", "USA", "Russia", "Britian", "Germany", "Australia", "Korea", "Japan", "Italy", "Ukraine"]
            },
            "columnNames": {
                "values": ["Amount1", "Amount2"]
            },
            "data": {
                "Amount1": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20],
                "Amount2": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20]
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
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_pieChart3D_demo_sample_6 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "Multi Series: Fully exploded 3D pie chart",
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
            "drawEntities": ["pieChart3D"],
            "pieChart3D": {
                "columnId": [0, 1],
                "animations": {
                    "onInitAnimation": false
                },
                "spinWheel": true,
                "plotZeroValues": false,
                "plotMissingValues": "assumeZero",
                "direction": "clockWise",
                "startAngle": 0,
                "exploded": true,
                "pieSlice": {
                    "fillType": ["gradient"],
                    "gradientType": ["linearTopToBottom"],
                    "transparency": [0],
                    "color": [
                        ["0xf91818ff", "0x980a0aff"],
                        ["0xf31515ff", "0x500b0bff"],
                        ["0xcd3539ff", "0x470305ff"],
                        ["0xe53340ff", "0x6d030bff"],
                        ["0xf415f1ff", "0x460745ff"],
                        ["0xf415f1ff", "0x460745ff"],
                        ["0xf415f1ff", "0x460745ff"],
                        ["0x6253f6ff", "0x0a0538ff"],
                        ["0x6253f6ff", "0x0a0538ff"],
                        ["0x6253f6ff", "0x0a0538ff"]
                    ]
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
                    "placement": "inside",
                    "indicators": ["rowName"],
                    "orientationAngle": 0,
                    "connector": {
                        "visible": true,
                        "line": {
                            "width": [1],
                            "style": ["continuous"],
                            "visible": true,
                            "color": ["aaaaaaff"],
                            "transparency": [0]
                        }
                    },
                    "font": {
                        "family": ["HelveticaNeue"],
                        "style": ["Bold"],
                        "size": [15],
                        "transparency": [0],
                        "color": ["0xffffffff"]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["China", "USA", "Russia", "Britian", "Germany", "Australia", "Korea", "Japan", "Italy", "Ukraine"]
            },
            "columnNames": {
                "values": ["Amount1", "Amount2"]
            },
            "data": {
                "Amount1": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20],
                "Amount2": [70, 70, 50, 30, 20, 23, 18, 15, 18, 20]
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
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////