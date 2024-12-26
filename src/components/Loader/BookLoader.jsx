import bookLoader from '../../assets/books/book-loader.gif';

const BookLoader = () => {
  return (
    <div className='book-loader flex items-center justify-center bg-[#F5F7F6] h-screen z-40'>
        <div className='h-[25rem] w-[25rem] flex items-center justify-center'>
            <img
                src={bookLoader}
                alt="Dribbble"
                className='object-cover'
            />
        </div>
    </div>
  );
};

export default BookLoader;