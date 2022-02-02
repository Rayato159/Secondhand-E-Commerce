import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { Role } from 'src/users/enum/role.enum';
import { Roles } from 'src/users/roles.decorator';
import { RolesGuard } from 'src/users/roles.guard';
import { Categories } from './categories.entity';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}

    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post()
    createCategory(
        @Body() createCategoryDto: CreateCategoryDto
    ) {
        return this.categoriesService.createCategory(createCategoryDto)
    }

    @Get()
    getCategories(): Promise<Categories[]> {
        return this.categoriesService.getCategories()
    }

    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Patch(':category_id/update')
    updateCategory( 
        @Param('category_id') category_id: string,
        @Body() updateCategoryDto: UpdateCategoryDto,
    ) {
        return this.categoriesService.updateCategory(category_id, updateCategoryDto)
    }

    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':category_id/delete')
    deleteCategory( 
        @Param('category_id') category_id: string
    ) {
        return this.categoriesService.deleteCategory(category_id)
    }
}
