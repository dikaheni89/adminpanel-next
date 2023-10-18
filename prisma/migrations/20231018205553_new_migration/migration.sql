-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'DISABLED');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DISABLED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "groupId" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "UserGroup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_username_key" ON "Account"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserGroup_name_key" ON "UserGroup"("name");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "UserGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
