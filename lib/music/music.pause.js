const shared = require("../shared");

module.exports = function pause() {
  return shared.player.playback.pause();
}
