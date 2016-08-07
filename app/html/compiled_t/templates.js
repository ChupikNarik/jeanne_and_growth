function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function campaignInvestment(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (Urls, campaign) {;pug_debug_line = 1;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_mixins["breadcrumbs"] = pug_interp = function(title, subtitle, data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Csection class=\"header_title p50\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-8\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Ch1 class=\"text-uppercase\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp));
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cspan class=\"small-text\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = subtitle) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-4\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Col class=\"breadcrumb pull-right\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
// iterate data
var pug_obj0 = data;
if ('number' == typeof pug_obj0.length) {

  for (var pug_index0 = 0, pug_length0 = pug_obj0.length; pug_index0 < pug_length0; pug_index0++) {
    var elem = pug_obj0[pug_index0];

;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
let active = (elem[1] == '') ? 'active' : ''
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["breadcrumb-item"," " + active], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
if (elem[1] == '') {
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp));
}
else {
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", elem[1], true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
  }

} else {
  var pug_length0 = 0;
  for (var pug_index0 in pug_obj0) {
    pug_length0++;
    var elem = pug_obj0[pug_index0];

;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
let active = (elem[1] == '') ? 'active' : ''
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["breadcrumb-item"," " + active], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
if (elem[1] == '') {
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp));
}
else {
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", elem[1], true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fol\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
};
;pug_debug_line = 18;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_mixins["fieldBlock"] = pug_interp = function(name, data, attr){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 19;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
if (attr.type == 'checkbox') {
;pug_debug_line = 20;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([attr.class], [true]), false, false)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Clabel" + (" class=\"pseudo-checkbox\""+pug_attr("for", name, true, false)) + "\u003E";
;pug_debug_line = 22;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cinput" + (pug_attr("name", name, true, false)+" type=\"checkbox\""+pug_attr("id", name, true, false)) + "\u002F\u003E";
;pug_debug_line = 27;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = attr.text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 29;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["form-group row " + name], [true]), false, false)) + "\u003E";
;pug_debug_line = 30;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([attr.class1 + " text-md-right"], [true]), false, false)) + "\u003E";
;pug_debug_line = 31;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", name, true, false)) + "\u003E";
;pug_debug_line = 31;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([attr.class2], [true]), false, false)) + "\u003E";
;pug_debug_line = 33;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cinput" + (" class=\"form-control\""+pug_attr("id", name, true, false)+pug_attr("name", name, true, false)+pug_attr("placeholder", name, true, false)+pug_attr("type", attr.type ? attr.type : 'text', true, false)+pug_attr("value", data, true, false)) + "\u002F\u003E";
;pug_debug_line = 40;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cspan class=\"help-block\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + " \u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
};
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignInvestment.js";
pug_mixins["breadcrumbs"]('Invest', 'make world better place', 
    [
        ['Home', '/'], 
        ['Explore', Urls['campaign-list']()],  
        [campaign.company.name, Urls['campaign-detail'](campaign.id)], 
        ['Invest in ' + campaign.company.name, '']
    ]
);
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignInvestment.js";
pug_html = pug_html + "\u003Cdiv class=\"container investment\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignInvestment.js";
pug_mixins["fieldBlock"]("first_name", '', {
        class1: 'col-lg-3 col-md-3', 
        class2: 'col-lg-7 col-md-7', 
        type: 'text'
    });
;pug_debug_line = 19;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignInvestment.js";
pug_mixins["fieldBlock"]("email", '', {
        class1: 'col-lg-3 col-md-3', 
        class2: 'col-lg-7 col-md-7', 
        type: 'email'
    });
pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"Urls" in locals_for_with?locals_for_with.Urls:typeof Urls!=="undefined"?Urls:undefined,"campaign" in locals_for_with?locals_for_with.campaign:typeof campaign!=="undefined"?campaign:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function campaignList(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (Urls, campaigns) {;pug_debug_line = 1;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Csection class=\"small-section filter\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cform action=\"\u002Fcampaigns\u002F\" method=\"get\" role=\"form\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-3\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"one_drop\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cselect class=\"form-control selectpicker\" multiple=\"true\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Coption\u003E";
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Fintech\u003C\u002Foption\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Coption\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Internet\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-3\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"one_drop\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cselect class=\"form-control selectpicker\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Coption\u003E";
;pug_debug_line = 18;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Stage\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-3\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"one_drop\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cselect class=\"form-control selectpicker\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Coption\u003E";
;pug_debug_line = 23;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Locations\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-3\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"one_drop\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cselect class=\"form-control selectpicker\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Coption\u003E";
;pug_debug_line = 28;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Deal type\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 30;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"create-alert-block\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-9 col-lg-10\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ca class=\"pull-right btn mr30 text-uppercase auth-pop\" href=\"#\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "create alert\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 35;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-3 col-lg-2\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cselect class=\"form-control\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Coption checked=\"checked\" value=\"0\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Order by\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 38;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Csection class=\"campaing-list\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"container\" id=\"campaignList\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
// iterate campaigns
var pug_obj0 = campaigns;
if ('number' == typeof pug_obj0.length) {

  for (var pug_index0 = 0, pug_length0 = pug_obj0.length; pug_index0 < pug_length0; pug_index0++) {
    var campaign = pug_obj0[pug_index0];

;pug_debug_line = 43;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-4\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ca" + (" class=\"block_link\""+pug_attr("href", Urls['campaign-detail'](campaign.id), true, false)) + "\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 45;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"one_block\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"for_img\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cimg" + (" src=\"\u002Fimg\u002Ftest.png\""+pug_attr("alt", campaign.company.name, true, false)) + "\u002F\u003E";
;pug_debug_line = 52;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"more_inform\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"title text-center\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 54;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Pre money valuation: $";
;pug_debug_line = 54;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.premoney_valuation) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"small_text\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 57;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.company.tagline.substr(0, 120)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 59;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"ico_cont\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", Urls['campaign-detail'](campaign.id) + '#members', true, false)) + "\u003E";
;pug_debug_line = 61;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-users\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 62;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", Urls['campaign-detail'](campaign.id) + '#perks', true, false)) + "\u003E";
;pug_debug_line = 63;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-gift\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 65;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"bottom_pr\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
if (campaign.security_type == false) {
;pug_debug_line = 67;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 67;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Price per share: $";
;pug_debug_line = 67;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.security_type_data.price_per_share) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 68;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 68;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Number of shares: $";
;pug_debug_line = 68;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.security_type_data.amount_of_shares) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
else {
;pug_debug_line = 70;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 70;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "% Revenue: ";
;pug_debug_line = 70;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.security_type_data.percentage_revenue) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 71;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 71;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Cap: ";
;pug_debug_line = 71;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.security_type_data.cap) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 72;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 72;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Expiration Date: ";
;pug_debug_line = 72;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.security_type_data.expiration_date) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 75;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 76;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 76;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.company.name) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 77;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cspan class=\"place\"\u003E";
;pug_debug_line = 78;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-map-marker\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 79;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.company.city + ' ' + campaign.company.state) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 80;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"clear\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 81;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"description\"\u003E";
;pug_debug_line = 82;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 82;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.pitch.substr(0,250)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 84;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"progress_bar_container\"\u003E";
;pug_debug_line = 85;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cspan class=\"left_text\"\u003E";
;pug_debug_line = 85;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.progress) ? "" : pug_interp));
;pug_debug_line = 85;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + " % Funded\u003C\u002Fspan\u003E";
;pug_debug_line = 86;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cspan class=\"right_text\"\u003E";
;pug_debug_line = 86;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + " ";
;pug_debug_line = 87;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 87;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "$";
;pug_debug_line = 87;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.amount_raised) ? "" : pug_interp));
;pug_debug_line = 87;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + " \u003C\u002Fb\u003E";
;pug_debug_line = 88;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "of ";
;pug_debug_line = 88;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.minimum_raise) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 89;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"clear\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cprogress" + (" class=\"progress\""+pug_attr("value", campaign.progress, true, false)+" max=\"100\"") + "\u003E";
;pug_debug_line = 90;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.progress) ? "" : pug_interp));
;pug_debug_line = 90;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + " %\u003C\u002Fprogress\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 92;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"bottom_text\"\u003E";
;pug_debug_line = 93;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cspan class=\"left_desc\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 94;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Security:\u003C\u002Fb\u003E";
;pug_debug_line = 95;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.get_security_type_display) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 96;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cspan class=\"right_desc\"\u003E";
;pug_debug_line = 97;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 97;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Industry: \u003C\u002Fb\u003E";
;pug_debug_line = 98;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Lorem ipsum\u003C\u002Fspan\u003E";
;pug_debug_line = 99;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"clear\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length0 = 0;
  for (var pug_index0 in pug_obj0) {
    pug_length0++;
    var campaign = pug_obj0[pug_index0];

;pug_debug_line = 43;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-4\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ca" + (" class=\"block_link\""+pug_attr("href", Urls['campaign-detail'](campaign.id), true, false)) + "\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 45;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"one_block\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"for_img\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cimg" + (" src=\"\u002Fimg\u002Ftest.png\""+pug_attr("alt", campaign.company.name, true, false)) + "\u002F\u003E";
;pug_debug_line = 52;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"more_inform\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"title text-center\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 54;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Pre money valuation: $";
;pug_debug_line = 54;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.premoney_valuation) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"small_text\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 57;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.company.tagline.substr(0, 120)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 59;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"ico_cont\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", Urls['campaign-detail'](campaign.id) + '#members', true, false)) + "\u003E";
;pug_debug_line = 61;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-users\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 62;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", Urls['campaign-detail'](campaign.id) + '#perks', true, false)) + "\u003E";
;pug_debug_line = 63;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-gift\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 65;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"bottom_pr\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
if (campaign.security_type == false) {
;pug_debug_line = 67;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 67;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Price per share: $";
;pug_debug_line = 67;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.security_type_data.price_per_share) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 68;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 68;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Number of shares: $";
;pug_debug_line = 68;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.security_type_data.amount_of_shares) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
else {
;pug_debug_line = 70;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 70;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "% Revenue: ";
;pug_debug_line = 70;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.security_type_data.percentage_revenue) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 71;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 71;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Cap: ";
;pug_debug_line = 71;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.security_type_data.cap) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 72;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 72;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Expiration Date: ";
;pug_debug_line = 72;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.security_type_data.expiration_date) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 75;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 76;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 76;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.company.name) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 77;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cspan class=\"place\"\u003E";
;pug_debug_line = 78;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-map-marker\"\u003E\u003C\u002Fi\u003E";
;pug_debug_line = 79;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.company.city + ' ' + campaign.company.state) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 80;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"clear\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 81;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"description\"\u003E";
;pug_debug_line = 82;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 82;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.pitch.substr(0,250)) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 84;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"progress_bar_container\"\u003E";
;pug_debug_line = 85;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cspan class=\"left_text\"\u003E";
;pug_debug_line = 85;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.progress) ? "" : pug_interp));
;pug_debug_line = 85;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + " % Funded\u003C\u002Fspan\u003E";
;pug_debug_line = 86;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cspan class=\"right_text\"\u003E";
;pug_debug_line = 86;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + " ";
;pug_debug_line = 87;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 87;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "$";
;pug_debug_line = 87;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.amount_raised) ? "" : pug_interp));
;pug_debug_line = 87;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + " \u003C\u002Fb\u003E";
;pug_debug_line = 88;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "of ";
;pug_debug_line = 88;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.minimum_raise) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 89;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"clear\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cprogress" + (" class=\"progress\""+pug_attr("value", campaign.progress, true, false)+" max=\"100\"") + "\u003E";
;pug_debug_line = 90;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.progress) ? "" : pug_interp));
;pug_debug_line = 90;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + " %\u003C\u002Fprogress\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 92;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"bottom_text\"\u003E";
;pug_debug_line = 93;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cspan class=\"left_desc\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 94;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Security:\u003C\u002Fb\u003E";
;pug_debug_line = 95;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = campaign.get_security_type_display) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 96;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cspan class=\"right_desc\"\u003E";
;pug_debug_line = 97;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 97;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Industry: \u003C\u002Fb\u003E";
;pug_debug_line = 98;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "Lorem ipsum\u003C\u002Fspan\u003E";
;pug_debug_line = 99;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\campaignList.js";
pug_html = pug_html + "\u003Cdiv class=\"clear\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";}.call(this,"Urls" in locals_for_with?locals_for_with.Urls:typeof Urls!=="undefined"?Urls:undefined,"campaigns" in locals_for_with?locals_for_with.campaigns:typeof campaigns!=="undefined"?campaigns:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function mainPage(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (Urls) {;pug_debug_line = 1;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Csection class=\"main_block\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-6 col-md-12\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"red_opacity\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"vert\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"vertical_align_container\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Ch3 class=\"form-group\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "A new way to invest or raise capital.\u003C\u002Fh3\u003E";
;pug_debug_line = 9;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 9;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "Through our partnership with ";
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Ca href=\"href\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "Growth Fountain\u003C\u002Fa\u003E";
;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "we're pleased to introduce Equity Crowdfunding. With this innovative program:\u003C\u002Fp\u003E";
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cul class=\"row\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "- Investors and entrepreneurs can connect to enrich each other.\u003C\u002Fli\u003E";
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "- Investors receive equity for their contributions to small businesses.\u003C\u002Fli\u003E";
;pug_debug_line = 15;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 15;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "- Entrepreneurs can raise capital for their businesses through these contributions.\u003C\u002Fli\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "- Opportunities are available on local and national levels.\u003C\u002Fli\u003E";
;pug_debug_line = 17;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 17;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "- Economic growth is spurred by greater exposure and interest.\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-6 col-md-12\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 20;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"logo_container\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 21;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"vertical_align_container\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 22;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cimg src=\"\u002Fimg\u002Flogo.png\" alt=\"\"\u002F\u003E";
;pug_debug_line = 23;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"text-lg-center\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 24;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 24;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "Powered by\u003C\u002Fp\u003E";
;pug_debug_line = 25;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cimg src=\"\u002Fimg\u002Fgf_logo_nosub.png\" alt=\"\"\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 27;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Csection class=\"text_block_white\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 28;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 29;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 30;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-6 col-md-12 text-uppercase\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 31;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 31;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 32;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 32;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "To get started\u003C\u002Fb\u003E";
;pug_debug_line = 33;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + ", CLICK ON “INVEST” TO BROWSE CURRENT OPPORTUNITIES OR “RAISE CAPITAL” TO CREATE A NEW FUND-SOURCING CAMPAIGN.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 35;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-6 col-md-12\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 36;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"text-center\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 37;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Ca" + (" class=\"btn btn-info text-uppercase\""+pug_attr("href", Urls['campaign-list'](), true, false)) + "\u003E";
;pug_debug_line = 37;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "Invest\u003C\u002Fa\u003E";
;pug_debug_line = 38;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"circle_or\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "or\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Ca class=\"btn btn-info-dark text-uppercase\" href=\"\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "Raise capital\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 41;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Csection class=\"jeanne_footer\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 42;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 43;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"row text-lg-center\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 44;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-4 col-md-6 col-sm-12 text-md-right\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 45;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"container_block\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 46;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cimg src=\"\u002Fimg\u002Ffooter_com_logo.png\" alt=\"\"\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 49;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-6 col-md-6 col-sm-12\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 50;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"container_block text-left\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 51;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Ch5\u003E";
;pug_debug_line = 51;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "Need help getting your idea started?\u003C\u002Fh5\u003E";
;pug_debug_line = 52;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 52;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\"Build\" Business Solutions offer everything from business loans and credit cards to business checking and savings products. Let us help you take your concept or business to the next level.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 55;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-2 col-md-12\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 56;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"small_container_block\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + " ";
;pug_debug_line = 57;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Ch6 class=\"form-group text-uppercase\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "Ready to ";
;pug_debug_line = 58;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 58;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "build\u003C\u002Fb\u003E";
;pug_debug_line = 59;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "your business\u003C\u002Fh6\u003E";
;pug_debug_line = 60;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Ca class=\"btn light-blue text-uppercase\" href=\"#\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "Start today\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 61;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mainPage.js";
pug_html = pug_html + "\u003Cdiv class=\"hidden\"\u003E\u003C\u002Fdiv\u003E";}.call(this,"Urls" in locals_for_with?locals_for_with.Urls:typeof Urls!=="undefined"?Urls:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function menuNotification(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (user) {;pug_debug_line = 1;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
if (user.token != '') {
;pug_debug_line = 2;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cli class=\"nav-item notification notification-bell text-center\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-bell-o\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cspan class=\"count-notific\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "5\u003C\u002Fspan\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cdiv class=\"list-container notification-container\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cul class=\"submenu list-unstyled\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + " ";
;pug_debug_line = 9;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cli class=\"clearfix title nav-link\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cspan class=\"pull-left\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "5 pending\u003C\u002Fb\u003E";
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "comments\u003C\u002Fspan\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Ca class=\"pull-right\" href=\"#\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "view all\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 15;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cli class=\"clearfix nav-link\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cspan class=\"pull-left\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "Maria Kravchuk wrote...\u003C\u002Fspan\u003E";
;pug_debug_line = 17;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Ci class=\"pull-right\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "just now\u003C\u002Fi\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 19;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cli class=\"clearfix nav-link\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cspan class=\"pull-left\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "Maria Kravchuk wrote...\u003C\u002Fspan\u003E";
;pug_debug_line = 21;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Ci class=\"pull-right\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "just now\u003C\u002Fi\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 23;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cli class=\"clearfix nav-link\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cspan class=\"pull-left\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "Maria Kravchuk wrote...\u003C\u002Fspan\u003E";
;pug_debug_line = 25;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Ci class=\"pull-right\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "just now\u003C\u002Fi\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 27;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cli class=\"clearfix nav-link\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cspan class=\"pull-left\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "Maria Kravchuk wrote...\u003C\u002Fspan\u003E";
;pug_debug_line = 29;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Ci class=\"pull-right\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "just now\u003C\u002Fi\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 31;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cli class=\"nav-item notification text-center hidden-md-down\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Ca href=\"#\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-envelope-o\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "\u003Cspan class=\"count-notific\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuNotification.js";
pug_html = pug_html + "5\u003C\u002Fspan\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}}.call(this,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function menuPage(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (Urls) {;pug_debug_line = 1;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli class=\"nav-item hidden-md-down\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca" + (" class=\"nav-link\""+pug_attr("href", Urls['campaign-list'](), true, false)) + "\u003E";
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-search\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + " \u003C\u002Fi\u003E";
;pug_debug_line = 4;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "Explorer \u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 5;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli class=\"nav-item active\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F11\u002F\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "About us ";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-angle-down\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cdiv class=\"list-container\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cul class=\"submenu list-unstyled\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F15\u002F\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "Overview\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F17\u002F\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "Team\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 15;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F18\u002F\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "Partners\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 17;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F19\u002F\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "Contact Us\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 18;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 19;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F20\u002F\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "Careers\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 20;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 21;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F5\u002F\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "In the News\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"#\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "Resource center ";
;pug_debug_line = 24;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-angle-down\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 25;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cdiv class=\"list-container two-columns\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cul class=\"submenu list-unstyled\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli class=\"nav-link-sm\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 28;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "For Investors\u003C\u002Fp\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 29;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 30;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F21\u002F\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "Investor Tutorial\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 31;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 32;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F14\u002F\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "Educational Materials\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 33;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 34;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F11\u002F\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "FAQ\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 35;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cul class=\"submenu list-unstyled\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli class=\"nav-link-sm\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 37;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "For Businesses\u003C\u002Fp\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 38;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 39;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F21\u002F\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "Business Tutorials\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 40;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 41;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca" + (" class=\"nav-link\""+pug_attr("href", Urls['campaign-list'](), true, false)) + "\u003E";
;pug_debug_line = 41;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "Campaign Material\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 42;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 43;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F22\u002F\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "Success Guide\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 44;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 45;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F23\u002F\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "Capital Raise Caculator\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 46;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 47;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F24\u002F\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "What's My Business Worth?\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 48;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 49;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F11\u002F\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "FAQ\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 50;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"#\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "Advisor network ";
;pug_debug_line = 52;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-angle-down\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 53;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cdiv class=\"list-container\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cul class=\"submenu list-unstyled\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 56;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F13\u002F\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "About\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 57;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 58;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Fpage\u002F11\u002F\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuPage.js";
pug_html = pug_html + "FAQ\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Fli\u003E";}.call(this,"Urls" in locals_for_with?locals_for_with.Urls:typeof Urls!=="undefined"?Urls:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function menuProfile(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (user) {;pug_debug_line = 1;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
if (user.token != "") {
;pug_debug_line = 2;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Cli class=\"nav-item user-info\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Ca class=\"nav-link notification user-info-name\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 5;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-user\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Cv class=\"hidden-md-down\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = user.last_name) ? "" : pug_interp)) + "\u003C\u002Fv\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"list-container user-info-drop notification-container\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Cul class=\"submenu list-unstyled\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 9;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Faccount\u002Fprofile\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "Profile\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"#\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "Issuer Dashboard\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"#\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "Investor Dashboard\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 15;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"\u002Faccount\u002Flogout\u002F\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "Logout\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E";
}
else {
;pug_debug_line = 19;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Ca class=\"btn btn-lg btn-primary\" href=\"\u002Faccount\u002Flogin\u002F\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "Login\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 22;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "\u003Ca class=\"btn btn-lg btn-primary\" href=\"\u002Faccount\u002Fsignup\u002F\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\menuProfile.js";
pug_html = pug_html + "Signup\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}}.call(this,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function mixins(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.js";































































;pug_debug_line = 18;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.js";































} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function pageDetail(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (page) {;pug_debug_line = 1;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_mixins["breadcrumbs"] = pug_interp = function(title, subtitle, data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Csection class=\"header_title p50\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-8\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Ch1 class=\"text-uppercase\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp));
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cspan class=\"small-text\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = subtitle) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-4\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Col class=\"breadcrumb pull-right\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
// iterate data
var pug_obj0 = data;
if ('number' == typeof pug_obj0.length) {

  for (var pug_index0 = 0, pug_length0 = pug_obj0.length; pug_index0 < pug_length0; pug_index0++) {
    var elem = pug_obj0[pug_index0];

;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
let active = (elem[1] == '') ? 'active' : ''
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["breadcrumb-item"," " + active], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
if (elem[1] == '') {
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp));
}
else {
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", elem[1], true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
  }

} else {
  var pug_length0 = 0;
  for (var pug_index0 in pug_obj0) {
    pug_length0++;
    var elem = pug_obj0[pug_index0];

;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
let active = (elem[1] == '') ? 'active' : ''
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["breadcrumb-item"," " + active], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
if (elem[1] == '') {
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp));
}
else {
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", elem[1], true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fol\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
};
;pug_debug_line = 18;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
































;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\pageDetail.js";
pug_mixins["breadcrumbs"](page.title, 'Subtitle', [['home', '/',], [ 'current', page.get_absolute_url]]);
;pug_debug_line = 5;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\pageDetail.js";
pug_html = pug_html + "\u003Csection class=\"text_block\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\pageDetail.js";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\pageDetail.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\pageDetail.js";
pug_html = pug_html + (null == (pug_interp = page.content) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";}.call(this,"page" in locals_for_with?locals_for_with.page:typeof page!=="undefined"?page:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function sketchesTabs(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_mixins["breadcrumbs"] = pug_interp = function(title, subtitle, data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Csection class=\"header_title p50\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-8\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Ch1 class=\"text-uppercase\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp));
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cspan class=\"small-text\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = subtitle) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-4\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Col class=\"breadcrumb pull-right\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
// iterate data
var pug_obj0 = data;
if ('number' == typeof pug_obj0.length) {

  for (var pug_index0 = 0, pug_length0 = pug_obj0.length; pug_index0 < pug_length0; pug_index0++) {
    var elem = pug_obj0[pug_index0];

;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
let active = (elem[1] == '') ? 'active' : ''
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["breadcrumb-item"," " + active], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
if (elem[1] == '') {
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp));
}
else {
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", elem[1], true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
  }

} else {
  var pug_length0 = 0;
  for (var pug_index0 in pug_obj0) {
    pug_length0++;
    var elem = pug_obj0[pug_index0];

;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
let active = (elem[1] == '') ? 'active' : ''
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["breadcrumb-item"," " + active], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
if (elem[1] == '') {
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp));
}
else {
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", elem[1], true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fol\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
};
;pug_debug_line = 18;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
































;pug_debug_line = 2;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_mixins["breadcrumbs"]('Tabs', 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR',[['home', '/',], [ 'tabs']]);
;pug_debug_line = 4;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Csection\u003E";
;pug_debug_line = 5;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-12\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Ch2 class=\"text-uppercase text-lg-center\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "Standart tabs\u003C\u002Fh2\u003E";
;pug_debug_line = 9;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cul class=\"nav nav-tabs text-uppercase\" id=\"myTab\" role=\"tablist\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Ca class=\"nav-link active\" id=\"tab-one\" data-toggle=\"tab\" href=\"#one\" role=\"tab\" aria-controls=\"tab-one\" aria-expanded=\"true\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "First tab\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 18;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" id=\"tab-two\" data-toggle=\"tab\" href=\"#two\" role=\"tab\" aria-controls=\"tab-two\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "Second tab\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 26;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-content\" id=\"myTabContent\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-pane fade active in\" id=\"one\" role=\"tabpanel\" aria-labelledby=\"tab-one\" aria-expanded=\"true\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 32;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "Hello. I first tab\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-pane fade\" id=\"two\" role=\"tabpanel\" aria-labelledby=\"tab-two\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 38;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "Hello. I second tab\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 40;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 41;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-12\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Ch2 class=\"text-uppercase text-lg-center\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "Minimal tabs\u003C\u002Fh2\u003E";
;pug_debug_line = 43;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 44;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 45;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cul class=\"nav nav-tabs text-lg-center text-uppercase minimal-tabs\" id=\"myTabMinimal\" role=\"tablist\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Ca class=\"nav-link active\" id=\"tab-one-minimal\" data-toggle=\"tab\" href=\"#one-minimal\" role=\"tab\" aria-controls=\"tab-one-minimal\" aria-expanded=\"true\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "First tab\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 54;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" id=\"tab-two-minimal\" data-toggle=\"tab\" href=\"#two-minimal\" role=\"tab\" aria-controls=\"tab-two-minimal\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "Second tab\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 62;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-content\" id=\"myTabMinimalContent\"\u003E";
;pug_debug_line = 63;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-pane fade active in\" id=\"one-minimal\" role=\"tabpanel\" aria-labelledby=\"tab-one-minimal\" aria-expanded=\"true\"\u003E";
;pug_debug_line = 68;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 68;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "Hello. I first minimal tab\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 69;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-pane fade\" id=\"two-minimal\" role=\"tabpanel\" aria-labelledby=\"tab-two-minimal\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 74;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 74;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "Hello. I second minimal tab\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 75;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 76;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 77;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-12\"\u003E";
;pug_debug_line = 78;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Ch2 class=\"text-uppercase text-lg-center\"\u003E";
;pug_debug_line = 78;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "Big tabs\u003C\u002Fh2\u003E";
;pug_debug_line = 79;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 80;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cbr\u002F\u003E";
;pug_debug_line = 81;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cul class=\"nav nav-tabs text-uppercase big-tabs\" id=\"myTaBbig\" role=\"tablist\"\u003E";
;pug_debug_line = 82;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 83;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Ca class=\"nav-link active\" id=\"tab-one-big\" data-toggle=\"tab\" href=\"#one-big\" role=\"tab\" aria-controls=\"tab-one-big\" aria-expanded=\"true\"\u003E";
;pug_debug_line = 89;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "First tab\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 90;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 91;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" id=\"tab-two-big\" data-toggle=\"tab\" href=\"#two-big\" role=\"tab\" aria-controls=\"tab-two-big\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 97;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "Second tab\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 98;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-content\" id=\"myTabBigContent\"\u003E";
;pug_debug_line = 99;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-pane fade active in\" id=\"one-big\" role=\"tabpanel\" aria-labelledby=\"tab-one-big\" aria-expanded=\"true\"\u003E";
;pug_debug_line = 104;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 104;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "Hello. I first big tab\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 105;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-pane fade\" id=\"two-big\" role=\"tabpanel\" aria-labelledby=\"tab-two-big\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 110;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 110;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\sketchesTabs.js";
pug_html = pug_html + "Hello. I second big tab\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function userLogin(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";































































;pug_debug_line = 18;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_mixins["fieldBlock"] = pug_interp = function(name, data, attr){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 19;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
if (attr.type == 'checkbox') {
;pug_debug_line = 20;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([attr.class], [true]), false, false)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Clabel" + (" class=\"pseudo-checkbox\""+pug_attr("for", name, true, false)) + "\u003E";
;pug_debug_line = 22;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cinput" + (pug_attr("name", name, true, false)+" type=\"checkbox\""+pug_attr("id", name, true, false)) + "\u002F\u003E";
;pug_debug_line = 27;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = attr.text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 29;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["form-group row " + name], [true]), false, false)) + "\u003E";
;pug_debug_line = 30;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([attr.class1 + " text-md-right"], [true]), false, false)) + "\u003E";
;pug_debug_line = 31;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", name, true, false)) + "\u003E";
;pug_debug_line = 31;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([attr.class2], [true]), false, false)) + "\u003E";
;pug_debug_line = 33;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cinput" + (" class=\"form-control\""+pug_attr("id", name, true, false)+pug_attr("name", name, true, false)+pug_attr("placeholder", name, true, false)+pug_attr("type", attr.type ? attr.type : 'text', true, false)+pug_attr("value", data, true, false)) + "\u002F\u003E";
;pug_debug_line = 40;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cspan class=\"help-block\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + " \u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
};
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"row pt50\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-12\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "Sign Up\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Csection class=\"authorization container\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-6\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"embed-responsive embed-responsive-16by9 boxshadow\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Ciframe embed-responsive-item=\"true\" src=\"https:\u002F\u002Fplayer.vimeo.com\u002Fvideo\u002F170651597?title=0&amp;amp;byline=0&amp;amp;portrait=0\" data-webkitallowfullscreen=\"\" data-mozallowfullscreen=\"\" data-allowfullscreen=\"\"\u003E\u003C\u002Fiframe\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-1\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"forms-block\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-5\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-10 text-lg-right\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cul class=\"nav nav-tabs login-tabs\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Ca class=\"active nav-link\" href=\"#mini-one\" data-toggle=\"tab\" aria-expanded=\"trueLogin\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + " Log in\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 30;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Ca class=\"nav-link\" href=\"#mini-two\" data-toggle=\"tab\" aria-expanded=\"true\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "Sign Up\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-content authorization-tabs-content\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + " ";
;pug_debug_line = 37;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-pane fade in active\" id=\"mini-one\" aria-expanded=\"true\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Csection class=\"form-section\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cform class=\"login-form\" action=\"\" method=\"post\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"clearfix\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_mixins["fieldBlock"]("email", '', {
                                                    class1: 'col-lg-3 col-md-3', 
                                                    class2: 'col-lg-7 col-md-7', 
                                                    type: 'email',
                                                });
;pug_debug_line = 47;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_mixins["fieldBlock"]("password", '', {
                                                    class1: 'col-lg-3 col-md-3', 
                                                    class2: 'col-lg-7 col-md-7', 
                                                    type: 'password'
                                                });
;pug_debug_line = 52;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"socialaccount_ballot clearfix\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-12 col-sm-12 col-xs-12 text-sm-left\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 54;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "Or login with\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 55;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-12 col-xs-12 col-lg-12\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cul class=\"social-icons list-inline clearfix text-lg-left\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 58;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Ca class=\"fa fa-facebook social-icon-color facebook\" data-original-title=\"facebook\" href=\"\u002Faccounts\u002Ffacebook\u002Flogin\u002F?process=login\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + " \u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 62;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 63;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Ca class=\"fa fa-google-plus social-icon-color googleplus\" data-original-title=\"Google Plus\" href=\"\u002Faccounts\u002Fgoogle\u002Flogin\u002F?process=login\"\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 67;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 68;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Ca class=\"fa fa-linkedin social-icon-color linkedin\" data-original-title=\"Linkedin\" href=\"\u002Faccounts\u002Flinkedin_oauth2\u002Flogin\u002F?process=login\"\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 72;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"form-group clearfix\"\u003E";
;pug_debug_line = 73;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-6 col-xs-6 text-md-right\"\u003E";
;pug_debug_line = 74;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Ca href=\"\u002Faccounts\u002Fpassword\u002Freset\u002F\" id=\"forget-password\"\u003E";
;pug_debug_line = 76;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "Forgot Password?\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 77;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"col-xs-5\"\u003E";
;pug_debug_line = 78;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cbutton class=\"btn text-uppercase\" id=\"login-btnLogin\"\u003E";
;pug_debug_line = 78;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "Login\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 79;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-pane fade\" id=\"mini-two\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 80;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 81;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Csection class=\"form-section\"\u003E";
;pug_debug_line = 82;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cform class=\"form-horizontal no-gutter-right\" action=\"\u002Faccounts\u002Fsignup\u002F\" method=\"post\"\u003E";
;pug_debug_line = 86;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_mixins["fieldBlock"]("first_name", '', {
                                                class1: 'col-lg-3 col-md-3', 
                                                class2: 'col-lg-7 col-md-7', 
                                            });
;pug_debug_line = 90;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_mixins["fieldBlock"]("last_name", '', {
                                                class1: 'col-lg-3 col-md-3', 
                                                class2: 'col-lg-7 col-md-7', 
                                            });
;pug_debug_line = 94;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_mixins["fieldBlock"]("email", '', {
                                                class1: 'col-lg-3 col-md-3', 
                                                class2: 'col-lg-7 col-md-7', 
                                                type: 'email',
                                            });
;pug_debug_line = 99;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_mixins["fieldBlock"]("password1", '', {
                                                class1: 'col-lg-3 col-md-3', 
                                                class2: 'col-lg-7 col-md-7', 
                                                type: 'password',
                                            });
;pug_debug_line = 104;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_mixins["fieldBlock"]("password2", '', {
                                                class1: 'col-lg-3 col-md-3', 
                                                class2: 'col-lg-7 col-md-7', 
                                                type: 'password',
                                            });
;pug_debug_line = 109;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_mixins["fieldBlock"]("signature", '', {
                                                class: 'col-lg-10 col-md-10', 
                                                text: 'I consent to electronic signature and electronic delivery of documentation',
                                                type: 'checkbox',
                                            });
;pug_debug_line = 114;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"form-group terms_conditions clearfix\"\u003E";
;pug_debug_line = 115;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-10\"\u003E";
;pug_debug_line = 116;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Clabel class=\"pseudo-checkbox\" for=\"terms_conditions\"\u003E";
;pug_debug_line = 117;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cinput name=\"terms_conditions\" type=\"checkbox\" id=\"terms_condition\"\u002F\u003E";
;pug_debug_line = 121;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 121;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "I consent to the \u003C\u002Fspan\u003E";
;pug_debug_line = 122;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Ca href=\"\u002Fpages\u002Fterms\u002F\" target=\"_blank\"\u003E";
;pug_debug_line = 125;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "Terms of Use \u003C\u002Fa\u003E";
;pug_debug_line = 126;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 126;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "and \u003C\u002Fspan\u003E";
;pug_debug_line = 127;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Ca href=\"\u002Fpages\u002Fprivacy\" target=\"_blank\"\u003E";
;pug_debug_line = 130;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "Privacy Policy\u003C\u002Fa\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 132;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"form-group form-actions text-sm-center\"\u003E";
;pug_debug_line = 133;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-10 col-md-9 col-xs-12 clearfix\"\u003E";
;pug_debug_line = 134;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "\u003Cbutton class=\"pull-lg-right btn text-uppercase\" type=\"button\" id=\"register-submit-btn\"\u003E";
;pug_debug_line = 136;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userLogin.js";
pug_html = pug_html + "Submit\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function userProfile(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (user) {;pug_debug_line = 1;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_mixins["breadcrumbs"] = pug_interp = function(title, subtitle, data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 2;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Csection class=\"header_title p50\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-8\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Ch1 class=\"text-uppercase\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp));
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cspan class=\"small-text\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = subtitle) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv class=\"col-lg-4\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Col class=\"breadcrumb pull-right\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
// iterate data
var pug_obj0 = data;
if ('number' == typeof pug_obj0.length) {

  for (var pug_index0 = 0, pug_length0 = pug_obj0.length; pug_index0 < pug_length0; pug_index0++) {
    var elem = pug_obj0[pug_index0];

;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
let active = (elem[1] == '') ? 'active' : ''
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["breadcrumb-item"," " + active], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
if (elem[1] == '') {
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp));
}
else {
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", elem[1], true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
  }

} else {
  var pug_length0 = 0;
  for (var pug_index0 in pug_obj0) {
    pug_length0++;
    var elem = pug_obj0[pug_index0];

;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
let active = (elem[1] == '') ? 'active' : ''
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["breadcrumb-item"," " + active], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
if (elem[1] == '') {
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp));
}
else {
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", elem[1], true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = elem[0]) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003C\u002Fli\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fol\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
};
;pug_debug_line = 18;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_mixins["fieldBlock"] = pug_interp = function(name, data, attr){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 19;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
if (attr.type == 'checkbox') {
;pug_debug_line = 20;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([attr.class], [true]), false, false)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Clabel" + (" class=\"pseudo-checkbox\""+pug_attr("for", name, true, false)) + "\u003E";
;pug_debug_line = 22;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cinput" + (pug_attr("name", name, true, false)+" type=\"checkbox\""+pug_attr("id", name, true, false)) + "\u002F\u003E";
;pug_debug_line = 27;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = attr.text) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 29;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["form-group row " + name], [true]), false, false)) + "\u003E";
;pug_debug_line = 30;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([attr.class1 + " text-md-right"], [true]), false, false)) + "\u003E";
;pug_debug_line = 31;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", name, true, false)) + "\u003E";
;pug_debug_line = 31;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes([attr.class2], [true]), false, false)) + "\u003E";
;pug_debug_line = 33;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cinput" + (" class=\"form-control\""+pug_attr("id", name, true, false)+pug_attr("name", name, true, false)+pug_attr("placeholder", name, true, false)+pug_attr("type", attr.type ? attr.type : 'text', true, false)+pug_attr("value", data, true, false)) + "\u002F\u003E";
;pug_debug_line = 40;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + "\u003Cspan class=\"help-block\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\mixins.jade";
pug_html = pug_html + " \u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
};
;pug_debug_line = 3;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["breadcrumbs"]('Account', '', 
    [
        ['Home', '/'],
        ['Account', '']
    ]
);
;pug_debug_line = 10;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"container profile pt-50\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 12;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-md-9 col-md-offset-3 col-sm-12 col-sm-offset-0 offset-lg-2\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cul class=\"nav nav-tabs profile-tabs\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 14;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\" aria-expanded=\"false\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Ca class=\"active nav-link uppercase\" href=\"#account_info\" data-toggle=\"tab\" aria-expanded=\"true\" role=\"tab\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "Account information\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 21;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 22;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Ca class=\"nav-link uppercase\" href=\"#financial_info\" data-toggle=\"tab\" role=\"tab\" aria-expanded=\"true\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "Financial information\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 28;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cli class=\"nav-item\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 29;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Ca class=\"nav-link uppercase\" href=\"#investment_preferences\" data-toggle=\"tab\" role=\"tab\" aria-expanded=\"true\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "Investment preferences\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-content profile-tabs-content\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 38;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-pane fade active in\" id=\"account_info\" aria-expanded=\"true\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 40;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Csection class=\"form-section clearfix\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 41;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cform class=\"form\" method=\"post\" action=\"\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"form-body clearfix\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 44;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4 col-md-3\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 45;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Caside\u003E";
;pug_debug_line = 46;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Ch5 class=\"widget-title font-alt\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = user.first_name) ? "" : pug_interp));
;pug_debug_line = 46;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 46;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + (pug_escape(null == (pug_interp = user.last_name) ? "" : pug_interp)) + "\u003C\u002Fh5\u003E";
;pug_debug_line = 47;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"dropzone__image drop-photo dz-clickable dropzone\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " \u003C\u002Fdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cinput type=\"hidden\" name=\"image\" value=\"80\" id=\"image\"\u002F\u003E";
;pug_debug_line = 53;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"drop-image-title text-xs-center\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 54;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 54;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "Drop your profile picture here\u003C\u002Fspan\u003E";
;pug_debug_line = 55;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-camera\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " \u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Faside\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 58;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-md-9 col-sm-8\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 59;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Csection class=\"right-block\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 60;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("first_name", user.first_name, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 61;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("last_name", user.last_name, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 62;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("street_address_1", user.street_address_1, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 63;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("street_address_2", user.street_address_2, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 64;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 65;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-md-12 col-lg-4\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("zip_code", user.zip_code, {'class1': 'col-lg-6 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 68;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-md-12 col-lg-8\"\u003E";
;pug_debug_line = 69;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("city_state", user.city_state, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 71;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 71;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 72;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-md-12 col-lg-4\"\u003E";
;pug_debug_line = 73;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("phone", user.phone, {'class1': 'col-lg-6 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 75;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-md-12 col-lg-8\"\u003E";
;pug_debug_line = 76;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("dob", user.dob, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-4 col-md-6', 'type': 'date'});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 79;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"form-group row clearfix\"\u003E";
;pug_debug_line = 79;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 80;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-md-11\"\u003E";
;pug_debug_line = 80;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 81;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"controls\"\u003E";
;pug_debug_line = 81;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 82;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cbutton class=\"bg-inverse btn btn-primary btn-lg pull-right\" type=\"submit\"\u003E";
;pug_debug_line = 84;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "Save \u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 86;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-pane fade\" id=\"financial_info\" aria-expanded=\"true\"\u003E";
;pug_debug_line = 87;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 87;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 88;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Csection class=\"form-section clearfix\"\u003E";
;pug_debug_line = 88;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 89;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cform method=\"post\" action=\"\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"form-body clearfix\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 91;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4 col-md-3\"\u003E";
;pug_debug_line = 91;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " \u003C\u002Fdiv\u003E";
;pug_debug_line = 93;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-md-9 col-sm-8\"\u003E";
;pug_debug_line = 93;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 94;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Csection class=\"right-block\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 95;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("first_name", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 96;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("last_name", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 97;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("street_address_1", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 98;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("street_address_2", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 99;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 99;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 100;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-md-12 col-lg-6\"\u003E";
;pug_debug_line = 100;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 101;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("zip_code", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 103;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-md-12 col-lg-6\"\u003E";
;pug_debug_line = 103;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 104;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("city_state", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 106;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("account_number", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 107;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("account_number_re", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 108;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("routing_number", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 109;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("account_type", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 110;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("check_type", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 111;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("name_on_bank_account", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 112;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("ssn", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 113;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("ssn", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 115;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"form-group row\"\u003E";
;pug_debug_line = 115;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 116;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-11\"\u003E";
;pug_debug_line = 116;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 117;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"investors-warning\"\u003E";
;pug_debug_line = 117;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 118;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-exclamation-triangle\"\u003E";
;pug_debug_line = 118;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " \u003C\u002Fi\u003E";
;pug_debug_line = 119;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cspan class=\"warning-text\"\u003E";
;pug_debug_line = 119;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 120;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "Investors are limited to 12 month investment totals ranging from $2,000 - $100,000 based on income and net worth. Please update your financial information to see your limit.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 122;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("annual_income", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 123;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("net_worth", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 126;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"form-group row clearfix\"\u003E";
;pug_debug_line = 126;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 127;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-md-11\"\u003E";
;pug_debug_line = 127;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 128;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"controls\"\u003E";
;pug_debug_line = 128;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 129;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cbutton class=\"bg-inverse btn btn-secondary btn-lg pull-right\" type=\"submit\"\u003E";
;pug_debug_line = 131;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " Save \u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 133;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"tab-pane fade\" id=\"investment_preferences\" aria-expanded=\"true\"\u003E";
;pug_debug_line = 134;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 134;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 135;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Csection class=\"form-section clearfix\"\u003E";
;pug_debug_line = 135;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 136;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cform class=\"form-body clearfix\" method=\"post\" action=\"\" role=\"form\"\u003E";
;pug_debug_line = 140;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 141;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4 col-md-3\"\u003E";
;pug_debug_line = 141;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " \u003C\u002Fdiv\u003E";
;pug_debug_line = 143;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-md-9 col-sm-8\"\u003E";
;pug_debug_line = 143;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 145;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Csection class=\"right-block\"\u003E";
;pug_debug_line = 145;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 146;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("where_grow_up", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 147;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("where_go_college", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 148;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("industries", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 149;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("locations", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 150;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("interested", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 151;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("investment_goals", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 152;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_mixins["fieldBlock"]("important_attributes", user, {'class1': 'col-lg-2 col-md-6', 'class2': 'col-lg-6 col-md-6', 'type': 'text'});
;pug_debug_line = 154;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"form-group row clearfix\"\u003E";
;pug_debug_line = 154;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 155;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"col-md-11 col-lg-9\"\u003E";
;pug_debug_line = 155;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 156;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"controls\"\u003E";
;pug_debug_line = 156;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " ";
;pug_debug_line = 157;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cbutton class=\"bg-inverse btn btn-secondary btn-lg pull-right\" type=\"submit\"\u003E";
;pug_debug_line = 159;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " Save \u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 161;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cdiv class=\"popover-content-ssn\"\u003E";
;pug_debug_line = 161;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " \u003C\u002Fdiv\u003E";
;pug_debug_line = 162;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Ci class=\"fa fa-info-circle\"\u003E";
;pug_debug_line = 162;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + " \u003C\u002Fi\u003E";
;pug_debug_line = 163;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 163;pug_debug_filename = "C:\\Users\\Smile\\Documents\\GitHub\\jdwhitelabels\\app\\bethesda\\templates\\userProfile.js";
pug_html = pug_html + "Why do we need this? I know it seems terribly invasive but we are required to obtain your socialsecurity number for two reasons, 1) regulators require we comply with know your customer and anti-money laundering rules and; 2) companies will need to provide you with tax information based on your investment.  Don’t worry, we’re obsessive about your privacy.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";}.call(this,"user" in locals_for_with?locals_for_with.user:typeof user!=="undefined"?user:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}