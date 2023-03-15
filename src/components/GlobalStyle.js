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

    hr{
        margin: 0;
        padding: 0;
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

    .text-10{
        font-size: 10px;
        line-height: 1px;
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

    .bg-color-3{
        background: #828282;
    }

    .bg-color-4{
        background: #E0E0E0;
    }

    .text-color-primary{
        color: #2F80ED;
    }

    .text-color-white{
        color: #FFFFFF;
    }

    .text-color-2{
        color: #4F4F4F;
    }

    .text-color-3{
        color: #828282;
    }

    .text-color-4{
        color: #EB5757;
    }

    .indicator-purple{
        background: #8785FF;
    }

    
`;

export default GlobalStyle;
