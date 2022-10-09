`Reference:` From [YouTube](https://www.youtube.com/watch?v=q3Wsoa7wfDg), [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
# JS Architecture

## JavaScript
Javascript is a programming language which runs over a certain environment. There are two basic category of these environments
1. Browser environment: -------- Web browsers like Chrome, Safari, Edge, Firefox etc.
2. Non-browser enviroment: ------ Node.js, Apache CouchDB, Adobe Acrobat etc

## JS Engines
Since, JavaScript is written in human readable characters and is not a machine language hence the environments on which JavaScript runs uses JavaScript engines to convers the code to machine language.

Defferent browsers use their own JS Engines. Such as

* Google Chrome Browser uses V8 JS Engine
* Whereas Firefox uses spiderMonkey (The updated version of first JS Engine created by Brendan Eich in 1995)
* And Safari user JavaScriptCore
* Internet Explorer uses Chakra JS Engine. Later used in Microsoft Edge also but currently Edge is updated to use V8 JS engine developed by Google.

### What is JSEngine?
JS Engine itself is a program written basicallly in C++ to conver JS codes into machine readable codes.

![Env & JS Engine](https://imgur.com/0entWUT.png)

