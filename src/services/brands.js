const fs = require('fs');

// Departments and their associated brands (normalized names)
const departments = {
    "Savings": ["Bank of America", "Chase", "Wells Fargo", "Citibank", "PNC"],
    "Grocery": ["Nestle", "Kellogg's", "PepsiCo", "Coca-Cola", "General Mills"],
    "Back To School": ["Crayola", "Elmer's", "Sharpie", "Ticonderoga", "Fiskars"],
    "Back To College": ["Ikea", "Target", "Walmart", "Bed Bath & Beyond", "Best Buy"],
    "Halloween": ["Spirit Halloween", "Party City", "Target", "Walmart", "Amazon"],
    "Tailgating": ["Coleman", "Weber", "Igloo", "YETI", "Kingsford"],
    "Home Garden Tools": ["Black & Decker", "DeWalt", "Ryobi", "Bosch", "Makita"],
    "Electronics Video Games": ["Samsung", "Apple", "Sony", "Microsoft", "Nintendo"],
    "Clothing Shoes Accessories": ["Nike", "Adidas", "Levi's", "H&M", "Zara"],
    "Toys Kids Baby": ["LEGO", "Mattel", "Hasbro", "Fisher-Price", "Nerf"],
    "Beauty": ["L'Oreal", "Maybelline", "Revlon", "CoverGirl", "Neutrogena"],
    "Personal Care": ["Colgate", "Oral-B", "Gillette", "Schick", "Nivea"],
    "Pharmacy Health Wellness": ["CVS", "Walgreens", "Rite Aid", "GNC", "Vitamin Shoppe"],
    "Auto Tires": ["Goodyear", "Michelin", "Bridgestone", "Firestone", "Pirelli"],
    "Household Essentials": ["Procter & Gamble", "Unilever", "Clorox", "Reckitt Benckiser", "Johnson & Johnson"],
    "Pets": ["Purina", "Pedigree", "Whiskas", "Iams", "Blue Buffalo"],
    "Sports Outdoors": ["Adidas", "Nike", "Under Armour", "Columbia", "The North Face"],
    "School Office Art Supplies": ["Crayola", "Elmer's", "Sharpie", "Post-it", "3M"],
    "Seasonal Decor Party Supplies": ["Party City", "Hallmark", "American Greetings", "Dollar Tree", "Oriental Trading"],
    "Movies Music Books": ["Sony", "Universal", "Warner Bros", "Paramount", "Lionsgate"]
};

// Function to generate random prices
const generatePrice = () => (Math.random() * 50 + 10).toFixed(2);

// Function to generate random profit
const generateProfit = () => (Math.random() * 10000 + 5000).toFixed(2);

// Create the dataset
const dataset = {
    Departments: {}
};

for (const [department, brands] of Object.entries(departments)) {
    let currentTotalProfit = 0;
    let predictedTotalProfit = 0;

    const brandData = brands.map(brand => {
        const currentPrice = parseFloat(generatePrice());
        const predictedPrice = parseFloat(generatePrice());

        const currentProfit = parseFloat(generateProfit());
        const predictedProfit = currentProfit + (Math.random() * 5000 + 1000);

        currentTotalProfit += currentProfit;
        predictedTotalProfit += predictedProfit;

        return {
            "Brand Name": brand,
            "Current Price": `$${currentPrice.toFixed(2)}`,
            "Predicted Price": `$${predictedPrice.toFixed(2)}`,
            "Current Profit": `$${currentProfit.toFixed(2)}`,
            "Predicted Profit": `$${predictedProfit.toFixed(2)}`
        };
    });

    // Adjust predicted profits to ensure their total is greater than the current total
    if (predictedTotalProfit <= currentTotalProfit) {
        const adjustment = (currentTotalProfit - predictedTotalProfit) + (Math.random() * 5000 + 1000);
        predictedTotalProfit += adjustment;

        const adjustmentPerBrand = adjustment / brands.length;
        brandData.forEach((item, index) => {
            const newPredictedProfit = parseFloat(item["Predicted Profit"].replace(/[$,]/g, '')) + adjustmentPerBrand;
            brandData[index]["Predicted Profit"] = `$${newPredictedProfit.toFixed(2)}`;
        });
    }

    dataset.Departments[department] = brandData;
}

// Save the dataset to a JSON file
fs.writeFileSync('generated_dataset.json', JSON.stringify(dataset, null, 2));

console.log("Normalized dataset generated successfully!");
