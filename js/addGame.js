var params = new URLSearchParams(document.location.search.substring(1));
var game = params.get("game");
var title = params.get("title");

function flasher(url, width, height) {
  var game = document.getElementById("game")
  game.innerHTML = '<embed src="' + url + '" quality="high" pluginspage="https://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + width.toString() + '" height="' + height.toString() + '" style="display: block; margin: auto; margin-top: 20px;">'
}

function framer(url, width, height) {
  var game = document.getElementById("game")
  game.innerHTML = '<iframe src="' + url + '" style="display: block; margin: auto; margin-top: 20px; width: ' + width.toString() + 'px; height: ' + height.toString() + 'px; border: none;">'
}

function framerFull(url) {
  var game = document.getElementById("game")
  game.innerHTML = '<iframe src="' + url + '" style="display: block; margin: auto; margin-top: 20px; width: calc(100vw - 40px); height: calc(100vh - 104px); border: none;">'
}

function scratch(id) {
  var game = document.getElementById("game")
  game.innerHTML = '<iframe src="https://forkphorus.github.io/embed.html?id=' + id.toString() + '&auto-start=true&light-content=true" width="802" height="633" style="display: block; margin: auto; margin-top: 20px;" allowfullscreen="true" allowtransparency="true" style="border:none;"></iframe>'
}

window.addEventListener('load', (event) => {
  eval(ggDecode(game))

  if(title == null){
    document.title = "reInnovate Games";
  } else {
    document.title = title + " | reInnovate Games";
  }
});
