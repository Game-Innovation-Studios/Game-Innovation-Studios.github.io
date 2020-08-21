window.onload = function() {
    importRepo("./games.json");
}



function importRepo(jsonURL) {
    var gameList;
    $.getJSON(jsonURL, function(json) {
        gameList = json;
    });
    // var gameList = JSON.parse(localStorage.getItem('index'));
    var gameElement = document.getElementById("games");

    gameElement.innerHTML += '<b><li><a>Close</a></li></b>'

    setTimeout(function() {

        for (var gameCat in gameList) {
            gameElement.innerHTML += '<li class="divider"></li><li><a><b>' + gameCat + '</b></a></li>';
            for (var game in gameList[gameCat]) {
                gameElement.innerHTML += '<li><a onclick="infogParse(this.getAttribute(\'infoGram\'))" infoGram="' + gameList[gameCat][game] + '">' + game + '</a></li>';
            }
        }

        $('.dropdown-trigger').dropdown();
    }, 500);
};