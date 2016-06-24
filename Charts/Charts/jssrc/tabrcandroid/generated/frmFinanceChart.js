function addWidgetsfrmFinanceChart() {
    var hbox19329606361806 = new kony.ui.Box({
        "id": "hbox19329606361806",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var button19329606361807 = new kony.ui.Button({
        "focusSkin": "sBorderFocus",
        "id": "button19329606361807",
        "isVisible": true,
        "onClick": p2kwiet12650671921402_button19329606361807_onClick_seq0,
        "skin": "sBorder",
        "text": "CandleStick"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button19329606361808 = new kony.ui.Button({
        "focusSkin": "sBorderFocus",
        "id": "button19329606361808",
        "isVisible": true,
        "onClick": p2kwiet12650671921402_button19329606361808_onClick_seq0,
        "skin": "sBorder",
        "text": "LineChart"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button19329606361809 = new kony.ui.Button({
        "focusSkin": "sBorderFocus",
        "id": "button19329606361809",
        "isVisible": true,
        "onClick": p2kwiet12650671921402_button19329606361809_onClick_seq0,
        "skin": "sBorder",
        "text": "Comparision"
    }, {
        "containerWeight": 31,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox19329606361806.add(
    button19329606361807, button19329606361808, button19329606361809);
    var hboxStockChart = new kony.ui.Box({
        "id": "hboxStockChart",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    hboxStockChart.add();
    var hbox19329606361798 = new kony.ui.Box({
        "id": "hbox19329606361798",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var button19329606361810 = new kony.ui.Button({
        "focusSkin": "sBorderFocus",
        "id": "button19329606361810",
        "isVisible": true,
        "onClick": p2kwiet12650671921402_button19329606361810_onClick_seq0,
        "skin": "sBorder",
        "text": "Week"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button19329606361811 = new kony.ui.Button({
        "focusSkin": "sBorderFocus",
        "id": "button19329606361811",
        "isVisible": true,
        "onClick": p2kwiet12650671921402_button19329606361811_onClick_seq0,
        "skin": "sBorder",
        "text": "Month"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button19329606361812 = new kony.ui.Button({
        "focusSkin": "sBorderFocus",
        "id": "button19329606361812",
        "isVisible": true,
        "onClick": p2kwiet12650671921402_button19329606361812_onClick_seq0,
        "skin": "sBorder",
        "text": "Year"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 1, 0, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox19329606361798.add(
    button19329606361810, button19329606361811, button19329606361812);
    frmFinanceChart.add(
    hbox19329606361806, hboxStockChart, hbox19329606361798);
};

function frmFinanceChartGlobals() {
    frmFinanceChart = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmFinanceChart,
        "enabledForIdleTimeout": false,
        "id": "frmFinanceChart",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_LANDSCAPE,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmFinanceChart.info = {
        "kuid": "p2kwiet12650671921402"
    };
};