function addWidgetsfrmMenu() {
    var tabpane = new kony.ui.TabPane({
        "activeFocusSkin": "stu7TabPanesBackground",
        "activeSkin": "stu7TabPanesBackground",
        "activeTabs": [0],
        "id": "tabpane",
        "inactiveSkin": "sBackgroundFocus",
        "isVisible": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "onTabClick": p2kwiet12650671921412_tabpane_onTabClick_seq0,
        "screenLevelWidget": false,
        "viewConfig": {
            "collapsibleViewConfig": {
                "imagePosition": constants.TABPANE_COLLAPSIBLE_IMAGE_POSITION_RIGHT,
                "tabNameAlignment": constants.TABPANE_COLLAPSIBLE_TABNAME_ALIGNMENT_LEFT,
                "toggleTabs": false
            },
            "pageViewConfig": {
                "needPageIndicator": true
            },
            "panoramaViewConfig": {},
            "tabViewConfig": {
                "headerPosition": constants.TAB_HEADER_POSITION_TOP
            },
        },
        "viewType": constants.TABPANE_VIEW_TYPE_TABVIEW
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "tabHeaderHeight": 50
    });
    var tabDemo = new kony.ui.Box({
        "clipBounds": true,
        "id": "tabDemo",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "spacing": 1,
        "tabName": "Demos"
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var button15857082581 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button15857082581",
        "isVisible": true,
        "skin": "sBorder",
        "text": "Tap On Label To See Chart Demos"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    tabDemo.add(
    button15857082581);
    tabpane.addTab("tabDemo", "Demos", null, tabDemo, null);
    var tabDoc = new kony.ui.Box({
        "clipBounds": true,
        "id": "tabDoc",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "spacing": 1,
        "tabName": "Documentation"
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var browser = new kony.ui.Browser({
        "detectTelNumber": true,
        "enableZoom": false,
        "id": "browser",
        "isVisible": true,
        "onFailure": p2kwiet12650671921412_browser_onFailure_seq0,
        "requestURLConfig": {
            "URL": "http://docs.kony.com/konylibrary/Subsystems/Kony_Charts_User_Guide/Default.htm",
            "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
        },
        "screenLevelWidget": false,
        "text": "Browser"
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false
    }, {});
    tabDoc.add(
    browser);
    tabpane.addTab("tabDoc", "Documentation", null, tabDoc, null);
    var tabContactUs = new kony.ui.Box({
        "clipBounds": true,
        "id": "tabContactUs",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "spacing": 1,
        "tabName": "Contact Us"
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblContact = new kony.ui.Label({
        "id": "lblContact",
        "isVisible": true,
        "skin": "sLblNormal",
        "text": "For any queries/feedback on charts, please contact kony product support or visit www.kony.com"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    tabContactUs.add(
    lblContact);
    tabpane.addTab("tabContactUs", "Contact Us", null, tabContactUs, null);
    frmMenu.add(
    tabpane);
};

function frmMenuGlobals() {
    frmMenu = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMenu,
        "enabledForIdleTimeout": false,
        "id": "frmMenu",
        "init": p2kwiet12650671921412_frmMenu_init_seq0,
        "needAppMenu": true,
        "skin": "stu7widgetTypesBackground"
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
    frmMenu.info = {
        "kuid": "p2kwiet12650671921412"
    };
};