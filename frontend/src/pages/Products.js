const Products = () => {

    const tests = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    return (
        <div className="Products">
            <div className="max-w-6xl mx-auto my-16">
                <div className="flex flex-col justify-center">
                    <div className="grid grid-cols-5 gap-x-20 gap-y-12 mx-auto">
                        {tests.map((test) => {
                            return (
                                <div className="bg-slate-300 w-32 h-36 text-center">
                                    {test}
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex space-x-3 justify-center mt-6">
                        <div>
                            {`<`}
                        </div>
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                        <div>
                            4
                        </div>
                        <div>
                            5
                        </div>
                        <div>
                            {`>`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
