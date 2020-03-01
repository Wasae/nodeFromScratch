Starting Node from Scratch With Every Description.
lets Start by Parts.


here we g0:

1) What is Node js..??

. Javascript runtime build on Chrome's v8 Javascript Engine
. Javascript Engine takes javascript code and converts it to a Machine code.
. node runtime provides tools like libraries for setting up web servers,Integrating with file systems
. chrome uses v8 javascript engine in order to execute js code as V8 Js Engine is written in c++,js code sent by chrome to v8           internally executes some c++ code in v8 engine, which is same in case of node js as it also uses v8 Js Engine.

2) Node Module System

Way through which we import or Add other modules and module written by other developers into our existing functionality.    
    One can import
        . npm modules
        . core modules
        . self created modules
package.json --> consist of js object which tracks and indicates dev and prod dependencies
package-lock.json --> file that keeps track of every of every things and managed by npm


3) Why node js..??

. Event-driven & Non Blocking IO(Parallel execution),Asynchronus,Single Threaded model
. node js's ecosystem npm,largest ecosystem for open source libraries

4) Libraries that can be helpfull

. validator(validational purpose)
. chalk(coloring console text)
. nodemon(auto restart app automatically based on an change)
. morgan(logger)
. yargs(Command Line argument parser)
. fs(dealing with file system)
 
 installing any package globally we donnot install in our app but we install on the OS Level also we get acess to new commands from that package and can use on terminals.

 5) File systen and command line arguments

process -->> Node Specific Global variable which consist of lots of properties
process.env -->> Will consist of all things that are passed at the runtime seperate by spaces if not in single quote.

node does not parse the Command line arguments 
SToring json in file and reading from file

6) Debugging Node

node inspect somefilename.js [command line]
open chrome and hit chrom://inspect
Configure network agents
and debugging will happen in chromes developer tools

7) ES6 aside Arrow Functions

. Syntactically short and precise
. no this binding
. No availability of arguments object 
. only Callable ,cannot be instantiated

8) Asynch Basics(Call back queue and event loop)


Basic working of Async operation is due to :
    . Call Stack: 
            ds provided by v8 engine.
            Job is keep track of execution of program.
            it does by keeping track of all of the functions that are currently running.
    . Node Api
    . Callback Queue
            Maintain a list of all Callback functions that are ready to be executed
    . Event loop
            Keeps track of Call Stack and Calback queue
            if Call stack is empty,then it checks if anything avaiable in callback queue.
            if any functon found in callback queue,then moves it to call stack and executes that. 

Callback Functions:
    Functions passed to another function with the intention to be executed later

Short Hand Syntax
        if want value name as name of property,we can create objects like this
        let o={
                name,age
        }
        this will automatically create properties of object with same name as values

Destructring objects
        const {name,age}=o
        internally its this
        name = o.name 
        age = o.age
        //Renaming properties
        const {name:newName,age:NewAge}=o
        newName = o.name 
        NewAge= o.age
        //assigning properties with default values
        const {name='somename',age =10}=o
        newName = o.name 
        NewAge= o.age

9) Web Servers via EXPRESS

        . Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or    path) and a specific HTTP request method (GET, POST, and so on).
        . Serving static files in Express
        . Templating engines like handlebars
        . In order to use a view engine,we need to specify it to node via express

10) Accessing API from browser
        structuring routes
                . server.js file
                . mainRoute.js file will have all routes specification
                . Individual Routers will add here

                express.router()   -->>express()   -->>
                Individual Routers1-->>app.use('/products',Individual Routers1)
                Individual Routers2-->>mainRoute.js-->>server.js
                Individual Routers3-->>