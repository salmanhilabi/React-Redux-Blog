export const addToList = (data) => {
  return {
    type: 'ADD_POST',
    payload: data
  }
}

export const updatePost = (id, data) => {
  return {
    type: 'UPDATE',
    id,
    payload: data
  }
}

export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id
  }
}
