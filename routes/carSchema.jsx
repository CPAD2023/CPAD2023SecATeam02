import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const CarComponent = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch("http://localhost:8080/cars");
      const json = await response.json();
      setCars(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {cars.map((car, index) => (
        <Text key={index}>
          {car.carname} - {car.carprice}
        </Text>
      ))}
    </View>
  );
};

export default CarComponent;