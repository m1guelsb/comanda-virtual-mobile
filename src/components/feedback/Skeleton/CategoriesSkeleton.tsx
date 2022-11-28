import { ComponentProps } from 'react';
import ContentLoader, { Circle } from 'react-content-loader/native';
import { View } from 'react-native';

export interface SkeletonProps extends ComponentProps<typeof ContentLoader> {
  quantity?: number;
}
export const CategoriesSkeleton = ({ ...props }: SkeletonProps) => {
  return (
    <View>
      <ContentLoader
        speed={0.5}
        width={600}
        height={90}
        viewBox="0 0 600 50"
        backgroundColor="#f3f3f3"
        foregroundColor="#e4e2e2"
        {...props}
      >
        <Circle cx="24" cy="24" r="24" />
        <Circle cx="90" cy="24" r="24" />
        <Circle cx="154" cy="24" r="24" />
        <Circle cx="217" cy="23" r="24" />
        <Circle cx="283" cy="23" r="24" />
      </ContentLoader>
    </View>
  );
};
