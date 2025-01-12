import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import { useThemeColor } from '../../components/Themed';
import { useLocale } from '../../context/locale';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const themedBackgroundColor = useThemeColor('tabBarBackground');
  const { language, strings } = useLocale();

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: '#C0C6D9',
        tabBarActiveTintColor: '#5C5CFF',
        tabBarStyle: {
          backgroundColor: themedBackgroundColor,
        },
        tabBarLabelStyle: {
          fontFamily: 'Mulish-Regular',
        },
      }}
    >
      <Tabs.Screen
        name="patterns"
        options={{
          headerShown: false,
          title: strings[language].tabs.patterns,
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          tabBarButtonTestID: 'patterns-tab',
        }}
      />
      <Tabs.Screen
        name="examples"
        options={{
          headerShown: false,
          title: strings[language].tabs.examples,
          tabBarIcon: ({ color }) => <TabBarIcon name="gift" color={color} />,
          tabBarButtonTestID: 'examples-tab',
        }}
      />
      <Tabs.Screen
        name="preview"
        options={{
          headerShown: false,
          title: strings[language].tabs.preview,
          tabBarIcon: ({ color }) => <TabBarIcon name="eye" color={color} />,
          tabBarButtonTestID: 'preview-tab',
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          headerShown: false,
          title: strings[language].tabs.more,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ellipsis-h" color={color} />
          ),
          tabBarButtonTestID: 'more-tab',
        }}
      />
    </Tabs>
  );
}
