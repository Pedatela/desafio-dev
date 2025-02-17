import styled from "styled-components";

export const Container = styled.div``;

export const HeaderContainer = styled.header`
    padding: 32px 0;
    background: #28262e;
`;

export const HeaderContent = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    > img {
        height:40px;
        margin-right: 100px;
    }

    button{
        margin-left: auto;
        background:transparent;
        border:0;

        svg{
            color: #999591;
            width:20px;
            height:20px;
        }
    }
`;

export const Profile = styled.div`
    display:flex;
    align-items: center
    margin-left: 80px;

    img{
        width:50px;
        height:56px;
        border-radius: 50%;
    }

    div{
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;
        color: #04BE3A;
    }
`;