export function ResOrientacion() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;

    // 1a pregunta
    if (document.getElementById('p11').checked==true) {p1=1}
    else {p1=0}
    // 2a pregunta
    if (document.getElementById('p24').checked==true) {p2=1}
    else {p2=0}
    // 3a pregunta
    if (document.getElementById('p33').checked==true) {p3=1}
    else {p3=0}
    

    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
    alert(" Aciertos: " + nota);
    window.location = '../components/Orientacion.js'
}