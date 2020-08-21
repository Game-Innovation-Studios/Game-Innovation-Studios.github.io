require(["https://unpkg.com/lunr/lunr.js"]);

var idx = lunr(function() {
    this.ref('name')
    this.field('name')
    this.field('text')

    gameSearch.forEach(function(game) {
        this.add(game)
    }, this)
})