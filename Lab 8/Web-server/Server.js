const http = require("http");
const fs = require("fs");
const path = require("path");


// REQUEST LOGGER MIDDLEWARE

function logger(req, res, next) {

    console.log(
        `${req.method} ${req.url}`
    );

    next();
}


// HANDLE REQUEST

function handleRequest(req, res) {

    let filePath;



    // HOMEPAGE


    if (
        req.url === "/" ||
        req.url === "/index.html"
    ) {

        filePath = path.join(
            __dirname,
            "public",
            "index.html"
        );

    }



    // ABOUT PAGE


    else if (
        req.url === "/about.html"
    ) {

        filePath = path.join(
            __dirname,
            "public",
            "about.html"
        );

    }

    // CSS FILE

    else if (
        req.url === "/style.css"
    ) {

        filePath = path.join(
            __dirname,
            "public",
            "style.css"
        );

    }



    // INVALID ROUTE


    else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>The requested page does not exist.</p>
        `);

        return;
    }



    // READ FILE ASYNCHRONOUSLY


    fs.readFile(
        filePath,
        (error, content) => {

        
            // FILE NOT FOUND
        

            if (error) {

                console.error(
                    "File Error:",
                    error.message
                );

                res.writeHead(404, {
                    "Content-Type": "text/html"
                });

                res.end(`
                    <h1>404 - File Not Found</h1>
                    <p>The requested file could not be found.</p>
                `);

                return;
            }


        
            // DETERMINE FILE EXTENSION
        

            const extension =
                path.extname(filePath);


            let contentType;


        
            // SET CONTENT TYPE
        

            if (extension === ".html") {

                contentType = "text/html";

            }

            else if (extension === ".css") {

                contentType = "text/css";

            }

            else if (
                extension === ".jpg" ||
                extension === ".jpeg"
            ) {

                contentType = "image/jpeg";

            }

            else if (
                extension === ".png"
            ) {

                contentType = "image/png";

            }

            else {

                contentType =
                    "text/plain";

            }


        
            // SEND SUCCESS RESPONSE
        

            res.writeHead(200, {
                "Content-Type":
                    contentType
            });

            res.end(
                content,
                "binary"
            );

        }
    );
}


// CREATE HTTP SERVER

const server = http.createServer(
    (req, res) => {

        logger(
            req,
            res,
            () => {

                handleRequest(
                    req,
                    res
                );

            }
        );

    }
);


// SERVER ERROR HANDLING

server.on(
    "error",
    (error) => {

        console.error(
            "Server Error:",
            error.message
        );

    }
);

// PORT NUMBER

const PORT = 3000;

// START SERVER

server.listen(
    PORT,
    () => {

        console.log(
            `Server is running at http://localhost:${PORT}`
        );

    }
);