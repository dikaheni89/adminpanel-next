import { hash } from "../lib/crypto";
import { prisma } from "../lib/prisma";

async function userGroups() {
    const data = [
        {
            name: "Superadmin"
        },
        {
            name: "Admin"
        },
        {
            name: "Operator"
        }, 
        {
            name: "User"
        }
    ];

    return Promise.all(
        data.map((item) => {
            return prisma.userGroup.upsert({
                where: {
                    name: item.name
                },
                create: {
                    name: item.name
                },
                update: {
                    name: item.name
                }
            })
        })
    )
}

async function users() {
    let data = [
      {
        fullname: "Admin",
        username: "admin",
        email: "admin@sipadi.com",
        password: hash("wa@!123"),
        group: "Superadmin",
      },
      {
        fullname: "Operator",
        username: "operator",
        email: "operator@sipadi.com",
        password: hash("wa@!123"),
        group: "Operator",
      },
      {
        fullname: "Romeli",
        username: "user",
        email: "user@sipadi.com",
        password: hash("wa@!123"),
        group: "User"
      },
    ];
  
    return Promise.all(
      data.map((item) => {
        return prisma.account.upsert({
          where: {
            email: item.email
          },
          create: {
            fullname: item.fullname,
            username: item.username,
            email: item.email,
            password: item.password,
            status: "ACTIVE",
            group: {
              connect: {
                name: item.group
              }
            },
          },
          update: {
            fullname: item.fullname,
            username: item.username,
            email: item.email,
            password: item.password,
            status: "ACTIVE",
            group: {
              connect: {
                name: item.group
              }
            },
          }
        });
      })
    );
}

async function run() {
    await userGroups();
    await users();
}

run()



