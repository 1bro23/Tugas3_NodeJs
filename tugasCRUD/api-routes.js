let router = require("express").Router();

router.get("/",function(req,res){
  res.send("test lagi")
})

let kontrol = require("./siswaController");
router.route("/siswa")
  .get(kontrol.index)
  .post(kontrol.new);
router.route("/siswa/:contact_id")
  .get(kontrol.view)
  .patch(kontrol.update)
  .put(kontrol.update);

module.exports = router;
