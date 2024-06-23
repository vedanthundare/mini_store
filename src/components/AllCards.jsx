function AllCards({ data }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(singleItem => (
          <div
            key={singleItem.id}
            className="bg-white shadow-md rounded-lg overflow-hidden h-[590px] flex flex-col justify-center items-center w-[350px]"
          >
            <img src={singleItem.image} alt={singleItem.title} className="w-[75%] h-[50%] p-10 " />
            <div className="p-4">
              <h2 className="text-md  font-semibold md:text-lg md:font-semibold ">{singleItem.title}</h2>
              <p className="text-gray-700 text-md pb-2 md:text-md">${singleItem.price}</p>
              <p className="text-gray-500 text-[12px] md:text-[14px]">{singleItem.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default AllCards;
  