import _ from 'lodash';
import { Suspense } from "react";
import { Box } from "../foundation/components/Box";

import { Flex } from '../foundation/components/Flex';
import { RankingCard } from '../features/ranking/components/RankingCard';
import { useRankingList } from '../features/ranking/hooks/useRankingList';

const RankingComponent: React.FC = () => {
    const { data: rankingList } = useRankingList({ query: {} });
    return (
        <Flex align="center" as="ul" direction="column" justify="center">
            {_.map(rankingList, (ranking) => (
                <RankingCard key={ranking.id} bookId={ranking.book.id} book={ranking.book} />
            ))}
        </Flex>
    );
}

const RankingComponentWithSuspense: React.FC = () => {
    return (
        <Suspense fallback={null}>
            <RankingComponent />
        </Suspense>
    );
};

export { RankingComponentWithSuspense as RankingComponent };