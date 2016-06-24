function addWidgetsfrmSpalshScreen() {
    var lblAppTitle = new kony.ui.Label({
        "id": "lblAppTitle",
        "isVisible": true,
        "skin": "stu7widgetTypesBackground",
        "text": "Loading Charts Demo Application..."
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
    frmSpalshScreen.add(
    lblAppTitle);
};

function frmSpalshScreenGlobals() {
    frmSpalshScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSpalshScreen,
        "enabledForIdleTimeout": false,
        "id": "frmSpalshScreen",
        "needAppMenu": true,
        "postShow": p2kwiet12650671921419_frmSpalshScreen_postshow_seq0,
        "skin": "sBackgroundFocus"
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
    frmSpalshScreen.info = {
        "kuid": "p2kwiet12650671921419"
    };
};