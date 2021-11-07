import axios from "axios";


export const fetchImages = async (currentPage?: number, name?: string, order?: string | null) => {
    const url = `https://jsonplaceholder.typicode.com${order ? `/albums/${order}` : ''}/photos?${currentPage ? `_page=${currentPage}` : ''}`
    try {
        const {data} = await axios.get(url)
        return data
    } catch (e) {
        console.log(e)
    }
}

export const getLength = async (order?: string | null) => {
    const url = `https://jsonplaceholder.typicode.com${order ? `/albums/${order}` : ''}/photos?`
    try {
        const {data} = await axios.get(url)
        return data
    } catch (e) {
        console.log(e)
    }
}

