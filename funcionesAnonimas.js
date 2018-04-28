//function functionUno(x){
 // console.log(x);
//}
//debe de correr

function functionDos(var1, var2){
  // var1 = 2
  // var2 = functionUno
  // functionUno(2);
  var2(var1);
}
//function(var, cb);
//functionDos(2, functionUno);

functionDos(2, (x)=>{
  console.log("Dentro de la funcion anonima " + x);
});

functionDos(5, function (x){
  console.log("Dentro de la funcion no tan anonima " + x);
});