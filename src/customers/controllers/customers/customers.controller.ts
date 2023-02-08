import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

    @Get('')
    getCustomer() {
        return {
            id: 1,
            email: 'sid@gmail.com',
            createdAt: new Date(),

        };
    }

}
