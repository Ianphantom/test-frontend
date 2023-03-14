import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1700px){
            font-size: 75%;
        }
    }
    body{
        font-family: 'Lato', sans-serif;
        background: #333333;
    }

    .text-regular{
        font-weight: 400;
    }

    .text-bold{
        font-weight: 700;
    }

    .text-16{
        font-size: 16px;
        line-height: 19px;
    }

    .text-14{
        font-size: 14px;
        line-height: 17px;
    }

    .text-12{
        font-size: 12px;
        line-height: 14px;
    }

    .round-button-main{
        width: 68px;
        height: 68px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
    }

    .round-button-secondary{
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
    }

    .bg-primary{
        background: #2F80ED;
    }

    .bg-light{
        background: #FFFFFF;
    }

    .text-color-white{
        color: #FFFFFF;
    }


    
`;

export default GlobalStyle;
