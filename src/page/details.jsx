import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEvents } from '../contexts/events-context';
import { SiGithubsponsors } from 'react-icons/si';
import { BiArrowBack, BiCalendar } from 'react-icons/bi';

const Details = () => {
  const { event, getEvent } = useEvents();
  const params = useParams();

  useEffect(() => {
    getEvent(params.id);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 space-y-4 text-center">
      <img src="https://tarfin.com/img/logo.svg" alt="Tarfin Logo" />
      {event.name && (
        <>
          <h1 className="text-2xl font-medium text-dark">{event.name}</h1>
          <h2 className="text-sm font-medium text-dark">
            {event.info} / {event.locale}
          </h2>
          <div className="flex items-center">
            <BiCalendar className="mr-2" />
            {event.dates.start.localDate} - {event.dates.start.localTime} {event.dates.timezone}
          </div>
          <div className="text-center">
            {event.priceRanges?.map((price, i) => (
              <p key={i} className="text-dark">
                {price.type}:
                <b>
                  {price.min}/{price.max} {price.currency}
                </b>
              </p>
            ))}
          </div>
          <div className="flex items-center">
            <SiGithubsponsors className="mr-2" color="red" /> {event.promoter.name}
          </div>
          <div className="flex flex-wrap justify-center gap-1 lg:gap-2">
            {event.images
              .filter((img) => img.ratio == '16_9')
              .map((image) => (
                <div key={image.url} className="md:basis-1/3 lg:basis-1/4">
                  <img src={image.url} alt="Tarfin Logo" width={250} className="w-full" />
                </div>
              ))}
          </div>
        </>
      )}
      <Link to="/" className="inline-flex items-center">
        <BiArrowBack className="mr-2" />
        Home
      </Link>
    </div>
  );
};
export default Details;
