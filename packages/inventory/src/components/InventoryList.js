import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import Banana from './items/Banana';


const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const ItemGrid = styled.div`
    display: flex;
    min-height: 50vh;
`;

const PageBottom = styled.div`
    width: 50%;
    margin: 25px auto;
`;

export default () => {
    return (
        <Container>
            <div>
                <h2>Your Inventory</h2>
            </div>
            <ItemGrid className="item-grid">
                <Banana />
            </ItemGrid>
            <PageBottom id="page-bottom">
                <Stack spacing={5} alignItems="center">
                    <Pagination variant="outlined" shape="rounded" size="large" />
                </Stack>
            </PageBottom>
        </Container>
    );
};