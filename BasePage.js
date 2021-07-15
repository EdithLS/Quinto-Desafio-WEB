export default class BesePage {
	async wait(time) {
		await page.waitForTimeout(time);
	}
	async getTitle() {
		return await page.title();
	}
	async getUrl() {
		return await page.url();
	}
}