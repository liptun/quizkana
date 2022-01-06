import { FC, ReactNode } from 'react'
import {
    createGlobalStyle,
    ThemeProvider,
    css,
    FlattenSimpleInterpolation,
} from 'styled-components'

const theme = {
    colors: {
        primary: '#FF3366',
        secondary: '#20A4F3',
        background: '#011627',
        foreground: '#F6F7F8',
    },
    fonts: ['Noto Sans JP'],
    breakpoints: {
        tablet: 768,
        desktop: 1024,
    },
}
export type themeSchema = typeof theme

declare module 'styled-components' {
    export type DefaultThemes = themeSchema
}

export const tabletStyle = (style: FlattenSimpleInterpolation) => css`
    @media (min-width: ${theme.breakpoints.tablet}px) {
        ${style}
    }
`
export const desktopStyle = (style: FlattenSimpleInterpolation) => css`
    @media (min-width: ${theme.breakpoints.desktop}px) {
        ${style}
    }
`

const ResetCss = createGlobalStyle`
    a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
`

const Typography = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap');
    html {
        font-size: 16px;
        font-family: 'Noto Sans JP', sans-serif;
        ${desktopStyle(css`
            font-size: 1vw;
        `)}
    }
`

const Misc = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
`

interface Props {
    children?: ReactNode
}

const Theme: FC<Props> = ({ children }) => (
    <>
        <ResetCss />
        <Typography />
        <Misc />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
)
export default Theme
