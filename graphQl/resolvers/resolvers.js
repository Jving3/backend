const resolvers = {

    Query: {

        async getProducciones(root, args, { models }){
            return await models.produccion.findAll()
        },
        async getProduccion(root, args, { models }){
            return await models.produccion.findByPk(args.id)
        }

    },
    Mutation: {
        async createProduccion(root, { estacion, tipo, cantidad }, { models }){
            return await models.produccion.create( {estacion, tipo, cantidad} )
        }
    }

}

module.exports = resolvers