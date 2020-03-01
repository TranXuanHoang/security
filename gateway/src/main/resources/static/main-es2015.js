(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n  <a aria-label=\"Home Page\" routerLink=\"/\" title=\"Home Page\">\n    <img\n    width=\"40\"\n    src=\"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMHB0IiB2aWV3Qm94PSItMjYgMCA1MTEgNTExLjk5OTg5IiB3aWR0aD0iMTAwcHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQ1Ni43NDYwOTQgMTk1Ljg0NzY1Ni05NS43OTI5NjktNjYuNDM3NXYtMzEuMTk1MzEyYzQuNTUwNzgxLTUuMjU3ODEzIDYuODc1LTEwLjg2MzI4MiA2Ljg5MDYyNS0xNi4zMDQ2ODhoLjAxNTYyNXYtNTMuMDAzOTA2aC0uMDE1NjI1Yy0uMDQ2ODc1LTcuNzM0Mzc1LTQuNzQyMTg4LTE1LjExNzE4OC0xNC4zMDQ2ODgtMjAuNjM2NzE5LTIxLjIxNDg0My0xMi4yNS01OC4yNjk1MzEtMTAuNzEwOTM3LTgyLjc2NTYyNCAzLjQyOTY4OC0xMi41ODk4NDQgNy4yNjk1MzEtMTkuMzk0NTMyIDE2LjQ1MzEyNS0yMC4xNzE4NzYgMjUuMzI0MjE5bC0uMDg5ODQzLjAwNzgxMnYyNy45ODgyODFsLTkyLjU3NDIxOS01My4wOTc2NTZjLTE0LjYyMTA5NC0xMC4xNDA2MjUtMzQuODEyNS01LjMyNDIxOS00My4yODEyNSAxMC4zMjgxMjVsLTExMy4xNDQ1MzEgMjA5LjExNzE4OGMtMi4zNjcxODggNC4zNzUtLjMwMDc4MSA4Ljk1NzAzMSAzLjI2NTYyNSAxMC45Mjk2ODdsLS4wMDM5MDYuMDA3ODEzIDI4LjU4NTkzNyAxNi4zOTQ1MzF2MTI1LjU0Mjk2OWMwIDE1LjAzOTA2MiA4LjAyNzM0NCAyOC45NDE0MDYgMjEuMDU0Njg3IDM2LjQ2MDkzN2wxMzkuMDc4MTI2IDgwLjI5Njg3NWMyMS4xNjQwNjIgMTIuMjIyNjU2IDQ3LjI0MjE4NyAxMi4yMjI2NTYgNjguNDEwMTU2IDBsMTM5LjA4MjAzMS04MC4yOTY4NzVjMTMuMDI3MzQ0LTcuNTE5NTMxIDIxLjA1MDc4MS0yMS40MjE4NzUgMjEuMDUwNzgxLTM2LjQ2MDkzN3YtMTU0LjM4NjcxOWwzNC4xMzI4MTMtMjAuMDc4MTI1YzUuMjQ2MDkzLTMuMDI3MzQ0IDUuNTUwNzgxLTEwLjQ4MDQ2OS41NzgxMjUtMTMuOTI5Njg4em0wIDAiIGZpbGw9IiNkMWQxZDEiLz48cGF0aCBkPSJtNDU2Ljc0NjA5NCAxOTUuODQ3NjU2LTk1Ljc5Mjk2OS02Ni40Mzc1di0zMS4xOTUzMTJjNC41NTA3ODEtNS4yNTc4MTMgNi44NzUtMTAuODYzMjgyIDYuODkwNjI1LTE2LjMwNDY4OGguMDE1NjI1di01My4wMDM5MDZoLS4wMTU2MjVjLS4wNDY4NzUtNy43MzQzNzUtNC43NDIxODgtMTUuMTE3MTg4LTE0LjMwNDY4OC0yMC42MzY3MTktMjEuMjE0ODQzLTEyLjI1LTU4LjI2OTUzMS0xMC43MTA5MzctODIuNzY1NjI0IDMuNDI5Njg4LTEyLjU4OTg0NCA3LjI2OTUzMS0xOS4zOTQ1MzIgMTYuNDUzMTI1LTIwLjE3MTg3NiAyNS4zMjQyMTlsLS4wODk4NDMuMDA3ODEydjI3Ljk4ODI4MWwtOTIuNTc0MjE5LTUzLjA5NzY1NmMtMTQuNjIxMDk0LTEwLjE0MDYyNS0zNC44MTI1LTUuMzI0MjE5LTQzLjI4MTI1IDEwLjMyODEyNWwtMTEzLjE0NDUzMSAyMDkuMTE3MTg4Yy0yLjM2NzE4OCA0LjM3NS0uMzAwNzgxIDguOTU3MDMxIDMuMjY1NjI1IDEwLjkyOTY4N2wtLjAwMzkwNi4wMDc4MTMgMjguNTg1OTM3IDE2LjM5NDUzMXYxMjUuNTQyOTY5YzAgMTUuMDM5MDYyIDguMDI3MzQ0IDI4Ljk0MTQwNiAyMS4wNTQ2ODcgMzYuNDYwOTM3bDE0NS4wMDM5MDcgODMuNzE4NzVjMTcuNSAxMC4xMDU0NjkgMzkuMDU4NTkzIDEwLjEwNTQ2OSA1Ni41NTg1OTMgMGwxNDUuMDA3ODEzLTgzLjcxODc1YzEzLjAyNzM0NC03LjUxOTUzMSAyMS4wNTA3ODEtMjEuNDIxODc1IDIxLjA1MDc4MS0zNi40NjA5Mzd2LTE1NC4zODY3MTlsMzQuMTMyODEzLTIwLjA3ODEyNWM1LjI0NjA5My0zLjAyNzM0NCA1LjU1MDc4MS0xMC40ODA0NjkuNTc4MTI1LTEzLjkyOTY4OHptMCAwIiBmaWxsPSIjZDFkMWQxIi8+PHBhdGggZD0ibTM2Ny44NDM3NSAyOC45MDYyNWMtLjA0Njg3NS03LjczNDM3NS00Ljc0MjE4OC0xNS4xMTcxODgtMTQuMzA0Njg4LTIwLjYzNjcxOS0yMS4yMTQ4NDMtMTIuMjUtNTguMjY5NTMxLTEwLjcxMDkzNy04Mi43NjU2MjQgMy40Mjk2ODgtMTIuNTg5ODQ0IDcuMjY5NTMxLTE5LjM5NDUzMiAxNi40NTMxMjUtMjAuMTcxODc2IDI1LjMyNDIxOWwtLjA4OTg0My4wMDc4MTJ2NTQuMTY3OTY5aC4wMTU2MjVjLS4xNDg0MzggNy45MTAxNTYgNC41NDI5NjggMTUuNDg0Mzc1IDE0LjMwODU5NCAyMS4xMTcxODcgMjEuMjEwOTM3IDEyLjI1IDU4LjI2NTYyNCAxMC43MTQ4NDQgODIuNzYxNzE4LTMuNDI5Njg3IDEzLjM3MTA5NC03LjcyMjY1NyAyMC4yMjI2NTYtMTcuNjAxNTYzIDIwLjI0NjA5NC0yNi45NzY1NjNoLjAxOTUzMXYtNTMuMDAzOTA2em0wIDAiIGZpbGw9IiNlYmFmM2MiLz48cGF0aCBkPSJtMjI3LjY5NTMxMiAzNDIuMDU0Njg4djE0Mi4zNDc2NTZjMCAxNi4xNTYyNSAxNy40ODgyODIgMjYuMjUgMzEuNDgwNDY5IDE4LjE3MTg3NWwxNDQuOTk2MDk0LTgzLjcxMDkzOGMxMS4wNTQ2ODctNi4zODI4MTIgMTcuODYzMjgxLTE4LjE3NTc4MSAxNy44NjMyODEtMzAuOTQxNDA2di0xNTguMDcwMzEzem0wIDAiIGZpbGw9IiNlOWU5ZTkiLz48cGF0aCBkPSJtNDU2Ljc0NjA5NCAxOTUuODQ3NjU2LTEwNC40NzI2NTYtNzIuNDYwOTM3Yy0xLjQzMzU5NC0uOTkyMTg4LTIuOTIxODc2LTEuODM5ODQ0LTQuNDQ1MzEzLTIuNTQ2ODc1bC0xODkuODkwNjI1LTEwOC45MTc5NjljLTE0LjYyMTA5NC0xMC4xNDA2MjUtMzQuODEyNS01LjMyNDIxOS00My4yODEyNSAxMC4zMjgxMjVsLTExMy4xNDQ1MzEgMjA5LjExNzE4OGMtMi4zNjcxODggNC4zNzUtLjMwMDc4MSA4Ljk1NzAzMSAzLjI2NTYyNSAxMC45Mjk2ODdsLS4wMDM5MDYuMDA3ODEzIDE5My44OTQ1MzEgMTExLjE4NzVjLjI3MzQzNy4xNzE4NzQuNTQ2ODc1LjMzNTkzNy44MzU5MzcuNDc2NTYybC4wNzQyMTkuMDQyOTY5LjAwMzkwNi0uMDA3ODEzYzIuMTgzNTk0IDEuMDMxMjUgNC44Mzk4NDQgMS4xMTcxODggNy4zODY3MTktLjM1MTU2MmwyNDkuMTk5MjE5LTE0My44NzVjNS4yNDYwOTMtMy4wMjczNDQgNS41NTA3ODEtMTAuNDgwNDY5LjU3ODEyNS0xMy45Mjk2ODh6bTAgMCIgZmlsbD0iI2U5NjYyYyIvPjxwYXRoIGQ9Im0zMDguOTk2MDk0IDEzMy43MTQ4NDQtMTEzLjE0NDUzMiAyMDkuMTIxMDk0Yy0zLjg3MTA5MyA3LjE0ODQzNyA0LjA3ODEyNiAxNC44ODI4MTIgMTEuMTE3MTg4IDEwLjgxNjQwNmwyNDkuMTk5MjE5LTE0My44NzVjNS4yNDYwOTMtMy4wMjczNDQgNS41NTA3ODEtMTAuNDgwNDY5LjU3ODEyNS0xMy45Mjk2ODhsLTEwNC40NzI2NTYtNzIuNDU3MDMxYy0xNC42MjEwOTQtMTAuMTQwNjI1LTM0LjgxMjUtNS4zMjQyMTktNDMuMjc3MzQ0IDEwLjMyNDIxOXptMCAwIiBmaWxsPSIjZWJhZjNjIi8+PHBhdGggZD0ibTI5Mi4yNzM0MzggNDgzLjQ2ODc1di0xMjMuMDc0MjE5bDc4LjUwNzgxMi00NS4zMjgxMjV2MTIzLjA3NDIxOXptMCAwIiBmaWxsPSIjMzNhZWZmIi8+PHBhdGggZD0ibTM0Ny41OTc2NTYgNTYuMDU0Njg4Yy0yNC40OTYwOTQgMTQuMTQwNjI0LTYxLjU1MDc4MSAxNS42Nzk2ODctODIuNzY1NjI1IDMuNDI5Njg3LTIxLjIxNDg0My0xMi4yNDYwOTQtMTguNTUwNzgxLTMzLjY0MDYyNSA1Ljk0MTQwNy00Ny43ODUxNTYgMjQuNDk2MDkzLTE0LjE0MDYyNSA2MS41NTA3ODEtMTUuNjc1NzgxIDgyLjc2NTYyNC0zLjQyOTY4OCAyMS4yMTQ4NDQgMTIuMjQ2MDk0IDE4LjU1NDY4OCAzMy42NDA2MjUtNS45NDE0MDYgNDcuNzg1MTU3em0wIDAiIGZpbGw9IiNlOTY2MmMiLz48cGF0aCBkPSJtMzMwLjY4MzU5NCA0Ni4yODkwNjJjLTEzLjcxMDkzOCA3LjkxNDA2My0zNC40NDkyMTkgOC43NzM0MzgtNDYuMzIwMzEzIDEuOTE3OTY5LTExLjg3MTA5My02Ljg1MTU2Mi0xMC4zODI4MTItMTguODI4MTI1IDMuMzI4MTI1LTI2Ljc0MjE4NyAxMy43MDcwMzItNy45MTQwNjMgMzQuNDQ1MzEzLTguNzczNDM4IDQ2LjMxNjQwNi0xLjkxNzk2OSAxMS44NzEwOTQgNi44NTE1NjMgMTAuMzgyODEzIDE4LjgyNDIxOS0zLjMyNDIxOCAyNi43NDIxODd6bTAgMCIgZmlsbD0iI2FmNGQyMSIvPjwvc3ZnPg==\"\n    alt=\"Home Page\">\n  </a>\n  <span>Home Page</span>\n  <div class=\"spacer\"></div>\n  <a aria-label=\"Login\" routerLink=\"/login\" title=\"Login\">\n    <img\n      height=\"24\"\n      src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDY5cHQiIHZpZXdCb3g9IjAgMCA0NjkgNDY5LjMzMzMzIiB3aWR0aD0iNDY5cHQiPjxwYXRoIGQ9Im0yMzMuNzY1NjI1IDBjLTEyMi40MTAxNTYgMC0yMjIuODA0Njg3IDkzLjczODI4MS0yMzMuNTk3NjU2IDIxMy4zMzIwMzFoMTkwLjkzMzU5M3YtNjRjMC04LjYxNzE4NyA1LjIwMzEyNi0xNi40MDIzNDMgMTMuMTYwMTU3LTE5LjcxMDkzNyA3Ljk4MDQ2OS0zLjMwNDY4OCAxNy4xNTIzNDMtMS40NzI2NTYgMjMuMjUzOTA2IDQuNjI4OTA2bDg1LjMzMjAzMSA4NS4zMzU5MzhjOC4zNDM3NSA4LjMzOTg0MyA4LjM0Mzc1IDIxLjgyMDMxMiAwIDMwLjE2NDA2MmwtODUuMzMyMDMxIDg1LjMzMjAzMWMtNi4xMDE1NjMgNi4xMDE1NjMtMTUuMjczNDM3IDcuOTM3NS0yMy4yNTM5MDYgNC42Mjg5MDctNy45NzY1NjMtMy4zMDQ2ODgtMTMuMTYwMTU3LTExLjA5Mzc1LTEzLjE2MDE1Ny0xOS43MTA5Mzh2LTY0aC0xOTAuOTMzNTkzYzEwLjc5Mjk2OSAxMTkuNTkzNzUgMTExLjE4NzUgMjEzLjMzMjAzMSAyMzMuNTk3NjU2IDIxMy4zMzIwMzEgMTI5LjYwMTU2MyAwIDIzNC42Njc5NjktMTA1LjA2NjQwNiAyMzQuNjY3OTY5LTIzNC42NjQwNjIgMC0xMjkuNjAxNTYzLTEwNS4wNjY0MDYtMjM0LjY2Nzk2OS0yMzQuNjY3OTY5LTIzNC42Njc5Njl6bTAgMCIgZmlsbD0iIzRjYWY1MCIvPjwvc3ZnPg==\"\n      alt=\"Login\">\n  </a>\n  <a aria-label=\"Logout\" (click)=\"logout()\" title=\"Logout\">\n    <img\n      height=\"24\"\n      src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTAwcHQiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iMTAwcHQiPjxwYXRoIGQ9Im01MTIgMjU2YzAgMTQxLjM4NjcxOS0xMTQuNjEzMjgxIDI1Ni0yNTYgMjU2cy0yNTYtMTE0LjYxMzI4MS0yNTYtMjU2IDExNC42MTMyODEtMjU2IDI1Ni0yNTYgMjU2IDExNC42MTMyODEgMjU2IDI1NnptMCAwIiBmaWxsPSIjZmZkNDYwIi8+PHBhdGggZD0ibTUwMy44Mzk4NDQgMzIwLjM1OTM3NS0xODIuMTQ0NTMyLTE4Mi4xNDA2MjUtMTY2Ljk1NzAzMSA0MS43MzgyODEtNDEuNzM4MjgxIDE4Ny44MjQyMTkgMTQ0LjIwMzEyNSAxNDQuMjAzMTI1YzExOC42MjUtLjU0Njg3NSAyMTguMTg3NS04MS43NjU2MjUgMjQ2LjYzNjcxOS0xOTEuNjI1em0wIDAiIGZpbGw9IiNmZmJlMTEiLz48cGF0aCBkPSJtMzcwLjM5MDYyNSAyMzIuMTI4OTA2aC0xMTEuMTk5MjE5djQxLjczODI4MmgxMTEuMTk5MjE5djQxLjc0MjE4N2w2Mi42MDkzNzUtNjIuNjA5Mzc1LTYyLjYwOTM3NS02Mi42MDkzNzV6bTAgMCIgZmlsbD0iIzM4OTdmZiIvPjxwYXRoIGQ9Im0xNTQuNzM4MjgxIDE3OS45NTcwMzFoMTE4LjI2MTcxOWwxMy45MTQwNjItMjAuODcxMDkzLTEzLjkxNDA2Mi0yMC44NjcxODhoLTE2MHYyMjkuNTYyNWgxNjBsMTMuOTE0MDYyLTIwLjg2NzE4OC0xMy45MTQwNjItMjAuODcxMDkzaC0xMTguMjYxNzE5em0wIDAiIGZpbGw9IiM0NDYwODAiLz48ZyBmaWxsPSIjMzI0ODYwIj48cGF0aCBkPSJtMjczIDMyNi4wNDI5NjloNDguNjk1MzEydjQxLjczODI4MWgtNDguNjk1MzEyem0wIDAiLz48cGF0aCBkPSJtMjczIDEzOC4yMTg3NWg0OC42OTUzMTJ2NDEuNzM4MjgxaC00OC42OTUzMTJ6bTAgMCIvPjwvZz48L3N2Zz4=\"\n      alt=\"Logout\">\n  </a>\n</div>\n\n<!-- <div class=\"container\">\n  <ul class=\"nav nav-pills\">\n    <li><a routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\n    <li><a routerLink=\"/login\">Login</a></li>\n    <li><a (click)=\"logout()\">Logout</a></li>\n    <li><a href=\"/ui/\">UI 1</a></li>\n  </ul>\n</div> -->\n\n<div class=\"content\" role=\"main\">\n\n  <router-outlet></router-outlet>\n\n</div>\n\n<!-- Old Version of Home Page -->\n<!-- <div class=\"container\">\n  <ul class=\"nav nav-pills\">\n    <li><a routerLinkActive=\"active\" routerLink=\"/\">Home</a></li>\n    <li><a routerLinkActive=\"active\" routerLink=\"/login\">Login</a></li>\n    <li><a (click)=\"logout()\">Logout</a></li>\n  </ul>\n</div>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" [hidden]=\"!authenticated\">\n\t<a class=\"btn btn-primary\" href=\"/ui/\">Go To User Interface</a>\n</div>\n<div class=\"container\" [hidden]=\"authenticated\">\n    <p>Login to see link to the user interface</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" [hidden]=\"authenticated\">\n    <form role=\"form\" (submit)=\"login()\">\n        <div class=\"form-group\">\n            <label for=\"username\">Username:</label>\n            <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\"\n            [(ngModel)]=\"credentials.username\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password:</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\"\n            [(ngModel)]=\"credentials.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");






const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AppComponent = class AppComponent {
    constructor(app, http, router) {
        this.app = app;
        this.http = http;
        this.router = router;
        this.title = 'gateway-web';
        this.authenticated = false;
        //this.app.authenticate(undefined, undefined);
        this.authenticated = this.app.authenticated;
    }
    logout() {
        this.http.post('logout', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err, caught) => {
            // TODO - Handle error
            console.error(">>>Error: " + err);
            throw err;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            // Forcely logout
            this.authenticated = false;
            //this.router.navigateByUrl('/');
        })).subscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _xhr_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./xhr-interceptor */ "./src/app/xhr-interceptor.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [
            _app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _xhr_interceptor__WEBPACK_IMPORTED_MODULE_11__["XhrInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AppService = class AppService {
    constructor(http) {
        this.http = http;
        this.authenticated = false;
    }
    authenticate(credentials, callback) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](credentials ? { authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});
        this.http.get('user', { headers: headers }).subscribe(response => {
            if (response['name']) {
                this.authenticated = true;
            }
            else {
                this.authenticated = false;
            }
            console.log(response);
            return callback && callback();
        });
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



let HomeComponent = class HomeComponent {
    constructor(app) {
        this.app = app;
    }
    ngOnInit() {
        this.authenticated = this.app.authenticated;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");





let LoginComponent = class LoginComponent {
    constructor(app, http, router) {
        this.app = app;
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
        this.credentials = {
            username: '',
            password: ''
        };
        this.authenticated = this.app.authenticated;
    }
    login() {
        console.log(this.credentials);
        this.app.authenticate(this.credentials, () => {
            console.log('After authenticate');
            this.authenticated = this.app.authenticated;
            this.router.navigateByUrl('/');
        });
        this.authenticated = this.app.authenticated;
        //return false;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/xhr-interceptor.ts":
/*!************************************!*\
  !*** ./src/app/xhr-interceptor.ts ***!
  \************************************/
/*! exports provided: XhrInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrInterceptor", function() { return XhrInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let XhrInterceptor = class XhrInterceptor {
    intercept(req, next) {
        // Response with "WWW-Authenticate" header will cause browser pops up
        // a basic authentication dialogue. To suppress this pop up, we add
        // "X-Requested-With=XMLHttpRequest" to the header of the request
        const xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    }
};
XhrInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], XhrInterceptor);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hoang.tran\Desktop\Home\Spring Developement Environment\workspace\security\gateway-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map