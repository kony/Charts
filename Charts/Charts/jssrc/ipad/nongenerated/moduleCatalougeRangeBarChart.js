function rangeBarChartCatalouge() {
    this.demos = {};
    this.demos.demoNames = [];
    this.demos.demoObjects = [];
    this.demos.docURL = "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Content/Chart_rangebarchart.htm";
    this.pushDemo = function(demoName, demoObject) {
        this.demos.demoNames.push(demoName);
        this.demos.demoObjects.push(demoObject);
    }
    this.pushDemo("Single Series", k_dv_dataviz_rangebarchart_demo_1);
    this.pushDemo("Multi Series", k_dv_dataviz_rangebarchart_demo_2);
};
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
function k_dv_dataviz_rangebarchart_demo_1() {
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 67,
            "title": {
                "text": "Mean Min & Max Temperatures in Hyderabad from Jan to Dec",
                "font": {
                    "size": [20],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0x5A8000FF"]
                },
                "containerWt": 10,
                "background": {
                    "color": ["0xffffffff"]
                }
            },
            "layerArea": {
                "background": {
                    "color": ["0xffffffff"]
                }
            },
            "axis": {
                "xAxis": {
                    "title": {
                        "text": "Temperature in Centigrade",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x393939ff"]
                        }
                    },
                    "scale": {
                        "minValue": 10,
                        "maxValue": 50,
                        "majorInterval": 5
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
                        "format": {
                            "prefix": [""],
                            "suffix": ["C"]
                        }
                    }
                },
                "yAxis": {
                    "title": {
                        "text": "Months",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x393939ff"]
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
            "drawEntities": ["axis", "grid", "rangeBarChart"],
            "rangeBarChart": {
                "columnId": [0, 1],
                "animations": {
                    "onInitAnimation": true
                },
                "bar": {
                    "color": ["0x5A8000FF"]
                },
                "dataLabels": {
                    "placement": "outside",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0x393939ff"]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            "columnNames": {
                "values": ["Min Temperature", "Max Temperature"]
            },
            "data": {
                "Min Temperature": [15.2, 17.6, 20.8, 24.3, 26.2, 24.0, 22.6, 22.1, 22.0, 20.3, 16.9, 14.5],
                "Max Temperature": [28.8, 31.9, 35.4, 37.9, 39.0, 34.5, 30.8, 29.8, 30.5, 30.6, 29.0, 28.0]
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
                        "indicators": ["columnName", "rowName", "numberValue"],
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x5A8000FF"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0x5A8000FF", "0x5A8000FF"]
                        }
                    },
                    "background": {
                        "color": ["0xFFFFFFff"]
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
function k_dv_dataviz_rangebarchart_demo_2() {
    var chartInfo = {
        "chartProperties": {
            "enableScrolling": true,
            "chartHeight": 67,
            "title": {
                "text": "Mean Min & Max Temperatures in 3 Major Cities - Jan to Dec",
                "font": {
                    "size": [20],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0x393939ff"]
                },
                "containerWt": 10,
                "background": {
                    "color": ["0xffffffff"]
                }
            },
            "legend": {
                "indicators": ["marker", "textLabel"],
                "marker": {
                    "type": "colorBox",
                    "color": ["0x5A8000FF", "0x800400FF", "0x002F80FF"]
                },
                "textLabel": {
                    "text": ["Hyderabad", "Banglore", "Chennai"],
                    "color": ["0x393939ff", "0x393939ff", "0x393939ff"],
                    "margin": [5, 5, 0, 0]
                },
                "font": {
                    "size": [12],
                    "family": ["Verdana"],
                    "style": ["normal"],
                    "color": ["0x393939ff"]
                },
                "position": "bottom",
                "alignment": "right",
                "layout": "horizantal",
                "containerWt": 8,
                "margin": [10, 10, 10, 10]
            },
            "layerArea": {
                "background": {
                    "color": ["0xffffffff"]
                }
            },
            "axis": {
                "xAxis": {
                    "title": {
                        "text": "Temperature in Centigrade",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x393939ff"]
                        }
                    },
                    "scale": {
                        "minValue": 10,
                        "maxValue": 50,
                        "majorInterval": 5
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
                        "format": {
                            "prefix": [""],
                            "suffix": ["C"]
                        }
                    }
                },
                "yAxis": {
                    "title": {
                        "text": "Months",
                        "font": {
                            "size": [14],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x393939ff"]
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
            "drawEntities": ["axis", "grid", "rangeBarChart"],
            "rangeBarChart": {
                "columnId": [0, 1, 2, 3, 4, 5],
                "animations": {
                    "onInitAnimation": true
                },
                "bar": {
                    "color": [
                        ["0x5A8000FF"],
                        ["0x800400FF"],
                        ["0x002F80FF"]
                    ]
                },
                "dataLabels": {
                    "placement": "outside",
                    "font": {
                        "size": [12],
                        "family": ["Verdana"],
                        "style": ["normal"],
                        "color": ["0x393939ff"]
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            "columnNames": {
                "values": ["Hyderabad Min Temperature", "Hyderabad Max Temperature", "Banglore Min Temperature", "Banglore Max Temperature", "Chennai Min Temperature", "Chennai Max Temperature"]
            },
            "data": {
                "Hyderabad Min Temperature": [15.2, 17.6, 20.8, 24.3, 26.2, 24.0, 22.6, 22.1, 22.0, 20.3, 16.9, 14.5],
                "Hyderabad Max Temperature": [28.8, 31.9, 35.4, 37.9, 39.0, 34.5, 30.8, 29.8, 30.5, 30.6, 29.0, 28.0],
                "Banglore Min Temperature": [15.0, 16.6, 19.0, 21.3, 21.1, 19.8, 19.3, 19.2, 19.1, 18.9, 17.2, 15.4],
                "Banglore Max Temperature": [27.4, 30.1, 32.8, 33.9, 33.1, 29.4, 27.7, 27.6, 28.1, 27.9, 26.8, 26.2],
                "Chennai Min Temperature": [20.4, 21.1, 23.0, 25.8, 27.6, 27.4, 26.1, 25.5, 25.2, 24.2, 24.0, 23.8],
                "Chennai Max Temperature": [28.8, 30.5, 32.6, 34.7, 37.4, 37.3, 35.3, 34.5, 33.9, 31.8, 31.0, 30.8]
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
                        "indicators": ["columnName", "rowName", "numberValue"],
                        "font": {
                            "size": [12],
                            "family": ["Verdana"],
                            "style": ["normal"],
                            "color": ["0x5A8000FF", "0x5A8000FF", "0x800400FF", "0x800400FF", "0x002F80FF", "0x002F80FF"]
                        }
                    },
                    "border": {
                        "line": {
                            "color": ["0x393939ff"]
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