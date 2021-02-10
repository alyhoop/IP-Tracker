let SearchBar = () => {
  return(
    <div>
      <form>
        <input
          type="text"
          value=""
          onChange=""
          placeholder="Search for any IP address or domain"
        >
        </input>
        <button><i className="arrow"></i></button>
      </form>
    </div>
  )
}

export default SearchBar
