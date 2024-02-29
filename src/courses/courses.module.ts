/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

@Module({})
export class CoursesModule {
    controllers: [CoursesController]
    providers: [CoursesService]
}
