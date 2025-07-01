# node
Learning node in isolation and developing mastery

Lesson 1:- 
Create first node server and under stand [NodeJS Globals, Singlethreaded and eventLoop,Event based architecture]. <br>
Lesson 2:-
Use res.write() and understand header and importance of metadata.<br>
Lesson 3:-
Create a mini-project where base URL sends a form ie single textbox/input send user data through post method using form submit and save user data into a local .txt file
Understand streams and different event in lifecycle, also usage of global Buffer and sending templates to clients.

Lesson 4 [Theoretical] :- Javascript is a SINGLE_THREADED language but the moment asyc code [like FS] comes into picture it assigned it to WORKER_POOL(in Node.js, via libuv) WP utilises multithreaded nature of os and execute asyc code(not timers and promises) in parallel. When worker pool is done with the asyc task it executes the assigned CALL_BACK to EVENT_LOOP and finally when eventLoop finds CALL_STACK empty it pushes callBack to callStack which finally gets Executed.












