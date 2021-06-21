'use strict'
const Worker = use('App/Models/Worker')
const Database = use('Database')

class WorkerController {
    async index() {

        const list =  await Worker.query().fetch()
        return await list
    }

    async add({request}){

        const input = request.only(['firstname','lastname', 'email','skills','description','mark','phone','address'])
        const worker= new Worker()
        worker.firstname=input.firstname
        worker.lastname=input.lastname
        worker.email=input.email
        worker.skills=input.skills
        worker.description=input.description
        worker.mark=input.mark
        worker.phone=input.phone
        worker.address=input.address
        await worker.save()
        return await  ('Worker added successfully', worker)

    }


    async view({params}){

        const selectedWorker = await Worker.find(params.id)
            
        if(selectedWorker){
            return await ('Worker found', selectedWorker)
        }else{
            return  await ('Worker not found', null)
        }
    }

    async counting(){

        const count = await Database
            .from('workers')
            .count()                                     
            const total = count[0]['count(*)']

            return await ('data counted', total)
    }
}

module.exports = WorkerController
