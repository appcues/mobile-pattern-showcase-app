import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import { useThemeColor } from '../../components/Themed';

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
          title: 'Patterns',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
          tabBarTestID: 'patterns-tab',
        }}
      />
      <Tabs.Screen
        name="examples"
        options={{
          headerShown: false,
          title: 'Examples',
          tabBarIcon: ({ color }) => <TabBarIcon name="gift" color={color} />,
          tabBarTestID: 'examples-tab',
        }}
      />
      <Tabs.Screen
        name="preview"
        options={{
          headerShown: false,
          title: 'Preview',
          tabBarIcon: ({ color }) => <TabBarIcon name="eye" color={color} />,
          tabBarTestID: 'preview-tab',
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          headerShown: false,
          title: 'More',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ellipsis-h" color={color} />
          ),
          tabBarTestID: 'more-tab',
        }}
      />
    </Tabs>
  );
}
