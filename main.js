//Built-in Objects exercises.

/*---------- 1 - String ----------*/
/*
Crear una función que reciba un string como parametro y que al ser llamada haga
un console.log mostrando el length del string recibido.

Ex:
myFunc('myString');
*/

/*------------------------------ Solución ------------------------------------------- */

function myString(chain) {
    return console.log(chain.length);
  }
  console.log("Ex.1: String");
  myString("Pepe pecas pica papas con un pico");
  
  /*----------------------------------------------------------------------------------- */
  
  /*---------- 2 - Number ----------*/
  /*
  crear una función que reciba un number, que haga lo siguiente:
  * Determinar si el numero recibido es un número entero.
  * En caso de ser entero, hacer un console.log avisando que es un entero. 
  * En caso de no ser entero, convertirlo a entero y mostar el nuevo valor usando console.log.
  
  Ex:
  myFunc(number);
  posibles casos:
  a) el número es un entero :3
  b) el número ahora es un entero con valor de (valor) ;)
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  function myNumber(number) {
    if (Number.isInteger(number)) {
      console.log("El numero " + number + " es entero");
    } else {
      console.log(
        "El numero ahora es un entero con valor de " + Number.parseInt(number)
      );
    }
  }
  console.log("Ex.2: Number");
  myNumber(6.5);
  
  /*----------------------------------------------------------------------------------- */
  
  /*---------- 3 - Boolean ----------*/
  /*
  Crear una función que reciba un boolean, que al ser llamada haga un console.log mostrando:
  * El numero de caracteres que representan el valor del boolean recibido.
  
  Ex:
  var flag = true;
  myFunc(flag);
  expected result:  4 caracteres.
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  var boolean = true;
  function exercise3(boolean) {
    console.log(boolean.toString().length + " caracteres");
  }
  console.log("Ex.3: Boolean");
  exercise3(boolean);
  
  /*----------------------------------------------------------------------------------- */
  
  /*---------- 4 - Object ----------*/
  /*
  crear una función que reciba un object, que al ser llamada haga un console.log mostrando:
  * El numero de propiedades que contiene el objeto.
  * El nombre de cada una de las propiedades del objeto.
  * El valor de cada una las propiedades del objeto.
  
  Ex:
  myFunc(obj);
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  
  let student = {
    name: "Fulanito",
    email: "fulanito.detal@gmail.com",
    password: "fulanito123"
  };
  function myObject(student) {
    console.log(
      Object.keys(student).length,
      Object.keys(student),
      Object.values(student)
    );
  }
  console.log("Ex.4: Object");
  myObject(student);
  
  /*----------------------------------------------------------------------------------- */
  
  /*---------- 5 - Function ----------*/
  /*
  Crear una función que reciba una function, que al ser llamada haga un console log mostrando:
  * El número de argumentos que espera la funcion.
  
  Ex:
  var sum = new Function('a','b','c', 'return a + b + c');
  
  myFunc(sum);
  result: 3.
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  var sum = new Function("a", "b", "c", "return a + b + c");
  function myFunc(sum) {
    console.log(sum.length);
  }
  console.log("Ex.5: Function");
  myFunc(sum);
  
  /*----------------------------------------------------------------------------------- */
  
  /*---------- 6 - Array ----------*/
  /*
  Crear una función que reciba un array de strings, un número (desiredLength) y un string (template), 
  que al ser llamda haga lo siguiente:
  *Checar el numero de propiedades que tiene el array.
  *Si el numero de propiedades es menor a desiredLength por 1: 
      *Rellenar el espacio faltante dentro del array usando template.  
      *Hacer un console.log del arreglo con los cambios.
  *En caso de que no se cumpla la condición, mencionar si el array es menor o mayor que desiredLength y por cuanto.
  Ex:
  
  var arr = ['Apple', 'Banana'];
  myFunc(arr, 3, 'apple');
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  
  let fruits = ["Apple", "Banana"];
  function myArray(array, desiredLength, template) {
    let diference = desiredLength - array.length;
    if (diference === 1) {
      array.push(template);
      console.log(array);
    } else if (diference > 1) {
      console.log("El arreglo es menor por " + diference);
    } else {
      console.log("el arreglo es mayor por  " + Math.abs(diference));
    }
  }
  console.log("Ex.6: Array");
  myArray(fruits, 1, "Banana");
  
  /*----------------------------------------------------------------------------------- */
  
  /*---------- 7 - Date ----------*/
  /*
  Crear una función que al ser llamada haga dos console.log, uno mostrando la fecha actual 
  y otro que muestre cuantos milisegundos han pasado desde el 1/enero/1970 hasta ahora.
  
  myFunc();
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  
  function myDate() {
    var today = new Date();
    console.log("Date: " + today.toISOString());
    console.log("Miliseconds: " + Date.now());
  }
  console.log("Ex.7: Date");
  myDate();
  
  /*----------------------------------------------------------------------------------- */
  
  /*---------- 8 - Math ----------*/
  /*
  Crear una función que reciba dos numeros (base y exponente). 
  la función al ser llamada usará el valor absoluto de base y lo elevara a la potencia 
  determinada por exponente, al final mostrar este resultado usando console.log.
  
  Ex:
  
  myFunc(-3, 2) 
  result = 9;
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  
  function myMath(a, b) {
    var temp = Math.abs(a);
    console.log(Math.pow(temp, b));
  }
  console.log("Ex.8: Math");
  myMath(-5, 2);
  
  /*----------------------------------------------------------------------------------- */
  
  /*---------- 9 - RegExp ----------*/
  /*
  Dada el siguiente patrón (/([A-Z])/), crear una funcion que reciba dos strings (str, template).
  * Determine si str cumple con el patrón.
  * Si cumple, remplazar el las incidencias del patron con el valor de template.
  * Mostar el resultado usando console.log.
  * Si no, mostrar un mensaje de no coincidencia usando console.log
  
  Ex:
  myFunc(str, template)
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  var regX = new RegExp(/([A-Z])/);
  function regExp(str, template) {
    if (regX.test(str)) {
      newString = str.replace(regX, template);
      console.log(newString);
      return;
    }
    console.log("No encuentro coincidencias");
  }
  console.log("Ex.8: RegExp");
  regExp("N", "Replacement");
  regExp("name", "Jojo");
  
  /*----------------------------------------------------------------------------------- */
  
  /*---------- 10 - Error ----------*/
  /*
  Crear una funcion que reciba un numero.
  *Si el número es menor o igual a 10, usar console.log para mostrar un mensaje de valor dentro de los paramatros.
  *Si el número es mayor a 10 arrojar un error con el mensaje, el valor esta fuera de los parametros.
  
  Ex: myFunc(number)
  */
  
  /*------------------------------ Solución ------------------------------------------- */
  function myError(n) {
    if (n <= 10) {
      console.log("Valor dentro de parametros");
      return;
    }
    throw new Error("valor fuera de parametros");
  }
  console.log("Ex.9: Error");
  myError(4)
  /*----------------------------------------------------------------------------------- */
  
  /*---------- Extra (más no opcional) ----------*/
  /*
  Usar los objetos vistos en clase y aplicarlos para solucionar un escenario que pueda ocurrir 
  entre los proyectos finales que tienen asignados.
  
  Describir el caso:

  PROYECTO DE ENCUESTAS:

  Se crea una función que reciba una encuesta y que al ser llamada muestre los resultados:
  * El numero de propiedades que contiene la encuesta.
  * El nombre las propiedades de la encuesta.
  * Las respuestas del usuario.
  
  */
  
  
  /* Mostrar la solucíon en código:  */
  let survey = {
    surveyName: "WC Survey",
    surveyCreator: "WemanConnect",
    name: "Mayra Regalado",
    email: "maiira.regalado@gmail.com",
    carreer: "Fullstack developer",
    questions: { 
    Q1: "Question1",
    Q2: "Question2",
    Q3: "Question3",
    Q4: "Question4",
    Q5: "Question5",
    Q6: "Question6",
    Q7: "Question7",
    }  
  };
  function mySurvey(survey) {
    console.log(
      Object.keys(survey).length,
      Object.keys(survey),
      Object.values(survey)
    );
  }
  console.log("Ex.10: Extra");
  mySurvey(survey);
  
  