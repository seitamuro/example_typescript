const sanitizeHTML = require("sanitize-html")

// サニタイズを行う｡><などがrarr;などにサニタイズされる｡
exports.sanitize = (str) => {
    return sanitizeHTML(str)
}

// サニタイズされるかどうかを判定する｡
exports.willSanitize = (str) => {
    return sanitizeHTML(str) != str
}