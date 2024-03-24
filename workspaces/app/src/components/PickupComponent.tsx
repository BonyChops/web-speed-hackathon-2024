import _ from 'lodash';
import { Suspense } from "react";
import { Box } from "../foundation/components/Box";

import { Flex } from '../foundation/components/Flex';
import { Space } from '../foundation/styles/variables';
import { BookCard } from '../features/book/components/BookCard';
import { getDayOfWeekStr } from '../lib/date/getDayOfWeekStr';
import { useRelease } from '../features/release/hooks/useRelease';

const PickupComponent: React.FC = () => {
    const todayStr = getDayOfWeekStr(new Date());
    const { data: release } = useRelease({ params: { dayOfWeek: todayStr } });

    return (
        <Flex align="stretch" gap={Space * 2} justify="flex-start">
            {_.map(release.books, (book) => (
                <BookCard key={book.id} bookId={book.id} book={book} />
            ))}
        </Flex>
    );
}

const PickupComponentWithSupence: React.FC = () => {
    return (
        <Suspense fallback={null}>
            <PickupComponent />
        </Suspense>
    );
};

export { PickupComponentWithSupence as PickupComponent };