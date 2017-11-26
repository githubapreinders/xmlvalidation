

(function()
{
	function readXml()
	{
		var myxml = new XMLHttpRequest();
		myxml.open('GET', 'firstfile.xml', false);
		myxml.send();
		var file = myxml.responseText;

		myxml = new XMLHttpRequest();
		myxml.open('GET', 'firstfile.xsd', false);
		myxml.send();
		var schema = myxml.responseText;

		var message = validateXML(file, schema);
		document.getElementById('messagearea').innerHTML = message;
	}

	readXml();

})();










