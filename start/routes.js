'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.post('/auth/register','/AuthController.register')
Route.post('/auth/signin','/AuthController.login')

//------Customers---
Route.get ('/elements/customers','/CustomerController.index')
Route.get('/elements/customers/count','/CustomerController.counting')
Route.post ('/elements/customers/add','/CustomerController.add')
Route.post ('/elements/customers/modify','/CustomerController.modify')
Route.delete('/elements/customers/:id','/CustomerController.delete')
Route.get('/elements/customers/:id','/CustomerController.view')

//------Workers---
Route.get ('/elements/workers','/WorkerController.index')
Route.post ('/elements/workers/add','/WorkerController.add')
Route.get('/elements/workers/:id','/WorkerController.view')

////------Service---
Route.post ('/elements/service/add','/ServiceController.add')
