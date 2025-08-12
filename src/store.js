export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    message: 'hola',
    charFav: []
 

  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
      case 'like':
      return {
        ...store,
        message: action.payload
      };
    case 'toggle':
      let update = [];
      if (store.charFav.includes(action.payload)) {
        update= store.charFav.filter((character) => character != action.payload)
      } else {
        update = [...store.charFav, action.payload];
      }
      return {
        ...store,
        charFav: update
      };

    default:
      throw Error('Unknown action.');
  }    
}
