import HomePage from "../pages/HomePage";

describe ("Home", () => {
	let homePage;

	beforeAll(async () => {
		homePage = new HomePage();
	});
	it("HomePage should be displayed", async () => {
		await homePage.visit();
	});
	
	it("NavBar should be displayed", async () => {
		await homePage.isNavBarDisplayed();

		const url = await homePage.getUrl();
		console.log(url);
	});
})