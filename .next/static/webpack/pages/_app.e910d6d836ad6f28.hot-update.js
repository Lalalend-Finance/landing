"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/style/muiTheme.ts":
/*!*******************************!*\
  !*** ./src/style/muiTheme.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\nvar theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    typography: {\n        fontFamily: \"Ilisarniq\"\n    },\n    palette: {\n        primary: {\n            main: \"#7640f0\"\n        }\n    },\n    overrides: {\n        MuiButton: {\n            outlined: {\n                paddingTop: \"10px\",\n                paddingBottom: \"13px\"\n            },\n            contained: {\n                boxShadow: \"none\"\n            },\n            root: {\n                \"&:focus\": {\n                    outline: \"none\"\n                },\n                borderRadius: \"5px\",\n                paddingTop: \"10px\",\n                paddingBottom: \"13px\"\n            },\n            label: {\n                fontSize: \"14px\",\n                lineHeight: \"1\",\n                textTransform: \"none\"\n            }\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUvbXVpVGhlbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBdUQ7QUFFdkQsSUFBTUMsS0FBSyxHQUFHRCxxRUFBVyxDQUFDO0lBQ3hCRSxVQUFVLEVBQUU7UUFDVkMsVUFBVSxFQUFFLFdBQVc7S0FDeEI7SUFDREMsT0FBTyxFQUFFO1FBQ1BDLE9BQU8sRUFBRTtZQUNQQyxJQUFJLEVBQUUsU0FBUztTQUNoQjtLQUNGO0lBQ0RDLFNBQVMsRUFBRTtRQUNUQyxTQUFTLEVBQUU7WUFDVEMsUUFBUSxFQUFFO2dCQUNSQyxVQUFVLEVBQUUsTUFBTTtnQkFDbEJDLGFBQWEsRUFBRSxNQUFNO2FBQ3RCO1lBQ0RDLFNBQVMsRUFBRTtnQkFDVEMsU0FBUyxFQUFFLE1BQU07YUFDbEI7WUFDREMsSUFBSSxFQUFFO2dCQUNKLFNBQVMsRUFBRTtvQkFBRUMsT0FBTyxFQUFFLE1BQU07aUJBQUU7Z0JBQzlCQyxZQUFZLEVBQUUsS0FBSztnQkFDbkJOLFVBQVUsRUFBRSxNQUFNO2dCQUNsQkMsYUFBYSxFQUFFLE1BQU07YUFDdEI7WUFDRE0sS0FBSyxFQUFFO2dCQUNMQyxRQUFRLEVBQUUsTUFBTTtnQkFDaEJDLFVBQVUsRUFBRSxHQUFHO2dCQUNmQyxhQUFhLEVBQUUsTUFBTTthQUN0QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsK0RBQWVuQixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlL211aVRoZW1lLnRzPzA4YjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6ICdJbGlzYXJuaXEnLFxuICB9LFxuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyM3NjQwZjAnLFxuICAgIH0sXG4gIH0sXG4gIG92ZXJyaWRlczoge1xuICAgIE11aUJ1dHRvbjoge1xuICAgICAgb3V0bGluZWQ6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogJzEwcHgnLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnMTNweCcsXG4gICAgICB9LFxuICAgICAgY29udGFpbmVkOiB7XG4gICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgfSxcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgJyY6Zm9jdXMnOiB7IG91dGxpbmU6ICdub25lJyB9LFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICBwYWRkaW5nVG9wOiAnMTBweCcsXG4gICAgICAgIHBhZGRpbmdCb3R0b206ICcxM3B4JyxcbiAgICAgIH0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMScsXG4gICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInRoZW1lIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJvdmVycmlkZXMiLCJNdWlCdXR0b24iLCJvdXRsaW5lZCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiY29udGFpbmVkIiwiYm94U2hhZG93Iiwicm9vdCIsIm91dGxpbmUiLCJib3JkZXJSYWRpdXMiLCJsYWJlbCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInRleHRUcmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/style/muiTheme.ts\n");

/***/ })

});