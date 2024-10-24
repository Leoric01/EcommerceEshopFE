import Radio from "@mui/material/Radio";

const AddressCard = () => {
  const handleChange = (event: any) => {
    console.log(event.target.checked);
  };
  return (
    <div className="p-5 rounded-md border flex mt-3">
      <div className="">
        <Radio
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-button"
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1>Name</h1>
        <p className="w-[320px]">Address street, State, Zip code, City Etc</p>
        <p>
          <strong>Mobile : </strong> +420 123 456 789
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
