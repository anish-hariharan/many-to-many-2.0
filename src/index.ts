import express from "express"
import { ApolloServer } from "apollo-server-express";
import { UserData } from "./DataSource/UserData";
import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDef } from "./GraphQL/typedefs";
import { resolver } from "./GraphQL/resolver";

const app = express();

let apolloServer : any;

const schema = makeExecutableSchema({
    resolvers: resolver,
    typeDefs: typeDef
})


async function startServer () {
    apolloServer = new ApolloServer({
        schema: schema
    })

    await apolloServer.start();
    apolloServer.applyMiddleware({app})
}

startServer()

UserData.initialize().then(() => console.log("connected")).catch((err) => console.log(err))

app.listen(9000, () => {
    console.log("Running in : localhost:5000/graphql")
})