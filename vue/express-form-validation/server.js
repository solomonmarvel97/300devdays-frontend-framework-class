const express = require('express');
const cors = require('cors');
const Joi = require('joi');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Assuming you have a swagger.json file

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define MongoDB schema and model
const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  message: {
    type: String,
    required: true,
    minlength: 10,
  },
});

const FormData = mongoose.model('FormData', formDataSchema);

// Joi schema for form data validation
const schema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(10).required(),
});

// Route for form submission
app.post('/submit-form', async (req, res) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const formData = new FormData(req.body);
    await formData.save();

    res.json({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Swagger UI endpoint
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 3001; // Port to run the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

