import { ctInfo, lasInfo, ntInfo, gsInfo } from "./constants.js";
const { tenDuan, diaDiem, goiThau } = ctInfo;
const { lasCompany, lasName } = lasInfo;
const bbVatlieu = [
  { text: "BIÊN BẢN LẤY MẪU TẠI HIỆN TRƯỜNG", style: "title" },
  {
    table: {
      widths: [90, "*"],
      body: [
        ["Dự án:", tenDuan],
        ["Gói thầu:", goiThau],
        ["Hạng mục:", ""],
        ["Địa điểm:", diaDiem],
      ],
      style: "ctInfo",
    },
    layout: {
      hLineWidth: function (i, node) {
        return 0;
      },
      vLineWidth: function (i, node) {
        return 0;
      },
      hLineColor: function (i, node) {
        return 0;
      },
      vLineColor: function (i, node) {
        return 0;
      },
      // hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
      // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
      // paddingLeft: function(i, node) { return 4; },
      // paddingRight: function(i, node) { return 4; },
      paddingTop: function (i, node) {
        return 5;
      },
      paddingBottom: function (i, node) {
        return 5;
      },
      // fillColor: function (rowIndex, node, columnIndex) { return null; }
    },
  },
  { text: "Chúng tôi gồm:" },
  {
    text: [
      {text: "1. Đại diện đơn vị thí nghiệm: ", 
      bold: true}, `${lasCompany} - ${lasName}.`
    ],
    style: 'thanhPhan'
  },
  {
    columns: [
      {
        width: "*",
        text: "Ông (bà): Vũ Văn Lịch",
      },
      {
        width: "*",
        text: "Chức vụ: Trưởng phòng"
      },
    ],
    style: 'thanhPhan'
  },
  {
    text: [
      {text: "2. Đại diện đơn vị TVGS: ", 
      bold: true}, `${gsInfo.ten}.`
    ],
    style: 'thanhPhan'
  },
  {
    columns: [
      {
        width: "*",
        text: `Ông (bà): ${gsInfo.daidien}`,
      },
      {
        width: "*",
        text: `Chức vụ: ${gsInfo.chucvu}`
      },
    ],
    style: 'thanhPhan'
  },
  {
    text: [
      {text: "3. Đại diện đơn vị thi công:  ", 
      bold: true}, `${gsInfo.ten}.`
    ],
    style: 'thanhPhan'
  },
  {
    columns: [
      {
        width: "*",
        text: `Ông (bà): ${ntInfo.daidien}`,
      },
      {
        width: "*",
        text: `Chức vụ: ${ntInfo.chucvu}`
      },
    ],
    style: 'thanhPhan'
  },
  { text: "TIẾN HÀNH LẤY MẪU TẠI HIỆN TRƯỜNG", style: 'mh5',bold: true, alignment: 'center' },
  {
    table: {
      widths: [30, "*", 80, 80],
      heights: 20,
      body: [
        [
          {text: "STT", style: 'tableHeader'}, 
          {text: "TÊN VẬT LIỆU", style: 'tableHeader'}, 
          {text: "ĐƠN VỊ", style: 'tableHeader'},
          {text: "KHỐI LƯỢNG", style: 'tableHeader'}, 
        ], 
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
      ]
    }
  },
  {text: "Yêu cầu:", bold: true, italics: true, style: 'mh5'},
  {text: '- Kiểm tra chỉ tiêu cơ lý của vật liệu.'},
  {
    columns: [
      {text:`ĐƠN VỊ TVGS\n\n\n\n\n\n${gsInfo.daidien}`, width: "*", alignment: "center", bold: "true"},
      {text: `ĐƠN VỊ THI CÔNG\n\n\n\n\n\n${ntInfo.daidien}`, width: "*", alignment: "center", bold: "true"},
      {text: `ĐƠN VỊ THÍ NGHIỆM\n\n\n\n\n\n${lasInfo.truongPhong}`, width: "*", alignment: "center", bold: "true"},
    ]
  }
];

export default bbVatlieu;