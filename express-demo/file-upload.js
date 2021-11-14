var express = require("express")
var app = express()
var fs = require("fs")

var bodyParser = require("body-parser")
var multer = require("multer")

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(multer({dest: "./tmp/"}).single("file"))

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index-file-upload.html`)
})

app.post("/file_upload", (req, res) => {
    console.log(req.file)
    console.log(req.file.originalname)
    console.log(req.file.path)
    console.log(req.file.mimetype)
    var file = `${__dirname}/public/uploaded/${req.file.originalname}`

    fs.readFile(req.file.path, (err, data) => {
        fs.writeFile(file, data, (err) => {
            if (err) {
                console.log(err)
            } else {
                var response = {
                    message: "File uploaded successfully",
                    filename: req.file.originalname
                }
            }

            console.log(response)
            res.end(JSON.stringify(response))
        })
    })
})

var server = app.listen(8081, "localhost", () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`Example app listening at http://${host}:${port}`)
})