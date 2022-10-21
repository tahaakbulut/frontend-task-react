import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEvents } from '../contexts/events-context';
import { SiGithubsponsors } from 'react-icons/si';
import { BiArrowBack, BiCalendar } from 'react-icons/bi';

const Details = () => {
  const { events } = useEvents();

  const params = useParams();
  const event = events.find((e) => e.id == params.id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 space-y-4">
      <img src="https://tarfin.com/img/logo.svg" alt="Tarfin Logo" />
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
            {price.type}:{' '}
            <b>
              {price.min}/{price.max} {price.currency}
            </b>
          </p>
        ))}
      </div>
      <div className="flex items-center">
        <SiGithubsponsors className="mr-2" color="red" /> {event.promoter.name}
      </div>
      <div className="flex space-x-4 my-5">
        {event.images
          .filter((img) => img.ratio == '16_9')
          .map((image) => (
            <img key={image.url} src={image.url} alt="Tarfin Logo" width={150} />
          ))}
      </div>
      <div className="flex flex-col items-center justify-center pt-5">
        <Link to="/" className="inline-flex items-center">
          <BiArrowBack className="mr-2" />
          Home
        </Link>
      </div>
    </div>
  );
};
export default Details;
