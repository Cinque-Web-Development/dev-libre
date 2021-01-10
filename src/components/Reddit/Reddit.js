import React, {useState, useEffect} from 'react';
import './Reddit.css';
import Articles from './Articles';

import jsIcon from "../../Assets/subred_js.png";
import reactIcon from "../../Assets/subred_react.png";
import techIcon from "../../Assets/subred_tech.png";
import webdevIcon from "../../Assets/subred_webdev.png";
import pythonIcon from '../../Assets/subred_python.png';
import nodeIcon from '../../Assets/subred_node.png';
import otherIcon from "../../Assets/subred_other.webp";

export default function Reddit({programmingLanguage}) {
    const [articles, setArticle] = useState();
    const [subReddits, setSubReddits] = useState("webdev")
    

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subReddits}.json?&limit=4`)
        .then(res => {
            if(res.status !== 200) {
                console.log("Error")
                return;
            }
        res.json().then((response) => {
            setArticle(response.data.children)
        })
        })
    }, [subReddits])


    const getArticles = articles ? articles.map((article) => 
    <Articles  article={article.data.title} link={article.data.permalink} subReddit={article.data.subreddit} key={article.data.title} />      
) : <p>Loading....</p>


let subredIcon = subReddits === "javascript" ? jsIcon : subReddits === "reactjs" ? reactIcon : subReddits === "python" ? pythonIcon : subReddits === "node" ? nodeIcon  : subReddits === "technology" ? techIcon : subReddits === "webdev" ? webdevIcon : otherIcon;

const handleChange = (e) => {
    setSubReddits(e.target.value)
}


    return (
        <div className="reddit">
            <h1 className="reddit-logo"><i className="reddit-logo fab fa-reddit-alien fa-2x"></i>subreddits</h1>
              <form >
                <select 
                    onChange={handleChange}
                    name="dropdown"
                    style={{display: "block"}}
                    value={subReddits}
                    className="dropdown-form"
                >
                    <option className="subreddit-option" value=""></option>
                    <option className="subreddit-option" value="webdev">Web Dev</option>
                    <option className="subreddit-option" value="reactjs">React JS</option>
                    <option className="subreddit-option" value="python">Python</option>
                    <option className="subreddit-option" value="node">Node.js</option>
                    <option className="subreddit-option" value="softwareengineering">Software Engineering</option>
                    <option className="subreddit-option" value="javascript">JavaScript</option>
                    <option className="subreddit-option" value="technology">Technology</option>
                </select>
              </form>
                <img src={subredIcon} alt="subreddit icon" className="subreddit-icon"></img>
              {getArticles}
        </div>
    )
}
