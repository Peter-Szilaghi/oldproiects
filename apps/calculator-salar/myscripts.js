function calculatorSalar(){
    let salar = $("#salar").val();
    let y = document.querySelector("#salar-net").checked;
    let x = document.querySelector("#salar-brut").checked;
    if ( salar === ""){
        alert("Introdu salariul");
    }
    else if (x === false && y === false){
        alert("Ai uitat sa bifezi salariul pe care vrei sa il calculezi");
    }
    else{
        $('table').removeClass();
        let sNet, sBrut, cas, cass, ipv;

        if (x === true){
            sBrut = +salar;
            cas = sBrut *25/100;
            cass = sBrut *10/100;
            ipv = (sBrut - cas - cass) *10/100;
            sNet = sBrut - cas - cass - ipv;
        }
        else if (y === true){
            sNet = +salar;
            sBrut = sNet *1000 / 585;
            cas = sBrut *25/100;
            cass = sBrut *10/100;
            ipv = (sBrut - cas - cass) *10/100;        
        }
        $("#s-brut").html(sBrut.toFixed(0));
        $("#cas").html(cas.toFixed(0));
        $("#cass").html(cass.toFixed(0));
        $("#ipv").html(ipv.toFixed(0));
        $("#s-net").html(sNet.toFixed(0));
    }
}