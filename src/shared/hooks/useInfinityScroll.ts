import { useState, useEffect, useCallback } from 'react';

type TUseInfinityScroll = {
  data: any[];
  limit?: number;
};

export const useInfinityScroll = ({ data, limit = 5 }: TUseInfinityScroll) => {
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState(data.slice(0, limit));
  const [hasMore, setHasMore] = useState(data.length > limit);

  useEffect(() => {
    setCards(data.slice(0, limit));
    setHasMore(data.length > limit);
    setPage(1);
  }, [data, limit]);

  const loadMore = useCallback(() => {
    if (!hasMore) return;

    const nextPage = page + 1;
    const nextLimit = nextPage * limit;
    const nextCards = data.slice(0, nextLimit);

    setCards(nextCards);
    setPage(nextPage);
    setHasMore(data.length > nextCards.length);
  }, [page, limit, hasMore, data]);

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollHeight - (scrollTop + clientHeight) < 100) {
      loadMore();
    }
  }, [loadMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { cards, hasMore };
};
