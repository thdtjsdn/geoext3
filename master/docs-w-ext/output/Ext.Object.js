Ext.data.JsonP.Ext_Object({"tagname":"class","name":"Ext.Object","autodetected":{},"files":[{"filename":"Object.js","href":"Object.html#Ext-Object"}],"singleton":true,"members":[{"name":"chain","tagname":"method","owner":"Ext.Object","id":"method-chain","meta":{}},{"name":"classify","tagname":"method","owner":"Ext.Object","id":"method-classify","meta":{"private":true}},{"name":"clear","tagname":"method","owner":"Ext.Object","id":"method-clear","meta":{}},{"name":"each","tagname":"method","owner":"Ext.Object","id":"method-each","meta":{}},{"name":"eachValue","tagname":"method","owner":"Ext.Object","id":"method-eachValue","meta":{}},{"name":"equals","tagname":"method","owner":"Ext.Object","id":"method-equals","meta":{}},{"name":"fork","tagname":"method","owner":"Ext.Object","id":"method-fork","meta":{"private":true}},{"name":"freeze","tagname":"method","owner":"Ext.Object","id":"method-freeze","meta":{}},{"name":"fromQueryString","tagname":"method","owner":"Ext.Object","id":"method-fromQueryString","meta":{}},{"name":"getAllKeys","tagname":"method","owner":"Ext.Object","id":"method-getAllKeys","meta":{}},{"name":"getKey","tagname":"method","owner":"Ext.Object","id":"method-getKey","meta":{}},{"name":"getKeys","tagname":"method","owner":"Ext.Object","id":"method-getKeys","meta":{}},{"name":"getSize","tagname":"method","owner":"Ext.Object","id":"method-getSize","meta":{}},{"name":"getValues","tagname":"method","owner":"Ext.Object","id":"method-getValues","meta":{}},{"name":"isEmpty","tagname":"method","owner":"Ext.Object","id":"method-isEmpty","meta":{}},{"name":"merge","tagname":"method","owner":"Ext.Object","id":"method-merge","meta":{}},{"name":"mergeIf","tagname":"method","owner":"Ext.Object","id":"method-mergeIf","meta":{"private":true}},{"name":"toQueryObjects","tagname":"method","owner":"Ext.Object","id":"method-toQueryObjects","meta":{}},{"name":"toQueryString","tagname":"method","owner":"Ext.Object","id":"method-toQueryString","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Ext.Object","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Object.html#Ext-Object' target='_blank'>Object.js</a></div></pre><div class='doc-contents'><p>A collection of useful static methods to deal with objects.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-chain' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-chain' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-chain' class='name expandable'>chain</a>( <span class='pre'>object</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a new object with the given object as the prototype chain. ...</div><div class='long'><p>Returns a new object with the given object as the prototype chain. This method is\ndesigned to mimic the ECMA standard <code>Object.create</code> method and is assigned to that\nfunction when it is available.</p>\n\n<p><strong>NOTE</strong> This method does not support the property definitions capability of the\n<code>Object.create</code> method. Only the first argument is supported.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>The prototype chain for the new object.</p>\n</div></li></ul></div></div></div><div id='method-classify' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-classify' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-classify' class='name expandable'>classify</a>( <span class='pre'>object</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-clear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-clear' class='name expandable'>clear</a>( <span class='pre'>object</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>This method removes all keys from the given object. ...</div><div class='long'><p>This method removes all keys from the given object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>The object from which to remove all keys.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The given object.</p>\n</div></li></ul></div></div></div><div id='method-each' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-each' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-each' class='name expandable'>each</a>( <span class='pre'>object, fn, [scope]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Iterates through an object and invokes the given callback function for each iteration. ...</div><div class='long'><p>Iterates through an object and invokes the given callback function for each iteration.\nThe iteration can be stopped by returning <code>false</code> in the callback function. For example:</p>\n\n<pre><code>var person = {\n    name: 'Jacky'\n    hairColor: 'black'\n    loves: ['food', 'sleeping', 'wife']\n};\n\n<a href=\"#!/api/Ext.Object-method-each\" rel=\"Ext.Object-method-each\" class=\"docClass\">Ext.Object.each</a>(person, function(key, value, myself) {\n    console.log(key + \":\" + value);\n\n    if (key === 'hairColor') {\n        return false; // stop the iteration\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>The object to iterate</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The callback function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>The object itself</p>\n</div></li></ul></div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The execution scope (<code>this</code>) of the callback function</p>\n</div></li></ul></div></div></div><div id='method-eachValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-eachValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-eachValue' class='name expandable'>eachValue</a>( <span class='pre'>object, fn, [scope]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Iterates through an object and invokes the given callback function for each iteration. ...</div><div class='long'><p>Iterates through an object and invokes the given callback function for each iteration.\nThe iteration can be stopped by returning <code>false</code> in the callback function. For example:</p>\n\n<pre><code>var items = {\n    1: 'Hello',\n    2: 'World'\n};\n\n<a href=\"#!/api/Ext.Object-method-eachValue\" rel=\"Ext.Object-method-eachValue\" class=\"docClass\">Ext.Object.eachValue</a>(items, function (value) {\n    console.log(\"Value: \" + value);\n});\n</code></pre>\n\n<p>This will log 'Hello' and 'World' in no particular order. This method is useful\nin cases where the keys are not important to the processing, just the values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>The object to iterate</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The callback function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value of</p>\n</div></li></ul></div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The execution scope (<code>this</code>) of the callback function</p>\n</div></li></ul></div></div></div><div id='method-equals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-equals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-equals' class='name expandable'>equals</a>( <span class='pre'>object1, object2</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Shallow compares the contents of 2 objects using strict equality. ...</div><div class='long'><p>Shallow compares the contents of 2 objects using strict equality. Objects are\nconsidered equal if they both have the same set of properties and the\nvalue for those properties equals the other in the corresponding object.</p>\n\n<pre><code>// Returns true\n<a href=\"#!/api/Ext.Object-method-equals\" rel=\"Ext.Object-method-equals\" class=\"docClass\">Ext.Object.equals</a>({\n    foo: 1,\n    bar: 2\n}, {\n    foo: 1,\n    bar: 2\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object1</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>object2</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if the objects are equal.</p>\n</div></li></ul></div></div></div><div id='method-fork' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-fork' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-fork' class='name expandable'>fork</a>( <span class='pre'>obj</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-freeze' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-freeze' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-freeze' class='name expandable'>freeze</a>( <span class='pre'>obj, [deep]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Freezes the given object making it immutable. ...</div><div class='long'><p>Freezes the given object making it immutable. This operation is by default shallow\nand does not effect objects referenced by the given object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>The object to freeze.</p>\n</div></li><li><span class='pre'>deep</span> : Boolean (optional)<div class='sub-desc'><p>Pass <code>true</code> to freeze sub-objects recursively.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The given object <code>obj</code>.</p>\n</div></li></ul></div></div></div><div id='method-fromQueryString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-fromQueryString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-fromQueryString' class='name expandable'>fromQueryString</a>( <span class='pre'>queryString, [recursive]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Converts a query string back into an object. ...</div><div class='long'><p>Converts a query string back into an object.</p>\n\n<p>Non-recursive:</p>\n\n<pre><code><a href=\"#!/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a>(\"foo=1&amp;bar=2\"); // returns {foo: '1', bar: '2'}\n<a href=\"#!/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a>(\"foo=&amp;bar=2\"); // returns {foo: '', bar: '2'}\n<a href=\"#!/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a>(\"some%20price=%24300\"); // returns {'some price': '$300'}\n<a href=\"#!/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a>(\"colors=red&amp;colors=green&amp;colors=blue\"); // returns {colors: ['red', 'green', 'blue']}\n</code></pre>\n\n<p>Recursive:</p>\n\n<pre><code><a href=\"#!/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a>(\n    \"username=Jacky&amp;\"+\n    \"dateOfBirth[day]=1&amp;dateOfBirth[month]=2&amp;dateOfBirth[year]=1911&amp;\"+\n    \"hobbies[0]=coding&amp;hobbies[1]=eating&amp;hobbies[2]=sleeping&amp;\"+\n    \"hobbies[3][0]=nested&amp;hobbies[3][1]=stuff\", true);\n\n// returns\n{\n    username: 'Jacky',\n    dateOfBirth: {\n        day: '1',\n        month: '2',\n        year: '1911'\n    },\n    hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]\n}\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>queryString</span> : String<div class='sub-desc'><p>The query string to decode</p>\n</div></li><li><span class='pre'>recursive</span> : Boolean (optional)<div class='sub-desc'><p>Whether or not to recursively decode the string. This format is supported by\nPHP / Ruby on Rails servers and similar.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAllKeys' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-getAllKeys' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-getAllKeys' class='name expandable'>getAllKeys</a>( <span class='pre'>object</span> ) : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns all keys of the given object as an array. ...</div><div class='long'><p>Returns all keys of the given object as an array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'><p>An array of keys from the object or any of its prototypes.</p>\n</div></li></ul></div></div></div><div id='method-getKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-getKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-getKey' class='name expandable'>getKey</a>( <span class='pre'>object, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the first matching key corresponding to the given value. ...</div><div class='long'><p>Returns the first matching key corresponding to the given value.\nIf no matching value is found, null is returned.</p>\n\n<pre><code>var person = {\n    name: 'Jacky',\n    loves: 'food'\n};\n\nalert(<a href=\"#!/api/Ext.Object-method-getKey\" rel=\"Ext.Object-method-getKey\" class=\"docClass\">Ext.Object.getKey</a>(person, 'food')); // alerts 'loves'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value to find</p>\n</div></li></ul></div></div></div><div id='method-getKeys' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-getKeys' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-getKeys' class='name expandable'>getKeys</a>( <span class='pre'>object</span> ) : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the hasOwnProperty keys of the given object as an array. ...</div><div class='long'><p>Returns the <code>hasOwnProperty</code> keys of the given object as an array.</p>\n\n<pre><code>var values = <a href=\"#!/api/Ext.Object-method-getKeys\" rel=\"Ext.Object-method-getKeys\" class=\"docClass\">Ext.Object.getKeys</a>({\n    name: 'Jacky',\n    loves: 'food'\n}); // ['name', 'loves']\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'><p>An array of keys from the object</p>\n</div></li></ul></div></div></div><div id='method-getSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-getSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-getSize' class='name expandable'>getSize</a>( <span class='pre'>object</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the total number of this object's own properties\n\nvar size = Ext.Object.getSize({\n    name: 'Jacky',\n    loves: ...</div><div class='long'><p>Gets the total number of this object's own properties</p>\n\n<pre><code>var size = <a href=\"#!/api/Ext.Object-method-getSize\" rel=\"Ext.Object-method-getSize\" class=\"docClass\">Ext.Object.getSize</a>({\n    name: 'Jacky',\n    loves: 'food'\n}); // size equals 2\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>size</p>\n</div></li></ul></div></div></div><div id='method-getValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-getValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-getValues' class='name expandable'>getValues</a>( <span class='pre'>object</span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets all values of the given object as an array. ...</div><div class='long'><p>Gets all values of the given object as an array.</p>\n\n<pre><code>var values = <a href=\"#!/api/Ext.Object-method-getValues\" rel=\"Ext.Object-method-getValues\" class=\"docClass\">Ext.Object.getValues</a>({\n    name: 'Jacky',\n    loves: 'food'\n}); // ['Jacky', 'food']\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>An array of values from the object</p>\n</div></li></ul></div></div></div><div id='method-isEmpty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-isEmpty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-isEmpty' class='name expandable'>isEmpty</a>( <span class='pre'>object</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Checks if there are any properties on this object. ...</div><div class='long'><p>Checks if there are any properties on this object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if there no properties on the object.</p>\n</div></li></ul></div></div></div><div id='method-merge' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-merge' class='name expandable'>merge</a>( <span class='pre'>destination, object</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Merges any number of objects recursively without referencing them or their children. ...</div><div class='long'><p>Merges any number of objects recursively without referencing them or their children.</p>\n\n<pre><code>var extjs = {\n    companyName: 'Ext JS',\n    products: ['Ext JS', 'Ext GWT', 'Ext Designer'],\n    isSuperCool: true,\n    office: {\n        size: 2000,\n        location: 'Palo Alto',\n        isFun: true\n    }\n};\n\nvar newStuff = {\n    companyName: 'Sencha Inc.',\n    products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],\n    office: {\n        size: 40000,\n        location: 'Redwood City'\n    }\n};\n\nvar sencha = <a href=\"#!/api/Ext.Object-method-merge\" rel=\"Ext.Object-method-merge\" class=\"docClass\">Ext.Object.merge</a>(extjs, newStuff);\n\n// extjs and sencha then equals to\n{\n    companyName: 'Sencha Inc.',\n    products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],\n    isSuperCool: true,\n    office: {\n        size: 40000,\n        location: 'Redwood City',\n        isFun: true\n    }\n}\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>destination</span> : Object<div class='sub-desc'><p>The object into which all subsequent objects are merged.</p>\n</div></li><li><span class='pre'>object</span> : Object...<div class='sub-desc'><p>Any number of objects to merge into the destination.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>merged The destination object with all passed objects merged in.</p>\n</div></li></ul></div></div></div><div id='method-mergeIf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-mergeIf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-mergeIf' class='name expandable'>mergeIf</a>( <span class='pre'>destination</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>destination</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toQueryObjects' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-toQueryObjects' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-toQueryObjects' class='name expandable'>toQueryObjects</a>( <span class='pre'>name, value, [recursive]</span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Converts a name - value pair to an array of objects with support for nested structures. ...</div><div class='long'><p>Converts a <code>name</code> - <code>value</code> pair to an array of objects with support for nested structures. Useful to construct\nquery strings. For example:</p>\n\n<pre><code>var objects = <a href=\"#!/api/Ext.Object-method-toQueryObjects\" rel=\"Ext.Object-method-toQueryObjects\" class=\"docClass\">Ext.Object.toQueryObjects</a>('hobbies', ['reading', 'cooking', 'swimming']);\n\n// objects then equals:\n[\n    { name: 'hobbies', value: 'reading' },\n    { name: 'hobbies', value: 'cooking' },\n    { name: 'hobbies', value: 'swimming' },\n];\n\nvar objects = <a href=\"#!/api/Ext.Object-method-toQueryObjects\" rel=\"Ext.Object-method-toQueryObjects\" class=\"docClass\">Ext.Object.toQueryObjects</a>('dateOfBirth', {\n    day: 3,\n    month: 8,\n    year: 1987,\n    extra: {\n        hour: 4\n        minute: 30\n    }\n}, true); // Recursive\n\n// objects then equals:\n[\n    { name: 'dateOfBirth[day]', value: 3 },\n    { name: 'dateOfBirth[month]', value: 8 },\n    { name: 'dateOfBirth[year]', value: 1987 },\n    { name: 'dateOfBirth[extra][hour]', value: 4 },\n    { name: 'dateOfBirth[extra][minute]', value: 30 },\n];\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object/Array<div class='sub-desc'>\n</div></li><li><span class='pre'>recursive</span> : Boolean (optional)<div class='sub-desc'><p>True to traverse object recursively</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toQueryString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Object'>Ext.Object</span><br/><a href='source/Object.html#Ext-Object-method-toQueryString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Object-method-toQueryString' class='name expandable'>toQueryString</a>( <span class='pre'>object, [recursive]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Takes an object and converts it to an encoded query string. ...</div><div class='long'><p>Takes an object and converts it to an encoded query string.</p>\n\n<p>Non-recursive:</p>\n\n<pre><code><a href=\"#!/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a>({foo: 1, bar: 2}); // returns \"foo=1&amp;bar=2\"\n<a href=\"#!/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a>({foo: null, bar: 2}); // returns \"foo=&amp;bar=2\"\n<a href=\"#!/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a>({'some price': '$300'}); // returns \"some%20price=%24300\"\n<a href=\"#!/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a>({date: new Date(2011, 0, 1)}); // returns \"date=%222011-01-01T00%3A00%3A00%22\"\n<a href=\"#!/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a>({colors: ['red', 'green', 'blue']}); // returns \"colors=red&amp;colors=green&amp;colors=blue\"\n</code></pre>\n\n<p>Recursive:</p>\n\n<pre><code><a href=\"#!/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a>({\n    username: 'Jacky',\n    dateOfBirth: {\n        day: 1,\n        month: 2,\n        year: 1911\n    },\n    hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]\n}, true); // returns the following string (broken down and url-decoded for ease of reading purpose):\n// username=Jacky\n//    &amp;dateOfBirth[day]=1&amp;dateOfBirth[month]=2&amp;dateOfBirth[year]=1911\n//    &amp;hobbies[0]=coding&amp;hobbies[1]=eating&amp;hobbies[2]=sleeping&amp;hobbies[3][0]=nested&amp;hobbies[3][1]=stuff\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>The object to encode</p>\n</div></li><li><span class='pre'>recursive</span> : Boolean (optional)<div class='sub-desc'><p>Whether or not to interpret the object in recursive format.\n(PHP / Ruby on Rails servers and similar).</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>queryString</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});