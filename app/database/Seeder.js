const Interest = require('../controllers/InterestController')
exports.make = {
    interest: ()=>{
        const interests = [
            "photography",
            "cooking",
            "video games",
            "hiking",
            "shopping",
            "travelling",
            "speeches",
            "swimming",
            "tourism",
            "Arts and crafts",
            "sports",
            "wrestling",
            "fitness",
            "reading",
            "dancing",
            "extreme sports",
            "movies",
            "hunting",
            "technology",
            "AI and robotics",
            "trekking",
            "groceries",
            "baking",
        ]

        interests.forEach(interest=>{
            Interest.create(interest)
        })
    }
}