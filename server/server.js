const app = require("./app");
const {connectDB} = require("./src/config/db");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB(); // database connection
});
