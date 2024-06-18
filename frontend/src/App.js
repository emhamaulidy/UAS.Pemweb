import React, { useState, useEffect } from 'react';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5000'); 
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Daftar Berita</h1>
      <ul>
        {news.map((item) => (
          <li key={item.id_berita}>{item.judul_berita}</li> 
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
