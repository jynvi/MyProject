//Jyoti Sharma
const Initial_State = {
ImageList:""
};
export default (state = Initial_State, action) => {

  
  switch (action.type) {
    case "ImageList":
      return { ...state, ImageList: action.payload};
    default:
      return state;
  }
};

//Jyoti Sharma