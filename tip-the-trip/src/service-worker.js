'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'tip-the-trip-cache'
};

self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.cacheFirst);
self.toolbox.router.default = self.toolbox.networkFirst;
