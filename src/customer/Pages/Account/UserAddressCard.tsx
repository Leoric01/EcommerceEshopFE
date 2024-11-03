interface UserAddressCardProps {
  name: string;
  street: string;
  locality: string;
  zip: string;
  city: string;
  country: string;
  mobile: string;
}

const UserAddressCard: React.FC<UserAddressCardProps> = ({
  name,
  street,
  locality,
  zip,
  city,
  country,
  mobile,
}) => {
  return (
    <div className="p-5 rounded-md border flex">
      <div className="space-y-3">
        <h1>{name}</h1>
        <p className="w-[320px]">
          {street}, {locality}, {zip}, {city}, {country}
        </p>
        <p>
          <strong>Mobile:</strong> {mobile}
        </p>
      </div>
    </div>
  );
};

export default UserAddressCard;
