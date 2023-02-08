import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {

    users = [
        {
            id: 1,
            email: 'sid@gmail.com',
            createdAt: new Date(),

        },
        {
            id: 2,
            email: 'ryans@gmail.com',
            createdAt: new Date(),

        },
        {
            id: 3,
            email: 'sans@gmail.com',
            createdAt: new Date(),

        }
    ]

    findCustomerbyId(id: number){
        return this.users.find((user) => 
        user.id === id)
    }

}
