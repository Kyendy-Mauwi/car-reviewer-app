
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import { carReviews } from '@/data/carReviews';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';

export default function ReviewDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const review = carReviews.find(r => r.id === id);

  if (!review) {
    return (
      <View style={styles.errorContainer}>
        <IconSymbol name="exclamationmark.triangle" size={48} color={colors.textSecondary} />
        <Text style={styles.errorText}>Review not found</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <IconSymbol key={i} name="star.fill" size={20} color={colors.accent} />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <IconSymbol key="half" name="star.leadinghalf.filled" size={20} color={colors.accent} />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <IconSymbol key={`empty-${i}`} name="star" size={20} color={colors.textSecondary} />
      );
    }

    return stars;
  };

  const renderSpecificationItem = (label: string, value: string) => (
    <View style={styles.specItem} key={label}>
      <Text style={styles.specLabel}>{label}</Text>
      <Text style={styles.specValue}>{value}</Text>
    </View>
  );

  const renderListItem = (item: string, index: number) => (
    <View style={styles.listItem} key={index}>
      <View style={styles.bullet} />
      <Text style={styles.listItemText}>{item}</Text>
    </View>
  );

  return (
    <>
      <Stack.Screen
        options={{
          title: `${review.year} ${review.make} ${review.model}`,
          headerBackTitle: 'Reviews',
        }}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: review.image }} style={styles.heroImage} />
        
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {review.year} {review.make} {review.model}
            </Text>
            <View style={styles.ratingContainer}>
              <View style={styles.stars}>
                {renderStars(review.rating)}
              </View>
              <Text style={styles.ratingText}>{review.rating} out of 5</Text>
            </View>
          </View>

          <View style={styles.reviewerInfo}>
            <Text style={styles.reviewerName}>Reviewed by {review.reviewerName}</Text>
            <Text style={styles.reviewDate}>{new Date(review.reviewDate).toLocaleDateString()}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.summary}>{review.summary}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Specifications</Text>
            <View style={styles.specsContainer}>
              {renderSpecificationItem('Engine', review.specifications.engine)}
              {renderSpecificationItem('Horsepower', review.specifications.horsepower)}
              {renderSpecificationItem('Fuel Economy', review.specifications.fuelEconomy)}
              {renderSpecificationItem('Transmission', review.specifications.transmission)}
              {renderSpecificationItem('Drivetrain', review.specifications.drivetrain)}
              {renderSpecificationItem('Starting Price', review.specifications.price)}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Full Review</Text>
            <Text style={styles.fullReview}>{review.fullReview}</Text>
          </View>

          <View style={styles.prosConsContainer}>
            <View style={styles.prosConsSection}>
              <Text style={[styles.sectionTitle, { color: colors.primary }]}>Pros</Text>
              {review.pros.map((pro, index) => renderListItem(pro, index))}
            </View>

            <View style={styles.prosConsSection}>
              <Text style={[styles.sectionTitle, { color: colors.accent }]}>Cons</Text>
              {review.cons.map((con, index) => renderListItem(con, index))}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  heroImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  ratingText: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  reviewerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary + '30',
    marginBottom: 20,
  },
  reviewerName: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  reviewDate: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  summary: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  specsContainer: {
    backgroundColor: colors.card,
    borderRadius: 8,
    padding: 16,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  specItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  specLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  specValue: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '600',
  },
  fullReview: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 26,
  },
  prosConsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  prosConsSection: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 8,
    padding: 16,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginTop: 8,
    marginRight: 8,
  },
  listItemText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: 16,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backButtonText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '600',
  },
});
