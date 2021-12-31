import React from 'react'
import { Skeleton, Stack } from '@chakra-ui/react'

function SkeletonList({ isLoading, nSkeleton, height }) {
    return (
        <Stack>
            {
                isLoading
                ? Array(nSkeleton).fill(0).map((x, key) => (
                    <Skeleton key={key} height={height}  />
                ))
                :null
            }
        </Stack>
    )
}

export default SkeletonList
