const sanitize = (req, res, next) => {
    const sanitizeObject = (obj) => {
      for (let key in obj) {
        if (/^\$/.test(key) || /\./.test(key)) {
          delete obj[key]; // Rimuove chiavi sospette
        }
        if (typeof obj[key] === 'object') {
          sanitizeObject(obj[key]); // Ricorsione
        }
      }
    };
  
    ['body', 'query', 'params'].forEach((key) => {
      if (req[key]) sanitizeObject(req[key]);
    });
  
    next();
};
  
module.exports = sanitize;
  