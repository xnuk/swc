var condString;
var exprAny1;
var exprBoolean1;
var exprNumber1;
var exprString1;
var exprIsObject1;
var exprAny2;
var exprBoolean2;
var exprNumber2;
var exprString2;
var exprIsObject2;
condString ? exprAny1 : exprAny2;
condString ? exprBoolean1 : exprBoolean2;
condString ? exprNumber1 : exprNumber2;
condString ? exprString1 : exprString2;
condString ? exprIsObject1 : exprIsObject2;
condString ? exprString1 : exprBoolean1;
"" ? exprAny1 : exprAny2;
"string" ? exprBoolean1 : exprBoolean2;
"c" ? exprNumber1 : exprNumber2;
"string" ? exprString1 : exprString2;
"  " ? exprIsObject1 : exprIsObject2;
"hello " ? exprString1 : exprBoolean1;
function foo() {
    return "string";
}
var array = [
    "1",
    "2",
    "3"
];
typeof condString ? exprAny1 : exprAny2;
condString.toUpperCase ? exprBoolean1 : exprBoolean2;
condString + "string" ? exprNumber1 : exprNumber2;
foo() ? exprString1 : exprString2;
array[1] ? exprIsObject1 : exprIsObject2;
foo() ? exprString1 : exprBoolean1;
var resultIsAny1 = condString ? exprAny1 : exprAny2;
var resultIsBoolean1 = condString ? exprBoolean1 : exprBoolean2;
var resultIsNumber1 = condString ? exprNumber1 : exprNumber2;
var resultIsString1 = condString ? exprString1 : exprString2;
var resultIsObject1 = condString ? exprIsObject1 : exprIsObject2;
var resultIsStringOrBoolean1 = condString ? exprString1 : exprBoolean1;
var resultIsAny2 = "" ? exprAny1 : exprAny2;
var resultIsBoolean2 = "string" ? exprBoolean1 : exprBoolean2;
var resultIsNumber2 = "c" ? exprNumber1 : exprNumber2;
var resultIsString2 = "string" ? exprString1 : exprString2;
var resultIsObject2 = "  " ? exprIsObject1 : exprIsObject2;
var resultIsStringOrBoolean2 = "hello" ? exprString1 : exprBoolean1;
var resultIsAny3 = typeof condString ? exprAny1 : exprAny2;
var resultIsBoolean3 = condString.toUpperCase ? exprBoolean1 : exprBoolean2;
var resultIsNumber3 = condString + "string" ? exprNumber1 : exprNumber2;
var resultIsString3 = foo() ? exprString1 : exprString2;
var resultIsObject3 = array[1] ? exprIsObject1 : exprIsObject2;
var resultIsStringOrBoolean3 = typeof condString ? exprString1 : exprBoolean1;
var resultIsStringOrBoolean4 = condString.toUpperCase ? exprString1 : exprBoolean1;
