/////////////////////////////////////////////////////////////////////
//                                                                   /
// DESCRIPTION:                                                      /
// This is a file that after installing a greasemonkey extension can /
// be used to convert youtube.com to any invidious instance.         /
// NOTE: I might change this really often because instances may fail./
// variables.                                                        /
//                                                                   /
// LISCENSE INFO (A dedicated liscense file is in the repo.):        /
//      ALL THE CODE IN THIS REPOSITORY INCLUDING THIS FILE IS       /
// (C) Troler Jeans and Other Contributors 2021.                     /
// YOU CAN USE THIS FILE AND ANY OTHER FILE IN THIS REPOSITORY UNDER /
// THE TERMS OF GNU GENERAL PUBLIC LICENSE VERSION 3 OR ANY LATER    /
// VERSION. TO FIND THE FULL TEXT OF THE LICENSE GO TO THE GNU.ORG   /
// WEBSITE AT ( https://www.gnu.org/licenses/gpl-3.0.html ).         /
/////////////////////////////////////////////////////////////////////
// ==UserScript==
// @name           YouTube to Invidous
// @namespace      Troler's Youtubvious
// @match          http://youtube.com/*
// @match          https://youtube.com/*
// @match          http://www.youtube.com/*
// @match          https://www.youtube.com/*
// @run-at         document-start
// ==/UserScript==
url = location.href
url = url.replace(/\bwww\.\b/, "")
url = url.replace("youtube.com","vid.puffyan.us")
location.href = url
