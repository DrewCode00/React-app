import { createBrowserRouter } from "react-router-dom";
import PostList from "./pages/PostList";



const routes = [
    {
        path: '/',
        element: <PostList></PostList>
    }
]


const router = createRouter(routes)


export default router;