import React, { useEffect, useState } from "react";
import { addressApi } from "../../../State/configAxios/addressApi";
import { Address as AddressInterface } from "../../../Api";

interface AddressProps {
  renderAddress: (address: AddressInterface) => React.ReactNode;
}

const Address: React.FC<AddressProps> = ({ renderAddress }) => {
  const [addresses, setAddresses] = useState<AddressInterface[]>([]);

  const fetchAddresses = async () => {
    try {
      const response = await addressApi.getAll();
      const addressesSet: Set<AddressInterface> = response.data;
      const addressesArray = Array.from(addressesSet);
      setAddresses(addressesArray);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <div className="space-y-2">
      {addresses.map((address) => renderAddress(address))}
    </div>
  );
};

export default Address;
