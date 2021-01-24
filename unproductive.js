"use strict";
var backgroundJS = chrome.extension.getBackgroundPage();
document.getElementById("add-website").onclick=addWebsite;

var t = "";
for (let elem of backgroundJS.settings.unproductiveWebsites.entries()){
      var tr = "<tr>";
      tr += "<td>"+elem[0]+"</td>";
      tr += `<td>
                <input type="button" id="save" value="Save" style="float: right" onclick="saveTime()" />
                <div style="overflow: hidden; padding-right: .5em; padding-left: 0">
                    <input type="text" id="website-time" style="width: 100%;" value=`+elem[1]+` />
                </div>
            </td>`;
      tr += "</tr>";
      t += tr;
}
document.getElementById("website-table").innerHTML += t;
function addWebsite() {
    var url = document.getElementById("website-url").value;
    alert(url+' added!');
    alert(backgroundJS.settings.unproductiveTime);
    backgroundJS.settings.unproductiveWebsites.set("https://"+url, backgroundJS.settings.unproductiveTime);
    backgroundJS.saveUnproductiveWebsites();
    alert(backgroundJS.settings.unproductiveWebsites.size);

    var table = document.getElementById("website-table");
    
    table.innerHTML += '<tr><td>https://'+url+'</td>'+`<td>
    <input type="button" id="save" value="Save" style="float: right" onclick="saveTime()" />
    <div style="overflow: hidden; padding-right: .5em; padding-left: 0">
        <input type="text" id="website-time" style="width: 100%;" value=`+backgroundJS.settings.unproductiveTime+` />
    </div></td>`;
};