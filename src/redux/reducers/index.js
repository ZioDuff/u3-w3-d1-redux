//* qui ci saranno le nostre funzioni PURE che saranno il reducer del nostro Store

//* il reducer dopo una DISPATCH prende lo stato corrente e un ACTION per generare uno stato GENERALE, che sara lo stato di STORE

//!ogni volta che sara fatta una DISPATCH ci sara bisogno di un TYPE ed un eventuale PAYLOAD

const initialState = {
  favorites: {
    content: [],
  },
}

const mainReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: [...state.favorites.content, action.payload],
        },
      }
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        favorites: {
          ...state.favorites,

          content: state.favorites.content.filter(
            (companyName) => companyName !== action.payload
          ),
        },
      }
    default:
      return state
  }
}

export default mainReducers
