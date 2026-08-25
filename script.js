// =====================================================
// SHOPNEST - MAIN JAVASCRIPT
// CLEAN & CORRECTED VERSION
// =====================================================


// =====================================================
// PRODUCT DATABASE
// =====================================================

const productData = {

    // ================= ELECTRONICS =================

    "Smartphone Pro": {
        image: "images/smartphone.jpg",
        price: 24999,
        mrp: 29999,
        discount: "17% OFF",
        category: "Electronics",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Premium smartphone with a modern design",
            "Large high-quality display",
            "Powerful performance for everyday use",
            "High-quality camera system",
            "Long-lasting battery"
        ]
    },

    "Ultra Laptop": {
        image: "images/laptop.jpg",
        price: 54999,
        mrp: 69999,
        discount: "21% OFF",
        category: "Electronics",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Powerful laptop for work and entertainment",
            "High-performance processor",
            "Large high-resolution display",
            "Fast and reliable storage",
            "Suitable for students and professionals"
        ]
    },

    "Wireless Headphones": {
        image: "images/headphones.jpg",
        price: 1999,
        mrp: 2499,
        discount: "20% OFF",
        category: "Electronics",
        rating: "⭐⭐⭐⭐",
        description: [
            "Wireless headphones with clear sound",
            "Comfortable over-ear design",
            "Long battery life",
            "Easy Bluetooth connectivity",
            "Suitable for music and calls"
        ]
    },

    "Smart Watch": {
        image: "images/smartwatch.jpg",
        price: 2499,
        mrp: 2999,
        discount: "17% OFF",
        category: "Electronics",
        rating: "⭐⭐⭐⭐",
        description: [
            "Modern smart watch design",
            "Fitness and activity tracking",
            "Smart notifications",
            "Comfortable strap",
            "Long-lasting battery"
        ]
    },

    "4K Monitor": {
        image: "images/monitor.jpg",
        price: 12999,
        mrp: 15999,
        discount: "19% OFF",
        category: "Electronics",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Sharp 4K display",
            "Excellent color quality",
            "Large viewing area",
            "Suitable for work and entertainment",
            "Modern slim design"
        ]
    },

    "Bluetooth Speaker": {
        image: "images/speaker.jpg",
        price: 1499,
        mrp: 1999,
        discount: "25% OFF",
        category: "Electronics",
        rating: "⭐⭐⭐⭐",
        description: [
            "Portable wireless Bluetooth speaker",
            "Clear and powerful sound",
            "Compact portable design",
            "Long playback time",
            "Easy Bluetooth connectivity"
        ]
    },

    "Wireless Keyboard": {
        image: "images/keyboard.jpg",
        price: 1299,
        mrp: 1799,
        discount: "28% OFF",
        category: "Electronics",
        rating: "⭐⭐⭐⭐",
        description: [
            "Slim wireless keyboard",
            "Comfortable typing experience",
            "Reliable wireless connection",
            "Compact design",
            "Suitable for home and office"
        ]
    },

    "Wireless Mouse": {
        image: "images/mouse.jpg",
        price: 699,
        mrp: 999,
        discount: "30% OFF",
        category: "Electronics",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Smooth wireless mouse",
            "Ergonomic design",
            "Accurate tracking",
            "Long battery life",
            "Suitable for laptops and desktops"
        ]
    },


    // ================= FASHION =================

    "Running Shoes": {
        image: "images/shoes.jpg",
        price: 1399,
        mrp: 1999,
        discount: "30% OFF",
        category: "Fashion",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Comfortable running shoes",
            "Lightweight design",
            "Durable sole",
            "Suitable for running and walking",
            "Modern sporty appearance"
        ]
    },

    "Travel Backpack": {
        image: "images/backpack.jpg",
        price: 899,
        mrp: 1199,
        discount: "25% OFF",
        category: "Fashion",
        rating: "⭐⭐⭐⭐",
        description: [
            "Spacious travel backpack",
            "Multiple storage compartments",
            "Comfortable shoulder straps",
            "Durable material",
            "Perfect for travel and college"
        ]
    },

    "Premium Handbag": {
        image: "images/handbag.jpg",
        price: 1299,
        mrp: 1699,
        discount: "24% OFF",
        category: "Fashion",
        rating: "⭐⭐⭐⭐",
        description: [
            "Elegant premium handbag",
            "Stylish modern design",
            "Spacious interior",
            "Durable material",
            "Suitable for everyday use"
        ]
    },

    "Classic T-Shirt": {
        image: "images/tshirt.jpg",
        price: 599,
        mrp: 899,
        discount: "33% OFF",
        category: "Fashion",
        rating: "⭐⭐⭐⭐",
        description: [
            "Comfortable everyday T-shirt",
            "Soft fabric",
            "Modern fit",
            "Easy to maintain",
            "Suitable for casual wear"
        ]
    },

    "Denim Jacket": {
        image: "images/jacket.jpg",
        price: 1799,
        mrp: 2499,
        discount: "28% OFF",
        category: "Fashion",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Stylish denim jacket",
            "Durable denim fabric",
            "Modern casual design",
            "Comfortable fit",
            "Perfect for everyday fashion"
        ]
    },

    "Sports Cap": {
        image: "images/cap.jpg",
        price: 399,
        mrp: 599,
        discount: "33% OFF",
        category: "Fashion",
        rating: "⭐⭐⭐⭐",
        description: [
            "Comfortable sports cap",
            "Lightweight material",
            "Adjustable fit",
            "Stylish design",
            "Suitable for outdoor activities"
        ]
    },


    // ================= HOME =================

    "Modern Table Lamp": {
        image: "images/lamp.jpg",
        price: 799,
        mrp: 1199,
        discount: "33% OFF",
        category: "Home",
        rating: "⭐⭐⭐⭐",
        description: [
            "Modern decorative table lamp",
            "Elegant design",
            "Warm and comfortable lighting",
            "Suitable for bedroom and study",
            "Energy-efficient design"
        ]
    },

    "Coffee Maker": {
        image: "images/coffeemaker.jpg",
        price: 2499,
        mrp: 3299,
        discount: "24% OFF",
        category: "Home",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Easy-to-use coffee maker",
            "Quick coffee preparation",
            "Compact kitchen design",
            "Easy to clean",
            "Perfect for home and office"
        ]
    },

    "Non Stick Cookware Set": {
        image: "images/cookware.jpg",
        price: 2299,
        mrp: 2999,
        discount: "23% OFF",
        category: "Home",
        rating: "⭐⭐⭐⭐",
        description: [
            "Premium non-stick cookware set",
            "Durable construction",
            "Easy cooking and cleaning",
            "Suitable for everyday use",
            "Modern kitchen design"
        ]
    },

    "Decorative Wall Clock": {
        image: "images/clock.jpg",
        price: 699,
        mrp: 999,
        discount: "30% OFF",
        category: "Home",
        rating: "⭐⭐⭐⭐",
        description: [
            "Elegant decorative wall clock",
            "Modern appearance",
            "Easy wall mounting",
            "Clear time display",
            "Suitable for home and office"
        ]
    },

    "Comfort Cushion Set": {
        image: "images/cushion.jpg",
        price: 899,
        mrp: 1299,
        discount: "31% OFF",
        category: "Home",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Soft decorative cushion set",
            "Comfortable filling",
            "Stylish covers",
            "Suitable for sofa and bedroom",
            "Easy to maintain"
        ]
    },


    // ================= BEAUTY =================

    "Face Care Kit": {
        image: "images/facekit.jpg",
        price: 899,
        mrp: 1299,
        discount: "31% OFF",
        category: "Beauty",
        rating: "⭐⭐⭐⭐",
        description: [
            "Complete everyday face care kit",
            "Gentle skincare products",
            "Suitable for daily routine",
            "Easy-to-use products",
            "Convenient travel-friendly packaging"
        ]
    },

    "Hair Care Set": {
        image: "images/haircare.jpg",
        price: 799,
        mrp: 1099,
        discount: "27% OFF",
        category: "Beauty",
        rating: "⭐⭐⭐⭐",
        description: [
            "Complete hair care set",
            "Suitable for everyday use",
            "Helps maintain healthy-looking hair",
            "Easy application",
            "Convenient packaging"
        ]
    },

    "Makeup Organizer": {
        image: "images/makeup-organizer.jpg",
        price: 699,
        mrp: 999,
        discount: "30% OFF",
        category: "Beauty",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Spacious makeup organizer",
            "Multiple compartments",
            "Clear organized storage",
            "Compact design",
            "Perfect for dressing tables"
        ]
    },

    "Perfume Collection": {
        image: "images/perfume.jpg",
        price: 1499,
        mrp: 1999,
        discount: "25% OFF",
        category: "Beauty",
        rating: "⭐⭐⭐⭐",
        description: [
            "Elegant fragrance collection",
            "Long-lasting fragrance",
            "Stylish bottles",
            "Suitable for special occasions",
            "Premium presentation"
        ]
    },


    // ================= GAMING =================

    "Gaming Mouse": {
        image: "images/gaming-mouse.jpg",
        price: 1299,
        mrp: 1799,
        discount: "28% OFF",
        category: "Gaming",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Responsive gaming mouse",
            "Ergonomic gaming design",
            "Accurate tracking",
            "Comfortable buttons",
            "Suitable for PC gaming"
        ]
    },

    "Gaming Keyboard": {
        image: "images/gaming-keyboard.jpg",
        price: 2499,
        mrp: 3299,
        discount: "24% OFF",
        category: "Gaming",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Gaming keyboard with responsive keys",
            "Comfortable gaming layout",
            "Durable construction",
            "Modern gaming design",
            "Suitable for PC gaming"
        ]
    },

    "Gaming Headset": {
        image: "images/gaming-headset.jpg",
        price: 1999,
        mrp: 2699,
        discount: "26% OFF",
        category: "Gaming",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Immersive gaming headset",
            "Clear audio",
            "Comfortable ear cushions",
            "Built-in microphone",
            "Suitable for gaming and calls"
        ]
    },

    "Game Controller": {
        image: "images/controller.jpg",
        price: 1799,
        mrp: 2499,
        discount: "28% OFF",
        category: "Gaming",
        rating: "⭐⭐⭐⭐",
        description: [
            "Comfortable wireless game controller",
            "Responsive controls",
            "Ergonomic design",
            "Suitable for compatible devices",
            "Easy connectivity"
        ]
    },


    // ================= BOOKS =================

    "The Art of Programming": {
        image: "images/programming-book.jpg",
        price: 599,
        mrp: 799,
        discount: "25% OFF",
        category: "Books",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Programming fundamentals book",
            "Useful concepts for beginners",
            "Practical programming examples",
            "Easy-to-understand explanations",
            "Suitable for students"
        ]
    },

    "Web Development Guide": {
        image: "images/web-book.jpg",
        price: 699,
        mrp: 899,
        discount: "22% OFF",
        category: "Books",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Complete beginner web development guide",
            "HTML and CSS fundamentals",
            "JavaScript concepts",
            "Practical website examples",
            "Useful for students and beginners"
        ]
    },

    "Database Management": {
        image: "images/dbms-book.jpg",
        price: 549,
        mrp: 749,
        discount: "27% OFF",
        category: "Books",
        rating: "⭐⭐⭐⭐",
        description: [
            "Database management fundamentals",
            "SQL concepts and examples",
            "Database design basics",
            "Useful for students",
            "Easy-to-understand explanations"
        ]
    },

    "Computer Engineering Handbook": {
        image: "images/computer-book.jpg",
        price: 799,
        mrp: 999,
        discount: "20% OFF",
        category: "Books",
        rating: "⭐⭐⭐⭐⭐",
        description: [
            "Comprehensive computer engineering reference",
            "Important technical concepts",
            "Useful study material",
            "Helpful examples",
            "Suitable for diploma students"
        ]
    },
    // =====================================================
// ADDITIONAL 32 PRODUCTS
// =====================================================


// ================= ELECTRONICS =================

"Smartphone Lite": {
    image: "images/smartphone-lite.jpg",
    price: 14999,
    mrp: 18999,
    discount: "21% OFF",
    category: "Electronics",
    rating: "⭐⭐⭐⭐",
    description: [
        "Affordable smartphone for everyday use",
        "Bright high-quality display",
        "Reliable everyday performance",
        "Clear camera system",
        "Long-lasting battery"
    ]
},

"Tablet Pro": {
    image: "images/tablet.jpg",
    price: 18999,
    mrp: 22999,
    discount: "17% OFF",
    category: "Electronics",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Large display tablet",
        "Smooth performance",
        "Long battery life",
        "Lightweight and portable design",
        "Perfect for study and entertainment"
    ]
},

"Smart TV 43 Inch": {
    image: "images/smart-tv.jpg",
    price: 28999,
    mrp: 34999,
    discount: "17% OFF",
    category: "Electronics",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "43-inch smart television",
        "High-quality display",
        "Smart streaming features",
        "Built-in speakers",
        "Modern slim design"
    ]
},

"Power Bank 20000mAh": {
    image: "images/powerbank.jpg",
    price: 1499,
    mrp: 1999,
    discount: "25% OFF",
    category: "Electronics",
    rating: "⭐⭐⭐⭐",
    description: [
        "High-capacity 20000mAh power bank",
        "Fast charging support",
        "Multiple charging ports",
        "Compact portable design",
        "Suitable for smartphones and tablets"
    ]
},

"USB-C Fast Charger": {
    image: "images/charger.jpg",
    price: 899,
    mrp: 1299,
    discount: "31% OFF",
    category: "Electronics",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Fast USB-C charging adapter",
        "Compact design",
        "Reliable charging performance",
        "Suitable for compatible devices",
        "Easy to carry"
    ]
},

"Wireless Earbuds": {
    image: "images/earbuds.jpg",
    price: 1799,
    mrp: 2499,
    discount: "28% OFF",
    category: "Electronics",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Compact wireless earbuds",
        "Clear audio quality",
        "Comfortable fit",
        "Long battery life",
        "Easy Bluetooth connectivity"
    ]
},


// ================= FASHION =================

"Casual Sneakers": {
    image: "images/sneakers.jpg",
    price: 1599,
    mrp: 2299,
    discount: "30% OFF",
    category: "Fashion",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Stylish casual sneakers",
        "Comfortable everyday footwear",
        "Lightweight construction",
        "Durable sole",
        "Modern design"
    ]
},

"Formal Shoes": {
    image: "images/formal-shoes.jpg",
    price: 1899,
    mrp: 2499,
    discount: "24% OFF",
    category: "Fashion",
    rating: "⭐⭐⭐⭐",
    description: [
        "Elegant formal shoes",
        "Comfortable interior",
        "Durable construction",
        "Suitable for office and events",
        "Classic professional design"
    ]
},

"Classic Jeans": {
    image: "images/jeans.jpg",
    price: 1299,
    mrp: 1799,
    discount: "28% OFF",
    category: "Fashion",
    rating: "⭐⭐⭐⭐",
    description: [
        "Comfortable classic jeans",
        "Durable denim fabric",
        "Modern fit",
        "Easy to maintain",
        "Suitable for casual wear"
    ]
},

"Casual Shirt": {
    image: "images/shirt.jpg",
    price: 799,
    mrp: 1199,
    discount: "33% OFF",
    category: "Fashion",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Comfortable casual shirt",
        "Soft and breathable fabric",
        "Modern design",
        "Easy to maintain",
        "Suitable for everyday wear"
    ]
},

"Women's Kurti": {
    image: "images/kurti.jpg",
    price: 999,
    mrp: 1499,
    discount: "33% OFF",
    category: "Fashion",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Elegant everyday kurti",
        "Comfortable fabric",
        "Stylish printed design",
        "Suitable for casual occasions",
        "Easy to maintain"
    ]
},

"Fashion Sunglasses": {
    image: "images/sunglasses.jpg",
    price: 699,
    mrp: 999,
    discount: "30% OFF",
    category: "Fashion",
    rating: "⭐⭐⭐⭐",
    description: [
        "Stylish fashion sunglasses",
        "Modern frame design",
        "Comfortable fit",
        "Lightweight construction",
        "Suitable for everyday outdoor use"
    ]
},


// ================= HOME =================

"Electric Kettle": {
    image: "images/kettle.jpg",
    price: 1299,
    mrp: 1699,
    discount: "24% OFF",
    category: "Home",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Fast electric kettle",
        "Quick water boiling",
        "Easy-to-use design",
        "Compact kitchen appliance",
        "Easy to clean"
    ]
},

"Air Fryer": {
    image: "images/airfryer.jpg",
    price: 3999,
    mrp: 4999,
    discount: "20% OFF",
    category: "Home",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Modern air fryer",
        "Easy temperature control",
        "Convenient cooking",
        "Easy-to-clean basket",
        "Suitable for everyday cooking"
    ]
},

"Storage Box Set": {
    image: "images/storage-box.jpg",
    price: 899,
    mrp: 1299,
    discount: "31% OFF",
    category: "Home",
    rating: "⭐⭐⭐⭐",
    description: [
        "Multi-purpose storage box set",
        "Strong and durable material",
        "Stackable design",
        "Useful for organized storage",
        "Suitable for home and office"
    ]
},

"LED Ceiling Light": {
    image: "images/ceiling-light.jpg",
    price: 999,
    mrp: 1499,
    discount: "33% OFF",
    category: "Home",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Modern LED ceiling light",
        "Bright energy-efficient lighting",
        "Slim contemporary design",
        "Easy installation",
        "Suitable for bedrooms and living rooms"
    ]
},

"Bed Sheet Set": {
    image: "images/bedsheet.jpg",
    price: 1099,
    mrp: 1599,
    discount: "31% OFF",
    category: "Home",
    rating: "⭐⭐⭐⭐",
    description: [
        "Comfortable bed sheet set",
        "Soft fabric",
        "Attractive modern design",
        "Easy to wash",
        "Suitable for everyday use"
    ]
},

"Kitchen Storage Set": {
    image: "images/kitchen-storage.jpg",
    price: 799,
    mrp: 1199,
    discount: "33% OFF",
    category: "Home",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Practical kitchen storage containers",
        "Durable material",
        "Space-saving design",
        "Easy to clean",
        "Useful for organized kitchens"
    ]
},


// ================= BEAUTY =================

"Face Wash": {
    image: "images/facewash.jpg",
    price: 299,
    mrp: 399,
    discount: "25% OFF",
    category: "Beauty",
    rating: "⭐⭐⭐⭐",
    description: [
        "Gentle everyday face wash",
        "Easy-to-use formula",
        "Suitable for daily skincare routine",
        "Refreshing feel",
        "Convenient packaging"
    ]
},

"Moisturizer": {
    image: "images/moisturizer.jpg",
    price: 449,
    mrp: 599,
    discount: "25% OFF",
    category: "Beauty",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Lightweight daily moisturizer",
        "Easy application",
        "Suitable for everyday skincare",
        "Comfortable lightweight feel",
        "Travel-friendly packaging"
    ]
},

"Sunscreen Lotion": {
    image: "images/sunscreen.jpg",
    price: 499,
    mrp: 699,
    discount: "29% OFF",
    category: "Beauty",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Daily sunscreen lotion",
        "Lightweight application",
        "Suitable for outdoor use",
        "Easy to apply",
        "Convenient packaging"
    ]
},

"Lip Care Set": {
    image: "images/lipcare.jpg",
    price: 299,
    mrp: 449,
    discount: "33% OFF",
    category: "Beauty",
    rating: "⭐⭐⭐⭐",
    description: [
        "Everyday lip care set",
        "Moisturizing care",
        "Easy application",
        "Compact packaging",
        "Suitable for daily use"
    ]
},

"Body Lotion": {
    image: "images/body-lotion.jpg",
    price: 399,
    mrp: 549,
    discount: "27% OFF",
    category: "Beauty",
    rating: "⭐⭐⭐⭐",
    description: [
        "Daily body lotion",
        "Smooth application",
        "Comfortable lightweight feel",
        "Suitable for everyday use",
        "Convenient bottle design"
    ]
},


// ================= GAMING =================

"Gaming Monitor": {
    image: "images/gaming-monitor.jpg",
    price: 15999,
    mrp: 19999,
    discount: "20% OFF",
    category: "Gaming",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "High-quality gaming monitor",
        "Smooth visual performance",
        "Large display",
        "Modern gaming design",
        "Suitable for PC gaming"
    ]
},

"Gaming Chair": {
    image: "images/gaming-chair.jpg",
    price: 8999,
    mrp: 11999,
    discount: "25% OFF",
    category: "Gaming",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Comfortable gaming chair",
        "Supportive back design",
        "Adjustable seating",
        "Durable construction",
        "Suitable for gaming setups"
    ]
},

"RGB Gaming Mouse Pad": {
    image: "images/gaming-mousepad.jpg",
    price: 899,
    mrp: 1299,
    discount: "31% OFF",
    category: "Gaming",
    rating: "⭐⭐⭐⭐",
    description: [
        "Large gaming mouse pad",
        "Smooth tracking surface",
        "RGB lighting design",
        "Durable construction",
        "Suitable for gaming desks"
    ]
},

"Gaming Desk": {
    image: "images/gaming-desk.jpg",
    price: 6999,
    mrp: 8999,
    discount: "22% OFF",
    category: "Gaming",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Modern gaming desk",
        "Spacious desktop surface",
        "Strong construction",
        "Cable management space",
        "Suitable for gaming setups"
    ]
},

"Gaming Microphone": {
    image: "images/gaming-microphone.jpg",
    price: 2499,
    mrp: 3299,
    discount: "24% OFF",
    category: "Gaming",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Clear gaming microphone",
        "High-quality audio recording",
        "Easy USB connectivity",
        "Adjustable stand",
        "Suitable for gaming and streaming"
    ]
},


// ================= BOOKS =================

"Python Programming Guide": {
    image: "images/python-book.jpg",
    price: 649,
    mrp: 899,
    discount: "28% OFF",
    category: "Books",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Beginner-friendly Python programming book",
        "Covers fundamental concepts",
        "Practical programming examples",
        "Easy-to-understand explanations",
        "Suitable for students"
    ]
},

"Java Programming Basics": {
    image: "images/java-book.jpg",
    price: 699,
    mrp: 949,
    discount: "26% OFF",
    category: "Books",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Java programming fundamentals",
        "Object-oriented programming concepts",
        "Practical coding examples",
        "Beginner-friendly explanations",
        "Useful for computer science students"
    ]
},

"Data Structures Handbook": {
    image: "images/dsu-book.jpg",
    price: 599,
    mrp: 799,
    discount: "25% OFF",
    category: "Books",
    rating: "⭐⭐⭐⭐⭐",
    description: [
        "Data structures fundamentals",
        "Arrays and linked lists",
        "Stacks and queues",
        "Searching and sorting concepts",
        "Useful for students and beginners"
    ]
},

"Computer Networks Guide": {
    image: "images/network-book.jpg",
    price: 749,
    mrp: 999,
    discount: "25% OFF",
    category: "Books",
    rating: "⭐⭐⭐⭐",
    description: [
        "Computer networking fundamentals",
        "Networking concepts and protocols",
        "Useful diagrams and examples",
        "Easy-to-understand explanations",
        "Suitable for students"
    ]
}

};




// =====================================================
// CART
// =====================================================

let cart = [];

try {
    cart = JSON.parse(
        localStorage.getItem("shopnestCart")
    ) || [];
} catch (error) {
    cart = [];
}


// =====================================================
// FORMAT PRICE
// =====================================================

function formatPrice(price) {
    return "₹" + Number(price).toLocaleString("en-IN");
}


// =====================================================
// SAVE CART
// =====================================================

function saveCart() {
    localStorage.setItem(
        "shopnestCart",
        JSON.stringify(cart)
    );
}


// =====================================================
// UPDATE CART COUNT
// =====================================================

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");

    if (!cartCount) return;

    let totalItems = 0;

    cart.forEach(product => {
        totalItems += Number(product.quantity) || 0;
    });

    cartCount.textContent = totalItems;
}


// =====================================================
// GET PRODUCT
// =====================================================

function getProduct(productName) {
    return productData[productName];
}


// =====================================================
// DISPLAY PRODUCTS
// =====================================================

function displayProducts() {

    const productList =
        document.getElementById("productList");

    if (!productList) return;

    productList.innerHTML = "";

    Object.keys(productData).forEach(productName => {

        const product =
            productData[productName];

        const card =
            document.createElement("article");

        card.className = "product-card";

        card.dataset.name = productName;
        card.dataset.category = product.category;
        card.dataset.price = product.price;

        card.innerHTML = `
            <div class="discount">
                ${product.discount}
            </div>

            <div class="product-image">
                <img
                    src="${product.image}"
                    alt="${productName}"
                    loading="lazy"
                    onerror="this.style.display='none'; this.parentElement.innerHTML='🛍️';"
                >
            </div>

            <h3>${productName}</h3>

            <div class="rating">
                ${product.rating}
            </div>

            <p class="price">
                ${formatPrice(product.price)}
            </p>

            <p class="old-price">
                ${formatPrice(product.mrp)}
            </p>

            <button
                type="button"
                class="add-cart-button"
            >
                🛒 Add to Cart
            </button>

            <button
                type="button"
                class="view-details-button"
            >
                View Details
            </button>
        `;

        const cartButton =
            card.querySelector(".add-cart-button");

        cartButton.addEventListener("click", () => {

            addToCart(
                productName,
                product.price
            );

        });

        const detailsButton =
            card.querySelector(".view-details-button");

        detailsButton.addEventListener("click", () => {

            viewProduct(productName);

        });

        productList.appendChild(card);

    });

    filterProducts();
    
}


// =====================================================
// ADD TO CART
// =====================================================

function addToCart(productName, price, image) {

    if (typeof productData !== "undefined" && productData[productName]) {
        const product = productData[productName];

        price = Number(product.price) || Number(price) || 0;

        // Always get the product image from productData
        image = image || product.image || "";
    }

    if (typeof cart === "undefined") {
        console.error("Cart variable not found.");
        return;
    }

    const existingItem = cart.find(function (item) {
        return item.name === productName;
    });

    if (existingItem) {

        existingItem.quantity =
            (Number(existingItem.quantity) || 1) + 1;

        // Fix old cart items that don't have an image
        if (!existingItem.image && image) {
            existingItem.image = image;
        }

    } else {

        cart.push({
            name: productName,
            price: Number(price) || 0,
            quantity: 1,
            image: image || ""
        });
    }

    // Save cart
    if (typeof saveCart === "function") {
        saveCart();
    } else {
        localStorage.setItem(
            "shopnestCart",
            JSON.stringify(cart)
        );
    }

    // Update cart count
    if (typeof updateCartCount === "function") {
        updateCartCount();
    }

    // Notification
    if (typeof showCartNotification === "function") {
        showCartNotification(
            productName + " added to cart"
        );
    } else {
        alert(productName + " added to cart.");
    }
}

// =====================================================
// CART NOTIFICATION
// =====================================================

function showCartNotification(productName) {

    const oldNotification =
        document.querySelector(".cart-notification");

    if (oldNotification) {
        oldNotification.remove();
    }

    const notification =
        document.createElement("div");

    notification.className =
        "cart-notification";

    notification.innerHTML = `
        <span class="notification-icon">✓</span>

        <div>
            <strong>Added to Cart</strong>
            <p>${productName}</p>
        </div>

        <button
            type="button"
            aria-label="Close notification"
        >
            ×
        </button>
    `;

    const closeButton =
        notification.querySelector("button");

    closeButton.addEventListener("click", () => {
        notification.remove();
    });

    document.body.appendChild(notification);

    setTimeout(() => {

        if (document.body.contains(notification)) {
            notification.remove();
        }

    }, 3000);
}


// =====================================================
// OPEN CART
// =====================================================

function openCart() {

    const savedUser = localStorage.getItem("shopnestUser");

    if (!savedUser) {

        window.location.href = "login.html";

        return;
    }

    window.location.href = "cart.html";
}

// =====================================================
// SEARCH PRODUCT
// =====================================================

function searchProduct() {

    const searchInput = document.getElementById("searchInput");
    const categorySelect = document.getElementById("searchCategory");

    if (!searchInput) return;

    const searchText = searchInput.value.trim();
    const category = categorySelect ? categorySelect.value : "All";

    const params = new URLSearchParams();

    if (searchText !== "") {
        params.set("search", searchText);
    }

    if (category !== "All") {
        params.set("category", category);
    }

    const query = params.toString();

    window.location.href =
        "products.html" + (query ? "?" + query : "");
}

// =====================================================
// SEARCH SETUP
// =====================================================

function setupSearch() {

    const searchInput =
        document.getElementById("searchInput");

    if (!searchInput) return;

    searchInput.addEventListener("keydown", event => {

        if (event.key === "Enter") {

            event.preventDefault();

            searchProduct();

        }

    });
}


// =====================================================
// VIEW PRODUCT
// =====================================================

function viewProduct(productName) {

    if (!productData[productName]) {

        alert("Product not found.");

        return;
    }

    window.location.href =
        "product.html?product=" +
        encodeURIComponent(productName);
}


// =====================================================
// FILTER PRODUCTS
// =====================================================

function filterProducts() {

    const productCards =
        document.querySelectorAll(
            ".product-card[data-name]"
        );

    if (!productCards.length) return;


    // =================================================
    // CATEGORY CHECKBOX FILTERS
    // =================================================

    const categoryFilters =
        document.querySelectorAll(
            ".category-filter:checked"
        );


    // =================================================
    // PRICE FILTERS
    // =================================================

    const priceFilters =
        document.querySelectorAll(
            ".price-filter:checked"
        );


    // =================================================
    // URL PARAMETERS
    // =================================================

    const urlParams =
        new URLSearchParams(
            window.location.search
        );


    const searchText =
        (
            urlParams.get("search") || ""
        ).trim().toLowerCase();


    const urlCategory =
        (
            urlParams.get("category") || ""
        ).trim().toLowerCase();


    // =================================================
    // SELECTED CATEGORY CHECKBOXES
    // =================================================

    let selectedCategories =
        Array.from(categoryFilters)
            .map(checkbox =>
                checkbox.value.trim().toLowerCase()
            );


    // =================================================
    // SELECTED PRICE FILTERS
    // =================================================

    const selectedPrices =
        Array.from(priceFilters)
            .map(checkbox =>
                checkbox.value
            );


    // =================================================
    // URL CATEGORY
    // =================================================

    if (
        selectedCategories.length === 0 &&
        urlCategory !== "" &&
        urlCategory !== "deals"
    ) {

        selectedCategories = [
            urlCategory
        ];


        // Automatically check matching checkbox

        categoryFilters.forEach(
            checkbox => {

                if (
                    checkbox.value
                        .trim()
                        .toLowerCase() ===
                    urlCategory
                ) {

                    checkbox.checked = true;

                }

            }
        );

    }


    // =================================================
    // COUNT VISIBLE PRODUCTS
    // =================================================

    let visibleCount = 0;


    // =================================================
    // FILTER EACH PRODUCT
    // =================================================

    productCards.forEach(
        card => {

            const name =
                (
                    card.dataset.name || ""
                )
                .trim()
                .toLowerCase();


            const category =
                (
                    card.dataset.category || ""
                )
                .trim()
                .toLowerCase();


            const price =
                Number(
                    card.dataset.price
                ) || 0;


            let matchesSearch = true;
            let matchesCategory = true;
            let matchesPrice = true;


            // =================================================
            // SEARCH TEXT
            // =================================================

            if (searchText !== "") {

                matchesSearch =
                    name.includes(searchText);

            }


            // =================================================
            // CATEGORY
            // =================================================

            if (
                selectedCategories.length > 0
            ) {

                matchesCategory =
                    selectedCategories.includes(
                        category
                    );

            }


            // =================================================
            // PRICE
            // =================================================

            if (
                selectedPrices.length > 0
            ) {

                matchesPrice =
                    selectedPrices.some(
                        range => {

                            if (
                                range ===
                                "under1000"
                            ) {

                                return price < 1000;

                            }


                            if (
                                range ===
                                "1000-5000"
                            ) {

                                return (
                                    price >= 1000 &&
                                    price <= 5000
                                );

                            }


                            if (
                                range ===
                                "5000-20000"
                            ) {

                                return (
                                    price > 5000 &&
                                    price <= 20000
                                );

                            }


                            if (
                                range ===
                                "above20000"
                            ) {

                                return price > 20000;

                            }


                            return false;

                        }
                    );

            }


            // =================================================
            // FINAL RESULT
            // =================================================

            const visible =
                matchesSearch &&
                matchesCategory &&
                matchesPrice;


            card.style.display =
                visible
                    ? ""
                    : "none";


            if (visible) {

                visibleCount++;

            }

        }
    );


    // =================================================
    // UPDATE SEARCH HEADING
    // =================================================

    updateSearchHeading(
        searchText,
        visibleCount
    );


    // =================================================
    // NO RESULTS MESSAGE
    // =================================================

    showNoResults(
        visibleCount,
        searchText
    );

}

// =====================================================
// FILTER CHECKBOX SETUP
// =====================================================

function setupFilters() {

    const filters =
        document.querySelectorAll(
            ".category-filter, .price-filter"
        );

    filters.forEach(filter => {

        filter.addEventListener(
            "change",
            filterProducts
        );

    });
}


// =====================================================
// UPDATE SEARCH HEADING
// =====================================================

function updateSearchHeading(
    searchText,
    count
) {

    const heading =
        document.querySelector(".section h1");

    const description =
        document.querySelector(".section p");

    if (!heading) return;

    if (searchText) {

        heading.textContent =
            `Search Results for "${searchText}"`;

        if (description) {

            description.textContent =
                count > 0
                    ? `${count} product(s) found for your search.`
                    : "Sorry, no products were found.";

        }

    } else {

        heading.textContent = "All Products";

        if (description) {

            description.textContent =
                "Explore our wide range of products and discover great deals across different categories.";

        }

    }
}


// =====================================================
// NO RESULTS
// =====================================================

function showNoResults(
    count,
    searchText
) {

    const productList =
        document.getElementById("productList");

    if (!productList) return;

    let noResults =
        document.getElementById("noResults");

    if (count === 0) {

        if (!noResults) {

            noResults =
                document.createElement("div");

            noResults.id = "noResults";

            noResults.className =
                "no-results";

            productList.appendChild(noResults);
        }

        noResults.innerHTML = `
            <div class="no-results-icon">
                🔍
            </div>

            <h2>
                No products found
            </h2>

            <p>
                ${
                    searchText
                        ? `We couldn't find anything matching "${searchText}".`
                        : "Try changing your filters."
                }
            </p>

            <a href="products.html">
                View All Products
            </a>
        `;

        noResults.style.display = "block";

    } else if (noResults) {

        noResults.style.display = "none";

    }
}


// =====================================================
// PRODUCT DETAILS
// =====================================================

function loadProductDetails() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const productName =
        params.get("product");

    if (!productName) return;

    const product =
        productData[productName];

    if (!product) {

        alert("Product information not found.");

        return;
    }


    const name =
        document.getElementById("productName");

    if (name) {
        name.textContent = productName;
    }


    const title =
        document.getElementById("productTitle");

    if (title) {
        title.textContent = productName;
    }


    const breadcrumb =
        document.getElementById("breadcrumbProduct");

    if (breadcrumb) {
        breadcrumb.textContent = productName;
    }


    const mainImage =
        document.getElementById("productImage") ||
        document.getElementById("mainProductImage");

    if (mainImage) {

        mainImage.src = product.image;
        mainImage.alt = productName;

    }


    const thumbnail =
        document.getElementById("thumbnailImage");

    if (thumbnail) {

        thumbnail.src = product.image;
        thumbnail.alt = productName;

    }


    const price =
        document.getElementById("productPrice");

    if (price) {

        price.textContent =
            formatPrice(product.price);

    }


    const buyPrice =
        document.getElementById("buyBoxPrice");

    if (buyPrice) {

        buyPrice.textContent =
            formatPrice(product.price);

    }


    const mrp =
        document.getElementById("productMRP");

    if (mrp) {

        mrp.textContent =
            formatPrice(product.mrp);

    }


    const discount =
        document.getElementById("productDiscount");

    if (discount) {

        discount.textContent =
            product.discount;

    }


    const rating =
        document.getElementById("productRating");

    if (rating) {

        rating.textContent =
            product.rating;

    }


    const category =
        document.getElementById("detailCategory");

    if (category) {

        category.textContent =
            product.category;

    }


    const detailProduct =
        document.getElementById("detailProduct");

    if (detailProduct) {

        detailProduct.textContent =
            productName;

    }


    const features =
        document.getElementById("productFeatures");

    if (features) {

        features.innerHTML = "";

        product.description.forEach(feature => {

            const li =
                document.createElement("li");

            li.textContent = feature;

            features.appendChild(li);

        });

    }

    checkCurrentProductWishlist();
}


// =====================================================
// CHANGE PRODUCT IMAGE
// =====================================================

function changeProductImage(imagePath) {

    const mainImage =
        document.getElementById("mainProductImage") ||
        document.getElementById("productImage");

    if (mainImage) {

        mainImage.src = imagePath;

    }
}


// =====================================================
// ADD PRODUCT FROM DETAILS PAGE
// =====================================================

function addProductToCart() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const productName =
        params.get("product");

    if (!productName) {

        alert("Product information not found.");

        return;
    }

    const product =
        productData[productName];

    if (!product) {

        alert("Product information not found.");

        return;
    }

    const quantityElement =
        document.getElementById("quantity");

    let quantity =
        quantityElement
            ? parseInt(quantityElement.value)
            : 1;

    if (
        isNaN(quantity) ||
        quantity < 1
    ) {
        quantity = 1;
    }

    const existingProduct =
        cart.find(item => item.name === productName);

    if (existingProduct) {

        existingProduct.quantity += quantity;

    } else {

        cart.push({
            name: productName,
            price: product.price,
            quantity: quantity
        });

    }

    saveCart();
    updateCartCount();

    showCartNotification(
        `${quantity} × ${productName}`
    );
}


// =====================================================
// BUY NOW
// =====================================================

function buyNow() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const productName =
        params.get("product");

    if (!productName) {

        alert("Product information not found.");

        return;
    }

    const product =
        productData[productName];

    if (!product) {

        alert("Product information not found.");

        return;
    }

    const quantityElement =
        document.getElementById("quantity");

    let quantity =
        quantityElement
            ? parseInt(quantityElement.value)
            : 1;

    if (
        isNaN(quantity) ||
        quantity < 1
    ) {
        quantity = 1;
    }

    const existingProduct =
        cart.find(item => item.name === productName);

    if (existingProduct) {

        existingProduct.quantity += quantity;

    } else {

        cart.push({
            name: productName,
            price: product.price,
            quantity: quantity
        });

    }

    saveCart();
    updateCartCount();

    window.location.href =
        "checkout.html";
}


// =====================================================
// DISPLAY CART
// =====================================================

function displayCart() {

    const cartItems =
        document.getElementById("cartItems");

    if (!cartItems) return;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h2>
                    Your ShopNest cart is empty
                </h2>

                <p>
                    Start shopping and add some products.
                </p>

                <a href="products.html">
                    Continue Shopping
                </a>

            </div>
        `;

        updateSummary();

        return;
    }

    cartItems.innerHTML = "";

    cart.forEach((product, index) => {

        const item =
            document.createElement("div");

        item.className = "cart-item";

        const productInfo =
            productData[product.name];

        item.innerHTML = `
            <div class="cart-item-image">

                ${
                    productInfo
                        ? `<img src="${productInfo.image}" alt="${product.name}">`
                        : "🛍️"
                }

            </div>

            <div class="cart-item-info">

                <h3>
                    ${product.name}
                </h3>

                <div class="cart-item-price">
                    ${formatPrice(product.price)}
                </div>

                <div class="quantity-control">

                    <button
                        type="button"
                        onclick="changeQuantity(${index}, -1)"
                    >
                        −
                    </button>

                    <span>
                        ${product.quantity}
                    </span>

                    <button
                        type="button"
                        onclick="changeQuantity(${index}, 1)"
                    >
                        +
                    </button>

                </div>

                <button
                    type="button"
                    class="remove-button"
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            </div>

            <strong class="cart-item-total">

                ${formatPrice(
                    product.price *
                    product.quantity
                )}

            </strong>
        `;

        cartItems.appendChild(item);

    });

    updateSummary();
}


// =====================================================
// CHANGE QUANTITY
// =====================================================

function changeQuantity(index, change) {

    if (!cart[index]) return;

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    saveCart();
    updateCartCount();
    displayCart();
}


// =====================================================
// REMOVE FROM CART
// =====================================================

function removeFromCart(index) {

    if (!cart[index]) return;

    cart.splice(index, 1);

    saveCart();
    updateCartCount();
    displayCart();
}


// =====================================================
// CART TOTAL
// =====================================================

function calculateCartTotal() {

    let totalItems = 0;
    let subtotal = 0;

    cart.forEach(product => {

        totalItems +=
            Number(product.quantity) || 0;

        subtotal +=
            Number(product.price) *
            Number(product.quantity);

    });

    return {
        totalItems,
        subtotal
    };
}


// =====================================================
// UPDATE CART SUMMARY
// =====================================================

function updateSummary() {

    const summary =
        calculateCartTotal();

    const summaryItems =
        document.getElementById("summaryItems");

    const cartSubtotal =
        document.getElementById("cartSubtotal");

    const cartTotal =
        document.getElementById("cartTotal");

    if (summaryItems) {

        summaryItems.textContent =
            summary.totalItems;

    }

    if (cartSubtotal) {

        cartSubtotal.textContent =
            formatPrice(summary.subtotal);

    }

    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(summary.subtotal);

    }
}


// =====================================================
// CHECKOUT
// =====================================================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    window.location.href =
        "checkout.html";
}


// =====================================================
// DISPLAY CHECKOUT
// =====================================================

function displayCheckout() {

    const checkoutItems =
        document.getElementById("checkoutItems");

    if (!checkoutItems) return;

    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <div class="empty-cart">

                <h2>
                    Your cart is empty
                </h2>

                <p>
                    Please add products before checkout.
                </p>

                <a href="products.html">
                    Continue Shopping
                </a>

            </div>
        `;

        updateCheckoutSummary();

        return;
    }

    checkoutItems.innerHTML = "";

    cart.forEach(product => {

        const item =
            document.createElement("div");

        item.className = "checkout-item";

        const productInfo =
            productData[product.name];

        const image =
            productInfo
                ? productInfo.image
                : "";

        item.innerHTML = `
            <div class="checkout-item-image">

                ${
                    image
                        ? `<img src="${image}" alt="${product.name}">`
                        : "🛍️"
                }

            </div>

            <div class="checkout-item-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    Quantity: ${product.quantity}
                </p>

            </div>

            <div class="checkout-item-price">

                ${formatPrice(
                    product.price *
                    product.quantity
                )}

            </div>
        `;

        checkoutItems.appendChild(item);

    });

    updateCheckoutSummary();
}


// =====================================================
// CHECKOUT SUMMARY
// =====================================================

function updateCheckoutSummary() {

    const summary =
        calculateCartTotal();

    const itemCount =
        document.getElementById(
            "checkoutItemCount"
        );

    const subtotal =
        document.getElementById(
            "checkoutSubtotal"
        );

    const total =
        document.getElementById(
            "checkoutTotal"
        );

    if (itemCount) {

        itemCount.textContent =
            summary.totalItems;

    }

    if (subtotal) {

        subtotal.textContent =
            formatPrice(summary.subtotal);

    }

    if (total) {

        total.textContent =
            formatPrice(summary.subtotal);

    }
}


// =====================================================
// PLACE ORDER - DYNAMIC ORDER SYSTEM
// =====================================================

function placeOrder() {

    // Check cart
    if (cart.length === 0) {

        alert("Your cart is empty.");
        return;

    }


    // Get delivery details
    const name =
        document.getElementById("fullName")?.value.trim();

    const phone =
        document.getElementById("phone")?.value.trim();

    const address =
        document.getElementById("address")?.value.trim();

    const city =
        document.getElementById("city")?.value.trim();

    const state =
        document.getElementById("state")?.value.trim();

    const pincode =
        document.getElementById("pincode")?.value.trim();


    // Validate delivery details
    if (
        !name ||
        !phone ||
        !address ||
        !city ||
        !state ||
        !pincode
    ) {

        alert(
            "Please fill in all delivery details."
        );

        return;

    }


    // Validate phone
    if (!/^[0-9]{10}$/.test(phone)) {

        alert(
            "Please enter a valid 10-digit phone number."
        );

        return;

    }


    // Validate PIN
    if (!/^[0-9]{6}$/.test(pincode)) {

        alert(
            "Please enter a valid 6-digit PIN code."
        );

        return;

    }


    // Get payment method
    const paymentElement =
        document.querySelector(
            'input[name="payment"]:checked'
        );


    if (!paymentElement) {

        alert(
            "Please select a payment method."
        );

        return;

    }


    // Calculate total
    const summary =
        calculateCartTotal();


    // Generate unique order ID
    const orderNumber =
        "SN" +
        Date.now()
            .toString()
            .slice(-8);


    // Current date
    const orderDate =
        new Date().toLocaleDateString(
            "en-IN",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );


    // Create order products
    const orderProducts =
        cart.map(product => {

            const productInfo =
                productData[product.name];

            return {

                name: product.name,

                price: Number(product.price),

                quantity: Number(product.quantity),

              image:
    product.image ||
    (productInfo ? productInfo.image : ""),

                category:
                    productInfo
                        ? productInfo.category
                        : ""

            };

        });


    // Create complete order
    const newOrder = {

        orderId: orderNumber,

        date: orderDate,

        status: "processing",

        totalItems: summary.totalItems,

        subtotal: summary.subtotal,

        total: summary.subtotal,

        paymentMethod:
            paymentElement.value,

        customer: {

            name: name,

            phone: phone,

            address: address,

            city: city,

            state: state,

            pincode: pincode

        },

        products: orderProducts

    };


    // Get previous orders
    let orders = [];

    try {

        orders =
            JSON.parse(
                localStorage.getItem(
                    "shopnestOrders"
                )
            ) || [];

    } catch (error) {

        orders = [];

    }


    // Make sure orders is an array
    if (!Array.isArray(orders)) {

        orders = [];

    }


    // Add new order at the beginning
    orders.unshift(newOrder);


    // Save orders
    localStorage.setItem(
        "shopnestOrders",
        JSON.stringify(orders)
    );


    // Clear cart
    cart = [];

    saveCart();

    updateCartCount();


    // Success message
    alert(
        "Order placed successfully! 🎉\n\n" +

        "Order ID: " +
        orderNumber +

        "\n\n" +

        "Thank you for shopping with ShopNest."
    );


    // Go to orders page
    window.location.href =
        "orders.html";

}


// =====================================================
// SHOP NOW
// =====================================================

function shopNow() {

    const deals =
        document.querySelector(".deals-section");

    if (deals) {

        deals.scrollIntoView({
            behavior: "smooth"
        });

    } else {

        window.location.href =
            "products.html";

    }
}


// =====================================================
// BACK TO TOP
// =====================================================

function setupBackToTop() {

    const footerTop =
        document.querySelector(".footer-top");

    if (!footerTop) return;

    footerTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}


// =====================================================
// AUTHENTICATION
// =====================================================

function togglePassword(inputId, button) {

    const passwordInput =
        document.getElementById(inputId);

    if (!passwordInput) return;

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        button.textContent = "Hide";

    } else {

        passwordInput.type = "password";

        button.textContent = "Show";

    }
}


// =====================================================
// AUTH MESSAGE
// =====================================================

function showAuthMessage(
    element,
    text,
    type
) {

    if (!element) return;

    element.textContent = text;

    element.className =
        "auth-message " + type;
}


// =====================================================
// REGISTER USER
// =====================================================

async function registerUser() {

    // =====================================================
    // GET FORM VALUES
    // =====================================================

    const full_name =
        document.getElementById("registerName").value.trim();

    const email =
        document.getElementById("registerEmail").value.trim();

    const mobile =
        document.getElementById("registerPhone").value.trim();

    const password =
        document.getElementById("registerPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const termsCheck =
        document.getElementById("termsCheck").checked;

    const message =
        document.getElementById("registerMessage");


    // =====================================================
    // CLEAR PREVIOUS MESSAGE
    // =====================================================

    message.textContent = "";
    message.className = "auth-message";


    // =====================================================
    // VALIDATION
    // =====================================================

    if (!full_name) {

        message.textContent = "Please enter your full name.";
        message.classList.add("error");

        return;
    }


    if (!email) {

        message.textContent = "Please enter your email address.";
        message.classList.add("error");

        return;
    }


    if (!mobile) {

        message.textContent = "Please enter your mobile number.";
        message.classList.add("error");

        return;
    }


    if (!/^[0-9]{10}$/.test(mobile)) {

        message.textContent =
            "Please enter a valid 10-digit mobile number.";

        message.classList.add("error");

        return;
    }


    if (!password) {

        message.textContent = "Please enter a password.";
        message.classList.add("error");

        return;
    }


    if (password.length < 6) {

        message.textContent =
            "Password must be at least 6 characters.";

        message.classList.add("error");

        return;
    }


    if (password !== confirmPassword) {

        message.textContent =
            "Passwords do not match.";

        message.classList.add("error");

        return;
    }


    if (!termsCheck) {

        message.textContent =
            "Please agree to the Terms & Conditions and Privacy Policy.";

        message.classList.add("error");

        return;
    }


    // =====================================================
    // SEND DATA TO NODE.JS BACKEND
    // =====================================================

    try {

        message.textContent = "Creating your ShopNest account...";
        message.classList.add("info");


        const response = await fetch(
            "http://localhost:3000/api/auth/register",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    full_name: full_name,

                    email: email,

                    mobile: mobile,

                    password: password

                })
            }
        );


        const data = await response.json();


        // =================================================
        // SUCCESS
        // =================================================

        if (data.success) {

            message.textContent =
                "Account created successfully! Redirecting to login...";

            message.className = "auth-message success";


            setTimeout(() => {

                window.location.href = "login.html";

            }, 1500);


        }

        // =================================================
        // ERROR
        // =================================================

        else {

            message.textContent =
                data.message || "Unable to create account.";

            message.className = "auth-message error";

        }


    } catch (error) {

        console.error("Registration error:", error);

        message.textContent =
            "Unable to connect to ShopNest server. Please make sure the backend is running.";

        message.className = "auth-message error";

    }

}
// =====================================================
// LOGIN USER
// =====================================================
async function loginUser() {

    // =====================================================
    // GET LOGIN VALUES
    // =====================================================

    const login =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;

    const rememberMe =
        document.getElementById("rememberMe").checked;

    const message =
        document.getElementById("loginMessage");


    // =====================================================
    // CLEAR MESSAGE
    // =====================================================

    message.textContent = "";
    message.className = "auth-message";


    // =====================================================
    // VALIDATION
    // =====================================================

    if (!login) {

        message.textContent =
            "Please enter your email or mobile number.";

        message.classList.add("error");

        return;
    }


    if (!password) {

        message.textContent =
            "Please enter your password.";

        message.classList.add("error");

        return;
    }


    // =====================================================
    // SEND LOGIN REQUEST
    // =====================================================

    try {

        message.textContent = "Signing you in...";
        message.classList.add("info");


        const response = await fetch(
            "http://localhost:3000/api/auth/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    login: login,

                    password: password

                })
            }
        );


        const data = await response.json();


        // =================================================
        // LOGIN SUCCESS
        // =================================================

        if (data.success) {

            // Save logged-in user

            const user = data.user;


            if (rememberMe) {

                localStorage.setItem(
                    "shopnestUser",
                    JSON.stringify(user)
                );

            } else {

                sessionStorage.setItem(
                    "shopnestUser",
                    JSON.stringify(user)
                );

            }


            message.textContent =
                "Login successful! Redirecting...";

            message.className =
                "auth-message success";


            setTimeout(() => {

                window.location.href = "index.html";

            }, 1000);

        }


        // =================================================
        // LOGIN FAILED
        // =================================================

        else {

            message.textContent =
                data.message || "Invalid login details.";

            message.className =
                "auth-message error";

        }


    } catch (error) {

        console.error("Login error:", error);

        message.textContent =
            "Unable to connect to ShopNest server. Please make sure the backend is running.";

        message.className =
            "auth-message error";

    }

}
// =====================================================
// FORGOT PASSWORD
// =====================================================

function forgotPassword() {

    const message =
        document.getElementById(
            "loginMessage"
        );

    if (!message) return;

    const loginValue =
        document.getElementById(
            "loginEmail"
        )?.value.trim();

    if (!loginValue) {

        showAuthMessage(
            message,
            "Enter your email or mobile number first.",
            "error"
        );

        return;
    }

    const savedUser =
        localStorage.getItem("shopnestUser");

    if (!savedUser) {

        showAuthMessage(
            message,
            "No ShopNest account was found.",
            "error"
        );

        return;
    }

    const user =
        JSON.parse(savedUser);

    if (
        loginValue !== user.email &&
        loginValue !== user.phone
    ) {

        showAuthMessage(
            message,
            "No account matches this email or mobile number.",
            "error"
        );

        return;
    }

    showAuthMessage(
        message,
        "Password recovery will be available after the ShopNest backend is connected.",
        "success"
    );
}


// =====================================================
// WISHLIST
// =====================================================

function getWishlist() {

    try {

        const wishlist =
            JSON.parse(
                localStorage.getItem(
                    "shopnestWishlist"
                )
            );

        return Array.isArray(wishlist)
            ? wishlist
            : [];

    } catch (error) {

        return [];

    }
}


function saveWishlist(wishlist) {

    localStorage.setItem(
        "shopnestWishlist",
        JSON.stringify(wishlist)
    );
}


function toggleCurrentProductWishlist() {

    const productNameElement =
        document.getElementById(
            "productName"
        );

    if (!productNameElement) {

        alert(
            "Product information not found."
        );

        return;
    }

    const name =
        productNameElement.textContent.trim();

    const product =
        productData[name];

    if (!product) {

        alert(
            "Product information not found."
        );

        return;
    }

    let wishlist =
        getWishlist();

    const existingIndex =
        wishlist.findIndex(
            item => item.name === name
        );

    if (existingIndex !== -1) {

        wishlist.splice(
            existingIndex,
            1
        );

        saveWishlist(wishlist);

        updateWishlistButton(false);

        alert(
            "Removed from Wishlist."
        );

        return;
    }

    wishlist.push({

        name: name,

        price: product.price,

        image: product.image,

        category: product.category

    });

    saveWishlist(wishlist);

    updateWishlistButton(true);

    alert(
        "❤️ Product added to Wishlist!"
    );
}


function updateWishlistButton(isActive) {

    const button =
        document.getElementById(
            "wishlistButton"
        );

    if (!button) return;

    if (isActive) {

        button.textContent =
            "❤️ Added to Wishlist";

        button.classList.add("active");

    } else {

        button.textContent =
            "♡ Add to Wishlist";

        button.classList.remove("active");

    }
}


function checkCurrentProductWishlist() {

    const productNameElement =
        document.getElementById(
            "productName"
        );

    if (!productNameElement) return;

    const productName =
        productNameElement.textContent.trim();

    if (!productName) return;

    const wishlist =
        getWishlist();

    const exists =
        wishlist.some(
            item => item.name === productName
        );

    updateWishlistButton(exists);
}


// =====================================================
// SORT PRODUCTS
// =====================================================

function setupSorting() {

    const sortSelect =
        document.getElementById("sortSelect");

    if (!sortSelect) return;

    sortSelect.addEventListener("change", function () {

        const productList =
            document.getElementById("productList");

        if (!productList) return;

        const cards =
            Array.from(
                productList.querySelectorAll(
                    ".product-card[data-name]"
                )
            );

        const sortValue =
            this.value;

        cards.sort((a, b) => {

            if (sortValue === "price-low") {
                return (
                    Number(a.dataset.price) -
                    Number(b.dataset.price)
                );
            }

            if (sortValue === "price-high") {
                return (
                    Number(b.dataset.price) -
                    Number(a.dataset.price)
                );
            }

            if (sortValue === "rating") {

                const ratingA =
                    (
                        a.querySelector(".rating")
                            ?.textContent
                            .match(/⭐/g) || []
                    ).length;

                const ratingB =
                    (
                        b.querySelector(".rating")
                            ?.textContent
                            .match(/⭐/g) || []
                    ).length;

                return ratingB - ratingA;
            }

            if (sortValue === "discount") {

                const discountA =
                    parseInt(
                        a.querySelector(".discount")
                            ?.textContent
                    ) || 0;

                const discountB =
                    parseInt(
                        b.querySelector(".discount")
                            ?.textContent
                    ) || 0;

                return discountB - discountA;
            }

            return 0;
        });

        cards.forEach(card => {
            productList.appendChild(card);
        });

    });
}


// =====================================================
// INITIALIZE SHOPNEST
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCartCount();

        setupSearch();

        setupFilters();

        setupBackToTop();

        displayProducts();

        setupSorting();

        loadProductDetails();

        displayCart();

        displayCheckout();

    }
);
/* =========================================================
   SHOPNEST - BEST SELLERS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const bestSellerList =
        document.getElementById("bestSellerList");

    if (!bestSellerList) {
        return;
    }


    /*
     * These are the products that you want
     * to appear on the Best Sellers page.
     *
     * Change the names here to match the
     * exact product names in your productData.
     */

    const bestSellerProducts = [
        "Wireless Headphones",
        "Smart Watch",
        "Running Shoes",
        "Travel Backpack",
        "Smartphone Pro",
        "Premium Handbag"
    ];


    bestSellerList.innerHTML = "";


    let rank = 1;


    bestSellerProducts.forEach(function (productName) {

        if (
            typeof productData === "undefined" ||
            !productData[productName]
        ) {
            return;
        }


        const product = productData[productName];


        const card =
            document.createElement("article");

        card.className =
            "product-card bestseller-card";


        card.dataset.name =
            productName;

        card.dataset.category =
            product.category || "";

        card.dataset.price =
            product.price || 0;


        const price =
            Number(product.price || 0);

        const mrp =
            Number(product.mrp || 0);


        let oldPriceHTML = "";

        if (mrp > price) {

            oldPriceHTML = `
                <p class="old-price">
                    ₹${mrp.toLocaleString("en-IN")}
                </p>
            `;

        }


        let discountHTML = "";

        if (product.discount) {

            discountHTML = `
                <div class="discount">
                    ${product.discount}
                </div>
            `;

        }


        card.innerHTML = `

            ${discountHTML}

            <div class="bestseller-badge">
                🏆 BEST SELLER
            </div>

            <div class="bestseller-rank">
                #${rank}
            </div>


            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${productName}"
                    loading="lazy"
                    onerror="this.onerror=null; this.src='images/product-placeholder.jpg';"
                >

            </div>


            <h3>
                ${productName}
            </h3>


            <div class="rating">
                ${product.rating || "⭐⭐⭐⭐⭐"}
            </div>


            <p class="price">
                ₹${price.toLocaleString("en-IN")}
            </p>


            ${oldPriceHTML}


            <button
                type="button"
                class="add-cart-button"
            >
                🛒 Add to Cart
            </button>


            <button
                type="button"
                class="view-details-button"
            >
                View Details
            </button>

        `;


        /* ADD TO CART */

        const cartButton =
            card.querySelector(".add-cart-button");


        if (cartButton) {

            cartButton.addEventListener(
                "click",
                function () {

                    if (typeof addToCart === "function") {

                        addToCart(
                            productName,
                            price,
                             product.image
                        );

                    } else {

                        console.error(
                            "addToCart() function not found in script.js"
                        );

                    }

                }
            );

        }


        /* VIEW DETAILS */

        const detailsButton =
            card.querySelector(".view-details-button");


        if (detailsButton) {

            detailsButton.addEventListener(
                "click",
                function () {

                    if (typeof viewProduct === "function") {

                        viewProduct(productName);

                    } else {

                        window.location.href =
                            "product.html?product=" +
                            encodeURIComponent(productName);

                    }

                }
            );

        }


        bestSellerList.appendChild(card);

        rank++;

    });


    /* UPDATE CART COUNT */

    if (typeof updateCartCount === "function") {
        updateCartCount();
    }

});
/* =========================================================
   CUSTOMER SERVICE PAGE
========================================================= */


/* HELP SEARCH */

function searchHelp() {

    const input = document.getElementById("helpSearch");

    if (!input) {
        return;
    }

    const searchText = input.value.trim().toLowerCase();

    if (searchText === "") {

        alert("Please enter what you need help with.");

        input.focus();

        return;
    }


    const faqItems = document.querySelectorAll(
        ".faq-container details"
    );


    let found = false;


    faqItems.forEach(function (item) {

        const text = item.innerText.toLowerCase();

        if (text.includes(searchText)) {

            item.open = true;

            item.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            found = true;

        }

    });


    if (!found) {

        alert(
            "Sorry, we couldn't find an answer for \"" +
            searchText +
            "\". Please contact ShopNest Support."
        );

    }

}



/* ENTER KEY FOR HELP SEARCH */

document.addEventListener("DOMContentLoaded", function () {

    const helpSearch =
        document.getElementById("helpSearch");


    if (helpSearch) {

        helpSearch.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    searchHelp();

                }

            }
        );

    }

});



/* CONTACT SUPPORT */

function contactSupport() {

    alert(
        "Thank you for contacting ShopNest Customer Service. " +
        "Our support team will be happy to help you."
    );

}
/* =========================================================
   AMAZON STYLE - ALL MENU SIDEBAR
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const allMenuButton =
        document.getElementById("allMenuButton");

    const allMenuSidebar =
        document.getElementById("allMenuSidebar");

    const allMenuOverlay =
        document.getElementById("allMenuOverlay");

    const closeAllMenu =
        document.getElementById("closeAllMenu");


    /* OPEN SIDEBAR */

    if (allMenuButton) {

        allMenuButton.addEventListener("click", function () {

            allMenuSidebar.classList.add("active");

            allMenuOverlay.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    }


    /* CLOSE SIDEBAR */

    function closeSidebar() {

        allMenuSidebar.classList.remove("active");

        allMenuOverlay.classList.remove("active");

        document.body.style.overflow = "";

    }


    /* CLOSE BUTTON */

    if (closeAllMenu) {

        closeAllMenu.addEventListener(
            "click",
            closeSidebar
        );

    }


    /* CLICK OUTSIDE */

    if (allMenuOverlay) {

        allMenuOverlay.addEventListener(
            "click",
            closeSidebar
        );

    }


    /* ESC KEY */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeSidebar();

            }

        }
    );

});
/* =====================================================
   SHOPNEST PRODUCT GALLERY - 8 THUMBNAILS
===================================================== */

let productGalleryImages = [];
let currentThumbnailIndex = 0;


/* =====================================================
   LOAD PRODUCT GALLERY
===================================================== */

function loadProductThumbnails(images) {

    if (!Array.isArray(images) || images.length === 0) {
        return;
    }

    productGalleryImages = images.filter(Boolean);

    const mainImage =
        document.getElementById("productImage");

    if (mainImage && productGalleryImages[0]) {

        mainImage.src =
            productGalleryImages[0];

    }


    const thumbnailIDs = [

        "thumbnailImage1",
        "thumbnailImage2",
        "thumbnailImage3",
        "thumbnailImage4",
        "thumbnailImage5",
        "thumbnailImage6",
        "thumbnailImage7",
        "thumbnailImage8"

    ];


    thumbnailIDs.forEach(
        function(id, index) {

            const image =
                document.getElementById(id);

            if (!image) {
                return;
            }


            const button =
                image.closest(".thumbnail");


            if (productGalleryImages[index]) {

                image.src =
                    productGalleryImages[index];

                image.style.display =
                    "block";


                if (button) {

                    button.style.display =
                        "flex";

                }

            } else {

                image.src = "";

                image.style.display =
                    "none";


                if (button) {

                    button.style.display =
                        "none";

                }

            }

        }
    );


    changeProductImage(0);

}


/* =====================================================
   CHANGE MAIN PRODUCT IMAGE
===================================================== */

function changeProductImage(index) {

    if (
        !Array.isArray(productGalleryImages) ||
        !productGalleryImages[index]
    ) {

        return;

    }


    currentThumbnailIndex =
        index;


    const mainImage =
        document.getElementById(
            "productImage"
        );


    if (mainImage) {

        mainImage.src =
            productGalleryImages[index];

    }


    const thumbnails =
        document.querySelectorAll(
            "#thumbnailContainer .thumbnail"
        );


    thumbnails.forEach(
        function(thumbnail, i) {

            thumbnail.classList.remove(
                "active"
            );


            if (i === index) {

                thumbnail.classList.add(
                    "active"
                );

            }

        }
    );

}
/* =========================================================
   SHOPNEST - ADVANCED PRODUCT PAGE ENHANCEMENT
   ADD THIS CODE AT THE VERY END OF script.js
========================================================= */


/* =========================================================
   PRODUCT GALLERY
========================================================= */

function setupAdvancedProductGallery() {

    const params = new URLSearchParams(window.location.search);
    const productName = params.get("product");

    if (!productName || typeof productData === "undefined") {
        return;
    }

    const product = productData[productName];

    if (!product) {
        return;
    }


    /*
     * Supported image properties:
     *
     * product.images = [
     *     "image1.jpg",
     *     "image2.jpg",
     *     "image3.jpg"
     * ]
     *
     * OR
     *
     * product.gallery = [...]
     *
     * If neither exists, the main product image
     * will be used.
     */

    let images = [];

    if (Array.isArray(product.images)) {

        images = product.images.filter(Boolean);

    } else if (Array.isArray(product.gallery)) {

        images = product.gallery.filter(Boolean);

    } else if (Array.isArray(product.thumbnails)) {

        images = product.thumbnails.filter(Boolean);

    }


    if (images.length === 0 && product.image) {

        images.push(product.image);

    }


    /* Maximum 5 thumbnails */

    images = images.slice(0, 5);


    productGalleryImages = images;

    currentThumbnailIndex = 0;


    const mainImage =
        document.getElementById("productImage");


    if (mainImage && images.length > 0) {

        mainImage.src = images[0];

        mainImage.alt = productName;

        mainImage.classList.add(
            "shopnest-main-product-image"
        );

    }


    /* Create/update thumbnails */

    const thumbnailIDs = [
        "thumbnailImage1",
        "thumbnailImage2",
        "thumbnailImage3",
        "thumbnailImage4",
        "thumbnailImage5"
    ];


    thumbnailIDs.forEach(function (id, index) {

        const image =
            document.getElementById(id);

        if (!image) {
            return;
        }


        const button =
            image.closest(".thumbnail");


        if (images[index]) {

            image.src =
                images[index];

            image.alt =
                `${productName} thumbnail ${index + 1}`;

            image.style.display =
                "block";


            if (button) {

                button.style.display =
                    "flex";

                button.setAttribute(
                    "data-index",
                    index
                );

                button.onclick =
                    function () {

                        changeProductImage(index);

                    };

            }

        } else {

            image.removeAttribute("src");

            image.style.display =
                "none";


            if (button) {

                button.style.display =
                    "none";

            }

        }

    });


    updateAdvancedThumbnailState(0);


    /* Image zoom */

    setupProductImageZoom();

}



/* =========================================================
   CHANGE PRODUCT IMAGE
========================================================= */

function changeProductImage(index) {

    if (
        !Array.isArray(productGalleryImages) ||
        !productGalleryImages[index]
    ) {
        return;
    }


    currentThumbnailIndex =
        index;


    const mainImage =
        document.getElementById(
            "productImage"
        );


    if (mainImage) {

        mainImage.style.opacity =
            "0";


        setTimeout(function () {

            mainImage.src =
                productGalleryImages[index];

            mainImage.style.opacity =
                "1";

        }, 100);

    }


    updateAdvancedThumbnailState(index);

}



/* =========================================================
   ACTIVE THUMBNAIL
========================================================= */

function updateAdvancedThumbnailState(index) {

    const thumbnails =
        document.querySelectorAll(
            "#thumbnailContainer .thumbnail"
        );


    thumbnails.forEach(function (
        thumbnail,
        thumbnailIndex
    ) {

        thumbnail.classList.remove(
            "active"
        );


        if (thumbnailIndex === index) {

            thumbnail.classList.add(
                "active"
            );

        }

    });

}



/* =========================================================
   IMAGE ZOOM
========================================================= */

function setupProductImageZoom() {

    const image =
        document.getElementById(
            "productImage"
        );


    if (!image) {
        return;
    }


    image.addEventListener(
        "mouseenter",
        function () {

            image.classList.add(
                "zoom-active"
            );

        }
    );


    image.addEventListener(
        "mouseleave",
        function () {

            image.classList.remove(
                "zoom-active"
            );

        }
    );

}



/* =========================================================
   KEYBOARD IMAGE NAVIGATION
========================================================= */

function setupGalleryKeyboardNavigation() {

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                !productGalleryImages ||
                productGalleryImages.length === 0
            ) {
                return;
            }


            if (
                event.key === "ArrowRight"
            ) {

                let next =
                    currentThumbnailIndex + 1;


                if (
                    next >=
                    productGalleryImages.length
                ) {

                    next = 0;

                }


                changeProductImage(next);

            }


            if (
                event.key === "ArrowLeft"
            ) {

                let previous =
                    currentThumbnailIndex - 1;


                if (previous < 0) {

                    previous =
                        productGalleryImages.length - 1;

                }


                changeProductImage(previous);

            }

        }
    );

}



/* =========================================================
   PRODUCT REVIEWS
========================================================= */

function setupProductReviews() {

    const reviewsSection =
        document.getElementById(
            "reviews"
        );


    if (!reviewsSection) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const productName =
        params.get("product");


    if (
        !productName ||
        typeof productData === "undefined" ||
        !productData[productName]
    ) {
        return;
    }


    const product =
        productData[productName];


    const rating =
        product.rating || "⭐⭐⭐⭐⭐";


    const numericRating =
        getNumericRating(rating);


    /*
     * Replace the existing review content
     * with a professional review section.
     */

    reviewsSection.innerHTML = `

        <div class="reviews-header">

            <div>

                <h2>
                    Customer Reviews
                </h2>

                <p class="review-subtitle">
                    See what customers are saying about
                    ${productName}
                </p>

            </div>

        </div>


        <div class="review-summary">

            <div class="overall-rating">

                <strong>
                    ${numericRating.toFixed(1)}
                </strong>

                <div class="big-stars">
                    ${getStarRating(numericRating)}
                </div>

                <span>
                    Based on customer ratings
                </span>

            </div>


            <div class="rating-bars">

                ${createRatingBars(numericRating)}

            </div>

        </div>


        <div class="review-list">

            ${createReview(
                "Rahul",
                5,
                "Excellent Product",
                "The product quality is excellent. It looks exactly as shown and works perfectly."
            )}

            ${createReview(
                "Priya",
                5,
                "Very Happy With My Purchase",
                "Really good product for the price. Packaging was also secure and delivery was quick."
            )}

            ${createReview(
                "Amit",
                4,
                "Good Quality",
                "Good quality and useful features. The product arrived safely and was easy to use."
            )}

            ${createReview(
                "Sneha",
                5,
                "Worth Buying",
                "I am very satisfied with this purchase. The product feels premium and performs well."
            )}

            ${createReview(
                "Arjun",
                4,
                "Nice Product",
                "Good product overall. Delivery was on time and the product was properly packed."
            )}

        </div>

    `;

}



/* =========================================================
   GET NUMERIC RATING
========================================================= */

function getNumericRating(rating) {

    if (typeof rating === "number") {

        return Math.min(
            5,
            Math.max(0, rating)
        );

    }


    if (typeof rating === "string") {

        const numberMatch =
            rating.match(
                /([0-5](?:\.[0-9])?)/
            );


        if (numberMatch) {

            return parseFloat(
                numberMatch[1]
            );

        }


        const stars =
            (
                rating.match(/⭐/g) || []
            ).length;


        if (stars > 0) {

            return stars;

        }

    }


    return 5;

}



/* =========================================================
   STAR DISPLAY
========================================================= */

function getStarRating(rating) {

    const rounded =
        Math.round(rating);


    let stars = "";


    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        stars +=
            i <= rounded
                ? "⭐"
                : "☆";

    }


    return stars;

}



/* =========================================================
   RATING BARS
========================================================= */

function createRatingBars(rating) {

    const percentages = {

        5:
            Math.min(
                92,
                Math.round(
                    70 + rating * 4
                )
            ),

        4:
            Math.min(
                85,
                Math.round(
                    15 + rating * 2
                )
            ),

        3: 6,

        2: 3,

        1: 2

    };


    let html = "";


    for (
        let star = 5;
        star >= 1;
        star--
    ) {

        html += `

            <div class="rating-bar-row">

                <span>
                    ${star} star
                </span>

                <div class="rating-bar">

                    <div
                        class="rating-bar-fill"
                        style="width:${percentages[star]}%"
                    ></div>

                </div>

                <span>
                    ${percentages[star]}%
                </span>

            </div>

        `;

    }


    return html;

}



/* =========================================================
   CREATE REVIEW
========================================================= */

function createReview(
    name,
    rating,
    title,
    text
) {

    return `

        <article class="shopnest-review">

            <div class="review-user">

                <div class="review-avatar">
                    ${name.charAt(0)}
                </div>

                <div>

                    <strong>
                        ${name}
                    </strong>

                    <span class="verified-review">
                        ✓ Verified Purchase
                    </span>

                </div>

            </div>


            <div class="review-rating">

                ${getStarRating(rating)}

            </div>


            <h3>
                ${title}
            </h3>


            <p>
                ${text}
            </p>


            <small class="review-helpful">
                Helpful · Was this review helpful?
            </small>

        </article>

    `;

}



/* =========================================================
   FREQUENTLY BOUGHT TOGETHER
========================================================= */

function setupFrequentlyBoughtTogether() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const currentProductName =
        params.get("product");


    if (
        !currentProductName ||
        typeof productData === "undefined"
    ) {
        return;
    }


    const currentProduct =
        productData[currentProductName];


    if (!currentProduct) {
        return;
    }


    /*
     * Create section automatically.
     */

    const existing =
        document.getElementById(
            "frequentlyBoughtTogether"
        );


    if (existing) {
        existing.remove();
    }


    const section =
        document.createElement("section");


    section.id =
        "frequentlyBoughtTogether";


    section.className =
        "frequently-bought";


    const recommendedProducts =
        getRelatedProducts(
            currentProductName,
            currentProduct.category
        );


    if (
        recommendedProducts.length === 0
    ) {
        return;
    }


    const productsToShow =
        recommendedProducts.slice(
            0,
            3
        );


    const allProducts = [
        currentProductName,
        ...productsToShow.map(
            product => product.name
        )
    ];


    let total =
        Number(currentProduct.price) || 0;


    productsToShow.forEach(
        product => {

            total +=
                Number(product.price) || 0;

        }
    );


    section.innerHTML = `

        <div class="frequently-bought-header">

            <h2>
                Frequently Bought Together
            </h2>

            <p>
                Customers who viewed this product
                also purchased these products.
            </p>

        </div>


        <div class="frequently-products">

            ${createFrequentlyProduct(
                currentProductName,
                currentProduct,
                true
            )}


            <span class="plus-symbol">
                +
            </span>


            ${productsToShow.map(
                product =>
                    createFrequentlyProduct(
                        product.name,
                        product,
                        false
                    )
            ).join("")}

        </div>


        <div class="frequently-buy-box">

            <div>

                <span>
                    Total for ${allProducts.length} items:
                </span>

                <strong>
                    ${formatPrice(total)}
                </strong>

            </div>


            <button
                type="button"
                id="addFrequentlyProducts"
                class="frequently-add-button"
            >
                🛒 Add all to Cart
            </button>

        </div>

    `;


    const reviews =
        document.getElementById(
            "reviews"
        );


    if (reviews) {

        reviews.insertAdjacentElement(
            "afterend",
            section
        );

    } else {

        document.querySelector(
            ".product-extra"
        )?.insertAdjacentElement(
            "afterend",
            section
        );

    }


    const addButton =
        document.getElementById(
            "addFrequentlyProducts"
        );


    if (addButton) {

        addButton.addEventListener(
            "click",
            function () {

                addFrequentlyBoughtProducts(
                    allProducts
                );

            }
        );

    }

}



/* =========================================================
   GET RELATED PRODUCTS
========================================================= */

function getRelatedProducts(
    currentProductName,
    category
) {

    const result = [];


    Object.keys(productData).forEach(
        function (name) {

            if (
                name === currentProductName
            ) {
                return;
            }


            const product =
                productData[name];


            if (
                category &&
                product.category === category
            ) {

                result.push({

                    name: name,

                    ...product

                });

            }

        }
    );


    /*
     * If there aren't enough products
     * from the same category, use others.
     */

    if (result.length < 3) {

        Object.keys(productData).forEach(
            function (name) {

                if (
                    name === currentProductName ||
                    result.some(
                        item =>
                            item.name === name
                    )
                ) {
                    return;
                }


                result.push({

                    name: name,

                    ...productData[name]

                });

            }
        );

    }


    return result;

}



/* =========================================================
   FREQUENTLY BOUGHT PRODUCT CARD
========================================================= */

function createFrequentlyProduct(
    name,
    product,
    current
) {

    return `

        <div
            class="frequently-product"
            data-product="${name}"
        >

            <div class="frequently-image">

                <img
                    src="${product.image || ""}"
                    alt="${name}"
                    loading="lazy"
                    onerror="
                        this.style.display='none';
                        this.parentElement.innerHTML='🛍️';
                    "
                >

            </div>


            <div class="frequently-info">

                <h3>
                    ${name}
                </h3>


                <div class="frequently-rating">

                    ${
                        product.rating ||
                        "⭐⭐⭐⭐⭐"
                    }

                </div>


                <strong>
                    ${formatPrice(
                        Number(product.price) || 0
                    )}
                </strong>

            </div>


            ${
                current
                    ? `
                        <span class="current-product-label">
                            This product
                        </span>
                    `
                    : ""
            }

        </div>

    `;

}



/* =========================================================
   ADD FREQUENTLY BOUGHT PRODUCTS
========================================================= */

function addFrequentlyBoughtProducts(
    productNames
) {

    if (
        typeof cart === "undefined"
    ) {
        return;
    }


    let addedCount = 0;


    productNames.forEach(
        function (name) {

            const product =
                productData[name];


            if (!product) {
                return;
            }


            const existing =
                cart.find(
                    item =>
                        item.name === name
                );


            if (existing) {

                existing.quantity += 1;

            } else {
cart.push({
    name: name,
    price: Number(product.price) || 0,
    quantity: 1,
    image: product.image || ""
});
            }


            addedCount++;

        }
    );


    if (typeof saveCart === "function") {
        saveCart();
    }


    if (
        typeof updateCartCount ===
        "function"
    ) {
        updateCartCount();
    }


    if (typeof showCartNotification === "function") {

        showCartNotification(
            `${addedCount} products added to cart`
        );

    } else {

        alert(
            `${addedCount} products added to your cart.`
        );

    }

}



/* =========================================================
   PRODUCT PAGE SCROLL BUTTONS
========================================================= */

function setupProductPageActions() {

    const reviewLink =
        document.querySelector(
            '.product-rating a[href="#reviews"]'
        );


    if (reviewLink) {

        reviewLink.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const reviews =
                    document.getElementById(
                        "reviews"
                    );


                if (reviews) {

                    reviews.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }

}



/* =========================================================
   PRODUCT PAGE INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
         * Small delay ensures that your existing
         * loadProductDetails() has already populated
         * the product information.
         */

        setTimeout(
            function () {

                setupAdvancedProductGallery();

                setupGalleryKeyboardNavigation();

                setupProductReviews();

                setupFrequentlyBoughtTogether();

                setupProductPageActions();

            },
            100
        );

    }
);
/* =========================================
   ADDRESS MANAGEMENT
========================================= */

function addAddress() {

    const name =
        prompt("Enter recipient name:");

    if (!name) {
        return;
    }

    const address =
        prompt(
            "Enter your complete delivery address:"
        );

    if (!address) {
        return;
    }

    const phone =
        prompt("Enter phone number:");

    const addressData = {

        name: name,

        address: address,

        phone: phone || ""

    };


    localStorage.setItem(
        "shopnestAddress",
        JSON.stringify(addressData)
    );


    displayAddress();

    alert(
        "Address added successfully!"
    );

}


function displayAddress() {

    const savedAddress =
        localStorage.getItem(
            "shopnestAddress"
        );


    if (!savedAddress) {
        return;
    }


    try {

        const address =
            JSON.parse(savedAddress);


        const nameElement =
            document.getElementById(
                "addressName"
            );

        const detailsElement =
            document.getElementById(
                "addressDetails"
            );


        if (nameElement) {

            nameElement.textContent =
                address.name;

        }


        if (detailsElement) {

            detailsElement.innerHTML =
                address.address +
                "<br>" +
                (address.phone || "");

        }

    } catch (error) {

        console.log(
            "Unable to load address."
        );

    }

}


function editAddress() {

    const savedAddress =
        localStorage.getItem(
            "shopnestAddress"
        );


    if (!savedAddress) {

        addAddress();

        return;

    }


    try {

        const oldAddress =
            JSON.parse(savedAddress);


        const name =
            prompt(
                "Enter recipient name:",
                oldAddress.name
            );


        if (!name) {
            return;
        }


        const address =
            prompt(
                "Enter complete address:",
                oldAddress.address
            );


        if (!address) {
            return;
        }


        const phone =
            prompt(
                "Enter phone number:",
                oldAddress.phone
            );


        localStorage.setItem(

            "shopnestAddress",

            JSON.stringify({

                name: name,

                address: address,

                phone: phone || ""

            })

        );


        displayAddress();


        alert(
            "Address updated successfully!"
        );

    } catch (error) {

        console.log(error);

    }

}


function deleteAddress() {

    const confirmation =
        confirm(
            "Are you sure you want to delete this address?"
        );


    if (!confirmation) {
        return;
    }


    localStorage.removeItem(
        "shopnestAddress"
    );


    document.getElementById(
        "addressName"
    ).textContent =
        "ShopNest Customer";


    document.getElementById(
        "addressDetails"
    ).textContent =
        "No delivery address added yet.";


    alert(
        "Address deleted successfully!"
    );

}


/* =========================================
   PAYMENT METHODS
========================================= */

function addPaymentMethod() {

    const type =
        prompt(
            "Enter payment method (Card / UPI):"
        );


    if (!type) {
        return;
    }


    const lastFour =
        prompt(
            "Enter last 4 digits of your card or UPI ID:"
        );


    if (!lastFour) {
        return;
    }


    const payment = {

        type: type,

        lastFour: lastFour

    };


    localStorage.setItem(

        "shopnestPayment",

        JSON.stringify(payment)

    );


    displayPayment();


    alert(
        "Payment method added successfully!"
    );

}


function displayPayment() {

    const savedPayment =
        localStorage.getItem(
            "shopnestPayment"
        );


    if (!savedPayment) {
        return;
    }


    try {

        const payment =
            JSON.parse(savedPayment);


        const paymentList =
            document.getElementById(
                "paymentList"
            );


        if (!paymentList) {
            return;
        }


        paymentList.innerHTML = `

            <div class="payment-card">

                <div class="payment-icon">
                    💳
                </div>

                <div class="payment-info">

                    <h3>
                        ${payment.type}
                    </h3>

                    <p>
                        ${payment.lastFour}
                    </p>

                </div>

                <button
                    type="button"
                    onclick="removePaymentMethod()"
                >
                    Remove
                </button>

            </div>

        `;

    } catch (error) {

        console.log(
            "Unable to load payment method."
        );

    }

}


function removePaymentMethod() {

    const confirmation =
        confirm(
            "Remove this payment method?"
        );


    if (!confirmation) {
        return;
    }


    localStorage.removeItem(
        "shopnestPayment"
    );


    displayPayment();


    const paymentList =
        document.getElementById(
            "paymentList"
        );


    if (paymentList) {

        paymentList.innerHTML = `

            <div class="payment-card">

                <div class="payment-icon">
                    💳
                </div>

                <div class="payment-info">

                    <h3>
                        No Payment Method Added
                    </h3>

                    <p>
                        Add a payment method for faster checkout.
                    </p>

                </div>

            </div>

        `;

    }

}


/* =========================================
   ACCOUNT SETTINGS
========================================= */

function saveAccountSettings() {

    const settings = {

        emailNotifications:
            document.getElementById(
                "emailNotifications"
            )?.checked ?? true,

        orderNotifications:
            document.getElementById(
                "orderNotifications"
            )?.checked ?? true,

        offerNotifications:
            document.getElementById(
                "offerNotifications"
            )?.checked ?? true,

        language:
            document.getElementById(
                "accountLanguage"
            )?.value || "English"

    };


    localStorage.setItem(

        "shopnestSettings",

        JSON.stringify(settings)

    );

}


function loadAccountSettings() {

    const savedSettings =
        localStorage.getItem(
            "shopnestSettings"
        );


    if (!savedSettings) {
        return;
    }


    try {

        const settings =
            JSON.parse(savedSettings);


        if (
            document.getElementById(
                "emailNotifications"
            )
        ) {

            document.getElementById(
                "emailNotifications"
            ).checked =
                settings.emailNotifications;

        }


        if (
            document.getElementById(
                "orderNotifications"
            )
        ) {

            document.getElementById(
                "orderNotifications"
            ).checked =
                settings.orderNotifications;

        }


        if (
            document.getElementById(
                "offerNotifications"
            )
        ) {

            document.getElementById(
                "offerNotifications"
            ).checked =
                settings.offerNotifications;

        }


        if (
            document.getElementById(
                "accountLanguage"
            )
        ) {

            document.getElementById(
                "accountLanguage"
            ).value =
                settings.language;

        }

    } catch (error) {

        console.log(
            "Unable to load account settings."
        );

    }

}


/* =========================================
   LOAD ACCOUNT SECTIONS
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayAddress();

        displayPayment();

        loadAccountSettings();

    }
);
// =====================================================
// SHOPNEST - FORGOT PASSWORD
// =====================================================

function forgotPassword() {

    const emailOrMobile = document.getElementById("loginEmail");

    if (!emailOrMobile) {
        return;
    }

    const value = emailOrMobile.value.trim();

    if (value === "") {

        alert("Please enter your email or mobile number first.");

        emailOrMobile.focus();

        return;
    }

    // Basic email/mobile validation
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isMobile = /^[0-9]{10}$/.test(value);

    if (!isEmail && !isMobile) {

        alert("Please enter a valid email address or 10-digit mobile number.");

        emailOrMobile.focus();

        return;
    }

    // Demo password-reset flow
    alert(
        "Password reset instructions have been sent to your registered " +
        (isEmail ? "email address." : "mobile number.")
    );
}
// =====================================================
// FORGOT / RESET PASSWORD
// =====================================================

async function forgotPassword() {

    const email =
        document.getElementById("forgotEmail").value.trim();

    const newPassword =
        document.getElementById("newPassword").value;

    const confirmNewPassword =
        document.getElementById("confirmNewPassword").value;

    const message =
        document.getElementById("forgotMessage");

    const newPasswordGroup =
        document.getElementById("newPasswordGroup");

    const confirmNewPasswordGroup =
        document.getElementById("confirmNewPasswordGroup");

    const button =
        document.getElementById("forgotPasswordButton");


    // =====================================================
    // CLEAR MESSAGE
    // =====================================================

    message.textContent = "";
    message.className = "auth-message";


    // =====================================================
    // CHECK EMAIL
    // =====================================================

    if (!email) {

        message.textContent =
            "Please enter your registered email address.";

        message.classList.add("error");

        return;
    }


    // =====================================================
    // IF PASSWORD FIELDS ARE HIDDEN
    // CHECK WHETHER ACCOUNT EXISTS
    // =====================================================

    if (
        newPasswordGroup.style.display === "none" ||
        newPasswordGroup.style.display === ""
    ) {

        try {

            message.textContent =
                "Checking your account...";

            message.classList.add("info");


            const response = await fetch(
                "http://localhost:3000/api/auth/forgot-password",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email: email
                    })
                }
            );


            const data = await response.json();


            if (!data.success) {

                message.textContent =
                    data.message ||
                    "Account not found.";

                message.className =
                    "auth-message error";

                return;
            }


            // =================================================
            // SHOW PASSWORD FIELDS
            // =================================================

            newPasswordGroup.style.display = "block";

            confirmNewPasswordGroup.style.display = "block";


            button.textContent =
                "Reset Password";


            message.textContent =
                "Account found. Enter your new password.";

            message.className =
                "auth-message success";


        } catch (error) {

            console.error(
                "Forgot password error:",
                error
            );

            message.textContent =
                "Unable to connect to ShopNest server.";

            message.className =
                "auth-message error";

        }

        return;
    }


    // =====================================================
    // VALIDATE NEW PASSWORD
    // =====================================================

    if (!newPassword) {

        message.textContent =
            "Please enter your new password.";

        message.className =
            "auth-message error";

        return;
    }


    if (newPassword.length < 6) {

        message.textContent =
            "Password must be at least 6 characters.";

        message.className =
            "auth-message error";

        return;
    }


    if (newPassword !== confirmNewPassword) {

        message.textContent =
            "Passwords do not match.";

        message.className =
            "auth-message error";

        return;
    }


    // =====================================================
    // RESET PASSWORD
    // =====================================================

    try {

        message.textContent =
            "Updating your password...";

        message.className =
            "auth-message info";


        const response = await fetch(
            "http://localhost:3000/api/auth/reset-password",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    email: email,

                    newPassword: newPassword

                })
            }
        );


        const data = await response.json();


        // =================================================
        // SUCCESS
        // =================================================

        if (data.success) {

            message.textContent =
                "Password reset successfully! Redirecting to login...";

            message.className =
                "auth-message success";


            setTimeout(() => {

                window.location.href =
                    "login.html";

            }, 1500);

        }


        // =================================================
        // ERROR
        // =================================================

        else {

            message.textContent =
                data.message ||
                "Unable to reset password.";

            message.className =
                "auth-message error";

        }


    } catch (error) {

        console.error(
            "Reset password error:",
            error
        );

        message.textContent =
            "Unable to connect to ShopNest server.";

        message.className =
            "auth-message error";

    }

}
// =====================================================
// SHOPNEST LOGIN STATE
// =====================================================

function getLoggedInUser() {

    const savedUser =
        localStorage.getItem("shopnestUser");

    const sessionUser =
        sessionStorage.getItem("shopnestUser");


    if (savedUser) {

        try {

            return JSON.parse(savedUser);

        } catch (error) {

            console.error(
                "Invalid localStorage user data:",
                error
            );

            localStorage.removeItem("shopnestUser");

        }

    }


    if (sessionUser) {

        try {

            return JSON.parse(sessionUser);

        } catch (error) {

            console.error(
                "Invalid sessionStorage user data:",
                error
            );

            sessionStorage.removeItem("shopnestUser");

        }

    }


    return null;

}// =====================================================
// SHOPNEST LOGOUT
// =====================================================

function logoutUser() {

    localStorage.removeItem("shopnestUser");

    sessionStorage.removeItem("shopnestUser");


    alert("You have been signed out of ShopNest.");

    window.location.href = "index.html";

}

// =====================================================
// UPDATE LOGIN DISPLAY
// =====================================================

// =====================================================
// UPDATE LOGIN DISPLAY
// =====================================================

function updateLoginDisplay() {

    const user = getLoggedInUser();


    // =====================================================
    // HEADER ACCOUNT
    // =====================================================

    const accountName =
        document.getElementById("accountName");

    const accountLink =
        document.getElementById("accountLink");


    // =====================================================
    // ALL MENU USER NAME
    // =====================================================

    const allMenuUserName =
        document.getElementById("allMenuUserName");


    // =====================================================
    // USER NOT LOGGED IN
    // =====================================================

    if (!user) {

        if (accountName) {

            accountName.textContent =
                "Hello, Sign in";

        }

        if (accountLink) {

            accountLink.href =
                "login.html";

        }

        if (allMenuUserName) {

            allMenuUserName.textContent =
                "👤 Hello, Sign in";

        }

        return;

    }


    // =====================================================
    // USER IS LOGGED IN
    // =====================================================

   if (accountName) {

    accountName.textContent =
        `Hello, ${user.full_name || user.name || user.username || "User"}`;

}

    if (accountLink) {

        accountLink.href =
            "account.html";

    }

if (allMenuUserName) {

    allMenuUserName.textContent =
        `👤 Hello, ${user.full_name}`;

}
}
// =====================================================
// RUN LOGIN STATE CHECK
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateLoginDisplay();

    }
);
/* =====================================================
   UPDATE HEADER USER NAME ON ALL SHOPNEST PAGES
===================================================== */

function updateShopNestUserUI() {

    const savedUser = localStorage.getItem("shopnestUser");

    /* HEADER */
    const greeting =
        document.getElementById("accountHeaderGreeting");

    const accountName =
        document.getElementById("accountHeaderName");

    /* ALL MENU */
    const menuGreeting =
        document.getElementById("allMenuGreeting");


    /* ---------------------------------------------
       USER NOT LOGGED IN
    --------------------------------------------- */

    if (!savedUser) {

        if (greeting) {
            greeting.textContent = "Hello, Sign in";
        }

        if (accountName) {
            accountName.textContent = "Account & Lists";
        }

        if (menuGreeting) {
            menuGreeting.textContent = "👤 Hello, Sign in";
        }

        return;
    }


    /* ---------------------------------------------
       USER LOGGED IN
    --------------------------------------------- */

    try {

        const user = JSON.parse(savedUser);

        if (user && user.name) {

            if (greeting) {
                greeting.textContent =
                    "Hello, " + user.name;
            }

            if (accountName) {
                accountName.textContent =
                    "Account & Lists";
            }

            if (menuGreeting) {
                menuGreeting.textContent =
                    "👤 Hello, " + user.name;
            }

        }

    } catch (error) {

        console.log(
            "Unable to load ShopNest user."
        );

    }

}


/* =====================================================
   RUN WHEN PAGE LOADS
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateShopNestUserUI();

    }
);
/* =====================================================
   DELIVERY LOCATION
===================================================== */

function openLocationPopup() {

    const savedUser =
        localStorage.getItem("shopnestUser") ||
        sessionStorage.getItem("shopnestUser");

    if (!savedUser) {

        window.location.href = "login.html";

        return;
    }

    const overlay =
        document.getElementById("locationOverlay");

    if (overlay) {
        overlay.classList.add("active");
    }
}


function closeLocationPopup() {

    const overlay =
        document.getElementById("locationOverlay");

    if (overlay) {
        overlay.classList.remove("active");
    }
}


function saveDeliveryLocation() {

    const input =
        document.getElementById("deliveryLocation");

    const selectedLocation =
        document.getElementById("selectedLocation");

    if (!input || !selectedLocation) {
        return;
    }

    const location =
        input.value.trim();

    if (location === "") {

        alert("Please enter your delivery location.");

        return;
    }

    selectedLocation.textContent =
        location;

    localStorage.setItem(
        "deliveryLocation",
        location
    );

    closeLocationPopup();

    updateDeliveryLocation();
}


function updateDeliveryLocation() {

    const savedLocation =
        localStorage.getItem(
            "deliveryLocation"
        );

    const locationElement =
        document.querySelector(
            ".location strong"
        );

    if (
        savedLocation &&
        locationElement
    ) {

        locationElement.textContent =
            "📍 " + savedLocation;
    }
}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDeliveryLocation();

    }
);
// =====================================================
// SEARCH CATEGORY
// =====================================================

function filterBySearchCategory() {

    const categorySelect =
        document.getElementById("searchCategory");

    if (!categorySelect) return;

    const category =
        categorySelect.value;

    const searchInput =
        document.getElementById("searchInput");

    const searchText =
        searchInput
            ? searchInput.value.trim()
            : "";

    const params =
        new URLSearchParams();

    if (searchText !== "") {
        params.set("search", searchText);
    }

    if (category !== "All") {
        params.set("category", category);
    }

    window.location.href =
        "products.html" +
        (params.toString()
            ? "?" + params.toString()
            : "");
}