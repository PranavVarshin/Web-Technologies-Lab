import { useState } from "react";
import "./App.css";

const products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 55000,
        quantity: 5,
        image: "/images/laptop-floating-angled-open.webp"
    },
    {
        id: 2,
        name: "Smartphone",
        category: "Electronics",
        price: 25000,
        quantity: 8,
        image: "/images/SmartPhone.webp"
    },
    {
        id: 3,
        name: "Headphones",
        category: "Electronics",
        price: 2000,
        quantity: 0,
        image: "/images/headphones.webp"
    },
    {
        id: 4,
        name: "T-Shirt",
        category: "Clothing",
        price: 799,
        quantity: 15,
        image: "/images/t-shirts.webp"
    },
    {
        id: 5,
        name: "Jeans",
        category: "Clothing",
        price: 1499,
        quantity: 6,
        image: "/images/jeans.webp"
    },
    {
        id: 6,
        name: "Jacket",
        category: "Clothing",
        price: 2499,
        quantity: 0,
        image: "/images/jacket.webp"
    },
    {
        id: 7,
        name: "Rice",
        category: "Grocery",
        price: 600,
        quantity: 20,
        image: "/images/Rice.webp"
    },
    {
        id: 8,
        name: "Milk",
        category: "Grocery",
        price: 60,
        quantity: 30,
        image: "/images/Milk.webp"
    },
    {
        id: 9,
        name: "Cooking Oil",
        category: "Grocery",
        price: 180,
        quantity: 0,
        image: "/images/Oil.webp"
    }
];

function App() {

    // =========================
    // STATE
    // =========================

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);

    // Theme state
    const [darkMode, setDarkMode] = useState(false);


    // =========================
    // FILTER PRODUCTS
    // =========================

    const filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            product.category === category;

        const matchesPrice =
            product.price >= minPrice &&
            product.price <= maxPrice;

        return (
            matchesSearch &&
            matchesCategory &&
            matchesPrice
        );
    });


    return (

        <div className={darkMode ? "app dark" : "app"}>

            {/* =========================
                HEADER
            ========================= */}

            <header>

                <h1>
                    🛒 Online Shopping Catalog
                </h1>

                <p>
                    Search and filter products
                </p>

                {/* THEME BUTTON */}

                <button
                    className="theme-button"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode
                        ? "☀️ Light Mode"
                        : "🌙 Dark Mode"}
                </button>

            </header>


            {/* =========================
                FILTER SECTION
            ========================= */}

            <div className="filters">

                {/* SEARCH */}

                <div className="filter-group">

                    <label>
                        Search Product
                    </label>

                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>


                {/* CATEGORY */}

                <div className="filter-group">

                    <label>
                        Category
                    </label>

                    <select
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                    >

                        <option value="All">
                            All Categories
                        </option>

                        <option value="Electronics">
                            Electronics
                        </option>

                        <option value="Clothing">
                            Clothing
                        </option>

                        <option value="Grocery">
                            Grocery
                        </option>

                    </select>

                </div>


                {/* MINIMUM PRICE */}

                <div className="filter-group">

                    <label>
                        Minimum Price
                    </label>

                    <input
                        type="number"
                        value={minPrice}
                        onChange={(e) =>
                            setMinPrice(
                                Number(e.target.value)
                            )
                        }
                    />

                </div>


                {/* MAXIMUM PRICE */}

                <div className="filter-group">

                    <label>
                        Maximum Price
                    </label>

                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) =>
                            setMaxPrice(
                                Number(e.target.value)
                            )
                        }
                    />

                </div>

            </div>


            {/* =========================
                PRODUCT COUNT
            ========================= */}

            <div className="product-count">

                <h2>
                    Products Found: {filteredProducts.length}
                </h2>

            </div>


            {/* =========================
                PRODUCT CARDS
            ========================= */}

            <div className="products-container">

                {filteredProducts.length === 0 ? (

                    <p className="no-products">
                        No products found.
                    </p>

                ) : (

                    filteredProducts.map(product => (

                        <div
                            className="product-card"
                            key={product.id}
                        >

                            {/* PRODUCT IMAGE */}

                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />


                            {/* PRODUCT NAME */}

                            <h2>
                                {product.name}
                            </h2>


                            {/* CATEGORY */}

                            <p>
                                <strong>
                                    Category:
                                </strong>{" "}
                                {product.category}
                            </p>


                            {/* PRICE */}

                            <p>
                                <strong>
                                    Price:
                                </strong>{" "}
                                ₹{product.price}
                            </p>


                            {/* QUANTITY */}

                            <p>
                                <strong>
                                    Quantity:
                                </strong>{" "}
                                {product.quantity}
                            </p>


                            {/* CONDITIONAL RENDERING */}

                            {product.quantity === 0 ? (

                                <p className="out-of-stock">
                                    ❌ Out of Stock
                                </p>

                            ) : (

                                <p className="in-stock">
                                    ✅ In Stock
                                </p>

                            )}

                        </div>

                    ))

                )}

            </div>

        </div>
    );
}

export default App;