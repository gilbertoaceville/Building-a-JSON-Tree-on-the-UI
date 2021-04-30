import JsonTree from "../JsonTree";
import data from "../JsonArray";


const Index = () =>
        <div>
            <JsonTree title="results" data={ data } depth={2} />
        </div>

export default Index;