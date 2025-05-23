// ==UserScript==
// @name         Xperience XCloud - Custom flags
// @namespace    https://github.com/xperience-xcloud
// @version      1.1.0
// @description  Customize Xperience XCloud script
// @author       xperience xcloud team
// @license      MIT
// @match        https://www.xbox.com/*/play*
// @run-at       document-start
// @grant        none
// ==/UserScript==
'use strict';

/*
Make sure this script is being loaded before the Xperience XCloud script.

How to:
1. Uninstall Xperience XCloud script.
2. Install this script.
3. Reinstall Xperience XCloud script. All your settings are still there.
*/

// Change this to `false` if you want to temporary disable the script
const enabled = true;

enabled && (window.BX_FLAGS = {
    // Toggle WebGPU Renderer
    // https://github.com/xperience-xcloud/xperience-xcloud/discussions/657
    EnableWebGPURenderer: false,
    
    /*
    Add titleId of the game(s) you want to test native M&KB support here.
    Keep in mind: this method only works with some games.

    Example:
        - Flight Simulator has this link: /play/games/microsoft-flight-simulator-standard-40th-anniversa/9PMQDM08SNK9
        - That means its titleId is "9PMQDM08SNK9"
        - So it becomes:
            ForceNativeMkbTitles: [
                "9PMQDM08SNK9",
            ],
    */
    ForceNativeMkbTitles: [
    ],
});
