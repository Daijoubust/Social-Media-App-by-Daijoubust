import Post from "../../components/post/Post"
import Stories from "../../components/stories/Stories"
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <Stories/>
            <Post/>
        </div>
    )
}

export default Home