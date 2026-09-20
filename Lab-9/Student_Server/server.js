const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = 3000;

const server = http.createServer((req, res) => {

    // Parse the requested URL
    const parsedUrl = new URL(
    req.url,
    `http://${req.headers.host}`
);

const pathname = parsedUrl.pathname;
const query = parsedUrl.searchParams;
    // Home page
    if (pathname === "/") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>Student Information Web Server</h1>

            <h2>Available Operations</h2>

            <ul>
                <li><a href="/students">View All Students</a></li>
                <li><a href="/student?id=101">View Student 101</a></li>
            </ul>
        `);
    }

    // Display all students
    else if (pathname === "/students") {

        fs.readFile("students.json", "utf8", (err, data) => {

            if (err) {

                res.writeHead(500, {
                    "Content-Type": "text/plain"
                });

                res.end("Error reading student data");
                return;
            }

            const students = JSON.parse(data);

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            let html = `
                <h1>Student Information</h1>
                <table border="1" cellpadding="10">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Year</th>
                        <th>CGPA</th>
                    </tr>
            `;

            students.forEach(student => {

                html += `
                    <tr>
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.department}</td>
                        <td>${student.year}</td>
                        <td>${student.cgpa}</td>
                    </tr>
                `;
            });

            html += "</table>";

            res.end(html);
        });
    }

    // Display a particular student
    else if (pathname === "/student") {

        const studentId = query.id;

        fs.readFile("students.json", "utf8", (err, data) => {

            if (err) {

                res.writeHead(500, {
                    "Content-Type": "text/plain"
                });

                res.end("Error reading student data");
                return;
            }

            const students = JSON.parse(data);

            const student = students.find(
                s => s.id == studentId
            );

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            if (student) {

                res.end(`
                    <h1>Student Details</h1>

                    <p><strong>ID:</strong> ${student.id}</p>
                    <p><strong>Name:</strong> ${student.name}</p>
                    <p><strong>Department:</strong> ${student.department}</p>
                    <p><strong>Year:</strong> ${student.year}</p>
                    <p><strong>CGPA:</strong> ${student.cgpa}</p>
                `);

            } else {

                res.end(`
                    <h1>Student Not Found</h1>
                    <p>No student exists with ID ${studentId}</p>
                `);
            }
        });
    }

    // Invalid URL
    else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>404 - Page Not Found</h1>
        `);
    }

});

server.listen(PORT, () => {

    console.log(
        `Student Information Server running at http://localhost:${PORT}`
    );

});