import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getRequest,
  patchRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from '../../utils/requests';
import {
  GET_TASKS_API_URL,
  POST_TASK_API_URL,
  UPDATE_COMPLETED_TASK_API_URL,
  UPDATE_TASK_API_URL,
  DELETE_TASK_API_URL,
} from '../../utils/apiUrl';

const getItemsFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (userId) => {
    // console.log(apiUrl, userId);
    const fullPath = `${apiUrl}/${userId}`;
    return await getRequest(fullPath);
  });
};

const deleteItemsFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (itemId) => {
    // console.log(apiUrl, itemId);
    const options = {
      method: 'DELETE',
    };
    const fullPath = `${apiUrl}/${itemId}`;
    return await deleteRequest(fullPath, options);
  });
};

const updateCompletedFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (options) => {
    // console.log(options);
    return await patchRequest(apiUrl, options);
  });
};

const postItemFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (postData) => {
    // console.log(postData);
    const options = {
      body: JSON.stringify(postData),
    }; // JSON 형식으로 변환
    return await postRequest(apiUrl, options);
  });
};

const putItemFetchThunk = (actionType, apiUrl) => {
  return createAsyncThunk(actionType, async (updateData) => {
    // console.log(postData);
    const options = {
      body: JSON.stringify(updateData),
    }; // JSON 형식으로 변환
    return await putRequest(apiUrl, options);
  });
};

export const fetchDeleteItem = deleteItemsFetchThunk(
  'fetchDeleteItem',
  DELETE_TASK_API_URL
);

export const fetchPutItem = putItemFetchThunk(
  'fetchPutItem',
  UPDATE_TASK_API_URL
);

export const fetchPostItem = postItemFetchThunk(
  'fetchPostItem',
  POST_TASK_API_URL
);

export const fetchGetItems = getItemsFetchThunk(
  'fetchGetItems',
  GET_TASKS_API_URL
);

export const fetchUpdateCompleted = updateCompletedFetchThunk(
  'fetchUpdateCompleted',
  UPDATE_COMPLETED_TASK_API_URL
);
const handleFulfilled = (stateKey) => (state, action) => {
  state[stateKey] = action.payload;
};

const handleRejected = (action) => {
  console.log('error' + action.payload);
};

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    getItemsData: null,
    updateCompletedDate: null,
    postItemData: null,
    deleteItemsFetchThunk: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetItems.fulfilled, handleFulfilled('getItemsData'))
      .addCase(fetchGetItems.rejected, handleRejected)
      .addCase(
        fetchUpdateCompleted.fulfilled,
        handleFulfilled('updateCompletedDate')
      )
      .addCase(fetchUpdateCompleted.rejected, handleRejected)
      .addCase(fetchPostItem.fulfilled, handleFulfilled('postItemData'))
      .addCase(fetchPostItem.rejected, handleRejected)
      .addCase(fetchPutItem.fulfilled, handleFulfilled('putItemData'))
      .addCase(fetchPutItem.rejected, handleRejected)
      .addCase(fetchDeleteItem.fulfilled, handleFulfilled('deleteItemData'))
      .addCase(fetchDeleteItem.rejected, handleRejected);
  },
});

export default apiSlice.reducer;
