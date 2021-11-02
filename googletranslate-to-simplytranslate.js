/////////////////////////////////////////////////////////////////////////
//                                                                      /
// DESCRIPTION:                                                         /
// This is a file that after installing a greasemonkey extension can    /
// be used to convert Google Translate to any SimplyTranslate instance. /
//                                                                      /
// LISCENSE INFO (A dedicated liscense file is in the repo.):           /
//      ALL THE CODE IN THIS REPOSITORY INCLUDING THIS FILE IS          /
// (C) Vertbyqb and Other Contributors 2021.                            /
// YOU CAN USE THIS FILE AND ANY OTHER FILE IN THIS REPOSITORY UNDER    /
// THE TERMS OF GNU GENERAL PUBLIC LICENSE VERSION 3 OR ANY LATER       /
// VERSION. TO FIND THE FULL TEXT OF THE LICENSE GO TO THE GNU.ORG      /
// WEBSITE AT ( https://www.gnu.org/licenses/gpl-3.0.html ).            /
/////////////////////////////////////////////////////////////////////////
// ==UserScript==
// @name           Google Translate to SimplyTranslate
// @namespace      Vertbyqb's userscripts
// @match          http://translate.google.com/*
// @match          https://translate.google.com/*
// @run-at         document-start
// ==/UserScript==
url = location.href
url = url.replace(/\bwww\.\b/, "")
url = url.replace("translate.google.com","simplytranslate.org")
location.href = url
