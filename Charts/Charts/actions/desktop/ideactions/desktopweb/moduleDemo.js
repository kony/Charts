function FrmDemo(demoNames, demoObjects, docURL) {
    this.chartWidget = null;
    this.rowNumber = 0;
    this.segData = [];
    this.demoObjects = demoObjects;
    this.docURL = docURL;
    this.setData = function(data) {
        frmDemo.segUIDemoList.setData(data);
    }
    this.resetOnRowClick = function() {
        frmDemo.tabChart.removeAt(0);
        frmDemo.textarea.text = "";
    }
    this.resetFrmDemo = function() {
        if (frmDemo.tabChart) {
            frmDemo.tabChart.removeAt(0);
        }
        if (frmDemo.textarea) {
            frmDemo.textarea.text = "";
        }
        if (frmDemo.scrollboxTabDoc) {
            frmDemo.scrollboxTabDoc.removeAt(0);
        }
        this.setData(this.segData);
    }
    this.onSegRowClick = function(eventobject, sectionNumber, rowNumber) {
        kony.print("rowNumber");
        kony.print(rowNumber);
        this.rowNumber = rowNumber;
        this.resetOnRowClick();
        var chartObject = this.demoObjects[rowNumber]();
        if (chartObject) {
            this.chartWidget = createChartWidget(chartObject, 0);
            frmDemo.tabChart.add(this.chartWidget);
            frmDemo.textarea.text = chartObject;
        }
    }
    this.onTabClick = function(currentindex) {
        kony.print("printing current index");
        kony.print(currentindex);
        kony.print("printing current Index end");
        if (currentindex === 0) {
            frmDemo.tabChart.removeAt(0);
            var chartObject = this.demoObjects[this.rowNumber]();
            if (chartObject) {
                this.chartWidget = createChartWidget(chartObject, 0);
                frmDemo.tabChart.add(this.chartWidget);
            }
        }
    }
    var demosSize = demoNames.length;
    for (var i = 0; i < demosSize; i++) {
        var eachSegData = {};
        eachSegData.lblDemoName = demoNames[i];
        this.segData.push(eachSegData);
    }
    this.resetFrmDemo();
    var chartObject = this.demoObjects[0]();
    if (chartObject) {
        this.chartWidget = createChartWidget(chartObject, 0);
        frmDemo.tabChart.add(this.chartWidget);
        frmDemo.textarea.text = chartObject;
    }
    if (this.docURL) {
        var browser = createBrowserWidget(this.docURL);
        frmDemo.scrollboxTabDoc.add(browser);
    }
    frmDemo.show();
}

function createBrowserWidget(url) {
    var browser = new kony.ui.Browser({
        "id": "browser",
        "text": "Browser",
        "isVisible": true,
        "requestURLConfig": {
            "URL": url,
            "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
        },
        "onFailure": frmDemo_browser_onFailure_seq0,
        "screenLevelWidget": false,
        "enableZoom": false,
        "detectTelNumber": true
    }, {
        "margin": [5, 5, 5, 5],
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 100
    }, {});
    return browser;
}

function frmDemo_OnTabClick(args, currentindex) {
    frmDemoObject.onTabClick(currentindex);
}

function frmDemo_OnFormInit() {
    if (frmDemo.textarea == null) {
        var textarea = createTextAreaWidget();
        frmDemo.scrollboxTabCode.add(textarea);
    }
}

function frmDemo_browser_onFailure_seq0(eventobject) {
    alert("Unable To Load Chart Documentation. Please Check Your Network Connection");
};

function createTextAreaWidget() {
    var textarea = new kony.ui.TextArea2({
        "id": "textarea",
        "isVisible": true,
        "text": "Unable To Load Chart JSON Object",
        "maxTextLength": null,
        "numberOfVisibleLines": 39,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
        "skin": "txt2Normal",
        "focusSkin": "txt2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [5, 5, 5, 5],
        "padding": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 12
    }, {
        "pasteboardType": constants.TEXTAREA_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": null
    });
    return textarea;
}