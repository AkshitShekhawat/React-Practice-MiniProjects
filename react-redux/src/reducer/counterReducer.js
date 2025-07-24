//THis is where we are definig the current state. what is a current state, count is set to zero That is
//what the current state is      

const initailState = { count: 10};

//now we hava reducer over here which takes two parameter one is the state of the application, the current state and the action that has happened.
//actoin can be anything you can define number of action as you want, but sincde its your counter example we have two action incrememnt and decrement
//these are the two functionalities that we are defining. So action are basically like an event and it consists of an object which has
//the type propertyof course it can have  more data in it, for now more data is not required. for example if you want to do an
//increment by certain value okay so you can transmit a value over here like type increment and the value whatever value this functions so if increment
//function  gets uh it can have a paremeter and that parameter can be transimitted along wwiht this action object and that can bve used over here
//that is possibel so like you are accesing  action.type you can have action and you can have action and one more porperty over here called value 
//and you can access the value form the reducer ockay so that's also possible so for now we can't use bex we keep things simple
//so now wahts happen in reducer for every  action the reducer return a new state object and it does not change the original state

// okay we are done with action , rducer now we will be using this reducer when creataing a Redux store and store will hold all the stare of uor application
//it will use the reducer to figure out how to update the state and in a larger project you can have a multiple reducer for different parts for your app
//for example  lie user cart data item, you can have multiple reducers that have their own logic for but this is a simple counter ex 
const counterReducer = (state = initailState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1};

        case 'DECREMENT':
            return { count: state.count - 1};
    
        default:
            return state;
    }

};

export default counterReducer;