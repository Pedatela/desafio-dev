import styled from 'styled-components';


export const Container = styled.div`
    align-self: center;
    margin-bottom: 30px;
    backgorund:white;
    label{
        cursor: pointer;
        &:hover{
            opacity: 0.7;
        }
    }
    input {
        display: none;
    }
`;

export const Icon =  styled.div`
    display:flex;
    justify-content: center;
    margin-bottom: 5px;
    svg{
        font-size 25px;
       
    }

    svg > path{
        align-items:center;
        stroke:#04BE3A;
    }
    
`;