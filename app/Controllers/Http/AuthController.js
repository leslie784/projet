'use strict'
const User = use('App/Models/User')

class AuthController {

    async login({request, response, params, auth}){
        const userInput = request.only(['username','password'])
        const selectedUser = await User.findBy('username', userInput.username)
        if(selectedUser){
            try{
                const token = await auth.withRefreshToken().attempt(selectedUser.username, userInput.password)
            return    await  (200, 'Logged In Successfully', token)
             }
            catch (e) {
            return    await  (401, 'Incorrect Credentials', e)
            }      
        } else {
            return  await (401, 'Incorrect Credentials', null)
        }
    }
    
    async register({request}){
        
        const user = new User()
        user.username = request.input('username') 
        user.email = request.input('email')
        user.password = request.input('password')
        await user.save()
        return await ( 'User added successfully', null)
        
    }
}

module.exports = AuthController
