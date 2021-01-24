"use strict";
var backgroundJS = chrome.extension.getBackgroundPage();
document.getElementById("add-website").onclick=addWebsite;

var t = "";
for (let elem of backgroundJS.settings.unproductiveWebsites.entries()){
      var tr = "<tr>";
      tr += "<td>"+elem[0]+"</td>";
      tr += "<td>"+elem[1]+"</td>";
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

    table.innerHTML += '<tr><td>https://'+url+'</td><td>'+backgroundJS.settings.unproductiveTime+'</td></tr>';
};