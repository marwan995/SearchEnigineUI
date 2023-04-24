import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState ,useEffect} from "react";
import axios from "axios";
export default function SearchInput({ setSearchQuery }) {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
    setSearchQuery(event.target.value);
  };
  const handleAutocompleteChange = (event, value) => {
    setTextFieldValue(value);
    setSearchQuery(value);
  };
  useEffect(()=>{
   axios.get("http://localhost:8080/Query").then((res)=>{
    setSearchResults(res.data);
   })
  },[])
  return (
      <Autocomplete
        className="inputContainer"
        sx={{ borderColor: "white" }}
        freeSolo
        onChange={handleAutocompleteChange}
        id="free-solo-2-demo"
        disableClearable
        options={searchResults}
        renderInput={(params) => (
          <TextField
            className="input"
            onChange={handleTextFieldChange}
            value={textFieldValue}
            {...params}
            label="Search...."
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            required
          />
        )}
      />
  );
}

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// let searchResults = [
//   {
//     url: "https://en.wikipedia.org/wiki/Dog",
//     title: "Dog - Wikipedia",
//     des: "The dog is a domesticated carnivorous mammal that has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes.",
//   },
//   {
//     url: "https://www.nytimes.com",
//     title: "The New York Times",
//     des: "The New York Times is an American daily newspaper based in New York City with a worldwide readership.",
//   },
//   {
//     url: "https://www.youtube.com",
//     title: "YouTube",
//     des: "YouTube is a video sharing platform where users can upload, view, and share videos.",
//   },
//   {
//     url: "https://www.instagram.com",
//     title: "Instagram",
//     des: "Instagram is a social media platform that allows users to share photos and videos, as well as interact with other users and brands.",
//   },
//   {
//     url: "https://www.github.com",
//     title: "GitHub",
//     des: "GitHub is a web-based platform that provides version control and collaboration tools for software development.",
//   },
//   {
//     url: "https://www.reddit.com",
//     title: "Reddit",
//     des: "Reddit is a social news aggregation, web content rating, and discussion website.",
//   },
//   {
//     url: "https://www.imdb.com",
//     title: "IMDb",
//     des: "IMDb is an online database of information related to films, television programs, home videos, video games, and streaming content online.",
//   },
//   {
//     url: "https://www.amazon.com",
//     title: "Amazon",
//     des: "Amazon is an American multinational technology company based in Seattle, Washington, that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//   },
//   {
//     url: "https://www.spotify.com",
//     title: "Spotify",
//     des: "Spotify is a digital music streaming service that gives you access to millions of songs, podcasts and videos from artists all over the world.",
//   },
//   {
//     url: "https://www.stackoverflow.com",
//     title: "Stack Overflow",
//     des: "Stack Overflow is a question and answer community for programmers.",
//   },
//   {
//     url: "https://www.cnn.com",
//     title: "CNN",
//     des: "CNN is a news organization that provides coverage of breaking news, world news, and entertainment news, among other topics.",
//   },
//   {
//     url: "https://www.wikipedia.org",
//     title: "Wikipedia",
//     des: "Wikipedia is a multilingual online encyclopedia that provides free content and is edited and maintained by a community of volunteers.",
//   },
//   {
//     url: "https://www.apple.com",
//     title: "Apple",
//     des: "Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.",
//   },
//   {
//     url: "https://www.linkedin.com",
//     title: "LinkedIn",
//     des: "LinkedIn is a social media platform designed specifically for professionals to connect with each other and share information about their careers and industries.",
//   },
//   {
//     url: "https://www.nationalgeographic.com",
//     title: "National Geographic",
//     des: "National Geographic is a media organization that is dedicated to exploring and protecting the planet, covering topics ranging from science and nature to history and culture.",
//   },
//   {
//     url: "https://www.quora.com",
//     title: "Quora",
//     des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsum delectus ea officia nostrum ab fugiat quam iure temporibus reprehenderit illum veritatis, eius sed, debitis quis ex? Aperiam, odit placeat!",
//   },
// ];

