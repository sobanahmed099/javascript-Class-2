// let firstVariable , secondVAriable , thirdVariable;



// var useralert = legal;
// var $ali = legal;
// var _ali = legal;
// var ali1 = legal;
// var aliAnwar = legal;

// var 1ali = illegal;
// var .ali = illegal;
// var Ali = illegal;
// var anwar ali = illegal;
// var ali? = illegal;



document.write(" <h1> <b> Rules for naming JS variables </b> </h1>");

let letters = prompt(" Enter what variable name can contain beside numbers ,  ");
let dollar = prompt("Enter symbol variable  can contain ,");
let underscore = prompt("Enter another symbol  variable can contain beside numbers , ");

document.write(" Variable names can only contain " + letters + "1 , " + dollar + " or " + underscore + ". <br> For Exapmle: name1, _name , or $name <br><br>"); 

let dollarsign = prompt(" Enter what comes before a name,  ");
let underscoresign = prompt(" Enter what other comes before a name , ");
let letter = prompt("Enter what variable name can come without symbol , ");


document.write("Variables must begin with a " + dollarsign + ",  " + underscoresign + " or  " + letter + " <br> For Example: $name,_name or name . <br><br>")


let enter = "case sensitive";
document.write(" Variables names must be " + enter + " <br><br> ")

let keyword = " keyword"
document.write(" Variables names should not ne JS " + keyword+ " ")
