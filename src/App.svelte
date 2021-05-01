<script>

	export const name = "Socionics typing";

	const informationElements = ["Ti", "Te", "Fi", "Fe", "Ni", "Ne", "Si", "Se"];
	// Ti : "Ti"
	const elemDict = Object.fromEntries(informationElements.map(elem => [elem, elem]));

	const sociotypes = {
		"LII" : ["Ti", "Ne", "Fi", "Se", "Fe", "Si", "Te", "Ni"],
		"ILE" : ["Ne", "Ti", "Se", "Fi", "Si", "Fe", "Ni", "Te"],
		"SEI" : ["Si", "Fe", "Ni", "Te", "Ne", "Ti", "Se", "Fi"],
		"ESE" : ["Fe", "Si", "Te", "Ni", "Ti", "Ne", "Fi", "Se"],
		"LSI" : ["Ti", "Se", "Fi", "Ne", "Fe", "Ni", "Te", "Si"],
		"SLE" : ["Se", "Ti", "Ne", "Fi", "Ni", "Fe", "Si", "Te"],
		"IEI" : ["Ni", "Fe", "Si", "Te", "Se", "Ti", "Ne", "Fi"],
		"EIE" : ["Fe", "Ni", "Te", "Si", "Ti", "Se", "Fi", "Ne"],
		"ILI" : ["Ni", "Te", "Si", "Fe", "Se", "Fi", "Ne", "Ti"],
		"LIE" : ["Te", "Ni", "Fe", "Si", "Fi", "Se", "Ti", "Ne"],
		"ESI" : ["Fi", "Se", "Ti", "Ne", "Te", "Ni", "Fe", "Si"],
		"SEE" : ["Se", "Fi", "Ne", "Ti", "Ni", "Te", "Si", "Fe"],
		"SLI" : ["Si", "Te", "Ni", "Fe", "Ne", "Fi", "Se", "Ti"],
		"LSE" : ["Te", "Si", "Fe", "Ni", "Fi", "Ne", "Ti", "Se"],
		"EII" : ["Fi", "Ne", "Ti", "Se", "Te", "Si", "Fe", "Ni"],
		"IEE" : ["Ne", "Fi", "Se", "Ti", "Si", "Te", "Ni", "Fe"]
	};

	function copyObject(obj) {
		return JSON.parse(JSON.stringify(obj));
	}

	const functions = {
		base : 1,
		creative : 2,
		role : 3,
		polr : 4,
		suggestive : 5,
		activating : 6,
		ignoring : 7,
		demonstrative : 8, 
	}

	// Fi : ["ILE", "SLE", "ESE", "EIE"]
	let sociotypesWithElementNotPresent = Object.fromEntries(informationElements.map(elem => [elem, []]));
	Object.entries(sociotypes).forEach(entry => {
		const indexes = [functions.polr - 1, functions.ignoring - 1];
		indexes.forEach(index => {
			const key = entry[1][index];
			const value = entry[0];
			sociotypesWithElementNotPresent[key].push(value);
		})
	})

	const toggledSociotypeClass = "toggledOff";
	const toggledElementClass = "toggledOn";

	// Fi : "Fi"
	let toggledElements = {};
	// ILE : "ILE"
	let toggledTypes = {};

	function toggleDefinitelyHas(informationElem) {
		/* Adds or removes element from toggledElements dictionary */
		if (! elemDict[informationElem]) {
			return;
		}
		if (toggledElements[informationElem]) {
			delete toggledElements[informationElem];
			toggledElements = toggledElements; // so svelte updates the render
		}
		else {
			toggledElements[informationElem] = informationElem;
		}
		console.log(toggledElements);
		updateToggled();
	}

	function updateToggled() {
		/* Updates toggled sociotypes based on toggled information elements */
		// ILE : "ILE"
		toggledTypes = {};
		Object.keys(toggledElements).forEach(informationElem => {
			const sociotypes = sociotypesWithElementNotPresent[informationElem];
			sociotypes.forEach(sociotype => {
				toggledTypes[sociotype] = sociotype;
			})
		})
	}

</script>

<main>
	<h1>Socionics typing tool</h1>
	<div id="gridContainer">
		<div class="explanation">
			<h3>Explanation</h3>
	
			This is a simple tool to help assessing someone's socionics type.
			When doing this kind of assessment, it's common to first start by identifying which information elements you perceive in that person the most.
			However, from personal experience, this process is very error prone.
			A major reason is that, for example, someone who appears Fe might not be Fe base or Fe creative, but also Fe demonstrative, Fe role, Fe activating, and even Fe suggestive.
			Meanwhile, someone who appears Fe is very unlikely to be Fe polr or Fe ignoring. This means that if someone appears Fe, you can likely exclude the types ILI, SLI, ESI and EII out of the list.
	
			<h4>Instructions</h4>
	
			Select information elements there's no way the person lacks. When doing so, types with this element as polr or ignoring will be removed.
		</div>
		<div class="test">
			<div class="sociotypes">
				{#each Object.keys(sociotypes) as sociotype}
				<div class="sociotype {toggledTypes[sociotype] ? toggledSociotypeClass : ""}" id={sociotype}>{sociotype}</div>
				{/each}
			</div>
			<div class="definitelyHas">
				{#each Object.keys(sociotypesWithElementNotPresent) as informationElem}
				<div class="{toggledElements[informationElem] ? toggledElementClass : ""}" on:click={() => toggleDefinitelyHas(informationElem)}>{informationElem}</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="githubLink"><a href="https://github.com/argit2/socionics-typing/">Github</a></div>
</main>

<style>
	main {
		--buttonWidth: minMax(20px, 40px);
		--buttonHeight: minMax(10px, 20px);
		--buttonBackground: #eee;
		--toggledOnBackground: #ddd;
		text-align: left;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	#gridContainer {
		max-width: 800px;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minMax(240px, 1fr));
	}

	.test {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, 1fr);
	}

	.sociotypes {
		display: grid;
		/* gap: 1rem; */
		grid-template-columns: repeat(4, var(--buttonWidth));
		background-color: var(--buttonBackground);
		max-width: fit-content;
	}

	.sociotypes > div, 
	.definitelyHas > div {
		display: flex;
		max-height: var(--buttonHeight);
		max-width: var(--buttonWidth);
		align-items: center;
		justify-content: center;
	}

	.definitelyHas {
		display: grid;
		/* gap: 1rem; */
		grid-template-columns: repeat(2, var(--buttonWidth));
		user-select: none;
		background-color: var(--buttonBackground);
		max-width: fit-content;
	}

	.toggledOff {
		opacity: 0.3;
	}

	.toggledOn {
		background-color: var(--toggledOnBackground);	
	}

	.githubLink {
		position: absolute;
		right: 1em;
		bottom: 1em;
	}

</style>