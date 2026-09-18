const { Client } = require("basic-ftp");

async function ftpDemo() {

    const client = new Client();

    try {

        console.log("Connecting to FTP server...");

        await client.access({
            host: "127.0.0.1",
            port: 2121,
            user: "student",
            password: "12345",
            secure: false
        });

        console.log("Connected successfully!");

        // List files
        console.log("\n========== REMOTE FILES ==========");

        const files = await client.list();

        files.forEach(file => {
            console.log(file.name);
        });

        // Upload
        console.log("\n========== UPLOADING FILE ==========");

        await client.uploadFrom(
            "student.txt",
            "student.txt"
        );

        console.log("File uploaded successfully!");

        // List again
        console.log("\n========== FILES AFTER UPLOAD ==========");

        const updatedFiles = await client.list();

        updatedFiles.forEach(file => {
            console.log(file.name);
        });

        // Download
        console.log("\n========== DOWNLOADING FILE ==========");

        await client.downloadTo(
            "downloaded.txt",
            "student.txt"
        );

        console.log("File downloaded successfully!");

    } catch (error) {

        console.error("FTP Error:", error.message);

    } finally {

        client.close();

        console.log("\nFTP connection closed.");
    }
}

ftpDemo();