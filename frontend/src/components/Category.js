import categories from '../models/categories'
import { Link } from 'react-router-dom'

const Category = () => {

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <div className="font-bold md:text-3xl text-2xl text-center py-2">Mongsue ยินดีให้บริการ เลือกสินค้าที่ต้องการเลย!</div>
            <div className="md:flex md:flex-row md:space-x-6 text-black">

                {/* categories card */}
                {
                    categories.map((category, i) => {
                        return (
                            <Link to={`/products/${category.categoryEng.toLocaleLowerCase()}`} key={i} className="rounded shadow-lg w-64 mx-auto my-6 hover:bg-slate-200 transition duration-300">
                                <img className="object-cover w-64 h-48 mx-auto md:rounded-t" src={`/assets/images/categories/${category.categoryEng}.jpg`} alt="car" />
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