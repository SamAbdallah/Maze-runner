window.onload=function () {
    var score = 0;
    var result = document.getElementsByClassName("boundary example")[0];
    var boundraies = document.getElementsByClassName("boundary");
    var start = document.getElementById("start");
    start.addEventListener("mouseenter", game);
    start.addEventListener("click", reset);
    var live = [];
    var best = [];
    let ms = 0;
    let sec = 0;
    let min = 0;
    let msS = document.getElementById("ms")
    let secS = document.getElementById("sec")
    let minS = document.getElementById("min")
    let msS3 = document.getElementById("ms3")
    let secS3 = document.getElementById("sec3")
    let minS3 = document.getElementById("min3")

    let interval;








   function stopWatch(){
        ms++;
        if (ms==100) {
            ms=0;
            sec++;
            msS.innerHTML=ms;

        }

        if (sec==60) {
            sec=0;
            min++;
            secS.innerHTML=sec;
        }

        if (ms<10) {
            msS.innerHTML='0'+ms;
        }
        else {
            msS.innerHTML=ms;
        }

        if (sec<10) {
            secS.innerHTML='0'+sec;
        }
        else {
            secS.innerHTML=sec;
        }

        if (min<10) {
            minS.innerHTML='0'+min;
        }
        else {
            minS.innerHTML=min;
        }



    }
    function startTimer(){
        clearInterval(interval);
        interval=setInterval(stopWatch,10);
    }

    // function stoptimer() {
    //     clearInterval(interval);
    // }


    function resetTimer() {
        clearInterval(interval);
        ms=0;
        sec=0;
        min=0;

        msS.innerHTML=00;
        secS.innerHTML=00;
        minS.innerHTML=00;

    }


    function last(){
        msS3.innerHTML=ms;
        secS3.innerHTML=sec;
        minS3.innerHTML=min;
    }
}