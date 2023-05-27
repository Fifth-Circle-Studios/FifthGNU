var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "367",
                    "ToolBoxButtonY": "28"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "495",
                            "popupWidth": "657"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "applicationsDisplay": "0",
                            "favoritesPortedToKAstats": "true",
                            "icon": "start-here-kde",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "796"
                        },
                        "/General": {
                            "containmentType": "Plasma",
                            "lengthFirstMargin": "6",
                            "lengthLastMargin": "4",
                            "lengthMarginsLock": "false",
                            "showIcon": "false"
                        }
                    },
                    "plugin": "org.kde.windowtitle"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "450",
                            "popupWidth": "396"
                        },
                        "/Appearance": {
                            "customSpacing": "1.7171717171717171",
                            "enabledCalendarPlugins": "/usr/lib/qt5/plugins/plasmacalendarplugins/holidaysevents.so",
                            "fixedFont": "true",
                            "fontFamily": "SFNS Display",
                            "fontSize": "15"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "510",
                            "DialogWidth": "680"
                        }
                    },
                    "plugin": "org.kde.plasma.betterinlineclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "82",
                    "DialogWidth": "1920"
                }
            },
            "height": 1.75,
            "hiding": "none",
            "location": "top",
            "maximumLength": 120,
            "minimumLength": 120,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": { "/": { "immutability": "1", "launchers": "" }, "/Configuration": { "PreloadWeight": "0" },
                        "/General": {
                            "launchers": "applications:systemsettings.desktop,preferred://filemanager,applications:org.kde.konsole.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "82",
                    "DialogWidth": "1920"
                }
            },
            "height": 3.875,
            "hiding": "windowscover",
            "location": "bottom",
            "maximumLength": 120,
            "minimumLength": 25.75,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
