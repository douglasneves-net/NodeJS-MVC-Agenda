exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variavel local'
  next();
} 

//Middleware para tratar o erro de envio de formulario sem o tolen do CSRF.
exports.checkCsrfError = (error, req, res, next) => {
  if(error && error.code === "EBADCSRFTOKEN"){
    return res.send("404");
  }
}

//Cria um tolne para cada formulario.
exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrftoken = req.csrfToken();
  next();
}