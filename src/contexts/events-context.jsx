import React, { useContext } from 'react';
import useLocalStorage from '../hooks/use-local-storage';
const EventsContext = React.createContext();

export const useEvents = () => useContext(EventsContext);

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useLocalStorage('events', []);

  const getEvents = () => {
    console.log('getEvents');
    setEvents('getEvents');
  };

  return <EventsContext.Provider value={{ events, getEvents }}>{children}</EventsContext.Provider>;
};
