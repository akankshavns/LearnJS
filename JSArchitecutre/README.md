`Reference:` From [YouTube](https://www.youtube.com/watch?v=q3Wsoa7wfDg), [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [Wikipedia](https://en.wikipedia.org/wiki/Just-in-time_compilation)
# JS Architecture

## JavaScript
Javascript is a programming language which runs over a certain environment. There are two basic category of these environments
1. Browser environment: -------- Web browsers like Chrome, Safari, Edge, Firefox etc.
2. Non-browser enviroment: ------ Node.js, Apache CouchDB, Adobe Acrobat etc

## JS Engines
Since, JavaScript is written in human readable characters and is not a machine language hence the environments on which JavaScript runs uses JavaScript engines to converts the code into machine language.

Defferent browsers use their own JS Engines. Such as

* Google Chrome Browser uses V8 JS Engine
* Whereas Firefox uses spiderMonkey (The updated version of first JS Engine created by Brendan Eich in 1995)
* And Safari user JavaScriptCore
* Internet Explorer uses Chakra JS Engine. Later used in Microsoft Edge also but currently Edge is updated to use V8 JS engine developed by Google.

### What is JSEngine?
JS Engine itself is a program written basicallly in C++ to conver JS codes into machine readable codes.

![Env & JS Engine](https://imgur.com/0entWUT.png)

## JS Engine: Processes & Features

### 1. JavaScript Code
A program written by user in JavaScript programming language which is human readable but means nothing to the machine

### 2. Parser
After the JavaScript code has been written, Parser comes into the picture. Parser is a powerful programs which verifies the JavaScript Syntax and rules of the JavaScript code.

### 3. AST (Abstract Syntax Tree)
Parser checks the JavaScript code line by line and verifies syntax and rules. If there is any mistake in the code, Parser throws error.

But if there the Complete JavaScript code is correct, Parser generates AST(Abstract Syntax Tree). To roughly understand, AST has the same idea as DOM (Document Object Model) generated to render the HTML webpages in a browser.

To check how AST (Abstract Syntax Tree) of a simple JavaScript code looks like, visit [astexplorer.net](https://astexplorer.net/)

From AST, it becomes easier for an interepreter to convert the code to machine redable code instead of directly converting the JavaScript code.

### 4. Interpreter
Further, Interpreter converts the AST into byte code (IR: intermediate representation)

Interpreter first creates byte code to make the the final machine code hardware independed. And since, byte code is universal it can run onto any processor.

### 5. Compiler
Compiler take the byte code and converts it into machine code.

![JS Engine Process](https://imgur.com/q2l826n.png)

## JIT Compiler (Just-In-Time Compiler)

In computing, just-in-time (JIT) compilation (also dynamic translation or run-time compilations) is a way of executing computer code that involves compilation during execution of a program (at run time) rather than before execution

JIT compilers user both interpreter and compilers.