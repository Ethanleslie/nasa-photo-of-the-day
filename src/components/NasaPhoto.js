import React from 'react';
import styled from 'styled-components'


const NasaPhoto = (props) => {
    const Title = styled.h3`
    color: white;
    `

    const Explanation = styled.p`
    max-width: 70%;
    `


    return (
        <div className="nasa-photo-wrapper">
            <Title>{props.photo.title}</Title>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl}/>
            <Explanation>{props.photo.explanation}</Explanation>
        </div>
    )
}

export default NasaPhoto;