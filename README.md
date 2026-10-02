# ShopSmart

> Compare smarter. Shop better.

ShopSmart is a modern product discovery, technical comparison, and shopping assistant web application. It combines deep specification filtering, side-by-side neutral comparison metrics, historical price tracking charts, and an intelligent Gemini AI Shopping Assistant to help consumers make confident purchasing decisions across smartphones, laptops, audio equipment, smartwatches, cameras, gaming hardware, and home electronics.

## Features

* **Curated Tech Catalog**: Comprehensive specifications, pricing, stock availability, color options, storage variations, and tags across 8 core consumer technology categories.
* **Interactive Search & Autocomplete**: Real-time search query matching product names, brands, categories, and tags with instant dropdown suggestions.
* **Faceted Multi-Dimensional Filtering**: Filter simultaneously by category, brand, price slider, minimum customer rating, availability status, and tags.
* **Side-by-Side Product Comparison**: Compare up to 3 products simultaneously with objective highlighting (e.g. Lower Price, Higher Rating, Most Reviewed) without artificial winner declarations.
* **Interactive Price Tracking**: Historical 6-month simulated pricing trends rendered with Recharts Area Charts showing peak, lowest recorded, and current values.
* **Gemini AI Shopping Assistant**: Integrated with Google's `gemini-3.8-flash` model for conversational shopping advice, multi-item comparative analysis, and budget planning.
* **Persistent Wishlist & Shopping Cart**: Add, adjust quantities, and manage saved items across browser sessions using LocalStorage.
* **Recently Viewed Tracking**: Automatically tracks the user's browsing history for rapid recall with single-click history clearing.
* **Simulated Checkout Flow**: Full demonstration checkout workflow with modal guidance explaining demo environment boundaries.
* **Dark & Light Visual Themes**: Responsive modern user interface engineered with clean borders, professional spacing, and theme persistence.

## Tech Stack

* **HTML5**: Semantic document structuring and accessible controls
* **CSS3**: Vanilla CSS with custom properties, media queries, and reusable utility classes
* **JavaScript (ES2022)**: Modern functional component architecture without TypeScript abstraction
* **React 19**: Component lifecycle, state hooks, and Context API for global state management
* **React Router DOM 7**: Client-side single page routing and query parameter synchronization
* **Google Gemini API**: `gemini-3.8-flash` for grounded, catalog-constrained recommendations
* **Recharts**: Responsive SVG price history visualization
* **LocalStorage**: Persistent client-side data store for cart, wishlist, theme, and history

## Application Flow

1. **Discovery**: Users land on the homepage and search via the hero input, browse featured hardware, or explore categorized collections.
2. **Filtering & Sorting**: On the catalog page, users refine results by price limits, brands, ratings, and tags, sorted by relevance, price, or release dates.
3. **Deep Specification Inspection**: Product detail pages provide categorized technical specification tables, verified sample reviews, and historical price charts.
4. **Direct Comparison**: Users add up to 3 products to the comparison engine to review side-by-side specs, price variations, and catalog differences.
5. **AI Consultation**: When weighing trade-offs, users invoke Gemini AI to assess which device suits their specific budget or workflow constraints.
6. **Cart & Simulated Checkout**: Products can be configured with desired colors and storage sizes, added to the cart, and reviewed through a demo checkout dialog.

## Project Structure

```text
├── index.html
├── metadata.json
├── package.json
├── vite.config.js
├── README.md
├── .env.example
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── context/
    │   └── AppContext.jsx
    ├── data/
    │   └── products.js
    ├── services/
    │   └── gemini.js
    ├── utils/
    │   ├── storage.js
    │   ├── formatters.js
    │   └── filterSort.js
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── ProductCard.jsx
    │   ├── ProductGrid.jsx
    │   ├── FilterPanel.jsx
    │   ├── SortSelect.jsx
    │   ├── CategoryCard.jsx
    │   ├── Rating.jsx
    │   ├── ComparisonTable.jsx
    │   ├── PriceChart.jsx
    │   ├── DemoCheckoutModal.jsx
    │   ├── AddToCompareModal.jsx
    │   ├── RecentlyViewed.jsx
    │   └── Toast.jsx
    └── pages/
        ├── Home.jsx
        ├── Products.jsx
        ├── ProductDetails.jsx
        ├── Compare.jsx
        ├── Wishlist.jsx
        ├── Cart.jsx
        ├── AIAssistant.jsx
        └── NotFound.jsx
```

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/example/shopsmart.git
npm install
npm run dev
```

The application will start on `http://localhost:3000`.

## Environment Variables

To activate live cloud querying with the Gemini API, create a `.env` file in the project root:

```env
VITE_GEMINI_API_KEY=your_actual_gemini_api_key_here
```

A template file `.env.example` is provided in the repository root.

If no API key is provided, the application automatically activates its built-in local recommendation engine so all comparison and assistant interfaces remain fully demonstrable.

## Gemini AI

The application integrates Google's `gemini-3.8-flash` model through three dedicated modules:

1. **Shopping Advisor**: Evaluates natural language user questions against available catalog items, explaining real-world trade-offs without unsupported claims.
2. **AI Product Comparison**: Generates a neutral, side-by-side hardware analysis for 2 or 3 selected items, detailing pros, cons, and user profiles each product best serves.
3. **AI Budget Assistant**: Maps user-defined budget caps, target categories, and intended workloads to catalog recommendations.

The system prompt strictly instructs the model to only reference items in the local dataset, to highlight missing data transparently, and to refrain from declaring absolute winners.

## Data

All product specifications, pricing numbers, simulated 6-month historical trends, and customer reviews in ShopSmart are realistic mock data created for demonstration and portfolio testing. They do not represent live retail stock or live market ticker data.

## API Usage

Gemini requests are structured as direct POST calls to Google's Generative Language REST endpoint (`v1beta/models/gemini-3.8-flash:generateContent`). The system prompt supplies a lightweight JSON representation of the local catalog so responses remain grounded.

## Security Note

In this frontend-only single-page architecture, environment variables prefixed with `VITE_` are bundled into client-accessible JavaScript. Frontend API keys cannot be considered secret and should not be used in production applications.

For production deployments, all calls to Gemini or third-party APIs should be routed through a backend server or serverless proxy (such as Express, Cloud Functions, or Cloud Run) that stores the API key in server-side environment secrets.

## Limitations

* **Mock Product Catalog**: Products and stock numbers are simulated locally.
* **Mock Reviews**: Customer ratings and reviews are pre-compiled demonstration entries.
* **Demo Price History**: Historical price curves represent mock trends for chart demonstration.
* **No Real Payment Gateway**: The checkout dialog is a simulation and does not process currency.
* **No Live Retailer APIs**: External e-commerce feeds and live affiliate links are not connected.
* **Frontend API Key Limitation**: Client-side API key usage is intended strictly for prototyping and development.
* **API Rate Limits**: Standard Gemini API quotas apply depending on the user's Google AI Studio tier.

## Future Improvements

* Dedicated server-side proxy route to secure Gemini API keys
* Integration with real-time product affiliate APIs (e.g. Amazon PA-API, Best Buy)
* User account registration and authentication
* Automated price-drop email and push notifications
* Real checkout processing via Stripe or PayPal
* User-submitted reviews with image upload support
* Personalized recommendation vectors based on user browsing history

## License

MIT License
