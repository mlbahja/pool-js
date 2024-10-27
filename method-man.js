function words(arr) {
    return arr.split(" ");
}
function sentence(arr) {
    return arr.join(" ");
}
function yell(arr) {
    return arr.toUpperCase();
}
function whisper(arr) {
    return `*${arr.toLowerCase()}*`;
}
function capitalize(arr) {
    if (arr.length === 0) return "";
    return arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase();
}
