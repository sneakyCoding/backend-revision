let users = []
let idCount = 1;

export const createUser = (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) return res.status(400).json({ message: "name and email required" })

        const newUser = {
            id: idCount++,
            name: name,
            email: email
        }

        users.push(newUser);

        return res.status(201).json({
            status: "success",
            user: newUser
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong.." })
    }
}

export const getUser = (req, res) => {
    return res.status(200).json({
        users
    })
}

export const patchUser = (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = users.find((i) => i.id === id);

        if (!user) return res.status(404).json({ message: "User not found" })

        const { name, email } = req.body;
        // if (!name || !email) return res.status(400).json({ message: "name and email required" })

        if (name === undefined && email === undefined) { /*not me*/
            return res.status(400).json({ message: "Nothing to update" });
        }

        if (name !== undefined) user.name = name;
        if (email !== undefined) user.email = email;

        return res.status(200).json({
            status: "success",
            user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong.." })
    }
}

export const getUserById = (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = users.find((i) => i.id === id);

        if (!user) return res.status(404).json({ message: "User not found" });

        return res.status(200).json({
            status: "success",
            user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong.." })
    }
}

export const deleteUser = (req, res) => {
    try {
        const id = Number(req.params.id);
        const idx = users.findIndex((i) => i.id === id);

        if (idx === -1) return res.status(404).json({ message: "User not found" });

        users.splice(idx, 1)

        return res.status(204).json({
            status: "success",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong.." })
    }
}