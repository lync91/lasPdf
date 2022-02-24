import { logo } from "./logo.js";
import { lasInfo } from "./constants.js";

const { lasName, lasCompany, address, phone, fax } = lasInfo;

const pageHeader = [{
  style: 'tableExample',
  table: {
    widths: [90, 'auto'],
    body: [
      [{
        rowSpan: 3,
        image: logo,
        width: 90
      }, {
        text: lasCompany.toUpperCase(), style: {
          alignment: 'center',
          bold: true
        }
      }],
      ["", { text: lasName.toUpperCase(), alignment: 'center' }],
      ["", { text: address, alignment: 'center' }],
    ]
  },
  layout: {
    hLineWidth: function (i, node) {
      return (i === 0 || i === node.table.body.length) ? 1 : 0;
    },
    vLineWidth: function (i, node) {
      return (i === 0 || i === node.table.widths.length) ? 1 : 0;
    },
    hLineColor: function (i, node) {
      return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
    },
    vLineColor: function (i, node) {
      return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
    },
  }
}]
export default pageHeader;