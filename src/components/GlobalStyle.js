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

    .round-button{
        padding: 12px 12px;
    }

    .bg-primary{
        background: #2F80ED;
    }


    
`;

export default GlobalStyle;
