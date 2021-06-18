let Contact = require("./siswaModel");

exports.index = function(req,res){
  Contact.get(function(err,contact){
    if(err)
    res.send(err);
    res.json({
      status:"success",
      message:"data siswa berhasil diambil dong!!!",
      data:contact
    })
  })
}

exports.new = function(req,res){
  var contact = Contact();
  contact.nama = req.body.nama;
  contact.tanggallahir = req.body.nama;
  contact.jeniskelamin = req.body.jeniskelamin;
  contact.hobi = req.body.hobi;
  contact.save(function(err){
    res.json({
      message:"siswa berhasil ditambahkan loh!!!",
      data:contact
    })
  })
}

exports.view = function(req,res){
  Contact.findById(req.params.contact_id,function(err,contact){
    if(err)
    res.send(err);
    res.json({
      message:"Contact detailed loading...",
      data:contact
    })
  })
}

exports.update = function(req,res){
  Contact.findById(req.params.contact_id,function(err,contact){
    if(err)
    res.send(err);

    contact.nama = req.body.nama;
    contact.tanggallahir = req.body.tanggallahir;
    contact.jeniskelamin = req.body.jeniskelamin;
    contact.hobi = req.body.hobi;

    contact.save(function(err){
      if(err)
      res.send(err);
      res.json({
        message:"siswa berhasil terupdate, hoorayy!!",
        data:contact
      })
    })
  })
}
