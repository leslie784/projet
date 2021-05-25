'use strict'
const Customer = use('App/Models/elements/Customer')
const Database = use('Database')

class CustomerController {

    async index() {

        const list =  await Customer.query().fetch()
        return await list
    }

    async add({request}){

        const input = request.only(['id','name','mark', 'comment'])
        const customer= new Customer()
        customer.id_customer= input.id
        customer.name=input.name
        customer.mark=input.mark
        customer.comment=input.comment
        await customer.save()
        return await  ('Customer added successfully', customer)

    }

    async modify({request}){
        
        const id=request.input('id')
        const name=request.input('name')
        const mark=request.input('mark')
        const comment=request.input('comment')
        const selectedCustomer = await Customer.find(id)
        if(selectedCustomer){
            const affectedRows = await Database
            .table('customers')
            .where('customer_id', id)
            .update({ customer_id : id, name: name, mark: mark, comment: comment })

                return await ('Customer updated successfully', selectedCustomer)
            }else{
                return  await ('Customer not found', null)
            }
   }

   async delete({params}){

        const selectedCustomer = await Customer.find(params.id)
        if(selectedCustomer){
            const affectedRows = await Database
            .table('customers')
            .where('customer_id', params.id)
            .delete()
        return  await ('Customer deleted', selectedCustomer)
        }else{
            return  await  ('Customer not found', null)
        }
    }

    async view({params}){

        const selectedCustomer = await Customer.find(params.id)
            
        if(selectedCustomer){
            return await ('Customer found', selectedCustomer)
        }else{
            return  await ('Customer not found', null)
        }
    }

    async counting(){

        const count = await Database
            .from('customers')
            .count()                                     
            const total = count[0]['count(*)']

            return await ('data counted', total)
    }
    
}

module.exports = CustomerController
