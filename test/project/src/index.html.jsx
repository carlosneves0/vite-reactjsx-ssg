// import NavBar from "./component/NavBar.jsx"
// import Footer from "./component/Footer"
// import reactSVG from "./asset/react.svg"
// import "./index.css"

export default function HomeHTML({ cssLinks = [] }) {
    const title = "Home page"
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width,user-scalable=yes" />
                <meta name="color-scheme" content="light dark" />
                <link
                    rel="icon"
                    type="image/gif"
                    href="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                />
                {cssLinks.map(cssLink => (
                    <link key={cssLink} rel="stylesheet" href={cssLink} />
                ))}
                <title>{title}</title>
            </head>
            <body>
                {/* <NavBar
                    links={[
                        { text: "Home", href: "/", isDisabled: true },
                        { text: "Foo", href: "/foo" },
                    ]}
                /> */}
                <h1>{title}</h1>
                <p>Hello, world.</p>
                <p id="thanks">
                    Many thanks to{" "}
                    <a href="https://vite.dev/" target="_blank">
                        {/* <img src="/vite.svg" /> */}
                        Vite
                    </a>{" "}
                    and{" "}
                    <a href="https://react.dev/" target="_blank">
                        {/* <img src={reactSVG} /> */}
                        React
                    </a>
                    !
                </p>
                {/* <Footer /> */}
            </body>
        </html>
    )
}
