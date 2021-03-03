import React from 'react';
import styled from 'styled-components';

const Wrap = styled.a`
    text-decoration: none;
`;

const Box = styled.li`
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-context: center;
    align-items: center;
    background-color: rgba(255, 255, 255, .3);
    border-radius: 30px;
    margin: 5px;
`;

const Initial = styled.p`
    margin: 0;
    padding: 0;
    font-size: 2.5rem;
    color: white;
`;

const Text = styled.p`
    margin: 0;
    padding: 0;
    font-style: italic;
    font-size: 1.2rem;
`;

export default function Icon(props) {
    return (
        <Wrap href={props.link}>
            <Box>
                <Initial>{props.initial}</Initial>
                <Text>{props.title}</Text>
            </Box>
        </Wrap>
    );
}