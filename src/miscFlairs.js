import flairs from "./flairs"

const OP_CLASS_NAME = "-!-has-op-flairs"
const UF_CLASS_NAME = "-!-has-user-flairs"

const USER_FLAIRS = {
	1311: "robloxMan", // roblox
	297072: "bruh", // ??
	112950: "ourGod", // coef

}
const POST_FLAIRS = {}
const TOPIC_FLAIRS = {}

function handleOP(post) {
	if (!post) return false
	if (post.parentElement.classList.contains("topic-owner")) {
		if (post.classList.contains(OP_CLASS_NAME)) return

		flairs.addFlair(post, "op")
		post.className += ` ${OP_CLASS_NAME}`
	}
}

function handleUserFlairs(post) {
	if (!post) return false

	if (!post.classList.contains(UF_CLASS_NAME)) {
		const userId = post.getAttribute("data-user-id")
		const postId = post.getAttribute("data-post-id")
		const topicId = post.getAttribute("data-topic-id")

		if (USER_FLAIRS[userId]) flairs.addFlair(post, USER_FLAIRS[userId])
		if (POST_FLAIRS[postId]) flairs.addFlair(post, POST_FLAIRS[postId])
		if (TOPIC_FLAIRS[topicId]) flairs.addFlair(post, TOPIC_FLAIRS[topicId])

		post.className += ` ${UF_CLASS_NAME}`
	}
}

export default function miscFlairs() {
	setInterval(() => {
		for (let post of document.getElementsByTagName("article")) {
			handleOP(post)
			handleUserFlairs(post)
		}
	}, 10)
}
