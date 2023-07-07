import {Insurance} from "./insurance";

// can be replaced with fetching data from server and mapping to Insurance class
export function createInsuranceList() {
	return [
		new Insurance("dev_ins", "developer", ['email', 'age']),
		new Insurance("designer_ins", "designer", ['email', "age", "name"])
	];
}