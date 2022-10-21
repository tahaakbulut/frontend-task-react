import React, { useContext } from 'react';
import useLocalStorage from '../hooks/use-local-storage';
const EventsContext = React.createContext();
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export const useEvents = () => useContext(EventsContext);

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useLocalStorage('events', []);
  const [keyword, setKeyword] = useLocalStorage('keyword', null);
  const [pageData, setPageData] = useLocalStorage('pageData', {});

  const getEvents = async ({ keyword, size, page }) => {
    const response = await fetch(`${API_URL}?keyword=${keyword}&size=${size}&page=${page}&apikey=${API_KEY}`);
    const responseJson = await response.json();
    setEvents(responseJson._embedded?.events || []);
    setKeyword(keyword);
    setPageData({ links: responseJson._links, page: responseJson.page });
  };

  return <EventsContext.Provider value={{ keyword, pageData, events, getEvents }}>{children}</EventsContext.Provider>;
};
