const shortcuts = {
	"!!30": "<aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa />",
	"!!SPOON":
		"While you are helping people on the forum, please stop spoonfeeding them code. You aren’t explaining what any of your code does, and as a result of this the person asking for help isn’t actually learning anything.",
	"!!ROBLOX": `Hi,

Just to let you know, the correct capitalization of 'ROBLOX' is Roblox. This is because Roblox is a proper noun, not an acronym.

ROBLOX was previously used, however this has changed; there are still some older sources which may use ROBLOX, however newer sources, including the [Roblox Name and Logo usage guidelines](https://en.help.roblox.com/hc/en-us/articles/115001708126-Roblox-Name-and-Logo-Community-Usage-Guidelines) use the newer 'Roblox' capitalization.

To answer the inevitable question, yes, the logo is written 'ROBLOX', however the wordmark does not equate to the capitalization in text; e.g. Discord's logo is written as 'DISCORD'. You can find similar things with a number of brands.

Feel free to ask me any further questions you may have about this.`,
}

function handleTextArea(textarea) {
	if (textarea.classList.contains("-!--templates-added")) return false

	textarea.addEventListener("input", () => {
		if (shortcuts[textarea.value]) {
			textarea.value = shortcuts[textarea.value]
		}
	})

	textarea.className += " -!--templates-added"
}

// d-editor-input
export default function pmTemplates() {
	setInterval(() => {
		for (let message of document.getElementsByClassName("flag-message")) {
			handleTextArea(message)
		}

		for (let editor of document.getElementsByClassName("d-editor-input")) {
			handleTextArea(editor)
		}
	}, 100)
}
