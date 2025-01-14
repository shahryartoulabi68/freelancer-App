
export function persianNumber(number) {
    // تبدیل عدد به رشته و اضافه کردن ویرگول بین هر سه رقم
    const formattedNumber = number.toLocaleString('en-US');

    // تبدیل ارقام لاتین به فارسی
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    const persianNumber = formattedNumber.replace(/\d/g, (digit) => persianDigits[digit]);

    return persianNumber;
}

// مثال:
// const number = 123456789;
// console.log(convertToPersianNumber(number)); // خروجی: ۱۲۳,۴۵۶,۷۸۹