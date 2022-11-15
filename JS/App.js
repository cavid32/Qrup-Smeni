var qrupNo = document.getElementById("qrupNo");
var rejim = document.getElementById("rejim");
function btn() {
    if (qrupNo.value > 100 && qrupNo.value < 200) {
        rejim.innerHTML = "sizin qrupunuz seherdir"
        rejim.style.backgroundColor = "yellow"
    } else if(qrupNo.value > 200 && qrupNo.value < 300) {
        rejim.style.backgroundColor = "red"
        rejim.innerHTML = "sizin qrupunuz gunortadir"
    }
    else{
        rejim.style.backgroundColor = "black";
        rejim.style.color = "white"
        rejim.innerHTML = "sizin qrupunuz axsamdir"
    }
}