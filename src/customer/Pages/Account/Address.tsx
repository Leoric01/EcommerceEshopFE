import React, { useEffect, useState } from "react";
import UserAddressCard from "./UserAddressCard";
import { addressApi } from "../../../State/configAxios/addressApi";
import { Address as AddressInterface } from "../../../Api";

const Address = () => {
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
  const handleAddressDeleted = (deletedAddressId: number) => {
    setAddresses((prevAddresses) =>
      prevAddresses.filter((address) => address.id !== deletedAddressId)
    );
  };
  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <div className="space-y-2">
      {addresses.map((address) => (
        <UserAddressCard
          key={address.id}
          addressId={address.id ?? -1}
          name={address.name ?? "N/A"}
          street={address.street ?? "N/A"}
          locality={address.locality ?? "N/A"}
          zip={address.zip ?? "N/A"}
          city={address.city ?? "N/A"}
          country={address.country ?? "N/A"}
          mobile={address.mobile ?? "N/A"}
          onDelete={handleAddressDeleted}
        />
      ))}
    </div>
  );
};

export default Address;
