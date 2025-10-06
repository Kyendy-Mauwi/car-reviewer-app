
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { CarReview } from '../types/CarReview';
import { colors } from '../styles/commonStyles';
import { IconSymbol } from './IconSymbol';

interface CarReviewItemProps {
  review: CarReview;
}

export default function CarReviewItem({ review }: CarReviewItemProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <IconSymbol key={i} name="star.fill" size={16} color={colors.accent} />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <IconSymbol key="half" name="star.leadinghalf.filled" size={16} color={colors.accent} />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <IconSymbol key={`empty-${i}`} name="star" size={16} color={colors.textSecondary} />
      );
    }

    return stars;
  };

  return (
    <Link href={`/review/${review.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: review.image }} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {review.year} {review.make} {review.model}
            </Text>
            <View style={styles.ratingContainer}>
              <View style={styles.stars}>
                {renderStars(review.rating)}
              </View>
              <Text style={styles.ratingText}>{review.rating}</Text>
            </View>
          </View>
          <Text style={styles.summary} numberOfLines={3}>
            {review.summary}
          </Text>
          <View style={styles.footer}>
            <Text style={styles.reviewer}>By {review.reviewerName}</Text>
            <Text style={styles.date}>{new Date(review.reviewDate).toLocaleDateString()}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
    marginRight: 8,
  },
  ratingContainer: {
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  ratingText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  summary: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewer: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '500',
  },
  date: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});
