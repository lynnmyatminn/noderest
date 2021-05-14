module.exports = app => {
    const pricesperbox = require("../controllers/pricesperbox.controller.js");
  
    const router = require("express").Router();

    router.post("/", pricesperbox.create);

    router.get("/", pricesperbox.findAll);

    router.get("/published", pricesperbox.findAllPublished);

    router.get("/:id", pricesperbox.findOne);

    router.put("/:id", pricesperbox.update);

    router.delete("/:id", pricesperbox.delete);
    
    router.delete("/", pricesperbox.deleteAll);
  
    app.use('/api/pricesperbox', router);
  };