////////////NEWS
export const NEWS_ADD = 'NEWS_ADD'
export const NEWS_DELETE = 'NEWS_DELETE'

export const addNews = (symbol, news) => ({
  type: NEWS_ADD,
  symbol,
  news
})

export const deleteNews = (symbol) => ({
  type: NEWS_DELETE,
  symbol
})

export const askNews = (symbol) => (dispatch, getState) => {
  return fetch(`https://api.robinhood.com/midlands/news/${symbol}/`, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/json',
      'Authorization': getState().tokenReducer.token
    })
  })
  .then(response => response.json())
  .then(jsonResult => {
    //console.log(jsonResult);
    dispatch(addNews(symbol, jsonResult));
  })
  .catch(function(reason) {
    console.log(reason);
  });
}
