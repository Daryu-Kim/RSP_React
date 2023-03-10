const initialState = {
    number: 0,
};

const rootReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        default:
            return state;
    }
}