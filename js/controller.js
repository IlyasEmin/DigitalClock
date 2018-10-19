$(document).ready(function () {

    function drawEpoch() {
        $("#epoch").val(Number(Date.now().toString()))
    }

    function drawTime() {
        $("#date").val(findDate());
    }

    function drawLog(){
    $("#logBtn").click(function () {
        let currentTime = $("#date").val() + "  : Logged";
        let logOutput = $("#logOutput");
        logOutput.html(logOutput.html() + "\n" + currentTime);
    });
    };

    function setInt(){
    let handler = setInterval(function () {
        drawEpoch();
        drawTime();
    }, 1000)

    $("#stopInt").click(function () {
        clearInterval(handler);
    })
    };


    function dragDrop() {
        $(".container").click(function () {
            //$(".container").css("background","green");
            $(".container").draggable();
        });
    };

    function timeChange(){
        $("#date").click(function(){
            isAmPmCalculation = !isAmPmCalculation;
        })
    };

// main function

function main(){
    drawTime();
    drawEpoch();
    drawLog();
    setInt(),
    dragDrop();
    timeChange();
}

main();
});