export const typedefs = `

type User {
    id: Int
    name: String
    age: Int
}

type Contacts {
    id: Int
    job: String
    experience : String
    details : [User]
}

input userInput {
    name: String
    age: Int
}

input userDetails {
    job: String
    experience : String
}

type Mutation {
    createUser(user: userInput, details: userDetails): String!
    deleteUser(id:Int): String!
}

type Query {
    greet : String!
    getUser(id: Int!):Contacts!
    getUsers: [Contacts!]
}

`