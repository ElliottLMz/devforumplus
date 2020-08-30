const badUsers = ['141834'] // string of user ids

const checkBadUser = (post) => {
	let userId = post.getAttribute("data-user-id")

	if (badUsers.indexOf(userId) != -1) {
		post.parentElement.style.display = "none"
	}
}

export default function badUser() {
	setInterval(() => {
		for (let post of document.getElementsByTagName("article")) {
			checkBadUser(post)
		}
	}, 10)
}
