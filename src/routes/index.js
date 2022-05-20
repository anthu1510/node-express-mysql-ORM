module.exports = (app) => {
  app.use("/users", require("../routes/userRouter"));
};
