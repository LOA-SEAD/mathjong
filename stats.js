
function sendData(points, remainingTime, levelId, gameSize, win, end){
    var info = {};
    var path;
    if(window.location.hostname == "localhost" ){   // for localhost tests
        path = "/exported-resource/saveStats"
    }else {                                 // for web version in production, electron and crosswalk versions
        path = "http://remar.dc.ufscar.br/exported-resource/saveStats"
    }
    $.getJSON("remar.json", function(json) {
        info.gameType = 'puzzleWithTime';
        info.exportedResourceId = json.exportedResourceId;
        info.points = points.toFixed(0);
        info.partialPoints = points.toFixed(0);
        info.remainingTime = remainingTime;
        info.levelId = levelId;
        info.win = win;
        info.size = gameSize;
        info.end = end;
        info.gameType = "puzzleWithTime";
        $.ajax({
            type: "POST",
            url: path,
            data: info,
            success: function(data) {
            }
        })
    });



}