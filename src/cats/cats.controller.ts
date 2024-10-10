import { CatsService } from './cats.service';
import { Body, Put, Post, Controller, Get, Param, Delete } from '@nestjs/common';
import { CreateCatDto } from './CreateCatDto';
import { UpdateCatDto } from './UpdateCatDto';
import { Cat } from './CatEntity';
// 컨트롤러가 요청을 하는 것
@Controller('cats')
export class CatsController {

    constructor(private CatsService: CatsService) {}
    
    @Get()
    findAll():Cat[] {
        return this.CatsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') getId:number): Cat {
        return this.CatsService.findOne(getId);
    }

    @Post()
    create(@Body() CreateCatDto:CreateCatDto) {
        return this.CatsService.create(CreateCatDto);
    }

    @Put(':id')
    update(@Param('id') getId: number, @Body() updateCatDto:UpdateCatDto) {
        return this.CatsService.update(getId, updateCatDto);
    }

    @Delete(':id')
    remove(@Param('id') getId: number) {
        return this.CatsService.delete(getId);
    }
}
