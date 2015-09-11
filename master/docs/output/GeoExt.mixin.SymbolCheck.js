Ext.data.JsonP.GeoExt_mixin_SymbolCheck({"tagname":"class","name":"GeoExt.mixin.SymbolCheck","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"SymbolCheck.js","href":"SymbolCheck.html#GeoExt-mixin-SymbolCheck"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Mixin","mixins":[],"requires":[],"uses":[],"members":[{"name":"symbols","tagname":"property","owner":"GeoExt.mixin.SymbolCheck","id":"property-symbols","meta":{}},{"name":"_checked","tagname":"property","owner":"GeoExt.mixin.SymbolCheck","id":"static-property-_checked","meta":{"private":true,"static":true}},{"name":"onClassMixedIn","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"method-onClassMixedIn","meta":{"private":true}},{"name":"check","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-check","meta":{"static":true}},{"name":"checkSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-checkSymbol","meta":{"private":true,"static":true}},{"name":"isDefinedSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-isDefinedSymbol","meta":{"private":true,"static":true}},{"name":"normalizeSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-normalizeSymbol","meta":{"private":true,"static":true}}],"code_type":"ext_define","id":"class-GeoExt.mixin.SymbolCheck","short_doc":"A utility class providing methods to check for symbols of OpenLayers we\ndepend upon. ...","component":false,"superclasses":["Ext.Mixin"],"subclasses":[],"mixedInto":["GeoExt.component.FeatureRenderer","GeoExt.component.Map","GeoExt.component.OverviewMap","GeoExt.data.MapfishPrintProvider","GeoExt.data.model.Object","GeoExt.data.serializer.Base","GeoExt.data.serializer.ImageWMS","GeoExt.data.serializer.TileWMS","GeoExt.data.serializer.Vector","GeoExt.data.serializer.WMTS","GeoExt.data.serializer.XYZ","GeoExt.data.store.Collection","GeoExt.data.store.Features","GeoExt.data.store.Layer","GeoExt.data.store.Tree"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Mixin<div class='subclass '><strong>GeoExt.mixin.SymbolCheck</strong></div></div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/GeoExt.component.FeatureRenderer' rel='GeoExt.component.FeatureRenderer' class='docClass'>GeoExt.component.FeatureRenderer</a></div><div class='dependency'><a href='#!/api/GeoExt.component.Map' rel='GeoExt.component.Map' class='docClass'>GeoExt.component.Map</a></div><div class='dependency'><a href='#!/api/GeoExt.component.OverviewMap' rel='GeoExt.component.OverviewMap' class='docClass'>GeoExt.component.OverviewMap</a></div><div class='dependency'><a href='#!/api/GeoExt.data.MapfishPrintProvider' rel='GeoExt.data.MapfishPrintProvider' class='docClass'>GeoExt.data.MapfishPrintProvider</a></div><div class='dependency'><a href='#!/api/GeoExt.data.model.Object' rel='GeoExt.data.model.Object' class='docClass'>GeoExt.data.model.Object</a></div><div class='dependency'><a href='#!/api/GeoExt.data.serializer.Base' rel='GeoExt.data.serializer.Base' class='docClass'>GeoExt.data.serializer.Base</a></div><div class='dependency'><a href='#!/api/GeoExt.data.serializer.ImageWMS' rel='GeoExt.data.serializer.ImageWMS' class='docClass'>GeoExt.data.serializer.ImageWMS</a></div><div class='dependency'><a href='#!/api/GeoExt.data.serializer.TileWMS' rel='GeoExt.data.serializer.TileWMS' class='docClass'>GeoExt.data.serializer.TileWMS</a></div><div class='dependency'><a href='#!/api/GeoExt.data.serializer.Vector' rel='GeoExt.data.serializer.Vector' class='docClass'>GeoExt.data.serializer.Vector</a></div><div class='dependency'><a href='#!/api/GeoExt.data.serializer.WMTS' rel='GeoExt.data.serializer.WMTS' class='docClass'>GeoExt.data.serializer.WMTS</a></div><div class='dependency'><a href='#!/api/GeoExt.data.serializer.XYZ' rel='GeoExt.data.serializer.XYZ' class='docClass'>GeoExt.data.serializer.XYZ</a></div><div class='dependency'><a href='#!/api/GeoExt.data.store.Collection' rel='GeoExt.data.store.Collection' class='docClass'>GeoExt.data.store.Collection</a></div><div class='dependency'><a href='#!/api/GeoExt.data.store.Features' rel='GeoExt.data.store.Features' class='docClass'>GeoExt.data.store.Features</a></div><div class='dependency'><a href='#!/api/GeoExt.data.store.Layer' rel='GeoExt.data.store.Layer' class='docClass'>GeoExt.data.store.Layer</a></div><div class='dependency'><a href='#!/api/GeoExt.data.store.Tree' rel='GeoExt.data.store.Tree' class='docClass'>GeoExt.data.store.Tree</a></div><h4>Files</h4><div class='dependency'><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck' target='_blank'>SymbolCheck.js</a></div></pre><div class='doc-contents'><p>A utility class providing methods to check for symbols of OpenLayers we\ndepend upon.</p>\n\n<p>This class can be mixed into classes to check if the dependencies to external\nsymbols are fulfilled. An example:</p>\n\n<pre><code>Ext.define('MyNewClass.DependingOnOpenLayersClasses', {\n    mixins: ['<a href=\"#!/api/GeoExt.mixin.SymbolCheck\" rel=\"GeoExt.mixin.SymbolCheck\" class=\"docClass\">GeoExt.mixin.SymbolCheck</a>'],\n    // the contents of the `symbols` property will be checked\n    symbols: [\n        'ol.Map', // checking a class\n        'ol.View.prototype.constrainResolution', // an instance method\n        'ol.control.ScaleLine#getUnits', // other way for instance method\n        'ol.color.asArray', // one way to reference a static method\n        'ol.color::asString' // other way to reference a static method\n    ]\n    // … your configuration and methods …\n});\n</code></pre>\n\n<p>Since this sort of checking usually only makes sense in debug mode, you can\nadditionally wrap the <code>symbols</code>-configuration in these &lt;debug&gt;-line\ncomments:</p>\n\n<pre><code>Ext.define('MyNewClass.DependingOnOpenLayersClasses', {\n    mixins: ['<a href=\"#!/api/GeoExt.mixin.SymbolCheck\" rel=\"GeoExt.mixin.SymbolCheck\" class=\"docClass\">GeoExt.mixin.SymbolCheck</a>'],\n    // &lt;debug&gt;\n    symbols: []\n    // &lt;/debug&gt;\n});\n</code></pre>\n\n<p>This means that the array of symbols is not defined in production builds\nas the wrapped lines are simply removed from the final JavaScript.</p>\n\n<p>If one of the symbols cannot be found, a warning will be printed to the\ndeveloper console (via <code>Ext.log.warn</code>, which will only print in a debug\nbuild):</p>\n\n<pre><code>[W] The class \"MyNewClass.DependingOnOpenLayersClasses\" depends on the\nexternal symbol \"ol.color.notExisting\", which does not seem to exist.\n</code></pre>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance properties</h3><div id='property-symbols' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.mixin.SymbolCheck'>GeoExt.mixin.SymbolCheck</span><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-property-symbols' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-property-symbols' class='name expandable'>symbols</a> : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The symbols to check.</p>\n</div><div class='long'><p>The symbols to check.</p>\n<p>Overrides: <a href=\"#!/api/GeoExt.data.serializer.Base-property-symbols\" rel=\"GeoExt.data.serializer.Base-property-symbols\" class=\"docClass\">GeoExt.data.serializer.Base.symbols</a>, <a href=\"#!/api/GeoExt.data.store.Collection-property-symbols\" rel=\"GeoExt.data.store.Collection-property-symbols\" class=\"docClass\">GeoExt.data.store.Collection.symbols</a></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-_checked' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.mixin.SymbolCheck'>GeoExt.mixin.SymbolCheck</span><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-property-_checked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-property-_checked' class='name expandable'>_checked</a> : Object<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>An object that we will use to store already looked up references in. ...</div><div class='long'><p>An object that we will use to store already looked up references in.</p>\n\n<p>The key will be a symbol (after it has been normalized by the\nmethod <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalizeSymbol</a>), and the value will be a boolean indicating\nif the symbol was found to be defined when it was checked.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-onClassMixedIn' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.mixin.SymbolCheck'>GeoExt.mixin.SymbolCheck</span><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-method-onClassMixedIn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-method-onClassMixedIn' class='name expandable'>onClassMixedIn</a>( <span class='pre'>cls</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Whenever a class mixes in GeoExt.mixin.SymbolCheck, this method will be\ncalled and it actually runs the checks for al...</div><div class='long'><p>Whenever a class mixes in <a href=\"#!/api/GeoExt.mixin.SymbolCheck\" rel=\"GeoExt.mixin.SymbolCheck\" class=\"docClass\">GeoExt.mixin.SymbolCheck</a>, this method will be\ncalled and it actually runs the checks for all the defined <a href=\"#!/api/GeoExt.mixin.SymbolCheck-property-symbols\" rel=\"GeoExt.mixin.SymbolCheck-property-symbols\" class=\"docClass\">symbols</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : Ext.Class<div class='sub-desc'><p>The class that this mixin is mixed into.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-check' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.mixin.SymbolCheck'>GeoExt.mixin.SymbolCheck</span><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-check' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-check' class='name expandable'>check</a>( <span class='pre'>cls</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks whether the required symbols of the given class are defined\nin the global context. ...</div><div class='long'><p>Checks whether the required symbols of the given class are defined\nin the global context. Will log to the console if a symbol cannot be\nfound.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : Ext.Base<div class='sub-desc'><p>An ext class defining a property <code>symbols</code> that\n    that this method will check.</p>\n</div></li></ul></div></div></div><div id='static-method-checkSymbol' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.mixin.SymbolCheck'>GeoExt.mixin.SymbolCheck</span><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-checkSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-checkSymbol' class='name expandable'>checkSymbol</a>( <span class='pre'>symbolStr, [clsName]</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks the passed symbolStr and raises a warning if it cannot be\nfound. ...</div><div class='long'><p>Checks the passed symbolStr and raises a warning if it cannot be\nfound.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to check. Usually this string has\n    been <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalized</a> already.</p>\n</div></li><li><span class='pre'>clsName</span> : String (optional)<div class='sub-desc'><p>The optional name of the class that\n    requires the passed openlayers symbol.</p>\n</div></li></ul></div></div></div><div id='static-method-isDefinedSymbol' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.mixin.SymbolCheck'>GeoExt.mixin.SymbolCheck</span><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-isDefinedSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol' class='name expandable'>isDefinedSymbol</a>( <span class='pre'>symbolStr</span> ) : Boolean<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks if the passed symbolStr is defined. ...</div><div class='long'><p>Checks if the passed symbolStr is defined.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to check. Usually this string has\n    been <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalized</a> already.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the symbol is defined or not.</p>\n</div></li></ul></div></div></div><div id='static-method-normalizeSymbol' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.mixin.SymbolCheck'>GeoExt.mixin.SymbolCheck</span><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-normalizeSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol' class='name expandable'>normalizeSymbol</a>( <span class='pre'>symbolStr</span> ) : String<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Normalizes a short form of a symbol to a canonical one we use to\nstore the results of the isDefinedSymbol method. ...</div><div class='long'><p>Normalizes a short form of a symbol to a canonical one we use to\nstore the results of the <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol\" class=\"docClass\">isDefinedSymbol</a> method. The following two\nnormalizations take place:</p>\n\n<ul>\n<li>A <code>#</code> in the symbol is being replaced with <code>.prototype.</code> so that\ne.g. the symbol <code>'ol.Class#methodName'</code> turns into the symbol\n<code>'ol.Class.prototype.methodName'</code></li>\n<li>A <code>::</code> in the symbol is being replaced with <code>.</code> so that\ne.g. the symbol <code>'ol.Class::staticMethodName'</code> turns into the\nsymbol <code>'ol.Class.staticMethodName'</code></li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to normalize.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The normalized string.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});