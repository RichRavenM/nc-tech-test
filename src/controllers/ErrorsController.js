exports.errors = (error, request, response, next) => {
  if (error == "Error: 400") {
    response.status(400).send({ msg: "Invalid ID" });
  } else if (error == "Error: 404") {
    response.status(404).send({ msg: "Card does not exist" });
  }
};
