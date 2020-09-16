const ejs = require('ejs');

module.exports = function ejsRender(filename, data = {}) {
  return new Promise((resolve, reject) => {
    ejs.renderFile(filename, data, (error, result) => {
      if (error) {
        reject(error);
      }

      resolve(result);
    });
  });
}