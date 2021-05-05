module.exports = (req, res) => {
  const { name = "World" } = req.query;
  //res.status(200).send(`Hello ${name}!`)
  res.redirect("/2021/04/21/%E5%97%90-%E6%B5%8B%E8%AF%95%E4%B8%8B/");
};
