import { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown({ title, items }) {

    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown">

            <button
                className="dropdown-button"
                onClick={() => setOpen(!open)}
            >
                {title} ▼
            </button>

            {open && (
                <div className="dropdown-menu">

                    {items.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}

                </div>
            )}

        </div>
    );
}

export default Dropdown;