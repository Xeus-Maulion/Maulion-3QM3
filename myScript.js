let Fil = 78;
let Filw = "Filipino: "
let Filb = Filw.bold();
let Eng = 82;
let Engw = "English: "
let Engb = Engw.bold();
let Math = 72;
let Mathw = "Math: "
let Mathb = Mathw.bold();
let Sci = 87;
let Sciw = "Science: "
let Scib = Sciw.bold();
let PE = 96;
let PEw = "Physical Education: "
let PEb = PEw.bold();
let Ave = (Fil + Eng + Math + Sci + PE) / 5;
let Avew = "Average: "
let Aveb = Avew.bold();
let Result = "Result: ";
let Resultb = Result.bold()

document.getElementById("demo").innerHTML = Filb + Fil + '%' + "<br>" + Engb + Eng + '%' + "<br>" + Mathb + Math + '%' +"<br>" + Scib + Sci + '%' + "<br>" + PEb + PE + '%' + "<br><br>" + Aveb + Ave + '%' + "<br>" + Resultb + "You passed! However, your Math need to re-enroll this subject.";