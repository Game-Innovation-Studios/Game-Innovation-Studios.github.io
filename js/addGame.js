var params = new URLSearchParams(document.location.search.substring(1));
var game = params.get("game");

function flasher(url, width, height) {
  var game = document.getElementById("game")
  game.innerHTML = '<embed src="' + url + '" quality="high" pluginspage="https://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + width.toString() + '" height="' + height.toString() + '" style="display: block; margin: auto; margin-top: 20px;">'
}

function framer(url, width, height) {
  var game = document.getElementById("game")
  game.innerHTML = '<iframe src="' + url + '" width="" height="" style="display: block; margin: auto; margin-top: 20px; width: ' + width.toString() + 'px; height: ' + height.toString() + 'px;">'
}


eval(ggDecode(game))
