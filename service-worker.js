/*"use strict";

var folderFiles = ["frame/skid-inc/app/assets/kred_single.png", "frame/skid-inc/app/assets/logo.png", "frame/skid-inc/app/assets/matrix-code.svg", "frame/skid-inc/app/assets/matrix-code.woff", "frame/skid-inc/app/assets/stardust.png", "frame/skid-inc/app/css/core.css", "frame/skid-inc/app/css/custom-bootstrap.css", "frame/skid-inc/app/css/game-queries.css", "frame/skid-inc/app/css/game.css", "frame/skid-inc/app/css/helpers.css", "frame/skid-inc/app/css/loader.css", "frame/skid-inc/app/css/modal.css", "frame/skid-inc/app/css/scrollbar.css", "frame/skid-inc/app/css/themes/default.css", "frame/skid-inc/app/css/themes/matrix.css", "frame/skid-inc/app/css/themes/stardust.css", "frame/skid-inc/app/css/typed.css", "frame/skid-inc/app/js/achievements.js", "frame/skid-inc/app/js/autoscript.js", "frame/skid-inc/app/js/battery.js", "frame/skid-inc/app/js/buy.js", "frame/skid-inc/app/js/console.js", "frame/skid-inc/app/js/core.js", "frame/skid-inc/app/js/helpers/beautify.js", "frame/skid-inc/app/js/helpers/cog.js", "frame/skid-inc/app/js/helpers/matrix.js", "frame/skid-inc/app/js/kongregate.js", "frame/skid-inc/app/js/options.js", "frame/skid-inc/app/js/player.js", "frame/skid-inc/app/js/prestige.js", "frame/skid-inc/app/js/save.js", "frame/skid-inc/app/js/script.js", "frame/skid-inc/app/js/server.js", "frame/skid-inc/app/js/tutorial.js", "frame/skid-inc/app/lib/jquery.caret.min.js", "frame/skid-inc/app/lib/typed.min.js", "frame/skid-inc/favicon.png", "frame/skid-inc/index.html", "frame/skid-inc/netlify.toml", "frame/skid-inc/package.json", "frame/skid-inc/README.md", "frame/Trimps/config.js", "frame/Trimps/css/bg2.png", "frame/Trimps/css/bg2_vert.png", "frame/Trimps/css/bootstrap.css", "frame/Trimps/css/dark.css", "frame/Trimps/css/gradient.css", "frame/Trimps/css/style.css", "frame/Trimps/css/styleBak.css", "frame/Trimps/decimal.min.js", "frame/Trimps/favicon.ico", "frame/Trimps/fonts/glyphicons-halflings-regular.eot", "frame/Trimps/fonts/glyphicons-halflings-regular.svg", "frame/Trimps/fonts/glyphicons-halflings-regular.ttf", "frame/Trimps/fonts/glyphicons-halflings-regular.woff", "frame/Trimps/fonts/glyphicons-halflings-regular.woff2", "frame/Trimps/fonts/icomoon/fonts/icomoon.eot", "frame/Trimps/fonts/icomoon/fonts/icomoon.svg", "frame/Trimps/fonts/icomoon/fonts/icomoon.ttf", "frame/Trimps/fonts/icomoon/fonts/icomoon.woff", "frame/Trimps/fonts/icomoon/style.css", "frame/Trimps/imgs/kred_single.png", "frame/Trimps/index.html", "frame/Trimps/indexKong.html", "frame/Trimps/Kongregate_Game_Shell.html", "frame/Trimps/license.txt", "frame/Trimps/lz-string.js", "frame/Trimps/main.js", "frame/Trimps/playerSpire.js", "frame/Trimps/Playfab/code.jquery.com/qunit/qunit-1.19.0.css", "frame/Trimps/Playfab/code.jquery.com/qunit/qunit-1.19.0.js", "frame/Trimps/Playfab/LICENSE", "frame/Trimps/Playfab/licenses/jquery-license.txt", "frame/Trimps/Playfab/licenses/qunit-license.txt", "frame/Trimps/Playfab/PlayFabSDK/PlayFabClientApi.js", "frame/Trimps/Playfab/README.md", "frame/Trimps/Playfab/_arcconfig", "frame/Trimps/Playfab/_gitignore", "frame/Trimps/README.md", "frame/Trimps/ScreenReader.html", "frame/Trimps/updates.html", "frame/Trimps/updates.js", "swf/4thandgoal2018.swf", "swf/AirHockey.swf", "swf/BTD4.swf", "swf/BTD5.swf", "swf/ClickerHeroes.swf", "swf/Doom.swf", "swf/GrindCraft.swf", "swf/HappyWheels.swf", "swf/KingdomRush.swf", "swf/KingdomRushFrontiers.swf", "swf/LearnToFly.swf", "swf/LearnToFly2.swf", "swf/LearnToFly3.swf", "swf/LearnToFlyIdle.swf", "swf/linerider.swf", "swf/MinecraftTD.swf", "swf/MotoX3M.swf", "swf/Portal.swf", "swf/QWOP.swf", "swf/run.swf", "swf/run2.swf", "swf/run3.swf", "swf/SHBasketball.swf", "swf/SHFootball.swf", "swf/SHIceHockey.swf", "swf/ShoppingCartHero3.swf", "swf/SHTennis.swf", "swf/SHVolleyball.swf", "swf/Silversphere.swf", "swf/SkwareWars.swf", "swf/Solipskier.swf", "swf/SuperMario63.swf", "swf/SuperMarioBrosCrossover.swf", "swf/SuperMarioFlash.swf", "swf/SuperMarioFlash2.swf", "swf/SuperSmashFlash.swf", "swf/SuperSmashFlash2.swf", "swf/TankTrouble.swf", "swf/Uno.swf", "swf/vvvvvv.swf", "scratch/10128407.html", "scratch/127047819.html"];
var mainHtmlPages = [
    //main html
    "index.html",
    "game.html",

    //Dev Tools
    "GameGram.html",
    "HexaGrams.html",
    "InfoGram.html",

    //css
    "css/materialize.min.css",

    //js
    "js/addGame.js",
    "js/gameGram.js",
    "js/games_index.js",
    "js/jquery-3.5.1.min.js",
    "js/materialize.min.js",
    "js/require.js",
    "js/search.js",

    //png
    "png/logo_1024.png",
    "png/logo_120.png",
    "png/logo_128.png",
    "png/logo_144.png",
    "png/logo_152.png",
    "png/logo_180.png",
    "png/logo_192.png",
    "png/logo_256.png",
    "png/logo_384.png",
    "png/logo_512.png",
    "png/logo_72.png",
    "png/logo_96.png",

    //svg
    "svg/logo.svg",
    "svg/logo_square.svg",

    //Web Manifest
    "manifest.webmanifest"
];

const cacheFiles = mainHtmlPages.concat(folderFiles);

//console.log(JSON.stringify(cacheFiles));

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', event => {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
        caches.open(staticCacheName)
        .then(cache => {
            return cache.addAll(mainHtmlPages);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});


self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    // Return true if you want to remove this cache,
                    // but remember that caches are shared across
                    // the whole origin
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

*/



/*
var networkDataReceived = false;

startSpinner();

// fetch fresh data
var networkUpdate = fetch('/data.json').then(function(response) {
    return response.json();
}).then(function(data) {
    networkDataReceived = true;
    updatePage(data);
});

// fetch cached data
caches.match('/data.json').then(function(response) {
    if (!response) throw Error("No data");
    return response.json();
}).then(function(data) {
    // don't overwrite newer network data
    if (!networkDataReceived) {
        updatePage(data);
    }
}).catch(function() {
    // we didn't get cached data, the network is our last hope:
    return networkUpdate;
}).catch(showErrorMessage).then(stopSpinner());
*/

'use strict';



self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    // CODELAB: Precache static resources here.

    self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');
    // CODELAB: Remove previous cached data from disk.

    self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    // CODELAB: Add fetch event handler here.

});