const Joi = require('joi');

exports.employeeRegistrationSchema = Joi.object({
    employeeName: Joi.string().min(3).required(),
    employeeDepartment: Joi.string().min(3).required()
})
