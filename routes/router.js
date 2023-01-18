const express = require("express");
const router = new express.Router();
const multer = require("multer");
const Image = require("../model/userfileModel");
const moment = require("moment")

// img storage path
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads")
    },
    filename: (req, file, callback) => {
        callback(null, `imgae-${Date.now()}. ${file.originalname}`)
    }
})


// img filter
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(new Error("only images is allowd"))
    }
}

const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
});



router.post("/upload", upload.single("photo"), async (req, res) => {

    const { filename } = req.file;

    const { fname } = req.body;

    if (!fname || !filename) {
        res.status(401).json({ status: 401, message: "fill all the data" })
    }

    try {

        const date = moment(new Date()).format("YYYY-MM-DD");

        const userdata = new Image({
            fname: fname,
            imgpath: filename,
            date: date
        });

        const finaldata = await userdata.save();

        res.status(201).json({ status: 201, finaldata });

    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
});



router.get("/getdata", async (req, res) => {
    try {
        const getfile = await Image.find();

        res.status(201).json({ status: 201, getfile })
    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
});



router.delete("/:id", async (req, res) => {

    try {
        const { id } = req.params;

        const dltImage = await Image.findByIdAndDelete({ _id: id });

        res.status(201).json({ status: 201, dltImage });

    } catch (error) {
        res.status(401).json({ status: 401, error })
    }

})


module.exports = router;
