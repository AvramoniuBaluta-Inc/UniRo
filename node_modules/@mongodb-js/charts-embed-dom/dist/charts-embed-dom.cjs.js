'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./charts-embed-dom.cjs.prod.js");
} else {
  module.exports = require("./charts-embed-dom.cjs.dev.js");
}
