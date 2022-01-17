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
        async createProduccion(root, { estacion, actividad, cantidad }, { models }){
            return await models.produccion.create( {estacion, actividad, cantidad} )
        }
    }

}

module.exports = resolvers