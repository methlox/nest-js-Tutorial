import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { MESSAGES } from '@nestjs/core/constants';
import { Response } from 'express';
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { Request } from 'supertest';

@Controller('customers')
export class CustomersController {

    constructor(private customersService: CustomersService){}

    // express way
    @Get(':id')
    getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response
    ) {
        // console.log(typeof id);
        const customer = this.customersService.findCustomerbyId(id);
        if(customer){
            res.send(customer);
        } else{
            res.status(400).send({msg: 'customer not found!'})
        }
    }

    // nestJS way
    @Get('/search/:id')
    searchCustomerbyId(@Param('id', ParseIntPipe) id: number){
        const customer = this.customersService.findCustomerbyId(id);
        if(customer) return customer;
        else throw new HttpException('customer not found', HttpStatus.BAD_REQUEST);
    }

}
