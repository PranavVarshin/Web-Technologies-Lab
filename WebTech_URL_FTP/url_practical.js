const searchUrl = new URL(
    "https://example.com/search?q=laptop&category=electronics&page=2"
);

console.log("========== SEARCH URL ==========");

console.log("Search Query:", searchUrl.searchParams.get("q"));
console.log("Category:", searchUrl.searchParams.get("category"));
console.log("Page:", searchUrl.searchParams.get("page"));

console.log("\n========== MODIFYING SEARCH ==========");

searchUrl.searchParams.set("q", "gaming laptop");
searchUrl.searchParams.set("page", "3");

console.log("Updated URL:");
console.log(searchUrl.toString());