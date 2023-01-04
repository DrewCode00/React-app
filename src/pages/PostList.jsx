import React from 'react'

export default function PostList() {

    const [postList, setPostList] = useState([])


    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((posts) => {
            setPostList(posts)
        })
    }, []);

    return <div>
        <prev>{JSON.stringify(postList,undefined,2)}</prev>
    </div>


}
