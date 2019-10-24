module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      name: 'Event Management System',
      themeColor: '#FFFFFF',
      
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
   
      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'dev/sw.js',
        // ...other Workbox options...
      }
    }
  }