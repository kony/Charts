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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmSpalshScreen.add(
    lblAppTitle);
};

function frmSpalshScreenGlobals() {
    frmSpalshScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSpalshScreen,
        "bounces": true,
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
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true
    });
    frmSpalshScreen.info = {
        "kuid": "p2kwiet12650671921419"
    };
};