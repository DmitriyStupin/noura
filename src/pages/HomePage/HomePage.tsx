const HomePage = () => {
  return (
    <div className='flex flex-col gap-10 max-w-7xl mx-auto px-3'>
      <h1 className='text-6xl font-medium'>
        Доброе утро, Имя!
      </h1>
      <section className='flex flex-col gap-4'>
        <h2 className='text-2xl font-medium'>
          Последние записи
        </h2>
      </section>
    </div>
  );
};

export default HomePage;