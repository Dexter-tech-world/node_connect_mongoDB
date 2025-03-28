const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Replace with your MongoDB connection string. For local MongoDB use:
const mongoURI = 'mongodb://localhost:27017/your-db-name';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define the User schema based on your sample schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create a model. The third parameter 'users' tells Mongoose to use the "users" collection.
const User = mongoose.model('User', userSchema, 'users');

// GET endpoint to retrieve a user by id only if their age is greater than 21
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;

  // Validate the userId is a valid ObjectId.
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  try {
    // Query the user collection for a document with a matching _id and age > 21
    const user = await User.findOne({ _id: userId, age: { $gt: 21 } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json(user);
  } catch (err) {
    console.error("Error retrieving user:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
