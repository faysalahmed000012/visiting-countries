import { View, Text, ScrollView } from "react-native";
import React from "react";

export default function Country({ country }) {
  return (
    <View>
      <Text>Country: {country.name.common}</Text>
    </View>
  );
}
