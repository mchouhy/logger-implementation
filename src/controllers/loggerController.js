const loggerController = (request, response) => {
  request.logger.debug("Mensaje de Debug");
  request.logger.http("Mensaje de HTTP");
  request.logger.info("Mensaje de Info");
  request.logger.warn("Mensaje de Warning");
  request.logger.error("Mensaje de Error");
  request.logger.fatal("Mensaje de Error Fatal");
  response.send("Logs de error generados con éxito.");
};

export default loggerController;
