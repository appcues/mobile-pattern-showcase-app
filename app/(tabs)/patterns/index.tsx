import { router } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';

import PatternCard from '../../../components/PatternCard';

type ItemData = {
  slug: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    slug: 'modals',
    title: 'Modals',
  },
  {
    slug: 'tooltips',
    title: 'Tooltips',
  },
  {
    slug: 'embeds',
    title: 'Embeds',
  },
];

export default function Patterns() {
  const renderItem = ({ item }: { item: ItemData }) => {
    return (
      <PatternCard
        title={item.title}
        onPress={() => router.push(`/patterns/${item.slug}`)}
        style={{
          marginTop: 20,
          marginHorizontal: 20,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
