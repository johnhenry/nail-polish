const fs = require('fs');
const path = require('path');
const cwd = process.cwd();
module.exports = ({
  config,
  item
}) => new Promise((resolve, reject) => {
    const items = typeof item === 'string' ? [item] : items;
    items.forEach(item => {
      fs.unlinkSync(path.resolve(cwd, config.dir, item))
    })
    resolve(true);
  });
