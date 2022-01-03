import {suggestionList} from './suggestionListData.js'
import PageTitle from '../PageTitle/PageTitle.jsx';
import './suggestionList.css'

const combinations = suggestionList.map((combination, i)=>({id: i, combi: combination}))
export default function SuggestionList(){

return(
<>
<PageTitle title="Suggestion List"/>

<div className="suggestions-List-container"> 

<ol> 
{combinations.map((newcombi)=> (<li key={newcombi.id}>{newcombi.combi}</li>))}
</ol>
</div>
</>

)
}
