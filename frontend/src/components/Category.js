import categories from '../models/categories'
import { Link } from 'react-router-dom'

const Category = () => {

    return (
        <div className="max-w-6xl mx-auto py-10 px-4 mt-4">
            <div className="font-bold md:text-3xl text-2xl text-center">Mongsue ยินดีให้บริการ เลือกสินค้าที่ต้องการเลย!</div>
            <div className="md:flex md:space-x-6 text-black">

                {/* categories card */}
                {
                    categories.map((category, i) => {
                        return (
                            <Link to={`/products/${category.categoryEng.toLocaleLowerCase()}`} key={i} className="shadow-lg w-64 mx-auto my-6 hover:bg-slate-200 hover:scale-110 transition duration-300">
                                <img className="object-cover md:w-64 md:h-48 w-64 h-48 mx-auto" src={`/assets/images/categories/${category.categoryEng}.jpg`} alt="car" />
                                <div className="px-4 py-6 font-bold text-center text-xl">
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