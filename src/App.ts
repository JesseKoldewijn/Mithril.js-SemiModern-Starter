import m from "mithril";

export const App = () => {
	// Local state ...
	return {
		view: () => {
			return m(
				"h1",
				{
					class: "",
				},
				"My Mithril TypeScript App"
			);
		},
	};
};
