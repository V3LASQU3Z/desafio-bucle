function mp() {
    var m = parseInt(document.getElementById("m").value);
    var s = 1;
    for (i = 1; i <= m; i++) {
        var num = Math.pow((2 * i), 2);
        var den = Math.pow((2 * i), 2) - 1;
        s = s * (num / den);
        //document.write(num + "/" + den + " ")

    }
    var x = 2 * s;
    //var f = x.toFixed(4);
    //document.getElementById.innerHTML = num + "/" + den;
    document.getElementById('Bucle').innerHTML = x

}