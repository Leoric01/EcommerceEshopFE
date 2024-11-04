import React, { useState } from "react";
import Address from "../Account/Address";
import UserAddressCard from "../Account/UserAddressCard";
import { Address as AddressInterface } from "../../../Api";

interface SelectableAddressProps {
  setSelectedAddressId: (addressId: number) => void;
}

const SelectableAddress: React.FC<SelectableAddressProps> = ({ setSelectedAddressId }) => {
  const [selectedAddressId, setSelectedAddressIdState] = useState<number | null>(null);

  const handleAddressSelect = (addressId?: number) => {
    setSelectedAddressIdState(addressId || -1);
    setSelectedAddressId(addressId || -1);
    console.log("Selected Address ID: ", addressId);
  };

  return (
    <div>
      <Address
        renderAddress={(address: AddressInterface) => (
          <div key={address.id} className="flex items-center justify-between">
            <UserAddressCard
              addressId={address.id ?? -1}
              name={address.name ?? "N/A"}
              street={address.street ?? "N/A"}
              locality={address.locality ?? "N/A"}
              zip={address.zip ?? "N/A"}
              city={address.city ?? "N/A"}
              country={address.country ?? "N/A"}
              mobile={address.mobile ?? "N/A"}
              onDelete={() => {}}
            />
            <input
              type="radio"
              name="selectedAddress"
              value={address.id}
              checked={selectedAddressId === address.id}
              onChange={() => handleAddressSelect(address.id)}
            />
          </div>
        )}
      />
    </div>
  );
};

export default SelectableAddress;
