Ext.data.JsonP.GeoExt_component_Popup({"tagname":"class","name":"GeoExt.component.Popup","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Popup.js","href":"Popup.html#GeoExt-component-Popup"}],"aliases":{"widget":["gx_popup","gx_component_popup"]},"alternateClassNames":[],"extends":"Ext.Component","mixins":[],"requires":[],"uses":[],"members":[{"name":"map","tagname":"cfg","owner":"GeoExt.component.Popup","id":"cfg-map","meta":{}},{"name":"overlay","tagname":"cfg","owner":"GeoExt.component.Popup","id":"cfg-overlay","meta":{}},{"name":"cls","tagname":"property","owner":"GeoExt.component.Popup","id":"property-cls","meta":{}},{"name":"overlayElement","tagname":"property","owner":"GeoExt.component.Popup","id":"property-overlayElement","meta":{"private":true}},{"name":"overlayElementCreated","tagname":"property","owner":"GeoExt.component.Popup","id":"property-overlayElementCreated","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"GeoExt.component.Popup","id":"method-constructor","meta":{"private":true}},{"name":"getMap","tagname":"method","owner":"GeoExt.component.Popup","id":"method-getMap","meta":{}},{"name":"getOverlay","tagname":"method","owner":"GeoExt.component.Popup","id":"method-getOverlay","meta":{}},{"name":"initComponent","tagname":"method","owner":"GeoExt.component.Popup","id":"method-initComponent","meta":{"private":true}},{"name":"onBeforeDestroy","tagname":"method","owner":"GeoExt.component.Popup","id":"method-onBeforeDestroy","meta":{"private":true}},{"name":"position","tagname":"method","owner":"GeoExt.component.Popup","id":"method-position","meta":{}},{"name":"setMap","tagname":"method","owner":"GeoExt.component.Popup","id":"method-setMap","meta":{}},{"name":"setOverlay","tagname":"method","owner":"GeoExt.component.Popup","id":"method-setOverlay","meta":{}},{"name":"setOverlayElement","tagname":"method","owner":"GeoExt.component.Popup","id":"method-setOverlayElement","meta":{"private":true}},{"name":"setupOverlay","tagname":"method","owner":"GeoExt.component.Popup","id":"method-setupOverlay","meta":{"private":true}}],"code_type":"ext_define","id":"class-GeoExt.component.Popup","component":true,"superclasses":["Ext.Component"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Component<div class='subclass '><strong>GeoExt.component.Popup</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Popup.html#GeoExt-component-Popup' target='_blank'>Popup.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-map' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-cfg-map' class='name expandable'>map</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-overlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-cfg-overlay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-cfg-overlay' class='name expandable'>overlay</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-property-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-property-cls' class='name expandable'>cls</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'gx-popup'</code></p></div></div></div><div id='property-overlayElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-property-overlayElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-property-overlayElement' class='name expandable'>overlayElement</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-overlayElementCreated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-property-overlayElementCreated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-property-overlayElementCreated' class='name expandable'>overlayElementCreated</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.component.Popup-method-constructor' class='name expandable'>GeoExt.component.Popup</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/GeoExt.component.Popup\" rel=\"GeoExt.component.Popup\" class=\"docClass\">GeoExt.component.Popup</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.component.Popup\" rel=\"GeoExt.component.Popup\" class=\"docClass\">GeoExt.component.Popup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-getMap' class='name expandable'>getMap</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of map. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.component.Popup-cfg-map\" rel=\"GeoExt.component.Popup-cfg-map\" class=\"docClass\">map</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOverlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-cfg-overlay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-getOverlay' class='name expandable'>getOverlay</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of overlay. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.component.Popup-cfg-overlay\" rel=\"GeoExt.component.Popup-cfg-overlay\" class=\"docClass\">overlay</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onBeforeDestroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-method-onBeforeDestroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-onBeforeDestroy' class='name expandable'>onBeforeDestroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-position' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-method-position' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-position' class='name expandable'>position</a>( <span class='pre'>coordinate</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>(Re-)Positions the popup to the given coordinates. ...</div><div class='long'><p>(Re-)Positions the popup to the given coordinates.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>coordinate</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-setMap' class='name expandable'>setMap</a>( <span class='pre'>map</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of map. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.component.Popup-cfg-map\" rel=\"GeoExt.component.Popup-cfg-map\" class=\"docClass\">map</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>map</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setOverlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-cfg-overlay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-setOverlay' class='name expandable'>setOverlay</a>( <span class='pre'>overlay</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of overlay. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.component.Popup-cfg-overlay\" rel=\"GeoExt.component.Popup-cfg-overlay\" class=\"docClass\">overlay</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>overlay</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setOverlayElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-method-setOverlayElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-setOverlayElement' class='name expandable'>setOverlayElement</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setupOverlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.component.Popup'>GeoExt.component.Popup</span><br/><a href='source/Popup.html#GeoExt-component-Popup-method-setupOverlay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.component.Popup-method-setupOverlay' class='name expandable'>setupOverlay</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});