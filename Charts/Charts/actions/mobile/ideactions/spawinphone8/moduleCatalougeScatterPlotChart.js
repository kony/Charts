function scatterPlotChartCatalouge() {
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_scatterplotchart.htm";
    this.pushDemo = function(demoName, demoObject) {
        this.demos.demoNames.push(demoName);
        this.demos.demoObjects.push(demoObject);
    }
    this.pushDemo("Example 1", k_dv_dataviz_scatterPlotChart_demo_sample_1);
    this.pushDemo("Example 2", k_dv_dataviz_scatterPlotChart_demo_sample_2);
    this.pushDemo("Example 3", k_dv_dataviz_scatterPlotChart_demo_sample_3);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
var k_dv_dataviz_scatterPlotChart_demo_sample_1 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "ScatterPlot with onPinchZoom and onTouch indicators",
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
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"]
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
            "drawEntities": ["axis", "grid", "scatterPlotChart"],
            "scatterPlotChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "plotMissingValues": "assumeZero",
                "plotPoints": {
                    "colorIndicator": "columns",
                    "marker": {
                        "type": ["bubble"],
                        "fillType": "color"
                    },
                    "color": ["0x1281c3ff", "0xe21926ff", "0x7dc41bff", "0xbb7e17ff", "0xdb9cd3ff", "0xe6550dff", "0xc3d021ff", "0xd53e37ff", "0x29c1cfff", "0x007877ff", "0x96bfdfff", "0x1281c3ff", "0xe01b08ff", "0xfc7f0eff", "0x725595ff", "0x4410c2ff", "0x32a3c3ff"],
                    "transparency": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    "size": [30, 30, 30]
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
                            "color": ["0xAAAAAAFF"]
                        }
                    },
                    "dataLabels": {
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0x1281c3ff"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0x1281c3ff"]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 30, 40, 70, 100],
                        "color": ["0x555555ff", "0xeeeeeeff", "0xffffffff", "0xeeeeeeff", "0x555555ff"]
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
k_dv_dataviz_scatterPlotChart_demo_sample_2 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": false,
            "position": [0, 0, 100, 100],
            "title": {
                "visible": true,
                "text": "ScatterPlot with onPinchZoom and onTouch indicators",
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
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"]
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
            "drawEntities": ["axis", "grid", "scatterPlotChart"],
            "scatterPlotChart": {
                "columnId": [0, 1, 2],
                "animations": {
                    "onInitAnimation": true
                },
                "plotMissingValues": "assumeZero",
                "plotPoints": {
                    "colorIndicator": "rows",
                    "marker": {
                        "type": ["bubble"],
                        "fillType": "color"
                    },
                    "color": ["0x1281c3ff", "0xe21926ff", "0x7dc41bff", "0xbb7e17ff", "0xdb9cd3ff", "0xe6550dff", "0xc3d021ff", "0xd53e37ff", "0x29c1cfff", "0x007877ff", "0x96bfdfff", "0x1281c3ff", "0xe01b08ff", "0xfc7f0eff", "0x725595ff", "0x4410c2ff", "0x32a3c3ff"],
                    "transparency": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    "size": [30, 30, 30]
                }
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
                            "color": ["0xaaaaaaff"],
                            "width": [1],
                            "transparency": [0]
                        }
                    },
                    "dataLabels": {
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0x1281c3ff"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0x1281c3ff"]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 30, 40, 70, 100],
                        "color": ["0x555555ff", "0xeeeeeeff", "0xffffffff", "0xeeeeeeff", "0x555555ff"]
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
k_dv_dataviz_scatterPlotChart_demo_sample_3 = function() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "enableScrolling": true,
            "position": [0, 0, 100, 100],
            "title": null,
            "legend": {
                "indicators": ["marker", "textLabel"],
                "separator": "space",
                "marker": {
                    "type": "colorCircle",
                    "color": ["0x85BC4DFF", "0x03B1FFFF"]
                },
                "textLabel": {
                    "text": ["Payment", "Transfer"],
                    "color": ["0xA8C7E3FF", "0xA8C7E3FF"],
                    "margin": [3, 5, 1, 1]
                },
                "font": {
                    "size": [14],
                    "family": ["Verdana"],
                    "style": ["Bold"],
                    "color": ["0xaaaaaaff"],
                    "transparency": [0]
                },
                "position": "bottom",
                "alignment": "left",
                "layout": "horizantal",
                "containerWt": 8,
                "margin": [10, 10, 10, 10],
                "padding": [1, 1, 1, 1]
            },
            "layerArea": {
                "background": {
                    "fillType": "color",
                    "color": ["0x0B4475FF"]
                }
            },
            "drawArea": {
                "margin": [20, 20, 0, 0],
                "border": {
                    "line": {
                        "color": ["0xaaaaaaff"]
                    }
                },
                "background": {
                    "fillType": "gradient",
                    "gradientType": "linearLeftToRight",
                    "gradientRatios": [0, 50, 50, 100],
                    "color": ["0x02112DFF", "0x144068FF", "0x144068FF", "0x02112DFF"]
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
                        "gap": 75,
                        "offset": {
                            "value": [1, 0],
                            "type": "numberOfIntervals"
                        }
                    },
                    "axisLine": {
                        "line": {
                            "color": ["0x000000ff"]
                        }
                    },
                    "labels": {
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xA8C7E3FF"]
                        }
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0xA8C7E3FF"]
                            }
                        }
                    }
                },
                "yAxis": {
                    "scale": {
                        "offset": {
                            "value": [1, 0],
                            "type": "numberOfIntervals"
                        }
                    },
                    "axisLine": {
                        "crossOtherAxisAt": "value",
                        "line": {
                            "color": ["0x000000ff"]
                        }
                    },
                    "labels": {
                        "format": {
                            "prefix": ["$"],
                            "suffix": [""]
                        },
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["Bold"],
                            "color": ["0xA8C7E3FF"]
                        }
                    },
                    "intervalMarks": {
                        "major": {
                            "visible": true,
                            "position": "outer",
                            "line": {
                                "color": ["0xA8C7E3FF"]
                            }
                        }
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "yAxisMajorGrid", "xAxisMinorGrid", "yAxisMinorGrid"]
            },
            "drawEntities": ["axis", "grid", "scatterPlotChart"],
            "scatterPlotChart": {
                "columnId": [0, 1],
                "animations": {
                    "onInitAnimation": true
                },
                "dataAlignToAxis": ["primaryYAxis"],
                "plotMissingValues": "assumeZero",
                "plotPoints": {
                    "marker": {
                        "type": ["bubble"]
                    },
                    "color": ["0x85BC4DFF", "0x03B1FFFF"],
                    "size": [25, 25]
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Jun1", "Jun2", "Jun3", "Jun4", "Jun5", "Jun6", "Jun7", "Jun8", "Jun9", "Jun10", "Jun11", "Jun12", "Jun13", "Jun14", "Jun15", "Jun16", "Jun17", "Jun18", "Jun19", "Jun20", "Jun21", "Jun22", "Jun23", "Jun24", "Jun25", "Jun26", "Jun27", "Jun28"]
            },
            "columnNames": {
                "values": ["Payment", "Transfer"]
            },
            "data": {
                "Payment": [400, 350, 500, 14700, 5100, 3750, 2200, 1200, 100, 300, 2550, 6000, 5000, 2400, 150, 3040, 1000, 4350, 3440, 2240, 6000, 3240, 1250, 700, 3550, 5555, 2000, 700],
                "Transfer": [17500, 4959, 2050, 1600, 14907, 16100, 6500, 13100, 5900, 3500, 12700, 4100, 13100, 17300, 4050, 2900, 13200, 17400, 2600, 1200, 9938, 6200, 65, 4400, 5200, 4700, 1500, 1300]
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
                            "width": [1],
                            "transparency": [0]
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
                            "color": ["0x000000ff"]
                        }
                    },
                    "background": {
                        "fillType": "gradient",
                        "transparency": 0,
                        "gradientType": "linearTopToBottom",
                        "gradientRatios": [0, 50, 50, 100],
                        "color": ["0x02112DFF", "0x144068FF", "0x144068FF", "0x02112DFF"]
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