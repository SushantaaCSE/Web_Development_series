// Immediately Invoked Function Expressions (IIFE)


(function greet(){
    // named IIFE
    console.log(`HELLO`);
})();

( (name) => {
    console.log(`HELLO AGAIN ${name}`);
} )('WORLD');

