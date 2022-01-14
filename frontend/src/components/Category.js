import categories from '../models/categories'
import { Link } from 'react-router-dom'

const Category = () => {

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <div className="font-bold md:text-3xl text-2xl text-center py-2">Mongsue ยินดีให้บริการ เลือกสินค้าที่ต้องการเลย!</div>
            <div className="md:flex md:flex-row md:space-x-6 text-black flex flex-col">

                {/* categories card */}
                {
                    categories.map((category, i) => {
                        return (
                            <Link to={`/products?category=${category.categoryEng.toLocaleLowerCase()}`} key={i} className="border border-gray-300 rounded shadow-lg md:w-64 mx-auto my-6 hover:bg-slate-200 hover:scale-105 transition duration-300 py-4">
                                <div className="flex bg-amber-400 md:w-auto w-64 h-46 justify-center p-6 mx-auto">
                                    <img src="https://img.icons8.com/bubbles/100/000000/car.png"/>
                                </div>
                                <div className="px-4 py-6 md:w-auto w-64 mx-auto font-bold text-center text-xl">
                                    {category.categoryThai}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category