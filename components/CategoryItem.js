import { View, Text, TouchableOpacity } from 'react-native';

function CategoryItem({ category }) {
  return (
    <TouchableOpacity>
      <View className="mx-1 p-2 rounded-full bg-white border border-gray-400">
        <Text className="font-bold text-black">{category.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CategoryItem;
