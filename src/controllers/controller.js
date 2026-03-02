let users = [];
let idCounter = 1;

export const createUser = (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "name and email required" });
        }

        const newUser = {
            id: idCounter++,
            name,
            email
        };

        users.push(newUser);

        return res.status(201).json({
            status: "success",
            user: newUser
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "something went wrong while creating user"
        });
    }
};

export const getUser = (req, res) => {
    return res.status(200).json({ users });
};

export const getUserById = (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((item) => item.id === id);

    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }

    return res.status(200).json({ user });
};

export const patchUser = (req, res) => {
    const id = Number(req.params.id);
    const { name, email } = req.body;
    const user = users.find((item) => item.id === id);

    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }

    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;

    return res.status(200).json({ user });
};

export const deleteUser = (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "user not found" });
    }

    users.splice(index, 1);
    return res.status(200).json({ status: "success", users });
};
