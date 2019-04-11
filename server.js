const koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const cors = require('@koa/cors');
const schema = require('./schema');

const app = new koa();

app.use(cors());

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

const PORT = process.env.PORT || 5636;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));