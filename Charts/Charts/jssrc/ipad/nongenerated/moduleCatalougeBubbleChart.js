function bubbleChartCatalouge() {
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_bubblechart.htm";
    this.pushDemo = function(demoName, demoObject) {
        this.demos.demoNames.push(demoName);
        this.demos.demoObjects.push(demoObject);
    }
    this.pushDemo("PlotPoints Marker-Bubble", k_dv_dataviz_bubbleChart_demo_sample_1);
    this.pushDemo("PlotPoints Marker-Square", k_dv_dataviz_bubbleChart_demo_sample_2);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
var k_dv_dataviz_bubbleChart_demo_sample_1 = function() {
        var chartInfo = {
            "chartProperties": {
                "chartHeight": 67,
                "enableScrolling": false,
                "position": [0, 0, 100, 100],
                "title": {
                    "text": "BubbleChart: onPinchZoom and onTouch indicators",
                    "font": {
                        "size": [14],
                        "family": ["Verdana"],
                        "style": ["Bold"],
                        "color": ["0x000000ff"],
                        "transparency": [0]
                    },
                    "position": "top",
                    "alignment": "right",
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
                "layerArea": {
                    "background": {
                        "fillType": "gradient",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 100],
                        "color": ["0xAAAEB9FF", "0xF4F5F7FF"]
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
                            "gap": 150,
                            "offset": {
                                "value": [50, 50],
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
                                "size": [14],
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
                            },
                            "placement": "atLabels"
                        }
                    },
                    "yAxis": {
                        "scale": {
                            "offset": {
                                "value": [50, 50],
                                "type": "pixels"
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
                "drawEntities": ["axis", "grid", "bubbleChart"],
                "bubbleChart": {
                    "columnId": [0, 1],
                    "animations": {
                        "onInitAnimation": true
                    },
                    "plotMissingValues": "assumeZero",
                    "plotPoints": {
                        "marker": {
                            "type": ["bubble"],
                            "fillType": "color"
                        },
                        "color": ["0x4410c2ff", "0xe21926ff", "0xbb7e17ff", "0xdb9cd3ff", "0xe6550dff", "0xc3d021ff", "0xd53e37ff", "0x29c1cfff", "0x007877ff", "0x96bfdfff", "0x1281c3ff", "0xe01b08ff", "0x7dc41bff", "0xfc7f0eff", "0x725595ff", "0x32a3c3ff"],
                        "transparency": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        "size": [120],
                        "colorIndicator": "rows"
                    }
                }
            },
            "chartData": {
                "rowNames": {
                    "values": ["01/2011", "02/2011", "03/2011", "04/2011", "05/2011", "06/2011", "07/2011", "08/2011", "09/2011", "10/2011", "11/2011", "12/2011", "01/2012", "02/2012", "03/2012", "04/2012"]
                },
                "columnNames": {
                    "values": ["Debit", "Credit"]
                },
                "data": {
                    "Debit": [300, 400, 500, 600, 1200, 1500, 1100, 1300, 345, 789, 50, 100, 56, 152, 67, 111],
                    "Credit": [100, 700, 300, 800, 900, 1100, 400, 800, 745, 989, 500, 400, 560, 652, 670, 1110]
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
                                "color": ["0xd53e37ff"],
                                "transparency": [0]
                            }
                        },
                        "border": {
                            "visible": true,
                            "line": {
                                "color": ["0xd53e37ff"],
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
                    }
                }
            }
        };
        return chartInfo;
    };
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
k_dv_dataviz_bubbleChart_demo_sample_2 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "BubbleChart: onPinchZoom and onTouch indicators",
                "font": {
                    "size": [14],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0x000000ff"],
                    "transparency": [0]
                },
                "position": "top",
                "alignment": "right",
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
            "layerArea": {
                "background": {
                    "fillType": "gradient",
                    "transparency": 0,
                    "gradientType": "linearTopToBottom",
                    "gradientRatios": [0, 100],
                    "color": ["0xAAAEB9FF", "0xF4F5F7FF"]
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
                        "gap": 150,
                        "offset": {
                            "value": [50, 50],
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
                            "size": [14],
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
                        },
                        "placement": "atLabels"
                    }
                },
                "yAxis": {
                    "scale": {
                        "offset": {
                            "value": [50, 50],
                            "type": "pixels"
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
                                "color": ["0x00000ff"]
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
                    "line": {
                        "color": ["0xaaaaaa20"]
                    }
                },
                "yAxisMajorGrid": {
                    "line": {
                        "color": ["0xaaaaaa20"]
                    }
                }
            },
            "drawEntities": ["axis", "grid", "bubbleChart"],
            "bubbleChart": {
                "columnId": [0, 1],
                "animations": {
                    "onInitAnimation": true
                },
                "plotMissingValues": "assumeZero",
                "plotPoints": {
                    "marker": {
                        "type": ["square"],
                        "fillType": "color"
                    },
                    "color": ["0x4410c2ff", "0xe21926ff", "0xbb7e17ff", "0xdb9cd3ff", "0xe6550dff", "0xc3d021ff", "0xd53e37ff", "0x29c1cfff", "0x007877ff", "0x96bfdfff", "0x1281c3ff", "0xe01b08ff", "0x7dc41bff", "0xfc7f0eff", "0x725595ff", "0x32a3c3ff"],
                    "transparency": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    "size": [100],
                    "colorIndicator": "rows"
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["01/2011", "02/2011", "03/2011", "04/2011", "05/2011", "06/2011", "07/2011", "08/2011", "09/2011", "10/2011", "11/2011", "12/2011", "01/2011", "02/2011", "03/2011", "04/2011"]
            },
            "columnNames": {
                "values": ["Debit", "Credit"]
            },
            "data": {
                "Debit": [300, 400, 500, 600, 1200, 1500, 1100, 1300, 345, 789, 50, 100, 56, 152, 67, 111],
                "Credit": [1000, 700, 300, 800, 900, 1100, 400, 800, 745, 989, 500, 400, 560, 652, 670, 1110]
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
                            "color": ["0x4410c2ff"],
                            "transparency": [0]
                        }
                    },
                    "border": {
                        "visible": true,
                        "line": {
                            "color": ["0x4410c2ff"],
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
                }
            }
        }
    };
    return chartInfo;
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////