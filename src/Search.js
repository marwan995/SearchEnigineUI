import SearchInput from './SearchInput'
import useFetch from './useFetch';
const Search = () => {
    let  { data, isPending }= useFetch(`http://localhost:8080/search?q=${"translat"}`);
    console.clear();
    console.log(data);
    return (
        
        <div className="Search">
                <img src="logo.png" alt=""/>
            <div>
            <h1>Discoverr</h1>
            <h3>Welcome to Discoverr, a powerful search engine that helps you find what you're looking for quickly and easily.
                Our search engine uses advanced web crawling and indexing technology to discover and organize the most relevant content on the internet
                ,so you can find the information you need without having to sift through pages of irrelevant results. Our crawler continually scans the web for new and updated content,
                while our indexer analyzes and categorizes this information to make it easily searchable.</h3>
                <SearchInput />
                </div>
        </div>
        
    );
}

export default Search;