const qrcode = require('qrcode')
const uuid = require('uuid')

/**
 * 
 * @param {boolean} status 
 * @param {string} message 
 * @returns 
 */
exports.Response = (status, message) => {
    return { "status": status, "message": message }
}

/**
 * 
 * @param {string} data 
 */
exports.QRCodeGenerator = (data) => {
    try {
        const uniqueId = uuid.v4().replaceAll("-","")
        data.employeeId = uniqueId // add the unique id for the employee
        const stringlyData = JSON.stringify(data) // converts our data to string
        const path = `${uniqueId}.png` // set the path of the file
        qrcode.toFile(path, stringlyData) // generate the qrcode
        return true
    } catch (err) {
        throw new Error("failed to generate qrcode")
    }
}

/**
 * 
 * @param {Object} schema - This is our Joi Schema
 * @param {Object} dataObject - This is our json object from the client
 */
exports.Validate = (schema, dataObject) => {
    let schemaValidation = schema.validate(dataObject);
    if (schemaValidation.error) {
        throw new Error(schemaValidation.error.message)
    }
}