const express = require("express");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const { connectDB } = require("./db");
const schema = require("./graphql/schema");
const app = express();

dotenv.config();

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listenning on port ${PORT}`);
});
