import { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import Filters from '../../components/Filters/Filters';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Pagination } from '../../components/Pagination/Pagination';
import { useMonuments } from '../../hooks/useMonuments';
import './Saved.css';

export const Saved = () => {
  const { filters, addToFilters, removeFromFilters, monuments = [], activeFilters } = useMonuments();

  const itemsPerPage = 6;
  const [page, setPage] = useState(1);

  // reset to first page when filter results change
  useEffect(() => {
    setPage(1);
  }, [monuments, activeFilters]);

  // const page = useMemo(() => {
  //   return 1;
  // }, [monuments, activeFilters]);

  const total = monuments.length;
  const start = (page - 1) * itemsPerPage;
  const paged = monuments.slice(start, start + itemsPerPage);

  return (
    <>
      <Header />
      <div>
        <div className="hero">
          <h1>Your Collection</h1>
          <p>
            A definitive digital repository encompassing millennia of human achievement. Explore high-fidelity records,
            architectural documentation, and historical narratives from the world's most significant cultural sites.
          </p>
        </div>

        <div className="middle">
          <Filters
            filters={filters}
            addToFilters={addToFilters}
            removeFromFilters={removeFromFilters}
            activeFilters={activeFilters}
          />

          <div className="content">
            <div className="cards">
              {paged.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  country={item.country}
                  city={item.city}
                  images={item.images}
                />
              ))}
            </div>

            <Pagination totalItems={total} itemsPerPage={itemsPerPage} currentPage={page} onPageChange={setPage} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
