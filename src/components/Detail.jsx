import React from 'react'
import styled from 'styled-components';

export default function Detail() {
  return (
    <Container>
        <Background>
            <img src="images 2/disney.jpg" alt="" />
        </Background>
        <ImageTitle>
            <img src="images 2/simpsons.jpg" alt="" />
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src="/images 2/play-icon-black.png" alt="" />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src="/images 2/play-icon-white.png" alt="" />
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="images 2/group-icon.png" alt="" />
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2018
        </SubTitle>
        <Description>
            Jordan description section
        </Description>
    </Container>
  )
}

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 40px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;

`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 24.2px;
    display: flex;
    align-items: center;
    height: 56px;
    background:rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;


    span {
        font-size: 26px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background: rgba(0, 0, 0);
`
const SubTitle = styled.div`
    color: rgba(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgba(249, 249, 249);
    max-width: 760px;
`



