function cb() {
    console.log('Successfully called back');
}

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction(){
        return;
    };
}

function returnsAnAnonymousFunction() {
    return function(){
        return;
    }
}