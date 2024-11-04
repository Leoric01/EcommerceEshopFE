import { Delete } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { addressApi } from "../../../State/configAxios/addressApi";

interface UserAddressCardProps {
  addressId: number;
  name: string;
  street: string;
  locality: string;
  zip: string;
  city: string;
  country: string;
  mobile: string;
  onDelete: (addressId: number) => void;
}

const UserAddressCard: React.FC<UserAddressCardProps> = ({
  addressId,
  name,
  street,
  locality,
  zip,
  city,
  country,
  mobile,
  onDelete,
}) => {
  const handleDeleteAddress = async () => {
    try {
      await addressApi.deleteAddress(addressId);
      onDelete(addressId);
      console.log(`Address with ID ${addressId} deleted`);
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };
  return (
    <div className="p-5 rounded-md border flex justify-between items-center">
      <section>
        <div className="space-y-3">
          <h1>{name}</h1>
          <p className="w-[320px]">
            {street}, {locality}, {zip}, {city}, {country}
          </p>
          <p>
            <strong>Mobile:</strong> {mobile}
          </p>
        </div>
      </section>
      <section>
        <div onClick={handleDeleteAddress}>
          <Button>
            <Delete />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default UserAddressCard;
