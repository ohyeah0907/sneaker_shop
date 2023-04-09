import slices from "../slices";

const reducer = {}

Object.keys(slices).forEach((key) => {
    reducer[key] = slices[key].reducers;
})

export default reducer;