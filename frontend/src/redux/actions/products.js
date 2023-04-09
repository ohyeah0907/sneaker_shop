import slices from "../slices";

export const getProducts = async(dispatch) => {
    const result = await fetch(process.env.REACT_APP_BACKEND_URL, {method:'GET'})
    if(result.ok)
        result.json().then(res => {
            dispatch(slices.products.actions.setData(res));
        })
    else
        dispatch(slices.notify.actions.showNotify({
            error: true,
            message: result.statusText,
        }))
}
export const setProducts = async (dispatch, data) => {
    dispatch(slices.products.actions.setData(data))
}