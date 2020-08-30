var params = new URLSearchParams(document.location.search.substring(1));
var infog = params.get("infog");
var cookie = params.get("cookie");

function flasher(url, width, height) {
    var game = document.getElementById("game");
    game.innerHTML = '<embed src="' + url + '" quality="high" pluginspage="https://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + width.toString() + '" height="' + height.toString() + '" style="display: block; margin: auto; margin-top: 20px;">';
}

function framer(url, width, height) {
    var game = document.getElementById("game");
    game.innerHTML = '<iframe src="' + url + '" style="width: ' + width.toString() + 'px; height: ' + height.toString() + 'px; border: none; margin: 20px;">';
}

function framerFull(url) {
    var game = document.getElementById("game");
    game.innerHTML = '<iframe src="' + url + '" style="width: calc(100vw - 40px); height: calc(100vh - 104px); border: none; margin: 20px;">'
}

function scratch(id) {
    var game = document.getElementById("game");
    game.innerHTML = '<iframe src="https://forkphorus.github.io/embed.html?id=' + id.toString() + '&auto-start=true&light-content=true" style="width: 802px; height: 633px; border: none; margin: 20px;" allowfullscreen="true" allowtransparency="true"></iframe>';
}

function infoGramParse(infoGram) {
    var info = JSON.parse(igDecode(infoGram));


    var gameType = info.type;
    var game = document.getElementById("game");
    if (gameType == "flash") {
        //Adobe Flash
        var url = info.url;
        var width = info.width;
        var height = info.height;
        game.innerHTML = '<embed src="' + url + '" quality="high" pluginspage="https://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" style="width: ' + width + '; height: ' + height + '; border: none; margin: 20px;">';
    } else if (gameType == "frame") {
        //Iframe
        var url = info.url;
        var width = info.width;
        var height = info.height;
        game.innerHTML = '<iframe src="' + url + '" style="width: ' + width + '; height: ' + height + '; border: none; margin: 20px;" sandbox="allow-forms allow-modals	allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-top-navigation allow-top-navigation-by-user-activation">';
    } else if (gameType == "frameFull") {
        //Iframe
        var url = info.url;
        game.innerHTML = '<iframe src="' + url + '" style="width: calc(100vw - 40px); height: calc(100vh - 104px); border: none; margin: 20px; margin-bottom: auto;" sandbox>';
    } else if (gameType == "scratchEmbed") {
        //Scratch HTML Game
        var url = info.url;
        game.innerHTML = '<iframe src="' + url + '" style="width: 802px; height: 633px; border: none; margin: 20px;" allowfullscreen="true" allowtransparency="true">';
    } else if (gameType == "scratch") {
        //Scratch Game
        var id = info.id;
        game.innerHTML = '<iframe src="https://forkphorus.github.io/embed.html?id=' + id.toString() + '&auto-start=true&light-content=true" width="482" height="393" style=" border: none; margin: 20px; align-content: center; align-content: center;" allowfullscreen="true" allowtransparency="true"></iframe>';
    } else if (gameType == "js") {
        //Plain JS
        var js = info.js;
        eval(ggDecode(js));
    }

    //title
    var title = info.title;
    if (title != null) {
        document.title = title + " | reInnovate Games";
    } else {
        document.title = "reInnovate Games";
    }

    //Instructions
    var instructions = info.instructions;
    if (instructions != null) {
        document.getElementById("instructionsText").innerText = "Instructions: \n" + instructions;
    }

    //Description
    var description = info.description;
    if (description != null) {
        document.getElementById("descriptionText").innerText = "Description: \n" + description;
    }

    //Credit
    var credit = info.credit;
    if (credit != null) {
        document.getElementById("creditText").innerText = "Credit: " + credit;
    }
}

window.addEventListener('load', (event) => {
    if (cookie == "true") {
        infoGramParse(sessionStorage.getItem("infog"));
    } else if (infog != null) {
        infoGramParse(infog);
    } else {
        //Decode GameGram and evaluate
        var game = params.get("game");
        eval(ggDecode(game));

        //Set title
        var title = params.get("title");
        if (title == null) {
            document.title = "reInnovate Games";
        } else {
            document.title = title + " | reInnovate Games";
        }
    }

});