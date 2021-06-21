'use strict'
const Service = use('App/Models/Service')
const Database = use('Database')

class ServiceController {

    async add({request,params}){

        const input = request.only(['rendering_mark','name','worker','comment'])
        const service = new Service()
        service.rendering_mark=input.rendering_mark
        service.name=input.name
        service.worker=input.worker
        service.comment = input.comment
        await service.save()
        return await  ('Service added successfully', service)

    }
}

module.exports = ServiceController
