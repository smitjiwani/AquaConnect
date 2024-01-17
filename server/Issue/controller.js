import db from "../db/db.js";

export const getAllIssues = async (req, res) => {
    try {
        const issues = await db("issue_status").select("*");
        res.status(200).json(issues);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
        console.error("Login error:", error);
    }
}
