const { Client } = require("basic-ftp");

async function directoryDemo() {

    const client = new Client();

    try {

        await client.access({
            host: "YOUR_FTP_HOST",
            user: "YOUR_USERNAME",
            password: "YOUR_PASSWORD",
            secure: false
        });

        console.log("Connected successfully!");

        console.log("Creating/accessing projects directory...");

        await client.ensureDir("projects");

        console.log("Directory ready!");

        console.log("Changing directory...");

        await client.cd("projects");

        console.log("Current directory changed successfully!");

    } catch (error) {

        console.error("Directory Error:", error.message);

    } finally {

        client.close();
    }
}

directoryDemo();