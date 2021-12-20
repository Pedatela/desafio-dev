import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 40px auto;

`;

export const  Chart = styled.div`
    min-height: 306px;
    width: 45%;
    margin-right:20px;
`;
export const LastFinancialTransactions = styled.div`
    width: 50%;
`;

export const Card = styled.div`
    background: white;
    overflow: hidden;
    padding: 32px 24px;
    width:100%;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
`;

export const CardHeader = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    font-size: 18px;
    font-weight: 700;
    color: var(--color_default_black);
    padding-bottom: 20px;
`;

export const CardContent = styled.div`
    width:100%;
`;

export const TransactionList = styled.li`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    padding: 8px 0;
    border-bottom:  1px solid #f6f6f6;
    font-size: 14px;

    &:nth-child(${props => props.length}) {
        margin-bottom: 20px;
        border-bottom:  1px solid black;
    }
`;

export const Icon = styled.div`
    
`;

export const Description = styled.div`
    width: calc(100% - 161px);
    margin-left:40px;
    div{
        color: #434343;
    }
    span{
        color: #c8c8c8;
    }
`;

export const Value = styled.div`
    color: ${props => props.type === "Saída" ? "#f43a68" : "#7cc372"};
`;

export const ValueTotal = styled.div`
    color: ${props => props.total < 0  ? "#f43a68" : "#7cc372"};
`;