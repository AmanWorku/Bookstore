const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const categoryReducer = (state = 0, action = {}) => {
    switch (action.type) {
        case CHECK_STATUS:
            return 'Under Constreuction.';
        default:
            return state;
}
}
export const checkStatus = () => {
    type: CHECK_STATUS
}

export default categoryReducer;