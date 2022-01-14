const getProductsAll = async (search) => {
    const res = await fetch(`http://localhost:3000/api/products/all&search=${search}`, {
        method: 'GET'
    })

    if(res.status === 200) {
        const products = res.json()
        return products
    }

    return res.json()
}