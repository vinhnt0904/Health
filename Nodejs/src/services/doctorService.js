import db from "../models/index";

let getTopDoctorHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({
        limit: limitInput,
        order: [["createdAt", "DESC"]],
        attributes: {
          exclude: ["password", "image"],
        },
        raw: true,
      });

      resolve({
        errCode: 0,
        data: users,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getTopDoctorHome: getTopDoctorHome,
};
