//we're creating an engine and then a script that can take the engine or any engine.

script or story looks like this:

Steps
    1. ask the q
    2. When answer is received:
        if user answered one of the acceptable answers,
            if there is a an object for the answer, then ask it (i.e. pass it to the function that asks the questions).
            if there is a string for the answer, show string and end game. if type of answer is object then ask, if type of answer is string, then just so string.
        if the user gives an invalid answer(like besides yes or no), if there is no property in the answers object whose name is the text the user typed, then scold the user and ask the same question again.

var obj = { funky: 'chicken', disco: 'duck' }

Object.keys(obj) ==> pulls out all the keys/answers
Object.getOwnPropertyNames(obj) // similar but has some hidden properties like length.


//chalk is not yet included, need to install chalk.
