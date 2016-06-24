function addWidgetsfrmMiscDemo() {
    frmMiscDemo.add();
};

function frmMiscDemoGlobals() {
    frmMiscDemo = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMiscDemo,
        "enabledForIdleTimeout": false,
        "id": "frmMiscDemo",
        "needAppMenu": true
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
    frmMiscDemo.info = {
        "kuid": "p2kwiet12650671921415"
    };
};