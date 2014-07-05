/*
 * Copyright (C) 2012, 2014 DuckDuckGo, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ICON_MAXIMIZE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2Fy" +
"ZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAA" +
"AAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5U" +
"Y3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6" +
"eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8w" +
"Mi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRw" +
"Oi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpE" +
"ZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5h" +
"ZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRv" +
"YmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0" +
"dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1l" +
"bnRJRD0ieG1wLmRpZDo5NzdGRjYyNjM1MjA2ODExODA4M0EwQTEwMEI2OEZENyIg" +
"eG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOEYwNzZDRURFQzQxMUUzODQ5QUI1" +
"ODJBQzQ1Njc3OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOEYwNzZDRERF" +
"QzQxMUUzODQ5QUI1ODJBQzQ1Njc3OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQ" +
"aG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0" +
"UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODEzMjRFQjY0MDIwNjgxMTgwODNBMEEx" +
"MDBCNjhGRDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTc3RkY2MjYzNTIw" +
"NjgxMTgwODNBMEExMDBCNjhGRDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRm" +
"OlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6sTaKJAAABNklE" +
"QVR42mLcv38/AxbAAsQ+QBwAxNZALAnEjED8AoiPAvFGIN4ExL+xaUQHIIO6gFgT" +
"i5wSFMcC8R0gLoYaDAdMSGyQC5qgCrAZhg5UoC7tQDYH2cA2IK6FGkwKKAfiSegG" +
"grxZwUA+yAbiEJiBoHCcwEA56ANiNpCBvkCsjE+lg4MDGBMAskAcDDIwkIF6IABk" +
"oDEVDdQDhZ8ULm/iEztw4AA2bZJMDNQFbCAXPgFiAXQZZBfAXIbDVcjgOciFZ6no" +
"wlMgA9dT0cANjMDSBmToBSDWpdCwm0CsAzLsH7TU+E+BYSC9JUD8BxbLu4G4nQID" +
"W4B4C3ppUwOVINWlPUBcj634+g8tvryB+BYRBt0HYj8gLkV2BLYSezsQ74IWaaB8" +
"boKUm55Dk9laIN4KCjN0zQABBgAY4j5CbsE6wwAAAABJRU5ErkJggg==";

var ICON_MINIMIZE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2Fy" +
"ZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAA" +
"AAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5U" +
"Y3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6" +
"eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8w" +
"Mi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRw" +
"Oi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpE" +
"ZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5h" +
"ZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRv" +
"YmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0" +
"dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1l" +
"bnRJRD0ieG1wLmRpZDo5NzdGRjYyNjM1MjA2ODExODA4M0EwQTEwMEI2OEZENyIg" +
"eG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozODQ0Njg0MURFQzQxMUUzODQ5QUI1" +
"ODJBQzQ1Njc3OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozODQ0Njg0MERF" +
"QzQxMUUzODQ5QUI1ODJBQzQ1Njc3OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQ" +
"aG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0" +
"UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODEzMjRFQjY0MDIwNjgxMTgwODNBMEEx" +
"MDBCNjhGRDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTc3RkY2MjYzNTIw" +
"NjgxMTgwODNBMEExMDBCNjhGRDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRm" +
"OlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6DcKHHAAABI0lE" +
"QVR42mLcv38/AxbAAsQ+QBwAxNZALAnEjED8AoiPAvFGIN4ExL/RNTJiMRBkUBcQ" +
"azLgB3eAuBhqMBwwIRsOxE1QBYQMAwEVqEs7kM1BNrANiGuhBpMCyoF4ErqBIG9W" +
"MJAPsoE4BGYgKAImMFAO+oCYDWSgLxArU8FAWSAOBhkYyEA9EAAy0JiKBuqBwk8K" +
"m4yDgwNenQcOHMAmLMnEQF3ABsopl4EMHSoZeA/kwrNUdOEpkIHrqWjgBpCBm4H4" +
"MhUMuwnEa0EG/oOWGv8pMAyktwSI/8BieTcQt1NgYAsQb0EvbWqgEqS6tAeI67EV" +
"X/+hxZc3EN8iwqD7QOwHxKXIjmDEUQUwQ4s0UD43QcpNz6HJbC0QbwWFGbpGgAAD" +
"AAGaOi8nh6/rAAAAAElFTkSuQmCC";

var BTN_NORMAL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NzdGRjYyNjM1MjA2ODExODA4M0EwQTEwMEI2OEZENyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMUVGNTNGQ0RFQzQxMUUzODQ5QUI1ODJBQzQ1Njc3OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMUVGNTNGQkRFQzQxMUUzODQ5QUI1ODJBQzQ1Njc3OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODEzMjRFQjY0MDIwNjgxMTgwODNBMEExMDBCNjhGRDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTc3RkY2MjYzNTIwNjgxMTgwODNBMEExMDBCNjhGRDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4frwHqAAAAi0lEQVR42mL0nrXbi5GZZTYDA4MUA2ng9f+/f5KZgJpnkaEZBESBeqczARnSDOQDaSYGCgFeAzYnOYAx2QZQ7AJiAAs2Z+MT8513gMYuQLYBZjO6rYM8EHF5B6cLgBmCbNv//fnDwPTtzYunIAapAGTx93cvn7D8+fEt+fPTe6DsLEuiGc+BOB0gwAA1YzFWkx6DxgAAAABJRU5ErkJggg==";

var BTN_HOVER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NzdGRjYyNjM1MjA2ODExODA4M0EwQTEwMEI2OEZENyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMUVGNTNGNERFQzQxMUUzODQ5QUI1ODJBQzQ1Njc3OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMUVGNTNGM0RFQzQxMUUzODQ5QUI1ODJBQzQ1Njc3OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODEzMjRFQjY0MDIwNjgxMTgwODNBMEExMDBCNjhGRDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTc3RkY2MjYzNTIwNjgxMTgwODNBMEExMDBCNjhGRDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4VloBjAAAAjElEQVR42mJRq5nvxcjEPJuBgUGKgTTw+v+/v8lMQM2zyNAMAqJAvdOZgAxpBvKBNBMDhQCvATcaY8GYbAModgExgAWbs/GJadQvprELkG2A2Yxu6yAPRFzewekCYIYg2/b/f/8wMP3+8PopiEGyZqDFvz++fcLy7+eP5J+vnoCysyyJZjwH4nSAAAMA2+YxjF/1c3MAAAAASUVORK5CYII=";


var use_safe_search = true;
var partner_query_addition = '';

self.port.on('opened', function(options) {

  if (options.feeling_ducky === true) {
    document.getElementById('adv_ducky').checked = true;
  }

  if (options.ddg_default === true) {
    document.getElementById('default_search').checked = true;
  } else {
    document.getElementById('default_search').checked = false;
  }

//if (options[3] === true)
//  document.getElementById('adv_meanings').checked = true;

  if (options.zeroclick === true)
    document.getElementById('adv_zeroclick').checked = true;

  if (options.toolbar_button === true)
    document.getElementById('adv_toolbarbutton').checked = true;


  document.getElementById('search_form_input_homepage').select();

  // putting last searched value to the input
  if (options.last_search != undefined && options.last_search !== '' && options.last_search.length == 0) {
      document.getElementById("search_form_input_homepage").value = options.last_search + 'inserted';
      document.getElementById("search_form_input_clear").style.display = 'inline-block';
      document.getElementById("search_button_homepage").className = 'selected';
      document.getElementById('search_form_input_homepage').select();
  }

  use_safe_search = options.safe_search;
  partner_query_addition = options.partner_query_addition;

  if (options.popup_maximized !== false) {
    self.port.emit('advanced-maximize');
    document.getElementById('icon_advanced').src = ICON_MINIMIZE;

    document.getElementById('advanced').style.display = 'block';
    document.getElementById('icon_advanced').className = 'maximized';
  } else {
    self.port.emit('advanced-minimize');
    document.getElementById('icon_advanced').src = ICON_MAXIMIZE;

    document.getElementById('advanced').style.display = 'none';
    document.getElementById('icon_advanced').className = 'minimized';
  }

  document.getElementById('adv_ducky').onclick = ducky_check;
  document.getElementById('default_search').onclick = change_default;
//document.getElementById('adv_meanings').onclick = meanings_check;
  document.getElementById('adv_zeroclick').onclick = zeroclick_check;
  document.getElementById('adv_toolbarbutton').onclick = toolbarbutton_check;

  document.getElementById('search_form_input_clear').onclick = search_input_clear;

  document.getElementById('bang_gi').onclick = function(){
    add_bang('!gi');
  }
  document.getElementById('bang_w').onclick = function(){
    add_bang('!w');
  }
  document.getElementById('bang_bi').onclick = function(){
    add_bang('!bi');
  }
  document.getElementById('bang_a').onclick = function(){
    add_bang('!a');
  }
  document.getElementById('bang_n').onclick = function(){
    add_bang('!n');
  }
  document.getElementById('bang_yt').onclick = function(){
    add_bang('!yt');
  }
  document.getElementById('bang_m').onclick = function(){
    add_bang('!m');
  }

  var images = document.querySelectorAll('li img');
  for(var i = 0; i < images.length; i++) {
    images[i].onmouseover = function() {
        this.src = BTN_HOVER;
    }

    images[i].onmouseout = function() {
        this.src = BTN_NORMAL;
    }
  }

  document.getElementById("search_form_input_homepage").onkeydown = function(){
    document.getElementById("search_form_input_clear").style.display = 'inline-block';
    document.getElementById("search_button_homepage").className = 'selected';
    this.style.color = '#000000';
  };
  document.getElementById("search_form_input_homepage").onkeyup = function(){
    if (this.value == '') {
      this.style.color = '#999999';
      search_input_clear();
    }
  };


  document.getElementById('search_form_homepage').onsubmit = function(e){
    e.preventDefault();
    return search();
  }

  document.getElementById('all_bangs_link').onclick = function(){
    self.port.emit('open-ddg', "http://duckduckgo.com/bang.html");
  }

  document.getElementById('addons').onclick = function(){
    self.port.emit('open-ddg', "about:addons");
  }


});


function search(){
  var input = document.getElementById("search_form_input_homepage").value;

  if (input == '')
      return false;


  self.port.emit('set-last_search', input);

  if (document.getElementById('adv_ducky').checked === true) {
    input = "\\" + input;
  }

  var special = '';
//if(document.getElementById('adv_meanings').checked !== true) {
//  special = '&d=1';
//}

  special += '&kp=' + ((use_safe_search) ? '1' : '-1');
  special += partner_query_addition;
  self.port.emit('open-ddg', "https://duckduckgo.com/?q="+encodeURIComponent(input)+special);

  return false;
}

document.getElementById('icon_advanced').onclick = function(){
  if (this.className == 'minimized') {
    self.port.emit('advanced-maximize');
    this.src = ICON_MAXIMIZE;

    document.getElementById('advanced').style.display = 'block';
    this.className = 'maximized';
  } else {
    self.port.emit('advanced-minimize');
    this.src = ICON_MAXIMIZE;

    document.getElementById('advanced').style.display = 'none';
    this.className = 'minimized';
  }
  document.getElementById('search_form_input_homepage').focus();
}

function add_bang(bang) {
    var inp = document.getElementById('search_form_input_homepage');

    var bang_regex = /\!\w+/;

    document.getElementById("search_form_input_clear").style.display= 'inline-block';
    document.getElementById("search_button_homepage").className = 'selected';

    if (inp.value === '') {
        //inp.style.color = '#000';
        inp.value = bang + ' ';
        inp.focus();
    } else {
        var found_bangs = bang_regex.exec(inp.value);
        if (found_bangs !== null) {
            inp.value = inp.value.replace(found_bangs[0], bang);
        } else {
            inp.value += bang;
            search();
        }
    }
}


function ducky_check(){
  self.port.emit('ducky-swap', document.getElementById('adv_ducky').checked);
}

////function meanings_check(){
////  self.port.emit('meanings-swap', document.getElementById('adv_ducky').checked);
////}

function zeroclick_check(){
  self.port.emit('zeroclick-swap', document.getElementById('adv_zeroclick').checked);
}

function change_default(){
  self.port.emit('swap-default', document.getElementById('default_search').checked);
}

function toolbarbutton_check(){
  self.port.emit('swap-toolbarbutton', document.getElementById('adv_toolbarbutton').checked);
}

function search_input_clear() {
  self.port.emit('set-last_search', '');

  document.getElementById('search_form_input_homepage').value = '';
  document.getElementById("search_form_input_clear").style.display= 'none';
  document.getElementById('search_form_input_homepage').focus();
  document.getElementById("search_button_homepage").className = '';
 }



