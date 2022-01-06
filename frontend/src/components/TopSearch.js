import itemLists from "../models/itemLists"

const TopSearch = () => {

    return (
        <div className="max-w-6xl md:mx-auto md:text-left text-center md:px-4 px-6 py-4 md:border-2 md:rounded md:border-slate-500">
            <div className="font-bold text-xl">คำค้นหายอดนิยม</div>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-2 px-6 py-4 text-sm text-center">
                {
                    itemLists.map((item, i) => {
                        return (
                            <div key={i} className="flex space-x-0.5">
                                <div>{item.keyWord}</div>
                                <div className="text-gray-400">{`(${item.count})`}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopSearch