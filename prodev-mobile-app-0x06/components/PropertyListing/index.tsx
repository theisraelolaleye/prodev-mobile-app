import { View, Text } from "react-native";
import PropertyListingCard from "../common/PropertyListingCard";
import { useState } from "react";
import { PropertyListing } from "@/interfaces";

const PropertyListings = ({ listings }: PropertyListing) => {
  return (
    <View
      style={{
        flex: 1,
        rowGap: 10,
      }}
    >
      {listings?.map((listing, key) => (
        <PropertyListingCard {...listing} key={key} />
      ))}
    </View>
  );
};

export default PropertyListings;