const shortcuts = {
        "!!CAPSLUAU": `Hey!

Looks like you wrote "LUAU"! Luau is not an acronym (or an initialism) - it's actually based on the language Luau is derived from, "Lua", which is also the Portuguese word for "moon".
Fun fact: Despite sharing the same spelling, Luau's naming is not based on the Hawaiian feast of the same name.`,
	"!!DUPE": `Many topics have been made regarding this; in the future please try to search before posting.`, // the new lines are so you can link the search query
	"!!30": `<aaaaaaaaaaaaaaaaaaa></aaaaaaa>`,
	"!!SPOON": `While you are helping people on the forum, please try not to give code-only replies. You aren’t explaining what any of your code does, and as a result of this the person asking for help isn’t actually learning anything.`,
	"!!ROBLOX": `Hi,

Just to let you know, the correct capitalization of 'ROBLOX' is Roblox. This is because Roblox is a proper noun, not an acronym.

ROBLOX was previously used, however this has changed; there are still some older sources which may use ROBLOX, however newer sources, including the [Roblox Name and Logo usage guidelines](https://en.help.roblox.com/hc/en-us/articles/115001708126-Roblox-Name-and-Logo-Community-Usage-Guidelines) use the newer 'Roblox' capitalization.

To answer the inevitable question, yes, the logo is written 'ROBLOX', however the wordmark does not equate to the capitalization in text; e.g. Discord's logo is written as 'DISCORD'. You can find similar things with a number of brands.

Feel free to ask me any further questions you may have about this.`,
	
	"!!MOD": `Hey there,
	
While it may be frustrating when people don't put topics in the correct categories, it will get resolved quicker if you just flag it. By replying, you are also at risk of [getting a strike.](https://devforum.roblox.com/t/reduce-mini-modding-on-the-devforums/497180).

You should [review the rules](https://devforum.roblox.com/t/official-rules-of-the-roblox-developer-forum/46429/55?u=fxllencode). If you can flag the post instead of replying, you can help the forum clean spam.

If you have any other questions let me know. `,

	"!!CALLOUT": `Hello,

Even though it is upsetting that you had a bad experience with this person, [calling other users out is against the Official Rules of the Roblox Developer Forum.](https://devforum.roblox.com/t/official-rules-of-the-roblox-developer-forum/46429/9)

Calling out others is not allowed publicly, if you need to solve a dispute, please send them a DM. If they are claiming others work as their own, you should just flag the post, otherwise strikes could issued against your account.

Feel free to ask me any follow up questions if you have any.`,
        
	"!!LUA": `Hi!

It looks like you've written "LUA". Lua is not an acronym (or an initialism) - it is the Portuguese word for 'moon'. 

Fun fact: Lua was created in 1993 by Roberto Ierusalimschy, Luiz Henrique de Figueiredo and Waldemar Celes, members of the Computer Graphics Technology Group (Tecgraf) at the Pontifical Catholic University of Rio de Janeiro, in Brazil. See here for more info: https://www.lua.org/about.html`,

	"!!WRONGTOPIC": `Hello,

It looks like you wrote that you weren't sure what the correct category is for your topic. According to @colbert2677, [You can ask Community Editors if you aren't sure what the correct category is.](https://devforum.roblox.com/t/you-can-ask-community-editors-for-help-picking-a-category-if-you-dont-know-where-your-thread-belongs/830798)

While Community Editors may be deprecated, you can still DM anybody who has the badge with your question. They can assist you with any further questions you may have. 

I hope this helps clear any confusion!`
	

}

function handleTextArea(textarea) {
	if (textarea.classList.contains("-!--templates-added")) return false

	textarea.addEventListener("input", () => {
		textarea.value = textarea.value.replace(/\!\!\S* /, (match) => {
			return shortcuts[match] + " " || match
		})
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
