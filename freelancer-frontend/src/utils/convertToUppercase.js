export default function convertToUppercase(sentence) {
    let words = sentence.split(' ');
    let uppercaseWords = words.map(word => word.toUpperCase());
    return uppercaseWords.join(' ');
}