"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/page",{

/***/ "(app-pages-browser)/./src/app/auth/page.js":
/*!******************************!*\
  !*** ./src/app/auth/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ \"(app-pages-browser)/./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../firebase.config */ \"(app-pages-browser)/./firebase.config.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Login() {\n    _s();\n    const initialValues = {\n        username: \"\",\n        password: \"\"\n    };\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSubmit = async (values)=>{\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(_firebase_config__WEBPACK_IMPORTED_MODULE_4__.app);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(auth, values.username, values.password).then((userCredential)=>{\n            const user = userCredential.user;\n            if (user) {\n                localStorage.setItem(\"accessToken\", user.accessToken);\n                router.push(\"/upload\");\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Logged in successfully!\");\n            }\n        }).catch((error)=>{\n            const errorMessage = error.message;\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(errorMessage);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"login-form size-full h-screen flex flex-col w-screen items-center justify-center gap-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Formik, {\n            initialValues: initialValues,\n            enableReinitialize: true,\n            onSubmit: handleSubmit,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                className: \"size-fit bg-white p-4 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold  text-slate-400 text-2xl\",\n                        children: \"Hawa Production Portal\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nijanadhikari/Projects/hawa-production/src/app/auth/page.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-1 text-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nijanadhikari/Projects/hawa-production/src/app/auth/page.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {\n                                name: \"username\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nijanadhikari/Projects/hawa-production/src/app/auth/page.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nijanadhikari/Projects/hawa-production/src/app/auth/page.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-1 text-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nijanadhikari/Projects/hawa-production/src/app/auth/page.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {\n                                name: \"password\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nijanadhikari/Projects/hawa-production/src/app/auth/page.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nijanadhikari/Projects/hawa-production/src/app/auth/page.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"border-2 border-black py-2 bg-black text-white w-full hover:bg-transparent hover:text-black\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nijanadhikari/Projects/hawa-production/src/app/auth/page.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nijanadhikari/Projects/hawa-production/src/app/auth/page.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/nijanadhikari/Projects/hawa-production/src/app/auth/page.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nijanadhikari/Projects/hawa-production/src/app/auth/page.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM2QztBQUN1QjtBQUNoQztBQUNRO0FBQ0c7QUFFaEMsU0FBU1E7O0lBQ3RCLE1BQU1DLGdCQUFnQjtRQUNwQkMsVUFBVTtRQUNWQyxVQUFVO0lBQ1o7SUFDQSxNQUFNQyxTQUFTTiwwREFBU0E7SUFDeEIsTUFBTU8sZUFBZSxPQUFPQztRQUMxQixNQUFNQyxPQUFPWixzREFBT0EsQ0FBQ0ksaURBQUdBO1FBQ3hCLE1BQU1ILHlFQUEwQkEsQ0FBQ1csTUFBTUQsT0FBT0osUUFBUSxFQUFFSSxPQUFPSCxRQUFRLEVBQ3BFSyxJQUFJLENBQUMsQ0FBQ0M7WUFDTCxNQUFNQyxPQUFPRCxlQUFlQyxJQUFJO1lBQ2hDLElBQUlBLE1BQU07Z0JBQ1JDLGFBQWFDLE9BQU8sQ0FBQyxlQUFlRixLQUFLRyxXQUFXO2dCQUNwRFQsT0FBT1UsSUFBSSxDQUFDO2dCQUNaakIsdURBQUtBLENBQUNrQixPQUFPLENBQUM7WUFDaEI7UUFDRixHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7WUFDTixNQUFNQyxlQUFlRCxNQUFNRSxPQUFPO1lBQ2xDdEIsdURBQUtBLENBQUNvQixLQUFLLENBQUNDO1FBQ2Q7SUFDSjtJQUNBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDM0IsMENBQU1BO1lBQ0xPLGVBQWVBO1lBQ2ZxQixrQkFBa0I7WUFDbEJDLFVBQVVsQjtzQkFFViw0RUFBQ1osd0NBQUlBO2dCQUFDNEIsV0FBVTs7a0NBQ2QsOERBQUNHO3dCQUFLSCxXQUFVO2tDQUFxQzs7Ozs7O2tDQUlyRCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSTswQ0FBTTs7Ozs7OzBDQUNQLDhEQUFDakMseUNBQUtBO2dDQUFDa0MsTUFBSzs7Ozs7Ozs7Ozs7O2tDQUVkLDhEQUFDTjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNqQyx5Q0FBS0E7Z0NBQUNrQyxNQUFLOzs7Ozs7Ozs7Ozs7a0NBRWQsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMUCxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FwRHdCckI7O1FBS1BGLHNEQUFTQTs7O0tBTEZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXV0aC9wYWdlLmpzPzcyNWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBGaWVsZCwgRm9ybSwgRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IHsgZ2V0QXV0aCwgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IGFwcCB9IGZyb20gXCIuLi8uLi8uLi9maXJlYmFzZS5jb25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gIH07XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcbiAgICBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCB2YWx1ZXMudXNlcm5hbWUsIHZhbHVlcy5wYXNzd29yZClcbiAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY2Vzc1Rva2VuXCIsIHVzZXIuYWNjZXNzVG9rZW4pO1xuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3VwbG9hZFwiKTtcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiTG9nZ2VkIGluIHN1Y2Nlc3NmdWxseSFcIik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgIHRvYXN0LmVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm0gc2l6ZS1mdWxsIGgtc2NyZWVuIGZsZXggZmxleC1jb2wgdy1zY3JlZW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00XCI+XG4gICAgICA8Rm9ybWlrXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9XG4gICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgPlxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJzaXplLWZpdCBiZy13aGl0ZSBwLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgIHRleHQtc2xhdGUtNDAwIHRleHQtMnhsXCI+XG4gICAgICAgICAgICBIYXdhIFByb2R1Y3Rpb24gUG9ydGFsXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0xIHRleHQtc3RhcnRcIj5cbiAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8RmllbGQgbmFtZT1cInVzZXJuYW1lXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTEgdGV4dC1zdGFydFwiPlxuICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHB5LTIgYmctYmxhY2sgdGV4dC13aGl0ZSB3LWZ1bGwgaG92ZXI6YmctdHJhbnNwYXJlbnQgaG92ZXI6dGV4dC1ibGFja1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRmllbGQiLCJGb3JtIiwiRm9ybWlrIiwiZ2V0QXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJhcHAiLCJMb2dpbiIsImluaXRpYWxWYWx1ZXMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwidmFsdWVzIiwiYXV0aCIsInRoZW4iLCJ1c2VyQ3JlZGVudGlhbCIsInVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYWNjZXNzVG9rZW4iLCJwdXNoIiwic3VjY2VzcyIsImNhdGNoIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZW5hYmxlUmVpbml0aWFsaXplIiwib25TdWJtaXQiLCJzcGFuIiwibGFiZWwiLCJuYW1lIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/auth/page.js\n"));

/***/ })

});