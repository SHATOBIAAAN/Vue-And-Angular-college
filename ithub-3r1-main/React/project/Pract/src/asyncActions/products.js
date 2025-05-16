import { BASE_URL } from '../App'


export function fetchAllProducts(reducer, id) {
    return function (dispatch) {
        fetch(`${BASE_URL}/products/all`)
            .then(res => res.json())
            .then(products => dispatch(reducer(id ? { products, id } : products)))
            .catch(err => {
                console.error('Ошибка при загрузке всех продуктов:', err);
                return err;
            })
    }
}


export function fetchCategoriesProducts(reducer, id) {
    return function (dispatch) {
        fetch(`${BASE_URL}/categories/${id}`)
            .then(res => res.json())
            .then(products => dispatch(reducer(products)))
            .catch(err => { 
                console.error('Ошибка при загрузке продуктов категории:', err);  // Обновлено сообщение об ошибке
                window.location.pathname = 'err';  // Переход на страницу ошибки
            })
    }
}
