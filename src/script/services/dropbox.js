/*

  Dropbox, baby

*/


services.dropbox = new Service({

  name: "Dropbox",

  module: "poletto",

  tease() {
    // Show it off
    return ui.menu.items.dropboxConnect.show();
  },

  activate() {
    ui.menu.items.dropboxConnect.hide();
    if (!ui.account.services.has("dropbox")) {
      return ui.account.services.push("dropbox");
    }
  },

  disable() {
    return ui.menu.items.dropboxConnect.disable();
  },

  enable() {
    return ui.menu.items.dropboxConnect.enable();
  }
});
