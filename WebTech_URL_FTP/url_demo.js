const myUrl = new URL(
    "https://example.com:8080/products/laptop?id=101&category=electronics#reviews"
);

console.log("========== URL COMPONENTS ==========");

console.log("Protocol:", myUrl.protocol);
console.log("Hostname:", myUrl.hostname);
console.log("Port:", myUrl.port);
console.log("Pathname:", myUrl.pathname);
console.log("Search:", myUrl.search);
console.log("Hash:", myUrl.hash);

console.log("\n========== QUERY PARAMETERS ==========");

console.log("Product ID:", myUrl.searchParams.get("id"));

console.log(
    "Has Category:",
    myUrl.searchParams.has("category")
);

// Add a new parameter
myUrl.searchParams.set("brand", "Dell");

console.log("Brand:", myUrl.searchParams.get("brand"));

// Delete a parameter
myUrl.searchParams.delete("id");

console.log("\n========== UPDATED URL ==========");

console.log(myUrl.toString());

console.log("\n========== ALL PARAMETERS ==========");

myUrl.searchParams.forEach((value, key) => {
    console.log(key + ":", value);
});