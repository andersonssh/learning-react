/**Uma funcao anonima entre parenteses
 * seguida por outro par de parenteses 
 * que representa sua chamada
 */

(
    function(a,b){
        console.log(a, '+', b)
        return a + b
    }
)(1,2)

// a funcao se autoexecuta