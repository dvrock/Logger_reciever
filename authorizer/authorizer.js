const { CredentialsModel } = require("../models")
const { createCustomError } = require("../utils/error")
const { Op } = require("sequelize");
const authorizer = async (event, response, callback) => {
  try {
    const authToken = event.headers.Authorization || event.headers.authorization;
    if (!authToken) {
      throw Error("UnAuthorize");
    }
    const token = authToken.split(" ");
    if (token[0].trim() === "Basic") {
      console.log("token", token);
      const password = token[1].trim();
      console.log("password", password);
      const decodedToken = Buffer.from(password, "base64").toString();
      console.log("data", decodedToken);
      const usernamePassword = decodedToken.split(":");
      console.log(usernamePassword)
      // if (usernamePassword.length !== 2) throw Error("UnAuthorize");
      const user_data = await CredentialsModel.findOne({
        where: {
          [Op.and]:
            [
              { user_name: usernamePassword[0] }, { password: usernamePassword[1] }
            ]
        }
      })
      console.log("userdata", user_data)
      if (user_data) {
        console.log(event.body,
          usernamePassword[0])
        event.user_name = usernamePassword[0]
        callback();
      } else {
        throw new createCustomError("user not exist", 404);
      }
    }
  } catch (error) {
    console.log(error)
    callback('{ status: 401, message: "Unauthorized" }');
  }
};

module.exports = {
  authorizer
}