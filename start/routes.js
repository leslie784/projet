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
Route.post('/auth/signin','auth/AuthController.login')

//------Customers---
Route.get ('/elements/customers','/elements/CustomerController.index')
Route.get('/elements/customers/count','/elements/CustomerController.counting')
Route.post ('/elements/customers/add','/elements/CustomerController.add')
Route.post ('/elements/customers/modify','/elements/CustomerController.modify')
Route.delete('/elements/customers/:id','/elements/CustomerController.delete')
Route.get('/elements/customers/:id','/elements/CustomerController.view')
