/*module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      
      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'src/registerServiceWorker.js',
        // ...other Workbox options...
      }
    }
}*/

/*import manifestJSON from "./public/manifest.json";
pwa = {
  themeColor: manifestJSON.theme_color,
  name: manifestJSON.short_name,
  msTileColor: manifestJSON.background_color
};*/


/*module.export = {
  productionSourceMap: false,
  pwa: {
      name: ,
      themeColor: '#3F51B5',
      appleMobileWebAppStatusBarStyle: '#000000',
  }
}*/

/*export const pwa = {
  name: 'My App',
  themeColor: '#ffffff',
  msTileColor: '#ffffff',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'black',
  // configure the workbox plugin
  workboxPluginMode: 'InjectManifest',
  workboxOptions: {
    // swSrc is required in InjectManifest mode.
    swSrc: 'src/registerServiceWorker.js',
  }
};*/

const manifestJSON = require('./public/manifest.json')
module.exports = {
  pwa: {
    themeColor: manifestJSON.theme_color,
    name: manifestJSON.short_name,
    msTileColor: manifestJSON.background_color,
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'service-worker.js',
    },
  },
}