import { createRoot} from "react-dom/client"
import Post from "./Post.jsx"

const root = createRoot(document.getElementById("root"))


function Page1()
{
    return(
        <>
            <div className="p1-header"><h1>Test</h1></div>
            <div className="main">
                <div className="gauche">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="droite">
                    <button>Tag Button</button>
                    <button>Tag Button</button>
                    <button>Tag Button</button>
                    <button>Tag Button</button>
                    <button>Tag Button</button>
                    <button>Tag Button</button>
                    <button>Tag Button</button>
                    <button>Tag Button</button>
                    <button>Tag Button</button>
                    <button>Tag Button</button>
                    <button>Tag Button</button>
                    <button>Tag Button</button>
                    <button>Tag Button</button>
                </div>
            </div>
        </>
    )
}

root.render(
    <>
        <Page1 />
    </>
)