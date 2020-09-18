const express = require('express');

const app = express();

app.use(express.static('./dist/shopMercadoLibre')); // Serve static files

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/shopMercadoLibre/'}
  );
});

app.listen(process.env.PORT || 8080);
