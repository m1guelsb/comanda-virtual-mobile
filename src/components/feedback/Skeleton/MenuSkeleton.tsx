import ContentLoader, { Rect } from 'react-content-loader/native';
import { View } from 'react-native';
import { SkeletonProps } from './CategoriesSkeleton';

export const MenuSkeleton = ({ quantity = 3, ...props }: SkeletonProps) => {
  return (
    <View>
      {Array(quantity)
        .fill({})
        .map((_, index) => (
          <ContentLoader
            key={index}
            speed={0.5}
            width={476}
            height={124}
            backgroundColor="#f3f3f3"
            foregroundColor="#e4e2e2"
            {...props}
          >
            <Rect x="1" y="6" rx="3" ry="3" width="120" height="96" />
            <Rect x="130" y="10" rx="3" ry="3" width="138" height="25" />
            <Rect x="131" y="43" rx="3" ry="3" width="120" height="14" />
            <Rect x="131" y="80" rx="3" ry="3" width="81" height="19" />
          </ContentLoader>
        ))}
    </View>
  );
};
