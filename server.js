#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
  chromeLocation: '/app/.apt/usr/bin/google-chrome'
});

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
server.use(prerender.whitelist());

server.start();
