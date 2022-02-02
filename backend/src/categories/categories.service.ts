import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from './categories.entity';
import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto'

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(CategoriesRepository)
        private categoriesReposiotry: CategoriesRepository,
    ) {}

    async createCategory(createCategoryDto: CreateCategoryDto): Promise<Categories> {
        try {
            const { name } = createCategoryDto
            const category = this.categoriesReposiotry.create({
                name,
            })

            return await this.categoriesReposiotry.save(category)
        } catch(e) {
            throw new BadRequestException({
                message: 'Please check your input and try again.'
            })
        }
    }

    async getCategories(): Promise<Categories[]> {
        try {
            const categories = await this.categoriesReposiotry.find()
            return categories
        } catch(e) {
            throw new NotFoundException({
                message: 'Categories are empty.'
            })
        }
    }

    async findCategory(category: string): Promise<Categories> {
        try {
            const categoryFinder = await this.categoriesReposiotry.findOne({ where: { name: category } })
            return categoryFinder
        } catch(e) {
            throw new NotFoundException({
                message: 'Category not found.'
            })
        }
    }

    async updateCategory(category_id: string, updateCategoryDto: UpdateCategoryDto): Promise<Categories> {
        try {
            const category = await this.categoriesReposiotry.findOne(category_id)
            const { name } = updateCategoryDto
            
            category.name = name

            await this.categoriesReposiotry.save(category)
            return category
        } catch(e) {
            throw new NotFoundException({
                message: 'Category not found.'
            })
        }
    }

    async deleteCategory(category_id: string): Promise<Categories> {
        try {
            const category = await this.categoriesReposiotry.findOne(category_id)
            await this.categoriesReposiotry.delete(category)
            return category
        } catch(e) {
            throw new NotFoundException({
                message: 'Category not found.'
            })
        }
    }
}
