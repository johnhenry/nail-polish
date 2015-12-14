const fs = require('fs');
const path = require('path');
const cwd = process.cwd();
module.exports = (opts) => new Promise((resolve, reject) => {
    const options = opts || {};
    const options.config = options.config;
    const options.config = options.item;
    const items = typeof item === 'string' ? [item] : items;
    items.forEach(item => {
      fs.unlinkSync(path.resolve(cwd, config.dir, item))
    })
    resolve(true);
  });
