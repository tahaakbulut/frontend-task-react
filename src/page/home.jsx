import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/pagination';
import { Search } from '../components/search';
import { Table } from '../components/table';
import { useEvents } from '../contexts/events-context';
import { AiOutlineEye } from 'react-icons/ai';

function Home() {
  const [searchKey, setSearchKey] = useState(null);
  const { events, getEvents, pageData } = useEvents();
  const navigate = useNavigate();

  useEffect(() => {
    getEvents({ keyword: searchKey, size: 10, page: 0 });
  }, [searchKey]);

  const tableData = events.map((event) => {
    const priceRanges = event.priceRanges?.map((price, i) => (
      <p key={i}>
        {price.type}:{price.min}/{price.max} {price.currency}
      </p>
    ));

    return {
      id: event.id,
      name: event.name,
      priceRanges,
      dates: event.dates.start.localDate,
      type: event.type,
    };
  });

  const handleClickPagination = (number) => {
    getEvents({ keyword: searchKey, size: 10, page: number });
  };

  const handleTableAction = (e) => {
    navigate(`/details/${e}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-10">
      <img src="https://tarfin.com/img/logo.svg" alt="Tarfin Logo" />
      <Search placeholder={'Search me'} setSearchKey={setSearchKey} delay={700} className="my-6" />
      <Table
        tableData={tableData}
        handleAction={handleTableAction}
        actionTag={<AiOutlineEye size="1.2rem" className="inline-block" />}
      />
      <Pagination
        totalPage={pageData?.page?.totalPages}
        currentPage={pageData?.page?.number}
        handleClick={handleClickPagination}
      />
    </div>
  );
}

export default Home;
