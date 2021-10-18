
import "./styles.css"
import Table from "./Table";
 function Body() {
  
  return (<div>
  <div style={{ paddingTop:'120px',paddingLeft: '200px'}}>
     <h1   >Latest Posts</h1> 
    <div style={{fontWeight:'200'}}> <img src="https://tse3.mm.bing.net/th?id=OIP.Py5kO6WCMZQRU97F4KfbbwHaIG&pid=Api&P=0&w=300&h=300" alt="filter-icon" width="12" height="15"/> Filter by Category</div>

     <div>
    <button > All</button>
    <button> Artificial Intelligence</button>
    <button> Cloud Computing</button>
    <button> DevOps</button>
    <button> Programming Languages</button>
    <button> Mobile Application Development</button>
    <br/>
    <button >Technology and Tools</button>
    <button> Get a Job in a Tech Company</button>
    <button>Others</button>
  
</div>


</div>
<Table/>
</div>

  
  );
}
export default Body;