const uuid = require('uuid')
const qrcode = require('qrcode')

function generateProductCode(name, price) {
    let uniqueProductId = uuid.v4().replaceAll('-', "")
    let qrcodeContent = {
        uniqueProductId,
        price,
        name
    }
    return qrcodeContent
}

/**
 * This function generates a product info qrcode
 * @param {string} name 
 * @param {number} price 
 */
function generateQRCode(name, price) {
    let data = generateProductCode(name, price) //This is an object
    // This is what we will use as the file name to keep each qrcode image unique
    let uniqueProductId = data.uniqueProductId
    let fileName = `${uniqueProductId}.png`
    let stringlydata = JSON.stringify(data)

    qrcode.toFile(fileName, stringlydata)
    console.log(`QRCode generated with file name ${fileName}`)
}

generateQRCode("Headset", 400_000)