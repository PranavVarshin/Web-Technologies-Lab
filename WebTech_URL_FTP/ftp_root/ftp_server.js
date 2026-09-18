const FtpSrv = require("ftp-srv");
const fs = require("fs");
const path = require("path");

const ftpRoot = path.join(__dirname, "ftp_root");

// Create FTP root folder if it doesn't exist
if (!fs.existsSync(ftpRoot)) {
    fs.mkdirSync(ftpRoot);
}

const ftpServer = new FtpSrv({
    url: "ftp://127.0.0.1:2121",
    pasv_url: "127.0.0.1",
    pasv_min: 30000,
    pasv_max: 30009
});

// Login authentication
ftpServer.on("login", ({ connection, username, password }, resolve, reject) => {

    if (username === "student" && password === "12345") {

        console.log("User logged in:", username);

        resolve({
            root: ftpRoot
        });

    } else {

        reject(new Error("Invalid username or password"));

    }
});

// Start server
ftpServer.listen()
    .then(() => {
        console.log("=================================");
        console.log("FTP SERVER STARTED");
        console.log("Host: 127.0.0.1");
        console.log("Port: 2121");
        console.log("Username: student");
        console.log("Password: 12345");
        console.log("Root:", ftpRoot);
        console.log("=================================");
    })
    .catch(error => {
        console.error("Server Error:", error);
    });