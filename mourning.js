!function () {
    "use strict";
    var scriptElement = document.currentScript;
    var days = scriptElement.getAttribute("days").split(',');
    var customText = scriptElement.getAttribute("text");
    var duration = parseInt(scriptElement.getAttribute("duration"));
    var nolog = scriptElement.getAttribute("nolog");

    /* 哀悼日网站变灰 */
    document.addEventListener("DOMContentLoaded", function () {
        if (aidaori()) {
            var htmlElement = document.querySelector("html");
            htmlElement.style.filter = "gray !important";
            htmlElement.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)";
            htmlElement.style.filter = "grayscale(100%)";
            htmlElement.style.webkitFilter = "grayscale(100%)";
            htmlElement.style.MozFilter = "grayscale(100%)";
            htmlElement.style.msFilter = "grayscale(100%)";
            htmlElement.style.oFilter = "grayscale(100%)";
            createCandleText(customText);
            // 打印仓库地址
            if (nolog !== "true") {
                console.log(customText + " mourning哀悼日 Github仓库: https://github.com/byteforgecn/mourning");
            }
        }
        // 判断日期
        function aidaori() {
            var aidaoriarr = days;
            var mydate = new Date();
            var str = "";
            var mm = mydate.getMonth() + 1;
            if (mydate.getMonth() > 8) {
                str += mm;
            } else {
                str += "0" + mm;
            }
            if (mydate.getDate() > 9) {
                str += mydate.getDate();
            } else {
                str += "0" + mydate.getDate();
            }
            if (aidaoriarr.indexOf(str) > -1) {
                return 1;
            } else {
                return 0;
            }
        }
        // 创建蜡烛文字的函数
        function createCandleText(text) {
            var candleTextElement = document.createElement("div");
            candleTextElement.id = "candleText";
            candleTextElement.textContent = text;
            var style = candleTextElement.style;
            style.position = "fixed";
            style.top = "50%";
            style.left = "50%";
            style.transform = "translate(-50%, -50%)";
            style.fontSize = "24px";
            style.fontWeight = "bold";
            style.color = "#000";
            style.opacity = 0;
            style.transition = "opacity 1s";
            document.body.appendChild(candleTextElement);
            setTimeout(function () {
                candleTextElement.style.opacity = 1;
                setTimeout(function () {
                    candleTextElement.style.opacity = 0;
                    setTimeout(function () {
                        document.body.removeChild(candleTextElement);
                    }, 1000);
                }, duration);
            }, 100);
        }
    })
}()