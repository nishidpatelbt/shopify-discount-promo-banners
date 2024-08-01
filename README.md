# shopify-discount-promo-banners


# Setup Instructions
	1. Clone Theme Code

	Clone the theme code from the provided Git repository:
		git clone <repository_url>
		cd <repository_directory>

	2. Upload Base Theme
		Upload the base theme from the Shopify admin theme library if not already present.

	3. Local Environment Setup

		Install Required Packages
		Install all necessary packages using npm:
			npm install

		Authenticate Store with Theme Kit
		Authenticate your store with Theme Kit by running:
			npm run dev

		Start Local Development
		Start developing locally by running the command below:
			npm run dev

	4. Build and Deploy
		Once development is complete, build and push the code to the store theme with:
			npm run deploy



# Key features

Implement dynamic promo banners with discount code and UTM medium matching

- Added Liquid template to render multiple promo banners with customizable settings including background color, text color, message, discount code, and UTM medium.
- Developed JavaScript to manage banner display based on URL parameters for discount codes and UTM medium.
  - Banners are shown globally for URLs matching discount codes or UTM medium.
  - Customers can close banners, which will remain hidden across all pages.
  - When multiple banners are active, the most recently activated banner is displayed.
- Managed banner state persistence using local storage.
- Ensured proper display and management of banners according to user interactions and URL parameters.