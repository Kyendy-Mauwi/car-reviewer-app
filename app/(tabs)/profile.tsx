
import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSymbol } from "@/components/IconSymbol";
import { colors } from "@/styles/commonStyles";

export default function ProfileScreen() {
  const profileStats = [
    { label: 'Reviews Read', value: '47', icon: 'book.fill' },
    { label: 'Favorites', value: '12', icon: 'heart.fill' },
    { label: 'Bookmarks', value: '8', icon: 'bookmark.fill' },
  ];

  const menuItems = [
    { label: 'My Reviews', icon: 'star.fill', action: () => console.log('My Reviews pressed') },
    { label: 'Favorites', icon: 'heart.fill', action: () => console.log('Favorites pressed') },
    { label: 'Bookmarks', icon: 'bookmark.fill', action: () => console.log('Bookmarks pressed') },
    { label: 'Settings', icon: 'gear', action: () => console.log('Settings pressed') },
    { label: 'Help & Support', icon: 'questionmark.circle', action: () => console.log('Help pressed') },
    { label: 'About', icon: 'info.circle', action: () => console.log('About pressed') },
  ];

  const renderStatCard = (stat: typeof profileStats[0], index: number) => (
    <View key={index} style={styles.statCard}>
      <IconSymbol name={stat.icon} size={24} color={colors.primary} />
      <Text style={styles.statValue}>{stat.value}</Text>
      <Text style={styles.statLabel}>{stat.label}</Text>
    </View>
  );

  const renderMenuItem = (item: typeof menuItems[0], index: number) => (
    <Pressable key={index} style={styles.menuItem} onPress={item.action}>
      <View style={styles.menuItemLeft}>
        <View style={styles.menuIconContainer}>
          <IconSymbol name={item.icon} size={20} color={colors.primary} />
        </View>
        <Text style={styles.menuItemText}>{item.label}</Text>
      </View>
      <IconSymbol name="chevron.right" size={16} color={colors.textSecondary} />
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={[
          styles.scrollContent,
          Platform.OS !== 'ios' && styles.scrollContentWithTabBar
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <IconSymbol name="person.fill" size={40} color={colors.card} />
          </View>
          <Text style={styles.userName}>Car Enthusiast</Text>
          <Text style={styles.userEmail}>user@example.com</Text>
        </View>

        <View style={styles.statsContainer}>
          {profileStats.map(renderStatCard)}
        </View>

        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>Account</Text>
          {menuItems.map(renderMenuItem)}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Car Reviews App v1.0.0</Text>
          <Text style={styles.footerSubtext}>Made with ❤️ for car enthusiasts</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  scrollContentWithTabBar: {
    paddingBottom: 100, // Extra padding for floating tab bar
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  menuContainer: {
    backgroundColor: colors.card,
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    padding: 20,
    paddingBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: colors.secondary + '20',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  footerText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});
