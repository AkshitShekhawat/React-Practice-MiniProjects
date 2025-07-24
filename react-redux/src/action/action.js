export const increment = () => ({
    type:'INCREMENT' //This action tells redux that the state should cahnge in a way that corresponds to the icrement action in the reducer //we define this in reducers
});

export const decrement = () => ({
    type:'DECREMENT'
});