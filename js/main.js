import { pdfStyle } from "./styles.js";
import pageHeader from "./pageHeader.js"
import bbVatlieu from "./bbVatlieu.js";
(function () {

  var docDefinition = {
    content: [],
    defaultStyle: {
    },
    styles: pdfStyle
  };
  docDefinition.content = [...pageHeader, ...bbVatlieu];
  var doc = pdfMake.createPdf(docDefinition);
  var f = document.getElementById('foo');
  var callback = function (url) { f.setAttribute('src', url); }
  doc.getDataUrl(callback, doc);
})();