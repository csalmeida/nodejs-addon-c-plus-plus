# C++ Node Addon Example

This includes an example that runs a calculate function in C++ in the NodeJS environment. It also compares the same function running in JavaScript.

## Changing C++ Logic

This project only makes use of `calculate.cc` to store all the C++ logic is stored here.

To compile it use:

```
node-gyp build
```

Build files will be available in `/build`.

To change the target for some reason add it to `binding.gyp`. 

## Running the NodeJS Logic

JavaScript logic is at `Main.js` and it includes a `calc()` function that is identical to the method of the same name implented in C++.

It also runs the JavaScript and C++ versions of the method and tracks the time they take to run.


To run the Node program use the following command:

```bash
npm start # Or node ./Main.js
```

# Benchmarks

Time it takes to run the `calc` method in C++ and JavaScript:

```bash
C++: 951.316ms
JavaScript: 947.472ms

C++: 949.138ms
JavaScript: 944.258ms

C++: 949.104ms
JavaScript: 943.618ms

C++: 948.197ms
JavaScript: 943.662ms

C++: 948.901ms
JavaScript: 943.315ms

C++: 948.901ms
JavaScript: 943.315ms

C++: 948.333ms
JavaScript: 943.874ms

C++: 945.802ms
JavaScript: 947.465ms

C++: 941.535ms
JavaScript: 944.467ms

C++: 950.487ms
JavaScript: 957.619ms
```