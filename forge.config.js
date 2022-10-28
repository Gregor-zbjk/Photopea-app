module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ["darwin", "linux", "windows"],
    },
    
    {
      name: '@electron-forge/maker-dmg',
      config: {
      // background: './assets/dmg-background.png',
      format: 'ULFO'
      },
    },
    

{
  name: '@electron-forge/maker-wix',
  config: {
    language: 1033,
    manufacturer: 'My Awesome Company'
  }
},

    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
