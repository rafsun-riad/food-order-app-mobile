import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/solid';
import RestaurantItem from './RestaurantItem';

function RestaurantType({ restaurants, restaurantType }) {
  return (
    <View className="mt-5">
      <View className="mx-4 mb-2 flex-row items-center justify-between">
        <Text className="text-lg font-bold text-[#f19c13] ">
          {restaurantType}
        </Text>
        <View className="p-2 bg-gray-300 rounded-full">
          <ArrowRightIcon size={20} color="black" />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
          paddingTop: 5,
        }}
        className="mx-3 mt-1"
      >
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ScrollView>
    </View>
  );
}

export default RestaurantType;
