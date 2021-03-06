const { gql } = require('apollo-server-express')

const typeDefs = gql`

type Produccion{
    id: Int!
    estacion: Int!
    actividad: String!
    cantidad: Int!
}

type Query{
    getProducciones: [Produccion],
    getProduccion(id: Int!): Produccion
}


type Mutation{
    createProduccion(estacion: Int!, actividad: String!, cantidad: Int!): Produccion!
}
`
module.exports = typeDefs
