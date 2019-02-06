function logger(module) {
   return function(message) {
        const args = [module.filename].concat([].slice.call(arguments));
        console.log.apply(console, args);
   } 
}

module.exports = logger; 