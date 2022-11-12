
var box = document.getElementsByClassName("box");
var solAlan = document.getElementById("solAlan");
var level = document.getElementById("seviye");
var yukseklik = 0;

var tekrarAlani = document.getElementById("tekrarAlani");



solAlan.addEventListener("click", durdur)



function durdur() {

    for (var i = 0; i < box.length; i++) {
        if (box[i]) {
            box[i].classList.add("stopBox");
            

            if (box[53]) {
                function ekleme() {
                    solAlan.innerHTML = `
                    <h1 style="text-align:center;">Game Over</h1>
                    `;

                    var tekrarBtn = document.createElement("button");
                    tekrarBtn.setAttribute("id", "tekrar");
                    tekrarBtn.innerHTML = " <a href='index.html'>RESTART</a>";
                    tekrarAlani.insertBefore(tekrarBtn, tekrarAlani.firstChild);

                }
            }
        }


    }

    function ekleme() {
        yukseklik = yukseklik + 10;
        var newBox = document.createElement("div");
        newBox.setAttribute("class", "box");
        newBox.style.bottom = `${yukseklik}px`;

        if (yukseklik > 39) {
            level.innerHTML = `Level 2`;
            newBox.style.backgroundColor = `blue`;
            newBox.style.width = `150px`;
            newBox.style.animationName = `hareket2`;
            newBox.style.animationDuration = `2.7s`;
            newBox.style.animationTimingFunction = `linear`;

        }

        if (yukseklik > 139) {
            level.innerHTML = `Level 3`;
            newBox.style.backgroundColor = `orange`;
            newBox.style.width = `100px`;
            newBox.style.animationName = `hareket3`;
            newBox.style.animationDuration = `2.5s`;
            newBox.style.animationTimingFunction = `linear`;
        }

        if (yukseklik > 269) {
            level.innerHTML = `Level 4`;
            newBox.style.backgroundColor = `white`;
            newBox.style.width = `50px`;
            newBox.style.animationName = `hareket4`;
            newBox.style.animationDuration = `2.2s`;
            newBox.style.animationTimingFunction = `linear`;
        }

        solAlan.insertBefore(newBox, solAlan.lastChild);
    }
    ekleme();

}


