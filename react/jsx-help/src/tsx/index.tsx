import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./Hello";

const elements = 
<form>
	<label>
		Name:
		<input type="text" name="name" />
	</label>
	<input type="submit" value="Submit" />
	<Hello compiler="TypeScript" framework="React"/>
</form>;

ReactDOM.render(
    elements,
    document.getElementById("container")
);