const CategoryGrid = () => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className="col-span-3 row-span-12 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://img.freepik.com/free-photo/beautiful-dalmatian-dog-eating_23-2150742798.jpg?t=st=1729460023~exp=1729463623~hmac=3a4269ed8472cae664571632c720a6ced4d2c2c106c177e823211000d126cec7&w=740"
          alt="granule dog-food"
        />
      </div>

      <div className="col-span-2 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://img.freepik.com/free-photo/pair-brown-leather-boots_1150-6005.jpg?t=st=1729458941~exp=1729462541~hmac=3a7f931283bc5eb3fdbf0a633487d4adaa416c6dc2be56e1bc9b47eac07d390a&w=740"
          alt="shoes"
        />
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://img.freepik.com/free-photo/worker-holding-hammer-drill_23-2148384423.jpg?t=st=1729458889~exp=1729462489~hmac=ac24e3418c4d0c5d12706f09ae91db698ff37fc5b1041e26059cbbab8fc965f4&w=1380"
          alt="drill"
        />
      </div>
      <div className="col-span-3 row-span-12 text-white ">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://img.freepik.com/free-photo/knives_74658-51.jpg?t=st=1729458508~exp=1729462108~hmac=119ead4e71703f939554ccf635cc71233ba985226381f1fde4534c3ba4947122&w=740"
          alt="knifes"
        />
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://img.freepik.com/free-photo/elegant-gemstone-necklace-shines-with-rare-sophistication-generated-by-ai_188544-10736.jpg?t=st=1729460151~exp=1729463751~hmac=7fdc8beded5a66abc7539a9627a55c38525e4adfb239ae58bb716dd34ea8df14&w=1380"
          alt="jewelry item"
        />
      </div>
      <div className="col-span-2 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://img.freepik.com/free-photo/living-room-with-blue-sofa-gold-coffee-table_123827-23877.jpg?t=st=1729460482~exp=1729464082~hmac=fe2cbdc1b283a445b737b9b1f53806735e7234e3bead0eef77a367b687b9f033&w=740"
          alt="jewelry item"
        />
      </div>
    </div>
  );
};

export default CategoryGrid;
