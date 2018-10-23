const puppeteer = require('puppeteer');

(async () => {

    // Mở trình duyệt mới và tới trang google translate
    let needTranslate = "おはようございます";
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://translate.google.co.jp/?#ja/en/' + needTranslate);

    // Chạy đoạn JavaScript trong hàm này, đưa kết quả vào biến result
    const result = await page.evaluate(() => {
        let result = document.getElementById('result_box').innerText;
        return result;
    });
    // In ra kết quả và đóng trình duyệt
    console.log(result);
    await browser.close();
})();
