function addMenuItemsToForm() {
    addHBoxesToForm();
}

function addHBoxesToForm() {
    var noOfHBoxes = Math.ceil(getNoOfMenuItems() / 3);
    for (var i = 0; i < noOfHBoxes; i++) {
        frmMenu.tabpane.tabDemo.add(getHBoxObject(i));
    }
}
var getHBoxObject = function(index) {
        var hbox = createHBoxWidget(index);
        hbox.add(getVBoxObject(3 * index + 0));
        hbox.add(getVBoxObject(3 * index + 1));
        hbox.add(getVBoxObject(3 * index + 2));
        return hbox;
    }
var getVBoxObject = function(index) {
        var vbox = createVBoxWidget(index);
        var label = createLabelWidget(getMenuItemTitleObject(index), index);
        var chartObj = getMenuItemPropObject(index);
        vbox.add(label);
        if (chartObj) {
            vbox.add(createChartWidget(chartObj, index));
        }
        return vbox;
    }
    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
function createLabelWidget(text, index) {
    var menuItemName = new kony.ui.Label({
        "id": "label" + index.toString(),
        "isVisible": true,
        "text": text,
        "skin": "sBorder"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    })
    return menuItemName;
}

function createVBoxWidget(index) {
    var vbox = new kony.ui.Box({
        "id": "vbox" + index.toString(),
        "isVisible": true,
        "skin": "sBackgroundFocus",
        "onClick": onVBoxClick,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [2, 2, 2, 2],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    return vbox;
}

function createHBoxWidget(index) {
    var hbox = new kony.ui.Box({
        "id": "hbox" + index.toString(),
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 20,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    return hbox;
}

function createChartWidget(chartObj, index) {
    var chartWidget = new kony.ui.Chart2D3D({
        "id": "chart" + index.toString(),
        "isVisible": true
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerWeight": 100,
        "margin": [5, 5, 5, 5]
    }, chartObj);
    return chartWidget;
}

function onVBoxClick(arg) {
    var vboxId = arg["id"];
    var catalouge = null;
    if (vboxId === "vbox0") {
        catalouge = new lineChartCatalouge();
    } else if (vboxId === "vbox1") {
        catalouge = new areaChartCatalouge();
    } else if (vboxId === "vbox2") {
        catalouge = new pieChartCatalouge();
    } else if (vboxId === "vbox3") {
        catalouge = new pieChart3DCatalouge();
    } else if (vboxId === "vbox4") {
        catalouge = new donutChartCatalouge();
    } else if (vboxId === "vbox5") {
        catalouge = new donutChart3DCatalouge();
    } else if (vboxId === "vbox6") {
        catalouge = new barChartCatalouge();
    } else if (vboxId === "vbox7") {
        catalouge = new columnChartCatalouge();
    } else if (vboxId === "vbox8") {
        catalouge = new scatterPlotChartCatalouge();
    } else if (vboxId === "vbox9") {
        catalouge = new bubbleChartCatalouge();
    } else if (vboxId === "vbox10") {
        catalouge = new candleStickChartCatalouge();
    } else if (vboxId === "vbox11") {
        catalouge = new dialerChartCatalouge();
    } else if (vboxId === "vbox12") {
        catalouge = new waterFallChartCatalouge();
    } else if (vboxId === "vbox13") {
        catalouge = new pyramidChartCatalouge();
    } else if (vboxId === "vbox14") {
        catalouge = new funnelChartCatalouge();
    } else if (vboxId === "vbox15") {
        catalouge = new rangeBarChartCatalouge();
    } else if (vboxId === "vbox16") {
        catalouge = new rangeColumnChartCatalouge();
    } else if (vboxId === "vbox17") {
        catalouge = new radialBarChartCatalouge();
    } else if (vboxId === "vbox18") {
        catalouge = new multiLayerCatalouge();
    } else if (vboxId === "vbox19") {
        catalouge = new combinationChartCatalouge();
    } else if (vboxId === "vbox20") {
        func_demo_init_frm_financeChart();
        return;
    } else if (vboxId === "vbox21") {
        catalouge = new setPropertiesCatalouge();
    } else if (vboxId === "vbox22") {
        func_demo_init_frm_setData();
        return;
    } else if (vboxId === "vbox23") {
        catalouge = new proportionalBarChartCatalouge();
    }
    if (catalouge) {
        if (catalouge.demos) {
            frmDemoObject = new FrmDemo(catalouge.demos.demoNames, catalouge.demos.demoObjects, catalouge.demos.docURL);
        }
    }
}

function onTabClick(args, currentindex) {
    kony.print("printing current index");
    kony.print(currentindex);
    kony.print("printing current Index end");
    //    if (currentindex === 1) {
    //        frmMenu.tabpane.tabDoc.browser.reload();
    //    }
}
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////