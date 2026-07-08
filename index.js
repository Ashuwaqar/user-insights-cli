import { getusers } from "./users.js";
import { getposts } from "./post.js";
import { gettodos } from "./todo.js";

async function getdata() {
    try {
        const [users, posts, todos] = await Promise.all([

            getusers(),
            getposts(),
            gettodos()
        ]);

        const usersdata = users.map((user) => {
            const postcount = posts.filter((post) => {
                return post.userId === user.id
            }).length;

            const comptodo = todos.filter((todo) => {
                return todo.userId === user.id && todo.completed
            }).length;

            const opentodo = todos.filter((todo) => {
                return todo.userId === user.id && !todo.completed
            }).length;

            return {
                name: user.name,
                email: user.email,
                city: user.address.city,
                postcount,
                comptodo,
                opentodo
            };
        });

        const datasort = usersdata.sort((a, b) => {
            if (a.postcount === b.postcount) {
                return a.name.localeCompare(b.name)
            }
            else {
                return b.postcount - a.postcount
            }
        })

        const totaluser = usersdata.reduce((count) => {
            return count + 1
        }, 0)

        const totalpost = usersdata.reduce((a, b) => {
            return a + b.postcount
        }, 0)

        const avgpost = totalpost / totaluser

        const maxtodo = usersdata.reduce((a, b) => {
            if (a.comptodo > b.comptodo) {
                return a
            }
            else {
                return b
            }
        });

        console.table(datasort);
        // console.log(datasort);

        console.log("\n========== SUMMARY ==========");
        console.log("Total Users:", totaluser);
        console.log("Total Posts:", totalpost);
        console.log("Average Posts Per User:", avgpost);
        console.log("User with Most Completed Todos:", maxtodo.name);

    }
    catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

getdata();