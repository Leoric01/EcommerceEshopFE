
const UserAddressCard = () => {
  return (
    <div className="p-5 rounded-md border flex ">
      <div className="space-y-3 ">
        <h1>Name</h1>
        <p className="w-[320px]">Address street, State, Zip code, City Etc</p>
        <p>
          <strong>Mobile : </strong> +420 123 456 789
        </p>
      </div>
    </div>
  );
};

export default UserAddressCard;
