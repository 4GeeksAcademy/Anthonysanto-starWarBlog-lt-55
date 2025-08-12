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
    naveFav: []
 

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
      if (store.naveFav.includes(action.payload)) {
        update= store.naveFav.filter((nave) => nave != action.payload)
      } else {
        update = [...store.naveFav, action.payload];
      }
      return {
        ...store,
        naveFav: update
      };

    default:
      throw Error('Unknown action.');
  }    
}
