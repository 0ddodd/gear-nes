import { UpdateCatDto } from './UpdateCatDto';
import { CreateCatDto } from './CreateCatDto';
import { Injectable } from '@nestjs/common';
import { Cat } from './CatEntity';

@Injectable()
export class CatsService {
    private cats:Cat[] = [];
    
    findAll():Cat[] {
        return this.cats;
    }

    findOne(id: number):Cat {
        return this.cats.find(cat => cat.id === id);
    }

    create(CreateCatDto: CreateCatDto) {
        this.cats.push({
            id: this.cats.length + 1,
            ...CreateCatDto
        })
    }

    update(id: number, UpdateCatDto: UpdateCatDto) {
        const cat = this.findOne(id);
        this.delete(id);
        this.cats.push({...cat, ...UpdateCatDto});
    }

    delete(id: number) {
        this.cats = this.cats.filter(cat => cat.id !== id);
    }
}
