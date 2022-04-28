import axios from 'axios'

const token = `Bearer ${JSON.parse(localStorage.getItem('token')).token}`

// Get products from the DB
export const getProductsAction = async () => {
    /* Send data to API to add the product */
    const config = {
        method: "get",
        url: `/api/products`,
      };
    const res = await axios(config)
    return res.status === 200 ? res.data : null
}

// Add a product to the DB
export const addProductAction = async (productData) => {
    /* Send data to API to add the product */
    const config = {
        method: 'post',
        url: '/api/products',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        data: productData
    }
    const res = await axios(config)
    return res.status === 201 ? res.data : null
}

// edit a product on the DB
export const editProductAction = async (productData) => {
    /* Send data to API to add the product */
    const config = {
        method: 'put',
        url: `/api/products/${productData.id}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        data: productData
      }
    const res = await axios(config)
    return res.status === 200 ? res.data : null
}

// Delete a product from the DB
export const deleteProductAction = async (productID) => {
    const config = {
        method: 'delete',
        url: `/api/products/${productID}`,
        headers: {
            'Authorization': token
        },
    }
    /* Send data to API to delete the product */
    const res = await axios(config)
    return res.status === 200 ? res.data : null
}

// Get images from the DB
export const getImagesAction = async () => {
    /* Send data to API to add the product */
    const config = {
        method: "get",
        url: `/api/carousel`,
      };
    const res = await axios(config)
    return res.status === 200 ? res.data : null
}

// Add an image to the DB
export const addImageAction = async (imageData) => {
    /* Send data to API to add the product */
    const config = {
        method: 'post',
        url: '/api/carousel',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        data: imageData
    }
    const res = await axios(config)
    console.log(res);
    return res.status === 201 ? res.data : null
}

// edit an image on the DB
export const editImageAction = async (imageData) => {
    /* Send data to API to add the product */
    const config = {
        method: 'put',
        url: `/api/carousel/${imageData.id}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        data: imageData
      }
    const res = await axios(config)
    return res.status === 200 ? res.data : null
}

// Delete an image from the DB
export const deleteImageAction = async (imageID) => {
    const config = {
        method: 'delete',
        url: `/api/carousel/${imageID}`,
        headers: {
            'Authorization': token
        },
    }
    /* Send data to API to delete the product */
    const res = await axios(config)
    return res.status === 200 ? res.data : null
}

// // Get user and repos
// export const getUserAndRepos = async (login) => {
//     const [user, repos] = await Promise.all([
//         api.get(`/users/${login}`),
//         api.get(`/users/${login}/repos`),
//     ])

//     return { user: user.data, repos: repos.data }
// }
