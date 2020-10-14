webpackHotUpdate_N_E("pages/impresos",{

/***/ "./pages/impresos/index.jsx":
/*!**********************************!*\
  !*** ./pages/impresos/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_default_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Layout/default.jsx */ "./Layout/default.jsx");
/* harmony import */ var _components_Index_imageInfo_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Index/imageInfo.jsx */ "./components/Index/imageInfo.jsx");
/* harmony import */ var _components_core_Carousel_default_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/core/Carousel/default.jsx */ "./components/core/Carousel/default.jsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_print_TableScroll_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/print/TableScroll.jsx */ "./components/print/TableScroll.jsx");
/* harmony import */ var _components_core_Button_default_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/core/Button/default.jsx */ "./components/core/Button/default.jsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\wtequia\\Desktop\\paute\\pages\\impresos\\index.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Print = function Print() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("first"),
      showData = _useState3[0],
      setShowData = _useState3[1];

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  };

  var handleOnClickFirst = function handleOnClickFirst(e) {
    e.preventDefault();
    setShowData("first");
    setTitle("Especial 133 años");
    handleShow();
  };

  var handleOnClickSecond = function handleOnClickSecond(e) {
    e.preventDefault();
    setShowData("second");
    setTitle("Especial Colombia");
    handleShow();
  };

  var handleOnClickThird = function handleOnClickThird(e) {
    e.preventDefault();
    setShowData("third");
    setTitle("Especial Samsung");
    handleShow();
  };

  var element = showData === "first" ? __jsx("div", {
    className: "Print-modalBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 31
    }
  }, __jsx("img", {
    className: "Print-modalImage",
    src: "/images/impresos/133_1.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx(_components_core_Carousel_default_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    show: 1,
    scroll: 1,
    theme: "Slides_modalPrint",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/impresos/133_1.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/impresos/133_2.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/impresos/133_3.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  })))) : showData === "second" ? __jsx("div", {
    className: "Print-modalBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 36
    }
  }, __jsx("img", {
    className: "Print-modalImage",
    src: "/images/impresos/especial_colombia_1.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 8
    }
  }), __jsx(_components_core_Carousel_default_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    show: 1,
    scroll: 1,
    theme: "Slides_modalPrint",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 8
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 8
    }
  }, __jsx("img", {
    src: "/images/impresos/especial_colombia_1.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 8
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 8
    }
  }, __jsx("img", {
    src: "/images/impresos/especial_colombia_2.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 8
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 8
    }
  }, __jsx("img", {
    src: "/images/impresos/especial_colombia_3.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 8
    }
  })))) : __jsx("div", {
    className: "Print-modalBody",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 8
    }
  }, __jsx("img", {
    className: "Print-modalImage",
    src: "/images/impresos/especialSamsung_1.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 8
    }
  }), __jsx(_components_core_Carousel_default_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    show: 1,
    scroll: 1,
    theme: "Slides_modalPrint",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/impresos/especialSamsung_1.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/impresos/especialSamsung_2.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }))));
  return __jsx(_Layout_default_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "Index-section Index-section_background Index-section_noPadding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 6
    }
  }, __jsx(_components_core_Carousel_default_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    show: 3,
    scroll: 1,
    theme: "Slides-printCarousel" // center='center'
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx("div", {
    onClick: handleOnClickFirst,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_5___default.a, {
    height: 600,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/impresos/133_1.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "Print-carouselText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, "Especial 133 a\xF1os")), __jsx("div", {
    onClick: handleOnClickSecond,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_5___default.a, {
    height: 600,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/impresos/especial_colombia_1.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "Print-carouselText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, "Especial Colombia")), __jsx("div", {
    onClick: handleOnClickThird,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_5___default.a, {
    height: 600,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/impresos/especialSamsung_1.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "Print-carouselText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, "Especial Samsung")))), __jsx("section", {
    className: "Index-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "Index-infoSection Index-infoSection_spaceAround",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, __jsx(_components_Index_imageInfo_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: "/images/impresos/preferencias_1.png",
    title: "1.829.093",
    subtitle: "lectores \xFAltimos 30 d\xEDas",
    style: "ImageInfo-image_print",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 19
    }
  }), __jsx(_components_Index_imageInfo_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: "/images/impresos/preferencias_2.png",
    title: "420.594",
    subtitle: "lectores domingo",
    info: "Fuente EGM -2 2019",
    style: "ImageInfo-image_print",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }), __jsx(_components_Index_imageInfo_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: "/images/impresos/preferencias_3.png",
    title: "190.019",
    subtitle: "lectores d\xEDa de ayer",
    style: "ImageInfo-image_print",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  })))))), __jsx("section", {
    className: "Index-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 12
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 16
    }
  }, __jsx("div", {
    className: "Print-sectionTitle Print-sectionTitle_underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 16
    }
  }, "Tarifas y formatos 2020"), __jsx("div", {
    className: "Print-sectionText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }, "Datos de publicidad adaptados al estilo gr\xE1fico de El Espectador, que permite impactar al usuario de una forma menos intrusiva que con la publicidad tradicional"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 12
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 16
    }
  }, __jsx("div", {
    className: "Print-sectionTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 16
    }
  }, "Tarifas impreso"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 12
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 16
    }
  }, __jsx(_components_print_TableScroll_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tableNumber: "one",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 5
    }
  }))))), __jsx("section", {
    className: "Index-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 7,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "Print-sectionTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 12
    }
  }, "Centimetros por columna"), __jsx(_components_print_TableScroll_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tableNumber: "two",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 12
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "Print-sectionTitle Print-sectionTitle_border",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 12
    }
  }, "Columnas tabloide"), __jsx("div", {
    className: "Print-imageTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_5___default.a, {
    height: 600,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 12
    }
  }, __jsx("img", {
    src: "/images/impresos/tabloide.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 12
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 14
    }
  }, __jsx("div", {
    className: "Print-noteTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 14
    }
  }, "Nota"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "Print-noteText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
    }
  }, "Incrementos del 20% para domingo. Las tarifas no incluyen IVA")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }, __jsx(_components_core_Button_default_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "submit",
    theme: "Button-form  Button-form_print",
    content: "Ver medidas",
    lick: function lick() {
      return window.location.href = "https://embeber-pdf-arc.s3.amazonaws.com/Tarifas%20EE%202020-1586905028285.pdf";
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }))))))), __jsx("section", {
    className: "Index-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "Print-sectionTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  }, "Insertos y manualidades"), __jsx("div", {
    className: "Print-tableDiv",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 15
    }
  }, __jsx(_components_print_TableScroll_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tableNumber: "three",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 15
    }
  })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: show,
    onHide: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
    closeButton: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 3
    }
  }, title)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 9
    }
  }, "Ofrecemos el formato de video outstream insertado en el corazon del contenido editorial", element)));
};

_s(Print, "QXl/WorCSa6G0f1dbxpnoNMhqMU=");

_c = Print;
/* harmony default export */ __webpack_exports__["default"] = (Print);

var _c;

$RefreshReg$(_c, "Print");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wcmVzb3MvaW5kZXguanN4Il0sIm5hbWVzIjpbIlByaW50IiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsInRpdGxlIiwic2V0VGl0bGUiLCJzaG93RGF0YSIsInNldFNob3dEYXRhIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93IiwiaGFuZGxlT25DbGlja0ZpcnN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlT25DbGlja1NlY29uZCIsImhhbmRsZU9uQ2xpY2tUaGlyZCIsImVsZW1lbnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsS0FBRCxDQURoQjtBQUFBLE1BQ1RDLElBRFM7QUFBQSxNQUNIQyxPQURHOztBQUFBLG1CQUVVRixzREFBUSxDQUFDLElBQUQsQ0FGbEI7QUFBQSxNQUVURyxLQUZTO0FBQUEsTUFFRkMsUUFGRTs7QUFBQSxtQkFHZ0JKLHNEQUFRLENBQUMsT0FBRCxDQUh4QjtBQUFBLE1BR1RLLFFBSFM7QUFBQSxNQUdDQyxXQUhEOztBQUtoQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFdBQU1MLE9BQU8sQ0FBQyxLQUFELENBQWI7QUFBQSxHQUFwQjs7QUFDQSxNQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1OLE9BQU8sQ0FBQyxJQUFELENBQWI7QUFBQSxHQUFuQjs7QUFHQSxNQUFNTyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLENBQUQsRUFBTztBQUNoQ0EsS0FBQyxDQUFDQyxjQUFGO0FBQ0FMLGVBQVcsQ0FBQyxPQUFELENBQVg7QUFDQUYsWUFBUSxDQUFD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QWtLRCxDQW5RRDs7R0FBTWYsSzs7S0FBQUEsSztBQXFRU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wcmVzb3MuMGU0YmM3NWZjZmRkNWQ0YmFmY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vTGF5b3V0L2RlZmF1bHQuanN4XCI7XHJcbmltcG9ydCBJbWFnZUluZm8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSW5kZXgvaW1hZ2VJbmZvLmpzeFwiO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29yZS9DYXJvdXNlbC9kZWZhdWx0LmpzeFwiO1xyXG5pbXBvcnQgeyBDb2wsIFJvdywgQ29udGFpbmVyLCBNb2RhbCwgVGFibGUgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5bG9hZCc7XHJcbmltcG9ydCBUYWJsZVNjcm9sbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ByaW50L1RhYmxlU2Nyb2xsLmpzeCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb3JlL0J1dHRvbi9kZWZhdWx0LmpzeFwiO1xyXG5jb25zdCBQcmludCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2hvd0RhdGEsIHNldFNob3dEYXRhXSA9IHVzZVN0YXRlKFwiZmlyc3RcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93KGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZVNob3cgPSAoKSA9PiBzZXRTaG93KHRydWUpXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2tGaXJzdCA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2V0U2hvd0RhdGEoXCJmaXJzdFwiKTtcclxuICAgICAgc2V0VGl0bGUoXCJFc3BlY2lhbCAxMzMgYcOxb3NcIik7XHJcbiAgICAgIGhhbmRsZVNob3coKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVPbkNsaWNrU2Vjb25kID0gKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZXRTaG93RGF0YShcInNlY29uZFwiKTtcclxuICAgICAgc2V0VGl0bGUoXCJFc3BlY2lhbCBDb2xvbWJpYVwiKTtcclxuICAgICAgaGFuZGxlU2hvdygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVPbkNsaWNrVGhpcmQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRTaG93RGF0YShcInRoaXJkXCIpO1xyXG4gICAgICAgIHNldFRpdGxlKFwiRXNwZWNpYWwgU2Ftc3VuZ1wiKTtcclxuICAgICAgICBoYW5kbGVTaG93KCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgY29uc3QgZWxlbWVudCA9XHJcbiAgICAgIHNob3dEYXRhID09PSBcImZpcnN0XCIgPyAoPGRpdiBjbGFzc05hbWU9J1ByaW50LW1vZGFsQm9keSc+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPGltZyAgY2xhc3NOYW1lPSdQcmludC1tb2RhbEltYWdlJyBzcmM9XCIvaW1hZ2VzL2ltcHJlc29zLzEzM18xLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICBhcnJvd3M9e3RydWV9XHJcbiAgICAgICAgICBkb3RzPXtmYWxzZX1cclxuICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxyXG4gICAgICAgICAgc3BlZWQ9ezUwMH1cclxuICAgICAgICAgIHNob3c9ezF9XHJcbiAgICAgICAgICBzY3JvbGw9ezF9XHJcbiAgICAgICAgICB0aGVtZT1cIlNsaWRlc19tb2RhbFByaW50XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltcHJlc29zLzEzM18xLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltcHJlc29zLzEzM18yLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltcHJlc29zLzEzM18zLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICApIDogc2hvd0RhdGEgPT09IFwic2Vjb25kXCIgPyA8ZGl2IGNsYXNzTmFtZT0nUHJpbnQtbW9kYWxCb2R5Jz5cclxuICAgICAgICAgXHJcbiAgICAgICA8aW1nICBjbGFzc05hbWU9J1ByaW50LW1vZGFsSW1hZ2UnIHNyYz1cIi9pbWFnZXMvaW1wcmVzb3MvZXNwZWNpYWxfY29sb21iaWFfMS5wbmdcIj48L2ltZz5cclxuICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgYXJyb3dzPXt0cnVlfVxyXG4gICAgICAgZG90cz17ZmFsc2V9XHJcbiAgICAgICBpbmZpbml0ZT17dHJ1ZX1cclxuICAgICAgIHNwZWVkPXs1MDB9XHJcbiAgICAgICBzaG93PXsxfVxyXG4gICAgICAgc2Nyb2xsPXsxfVxyXG4gICAgICAgdGhlbWU9XCJTbGlkZXNfbW9kYWxQcmludFwiXHJcbiAgICAgPlxyXG4gICAgICAgPGRpdj5cclxuICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbXByZXNvcy9lc3BlY2lhbF9jb2xvbWJpYV8xLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2PlxyXG4gICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltcHJlc29zL2VzcGVjaWFsX2NvbG9tYmlhXzIucG5nXCI+PC9pbWc+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXY+XHJcbiAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1wcmVzb3MvZXNwZWNpYWxfY29sb21iaWFfMy5wbmdcIj48L2ltZz5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgIDwvQ2Fyb3VzZWw+XHJcbiAgIDwvZGl2PiA6IFxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9J1ByaW50LW1vZGFsQm9keSc+XHJcbiAgICAgICAgIFxyXG4gICAgICAgPGltZyAgY2xhc3NOYW1lPSdQcmludC1tb2RhbEltYWdlJyBzcmM9XCIvaW1hZ2VzL2ltcHJlc29zL2VzcGVjaWFsU2Ftc3VuZ18xLnBuZ1wiPjwvaW1nPlxyXG4gICAgICA8Q2Fyb3VzZWxcclxuICAgICAgYXJyb3dzPXt0cnVlfVxyXG4gICAgICBkb3RzPXtmYWxzZX1cclxuICAgICAgaW5maW5pdGU9e3RydWV9XHJcbiAgICAgIHNwZWVkPXs1MDB9XHJcbiAgICAgIHNob3c9ezF9XHJcbiAgICAgIHNjcm9sbD17MX1cclxuICAgICAgdGhlbWU9XCJTbGlkZXNfbW9kYWxQcmludFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbXByZXNvcy9lc3BlY2lhbFNhbXN1bmdfMS5wbmdcIj48L2ltZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbXByZXNvcy9lc3BlY2lhbFNhbXN1bmdfMi5wbmdcIj48L2ltZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4gIDwvZGl2PjtcclxuICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiSW5kZXgtc2VjdGlvbiBJbmRleC1zZWN0aW9uX2JhY2tncm91bmQgSW5kZXgtc2VjdGlvbl9ub1BhZGRpbmdcIj5cclxuICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgIGFycm93cz17dHJ1ZX1cclxuICAgICAgICAgIGRvdHM9e2ZhbHNlfVxyXG4gICAgICAgICAgaW5maW5pdGU9e3RydWV9XHJcbiAgICAgICAgICBzcGVlZD17NTAwfVxyXG4gICAgICAgICAgc2hvdz17M31cclxuICAgICAgICAgIHNjcm9sbD17MX1cclxuICAgICAgICAgIHRoZW1lPVwiU2xpZGVzLXByaW50Q2Fyb3VzZWxcIlxyXG4gICAgICAgICAvLyBjZW50ZXI9J2NlbnRlcidcclxuICAgICAgICA+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiAgb25DbGljaz17aGFuZGxlT25DbGlja0ZpcnN0fT5cclxuICAgICAgICBcclxuICAgICAgICAgIDxMYXp5TG9hZCBoZWlnaHQ9ezYwMH0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbXByZXNvcy8xMzNfMS5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgPC9MYXp5TG9hZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1ByaW50LWNhcm91c2VsVGV4dCc+XHJcbiAgICAgICAgICAgICAgICBFc3BlY2lhbCAxMzMgYcOxb3NcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2tTZWNvbmR9PlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxMYXp5TG9hZCBoZWlnaHQ9ezYwMH0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1wcmVzb3MvZXNwZWNpYWxfY29sb21iaWFfMS5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgPC9MYXp5TG9hZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1ByaW50LWNhcm91c2VsVGV4dCc+XHJcbiAgICAgICAgICAgICAgICBFc3BlY2lhbCBDb2xvbWJpYVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrVGhpcmR9PlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxMYXp5TG9hZCBoZWlnaHQ9ezYwMH0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1wcmVzb3MvZXNwZWNpYWxTYW1zdW5nXzEucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdQcmludC1jYXJvdXNlbFRleHQnPlxyXG4gICAgICAgICAgICAgICAgRXNwZWNpYWwgU2Ftc3VuZ1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkluZGV4LXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPENvbCBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbmRleC1pbmZvU2VjdGlvbiBJbmRleC1pbmZvU2VjdGlvbl9zcGFjZUFyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VJbmZvIGltYWdlPScvaW1hZ2VzL2ltcHJlc29zL3ByZWZlcmVuY2lhc18xLnBuZycgdGl0bGU9XCIxLjgyOS4wOTNcIiBzdWJ0aXRsZT1cImxlY3RvcmVzIMO6bHRpbW9zIDMwIGTDrWFzXCIgc3R5bGU9J0ltYWdlSW5mby1pbWFnZV9wcmludCcgLz5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlSW5mbyBpbWFnZT0nL2ltYWdlcy9pbXByZXNvcy9wcmVmZXJlbmNpYXNfMi5wbmcnIHRpdGxlPVwiNDIwLjU5NFwiIHN1YnRpdGxlPVwibGVjdG9yZXMgZG9taW5nb1wiIGluZm89XCJGdWVudGUgRUdNIC0yIDIwMTlcIiAgc3R5bGU9J0ltYWdlSW5mby1pbWFnZV9wcmludCcgLz5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlSW5mbyBpbWFnZT0nL2ltYWdlcy9pbXByZXNvcy9wcmVmZXJlbmNpYXNfMy5wbmcnIHRpdGxlPVwiMTkwLjAxOVwiIHN1YnRpdGxlPVwibGVjdG9yZXMgZMOtYSBkZSBheWVyXCIgc3R5bGU9J0ltYWdlSW5mby1pbWFnZV9wcmludCcgLz5cclxuICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJJbmRleC1zZWN0aW9uXCI+XHJcbiAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJpbnQtc2VjdGlvblRpdGxlIFByaW50LXNlY3Rpb25UaXRsZV91bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgVGFyaWZhcyB5IGZvcm1hdG9zIDIwMjBcclxuICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiUHJpbnQtc2VjdGlvblRleHRcIj5cclxuICAgICAgICAgICAgICBEYXRvcyBkZSBwdWJsaWNpZGFkIGFkYXB0YWRvcyBhbCBlc3RpbG8gZ3LDoWZpY28gZGUgRWwgRXNwZWN0YWRvciwgcXVlIHBlcm1pdGUgaW1wYWN0YXIgYWwgdXN1YXJpb1xyXG4gICAgICAgICAgICAgIGRlIHVuYSBmb3JtYSBtZW5vcyBpbnRydXNpdmEgcXVlIGNvbiBsYSBwdWJsaWNpZGFkIHRyYWRpY2lvbmFsXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmludC1zZWN0aW9uVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgVGFyaWZhcyBpbXByZXNvXHJcbiAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgPFRhYmxlU2Nyb2xsIHRhYmxlTnVtYmVyPVwib25lXCIvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJJbmRleC1zZWN0aW9uXCI+XHJcbiAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICA8Um93PlxyXG4gICAgICAgICAgIDxDb2wgbGc9ezd9PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJpbnQtc2VjdGlvblRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIENlbnRpbWV0cm9zIHBvciBjb2x1bW5hXHJcbiAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgIDxUYWJsZVNjcm9sbCB0YWJsZU51bWJlcj1cInR3b1wiLz5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICA8Q29sIGxnPXs1fT5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByaW50LXNlY3Rpb25UaXRsZSBQcmludC1zZWN0aW9uVGl0bGVfYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIENvbHVtbmFzIHRhYmxvaWRlXHJcbiAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJpbnQtaW1hZ2VUYWJsZVwiPlxyXG4gICAgICAgICAgIDxMYXp5TG9hZCBoZWlnaHQ9ezYwMH0+XHJcbiAgICAgICAgICAgIDxpbWcgIHNyYz1cIi9pbWFnZXMvaW1wcmVzb3MvdGFibG9pZGUucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmludC1ub3RlVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgTm90YVxyXG4gICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmludC1ub3RlVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgSW5jcmVtZW50b3MgZGVsIDIwJSBwYXJhIGRvbWluZ28uIExhcyB0YXJpZmFzIG5vIGluY2x1eWVuIElWQVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICB0aGVtZT1cIkJ1dHRvbi1mb3JtICBCdXR0b24tZm9ybV9wcmludFwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJWZXIgbWVkaWRhc1wiXHJcbiAgICAgICAgICAgICAgICAgIGxpY2s9eygpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly9lbWJlYmVyLXBkZi1hcmMuczMuYW1hem9uYXdzLmNvbS9UYXJpZmFzJTIwRUUlMjAyMDIwLTE1ODY5MDUwMjgyODUucGRmXCIpfVxyXG4gICAgICAgICAgICAgICAgPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgIDwvUm93PlxyXG4gICAgICBcclxuICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiSW5kZXgtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcmludC1zZWN0aW9uVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICBJbnNlcnRvcyB5IG1hbnVhbGlkYWRlc1xyXG4gICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByaW50LXRhYmxlRGl2XCI+XHJcbiAgICAgICAgICAgICAgPFRhYmxlU2Nyb2xsIHRhYmxlTnVtYmVyPVwidGhyZWVcIi8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPE1vZGFsIHNob3c9e3Nob3d9IG9uSGlkZT17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgPE1vZGFsLlRpdGxlPnt0aXRsZX08L01vZGFsLlRpdGxlPlxyXG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbC5Cb2R5Pk9mcmVjZW1vcyBlbCBmb3JtYXRvIGRlIHZpZGVvIG91dHN0cmVhbSBpbnNlcnRhZG8gZW4gZWwgY29yYXpvbiBkZWwgY29udGVuaWRvIGVkaXRvcmlhbFxyXG4gICAgICAgICAgIHtlbGVtZW50fVxyXG4gICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmludDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==