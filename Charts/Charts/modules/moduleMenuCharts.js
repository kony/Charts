var MenuItemsTitleList = [  "Line Chart",
                            "Area Chart",
                            "Pie Chart",
                            "3D Pie Chart",
                            "Donut Chart",
                            "3D Donut Chart",
                            "Bar Chart",
                            "Column Chart",
                            "Scatter Plot Chart",
                            "Bubble Chart",
                            "Candle Stick Chart",
                            "Dialer Chart",
                            "Water Fall Chart",
                            "Pyramid Chart",
                            "Funnel Chart",
                            "Range Bar Chart",
                            "Range Column Chart",
                            "Radial Bar Chart",
                            "Multi Layer Charts",
                            "Combination Charts",
                            "Finance Chart",
                            "Set Properties",
                            "Set Data",
                            "Proportional Bar Chart"
                         ]
                         
var MenuItemsPropList = [{
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["axis", "lineChart"]
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1"]
        },
        "data": {
            "c1": [10, 20, 5, 40]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["axis", "areaChart"]
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1"]
        },
        "data": {
            "c1": [10, 20, 5, 40]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["pieChart"]
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1"]
        },
        "data": {
            "c1": [10, 20, 5, 40]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["pieChart3D"]
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1"]
        },
        "data": {
            "c1": [10, 20, 5, 40]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["donutChart"]
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1"]
        },
        "data": {
            "c1": [10, 20, 5, 40]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["donutChart3D"]
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1"]
        },
        "data": {
            "c1": [10, 20, 5, 40]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["axis", "barChart"]
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1"]
        },
        "data": {
            "c1": [10, 20, 5, 40]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["axis", "columnChart"]
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1"]
        },
        "data": {
            "c1": [10, 20, 5, 40]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["axis", "scatterPlotChart"]
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1"]
        },
        "data": {
            "c1": [10, 20, 5, 40]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["axis", "bubbleChart"]
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1", "c2"]
        },
        "data": {
            "c1": [10, 20, 5, 40],
            "c2": [20, 35, 30, 60]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["axis", "candleStickChart"]
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1", "c2", "c3", "c4"]
        },
        "data": {
            "c1": [10, 20, 20, 30],
            "c2": [20, 25, 30, 35],
            "c3": [5, 10, 15, 20],
            "c4": [15, 15, 25, 25]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["dialerChart"],
        "dialerChart": {
            "background": {
                "fillType": "gradient",
                "color": ["0x00ffffff", "0x0000ffff"]
            },
            "axis": ["axisOne"],
            "axisOne": {
                "pointer": {
                    "background": {
                        "color": ["0xaeaaffff"]
                    }
                }
            }
        }
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1"]
        },
        "data": {
            "c1": [10, 20, 5, 40]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["axis", "waterFallChart"]
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1"]
        },
        "data": {
            "c1": [10, 20, 5, 40]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["pyramidChart"],
        "pyramidChart": {
            "dataLabels": {
                "font": {
                    "transparency": [100]
                }
            }
        }
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1"]
        },
        "data": {
            "c1": [10, 20, 5, 40]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["funnelChart"],
        "funnelChart": {
            "dataLabels": {
                "font": {
                    "transparency": [100]
                }
            }
        }
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1"]
        },
        "data": {
            "c1": [10, 20, 5, 40]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["axis", "rangeBarChart"],
        "axis": {
            "visible": true
        }
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1", "c2"]
        },
        "data": {
            "c1": [10, 20, 5, 40],
            "c2": [20, 35, 30, 60]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["axis", "rangeColumnChart"],
        "axis": {
            "visible": true
        }
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1", "c2"]
        },
        "data": {
            "c1": [10, 20, 5, 40],
            "c2": [20, 35, 30, 60]
        }
    }
}, {
    "chartProperties": {
        "chartHeight": 15,
        "drawEntities": ["radialBarChart"],
        "radialBarChart": {
            "bars": {
                "width": 70,
                "transparency": [0],
                "fillType": ["gradient"],
                "color": [
                    ["0x76a326ff", "0xddff80ff"],
                    ["0xd9b534ff", "0xffdb80ff"],
                    ["0xce7a24ff", "0xffb980ff"]
                ],
                "bgVisible": false,
                "bgWidth": 100,
                "bgFillType": ["color"],
                "bgColor": ["0xccccffff"]
            }
        }
    },
    "chartData": {
        "rowNames": {
            "values": ["r1", "r2", "r3", "r4"]
        },
        "columnNames": {
            "values": ["c1"]
        },
        "data": {
            "c1": [10, 20, 5, 40]
        }
    }
}]

function getNoOfMenuItems() {
    return MenuItemsTitleList.length;
}

function getMenuItemPropObject(index) {
    return MenuItemsPropList[index];
}

function getMenuItemTitleObject(index){
    return MenuItemsTitleList[index];
}